class Carousel {
    constructor(element) {
     this.element = element;
     this.images = document.querySelectorAll(".carousel-images");
     this.currentIndex = 0;
     this.currentImg = this.images[this.currentIndex];
     this.currentImg.style.display = "block";
     this.next();

     };
     next() {
        const images = document.querySelectorAll('.carousel-images');
        images.forEach((image) => {
            image.style.display = "none"});
            this.currentIndex +=1;
            // if(this.currentIndex > 3) {
            //     this.currentIndex = 0;
            // }
            this.images[this.currentIndex].style.display = "block";
        
    };


}

let carousel = document.querySelectorAll('.carousel').forEach(img => new Carousel(img));
