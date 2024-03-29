class Person {
  constructor(element) {
    this.element = element;
    this.openButton = element.querySelector(".panel-button-open");
    this.panelBar = element.querySelector(".panel-bar");
    this.panel = element.querySelector(".panel");
    this.closeButton = element.querySelector(".panel-button-close");
    this.panelContent = element.querySelector(".panel-content");
    this.showContent = element.querySelector(".showContent");
    // this.footer = element.querySelector('.container-meetUs');

    this.openButton.addEventListener("click", () => {
      this.panelOpen();
      TweenMax.to(".panel", 1, { y: 100 });
    });

    this.closeButton.addEventListener("click", () => {
      this.panelOpen();
      TweenMax.to(".panel", 1, { y: 0 });
    });
  }

  panelOpen() {
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

Array.from(linkedinIcon).map(icon => {
  icon.addEventListener("mouseover", event => {
    icon.src = "https://img.icons8.com/nolan/90/000000/linkedin.png";
  });

  icon.addEventListener("mouseleave", event => {
    icon.src =
      "https://img.icons8.com/material-outlined/90/000000/linkedin.png";
  });
});

///Github hover////
let githubIcon = document.querySelectorAll(".github-icon");

Array.from(githubIcon).map(icon => {
  icon.addEventListener("mouseover", event => {
    icon.src = "https://img.icons8.com/nolan/90/000000/github.png";
  });

  icon.addEventListener("mouseleave", event => {
    icon.src = "https://img.icons8.com/ios-glyphs/90/000000/github.png";
  });
});
///Down Arrow hover////
let downIcon = document.querySelectorAll(".panel-button-open");

Array.from(downIcon).map(icon => {
  icon.addEventListener("mouseover", event => {
    icon.src = "https://img.icons8.com/nolan/64/000000/down.png";
  });

  icon.addEventListener("mouseleave", event => {
    icon.src = "https://img.icons8.com/ios-glyphs/50/000000/down.png";
  });
});

///Up Arrow Hover///
let upIcon = document.querySelectorAll(".panel-button-close");

Array.from(upIcon).map(icon => {
  icon.addEventListener("mouseover", event => {
    icon.src = "https://img.icons8.com/nolan/64/000000/left-up2.png";
  });

  icon.addEventListener("mouseleave", event => {
    icon.src = "https://img.icons8.com/ios/64/000000/left-up2-filled.png";
  });
});
