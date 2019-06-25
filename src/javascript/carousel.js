class Carousel {
  constructor(element) {
    this.element = element;

    this.data = this.element.dataset.tab;
    this.itemElement = document.querySelector(
      `.click-content[data-tab= '${this.data}]`
    );

    ////change method
    this.imagesSlide = document.querySelector(".carousel-images");
    this.imagesOne = document.querySelectorAll(".carousel-img");
    this.imagesOneSingle = document.querySelector(".carousel-img");
    this.content = document.querySelectorAll(".click-content");
    this.contentSingle = document.querySelector(".click-content");
    this.currentIndex = 0;
    //  this.content.forEach((info) => {
    //         info.style.display = "none";
    // });
    this.change();

    this.imagesOne.forEach(image => {
        image.addEventListener("mouseover", () => {
            image.style.opacity = ".5";  
            this.changeContent();
        });
        image.addEventListener("mouseleave", () => {
            image.style.opacity = "1";
         });
    });
  
};
  
  change() {
    const images = document.querySelectorAll(".carousel-img");
    const newImagesArray = [];
    images.forEach(image => {
      image.style.display = "none";
      newImagesArray.push(image);
      return this.currentIndex;
    });
    this.timerStart();

    if (this.currentIndex == newImagesArray.length) {
      this.currentIndex = 0;
    }

    newImagesArray[this.currentIndex].style.display = "block";
    this.currentIndex += 1;
  }

  changeContent() {
    const content = document.querySelectorAll(".click-content");

    const newContentArray = [];
    content.forEach(image => {
      image.style.display = "none";
      newContentArray.push(image);
      return this.currentIndex;
    });
    this.currentIndex--;

    if (this.currentIndex == newContentArray.length) {
      this.currentIndex = 0;
    }

    newContentArray[this.currentIndex].style.display = "block";
    this.currentIndex += 1;
  }

  timerStop() {
    document.querySelectorAll(".carousel-img").forEach(image => {
      image.addEventListener("click", () => {
        clearInterval(timer);
      });
    });
  }
  timerStart() {
    const timer = setTimeout(() => this.change(this.currentIndex), 5000);
    document.querySelectorAll(".carousel-img").forEach(image => {
      image.addEventListener("mouseover", () => {
        clearInterval(timer);
      });

      image.addEventListener("mouseleave", () => {
        setTimeout(() => this.change(this.currentIndex), 5000);
      });
    });
  }
}

let carousel = document
  .querySelectorAll(".carousel-images")
  .forEach(img => new Carousel(img));
