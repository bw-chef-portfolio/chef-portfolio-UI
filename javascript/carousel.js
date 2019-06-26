class Carousel {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.tab;
    this.itemElement = document.querySelector(
      `.click-content[data-tab= '${this.data}]`
    );
    this.imagesSlide = document.querySelector(".carousel-images");
    this.imagesOne = document.querySelectorAll(".carousel-img");
    this.imagesOneSingle = document.querySelector(".carousel-img");
    this.currentIndex = 0;

    this.change();
  }
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

  timerStart() {
    setTimeout(() => this.change(this.currentIndex), 5000);
  }
}

let carousel = document
  .querySelectorAll(".carousel-images")
  .forEach(img => new Carousel(img));
