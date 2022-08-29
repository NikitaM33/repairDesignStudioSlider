const sliderData = [
  {
    url: "./src/assets/img/image 2.1.png",
    title: {
      city: "Rostov-on-Don LCD Admiral",
      area: "81 m2",
      repTime: "3.5 months",
      repCost: "Upon request",
    },
  },
  {
    url: "./src/assets/img/image 2.png",
    title: {
      city: "Sochi Thieves",
      area: "105 m2",
      repTime: "4 months",
      repCost: "Upon request",
    },
  },
  {
    url: "./src/assets/img/image 3.png",
    title: {
      city: "Rostov-on-Don LCD Patriotic",
      area: "93 m2",
      repTime: "3 months",
      repCost: "Upon request",
    },
  },
];

function initSlider() {
  if (!sliderData || !sliderData.length) return;

  const roomExample = document.querySelector(".projects__roomExample");
  const arrows = document.querySelectorAll(".projects__arrow");
  const dots = document.querySelector(".projects__dots");
  const projectTitle = document.querySelector(".project__title");
  const projectsCitys = document.querySelector(".projects__citys");

  let repairTitle;

  initImages();
  initArrows();
  initProjectParametrs();
  initDots();
  initLinks();

  function initImages() {
    sliderData.forEach((image, index) => {
      let imgDiv = `<img src="${image.url}" class="image n${index} ${
        index === 0 ? "active" : ""
      }" data-index="${index}" alt="${image.title.city}" />`;

      roomExample.innerHTML += imgDiv;
    });
  }

  function initProjectParametrs() {
    repairTitle = sliderData[0].title;

    let decrText = `
      <div class="projects__descrRow">
        <div class="project__part">
          <span class="project__descrName">City:</span>
          <p class="project__descrText">${repairTitle.city}</p>
        </div>
        <div class="project__part">
          <span class="project__descrName">Apartment area:</span>
          <p class="project__descrText">${repairTitle.area}</p>
        </div>
      </div>
      <div class="projects__descrRow">
        <div class="project__part">
          <span class="project__descrName">Repair time:</span>
          <p class="project__descrText">${repairTitle.repTime}</p>
        </div>
        <div class="project__part">
          <span class="project__descrName">Repair Cost:</span>
          <p class="project__descrText">${repairTitle.repCost}</p>
        </div>
      </div>
    `;

    projectTitle.innerHTML = decrText;
  }

  function initArrows() {
    arrows.forEach((arrow) => {
      arrow.addEventListener("click", () => {
        let curNumber = +roomExample.querySelector(".active").dataset.index;
        let nextNumber;

        if (arrow.classList.contains("left")) {
          nextNumber = curNumber <= 0 ? sliderData.length - 1 : curNumber - 1;
        } else {
          nextNumber = curNumber === sliderData.length - 1 ? 0 : curNumber + 1;
        }

        moveSlide(nextNumber);
      });
    });
  }

  function initDots() {
    sliderData.forEach((image, index) => {
      let dot = `<div class="projects__dot n${index} ${
        index === 0 ? "active" : ""
      }" data-index="${index}"></div>`;

      dots.innerHTML += dot;

      dots.querySelectorAll(".projects__dot").forEach((dot) => {
        dot.addEventListener("click", function () {
          moveSlide(this.dataset.index);
        });
      });
    });
  }

  function initLinks() {
    sliderData.forEach((city, index) => {
      let link = `<a href="#" class="cityLink n${index} ${
        index === 0 ? "activeLink" : ""
      }" data-index="${index}">${city.title.city}</a>`;

      projectsCitys.innerHTML += link;

      projectsCitys.querySelectorAll(".cityLink").forEach((link) => {
        link.addEventListener("click", function (e) {
          e.preventDefault();
          moveSlide(this.dataset.index);
        });
      });
    });
  }

  function moveSlide(num) {
    roomExample.querySelector(".active").classList.remove("active");
    roomExample.querySelector(".n" + num).classList.add("active");

    dots.querySelector(".active").classList.remove("active");
    dots.querySelector(".n" + num).classList.add("active");

    projectsCitys.querySelector(".activeLink").classList.remove("activeLink");
    projectsCitys.querySelector(".n" + num).classList.add("activeLink");

    changeTitle(num);
  }

  function changeTitle(num) {
    if (!sliderData[num].title) return;
    let sliderTitles = document.querySelectorAll(".projects__descrRow");
    sliderTitles.forEach((sliderTitle) => {
      repairTitle = sliderData[num].title;

      let decrText = `
      <div class="projects__descrRow">
        <div class="project__part">
          <span class="project__descrName">City:</span>
          <p class="project__descrText">${repairTitle.city}</p>
        </div>
        <div class="project__part">
          <span class="project__descrName">Apartment area:</span>
          <p class="project__descrText">${repairTitle.area}</p>
        </div>
      </div>
      <div class="projects__descrRow">
        <div class="project__part">
          <span class="project__descrName">Repair time:</span>
          <p class="project__descrText">${repairTitle.repTime}</p>
        </div>
        <div class="project__part">
          <span class="project__descrName">Repair Cost:</span>
          <p class="project__descrText">${repairTitle.repCost}</p>
        </div>
      </div>
    `;

    projectTitle.innerHTML = decrText;
    });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  initSlider();
});
