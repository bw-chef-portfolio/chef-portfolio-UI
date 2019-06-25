class Carousel {
    constructor(element) {
     this.element = element;
     this.imagesSlide = document.querySelectorAll(".carousel-images");
     this.imagesOne = document.querySelectorAll(".carousel-img");
     this.content = document.querySelectorAll(".click-content");
     this.currentIndex = 0;
     this.change();
    
    

     };
     change() {
        const images = document.querySelectorAll('.carousel-img');
        const newImagesArray = [];
        images.forEach((image) => {
            image.style.display = "none";
            newImagesArray.push(image);
            return this.currentIndex;
        });
        const timer = setTimeout(() => this.change(this.currentIndex), 5000); 
        document.querySelectorAll(".carousel-img").forEach((image) => {
          image.addEventListener("mouseover", ()  => {
            clearInterval(timer);
            }); 
            image.addEventListener("mouseleave", () => {
                setTimeout(() => this.change(this.currentIndex), 2000);
            });
          
        });
        
        
        if (this.currentIndex == newImagesArray.length) {
            this.currentIndex = 0;
        }
        
        newImagesArray[this.currentIndex].style.display = "block";
           this.currentIndex += 1;
    
          
    } 
    
    
}  
let carousel = document.querySelectorAll('.carousel-images').forEach(img => new Carousel(img));
