class Navbar{
    constructor(el){
        this.nav = el;
        this.links = this.nav.querySelectorAll("a");
        this.hamburger = this.nav.querySelectorAll("span");
        this.hamburger = this.nav.querySelector(".nav-hamburger")
        this.hamburgerClicked = this.nav.querySelector(".nav-hamburger-clicked")
        this.hamburger.addEventListener("click", () => {
            this.hamburgerClicked.classList.toggle("navt");
            console.log(this.hamburgerClicked)
       })

        
    
    }
}
let navigationBar = new Navbar(document.querySelector(".container-nav"));