class Person {
  constructor(element) {
    this.element = element;
    this.openButton = element.querySelector(".panel-button-open");
    this.closeButton = element.querySelector(".panel-button-close");
    this.panelContent = element.querySelector(".panel-content");

    this.openButton.addEventListener("click", () => {
      
      this.changeButton();
      
    });
    this.closeButton.addEventListener("click", () => {
      this.changeButton();
      
    });
  }

  changeButton() {
    
    this.panelContent.classList.toggle("showContent");
    this.closeButton.classList.toggle("hide-button");
    this.openButton.classList.toggle("hide-button");
  }

}

const together = document.querySelectorAll(".panel");
together.forEach(panel => new Person(panel));

////////////////////////////////Events

///Linkedin hover////
let linkedinIcon = document.querySelectorAll(".linkedin-icon");

linkedinIcon.forEach(icon => {
  icon.addEventListener("mouseover", event => {
    icon.src = "https://img.icons8.com/color/90/000000/linkedin.png";
  });

  icon.addEventListener("mouseleave", event => {
    icon.src =
      "https://img.icons8.com/material-outlined/90/000000/linkedin.png";
  });
});

///Github hover////
let githubIcon = document.querySelectorAll(".github-icon");

githubIcon.forEach(icon => {
  icon.addEventListener("mouseover", event => {
    icon.src = "https://img.icons8.com/nolan/90/000000/github.png";
  });

  icon.addEventListener("mouseleave", event => {
    icon.src = "https://img.icons8.com/ios-glyphs/90/000000/github.png";
  });
});
