class Person {
    constructor(element) {
        this.element = element; 
        this.elementContent = this.element.querySelector(".panel-content");
        this.elementButtons = this.element.querySelector('.panel-buttons');
        this.elementButtonClose = this.element.querySelector('.panel-button-close');
        this.elementButtonOpen = this.element.querySelector('.panel-button-open');

        this.elementButtons.addEventListener('click', () => {
            this.changeButton();
        });
       
        
    }

    changeButton() {
        this.elementButtonClose.classList.toggle("hide-button");
        this.elementButtonOpen.classList.toggle("hide-button");
        this.elementContent.classList.toggle("showContent");
    }

}

const panelsTogether = document.querySelectorAll('.panel').forEach((panel) => {
    return new Person(panel);
})

