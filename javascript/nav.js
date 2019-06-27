
class Navbar{
    constructor(el){
        this.nav = el;
        this.links = this.nav.querySelectorAll("a");
        this.img = this.nav.querySelector("img")
        this.hamburger = this.nav.querySelectorAll("span");
        this.hamburger = this.nav.querySelector(".nav-hamburger")
        this.hamburgerClicked = this.nav.querySelector(".nav-hamburger-clicked")
        
        this.hamburger.addEventListener("click", () => {

            this.hamburgerClicked.classList.toggle("navt");
            TweenMax.fromTo(this.img, 2, {y:10},{y:0});

            console.log(this.hamburgerClicked)
       })
       window.addEventListener("resize", () => {
           if (window.matchMedia("(max-width: 668px)").matches){
               
               if(!this.hamburgerClicked.classList.contains("navt")){
                this.hamburgerClicked.classList.toggle("navt")
               }
           }
       })
      

    }
}
let navigationBar = new Navbar(document.querySelector(".container-nav"));