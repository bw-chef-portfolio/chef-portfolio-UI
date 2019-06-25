class Carousel {
    constructor(element) {
     this.element = element;

     
     this.data = this.element.dataset.tab;
     this.itemElement = document.querySelector(`.click-content[data-tab= '${this.data}]`);
    

    ////change method
     this.imagesSlide = document.querySelector(".carousel-images");
     this.imagesOne = document.querySelectorAll(".carousel-img");
     this.imagesOneSingle = document.querySelector(".carousel-img")
     this.content = document.querySelectorAll(".click-content");
     this.contentSingle = document.querySelector(".click-content");
     this.currentIndex = 0;
     const imageArraytotal = [];
     this.imageArray = this.imagesOne.forEach((image) => {
        imageArraytotal.push(image);
     })
    //  this.content.forEach((info) => {
    //         info.style.display = "none";
    // });
     this.change();
     

    this.imagesOne.forEach((image) => {
         image.addEventListener("click", () => {
             image.style.display = "none";
             this.changeContent();
             this.timerStop();
         })
     })
     this.content.forEach((image) => {
        image.addEventListener("click", () => {
            image.style.display = "none";
            this.change();
        })
    })
    

    



    }
     change() {
        const images = document.querySelectorAll('.carousel-img');
        const newImagesArray = [];
        images.forEach((image) => {
            image.style.display = "none";
            newImagesArray.push(image);
            return this.currentIndex;
        });

        const timer = setTimeout(() => this.change(this.currentIndex), 5000); 
        document.querySelectorAll(".carousel-images").forEach((image) => {
          image.addEventListener("mouseover", ()  => {
            clearInterval(timer);
            }); 
            image.addEventListener("mouseleave", () => {
                setTimeout(() => this.change(this.currentIndex), 5000);
            });
        });
        
        if (this.currentIndex == newImagesArray.length) {
            this.currentIndex = 0;
        }
        
        newImagesArray[this.currentIndex].style.display = "block";
           this.currentIndex += 1;
       
    } 

    changeContent() {
        const content = document.querySelectorAll('.click-content');
        
        const newContentArray = [];
        content.forEach((image) => {
            image.style.display = "none";
            newContentArray.push(image);
            return this.currentIndex;
        });
        this.currentIndex--;
        
        const timer = setTimeout(() => this.changeContent(this.currentIndex), 5000); 
        document.querySelectorAll(".click-content").forEach((image) => {
          image.addEventListener("mouseover", ()  => {
            clearInterval(timer);
            }); 
          
        });
        
        if (this.currentIndex == newContentArray.length) {
            this.currentIndex = 0;
        }
        
        newContentArray[this.currentIndex].style.display = "block";
           this.currentIndex += 1;
       
    } 

    timerStop () {
        const timer = setTimeout(() => this.changeContent(this.currentIndex), 5000); 
        document.querySelectorAll(".carousel-images").forEach((image) => {
          image.addEventListener("mouseover", ()  => {
            clearInterval(timer);
            }); 
        });
        const timer2 = setTimeout(() => this.change(this.currentIndex), 5000);
        document.querySelectorAll(".carousel-images").forEach((image) => {
            image.addEventListener("mouseover", ()  => {
              clearInterval(timer2);
              }); 
            });
    }
    
    // connect() {
    //     if (this.imagesSlide = "block") {
    //         this.content = "none"
    //     }
    //     if (this.content = "block") {
    //         this.imagesSlide = "none"
    //     }

    // }
    
}  

// class Content {
//     constructor(element) {
//         this.element = element;
//     }
//     connect() {
//         const contents = document.querySelectorAll(".click-content");
//         // const content = document.querySelector(".click-content");
//         contents.forEach( content => {
//           content.classList.remove('selected-content');
//         });
//         document.querySelectorAll(".carousel-img").forEach((image) => {
//            image.classList.add("selected-content") 
//         })
        
          

//       }
// }
let carousel = document.querySelectorAll('.carousel-images').forEach(img => new Carousel(img));
