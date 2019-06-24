class Carousel {
    constructor(element) {
     this.element = element;
     this.imagesSlide = document.querySelectorAll(".carousel-images");
     this.currentIndex = 0;
     this.change();
     setTimeout(() => this.change(), 4000);   
     

     };
     change() {
        const images = document.querySelectorAll('.carousel-img');
        images.forEach((image) => {
            image.style.display = "none"
        });
        
        if (this.currentIndex > images.length) {
            this.currentIndex = 1
        }
        // if (this.currentIndex = images.length-1) {
        //     this.currentIndex = 0;
        // }
        
        images[this.currentIndex].style.display = "block";
        this.currentIndex++;
        
      
       
    } 



}  
let carousel = document.querySelectorAll('.carousel').forEach(img => new Carousel(img));
