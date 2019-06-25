// class Person {
//     constructor(element) {
//         this.element = element; 
//         this.content = element.querySelector(".panel-content");
//         this.buttons = this.element.querySelector('.panel-buttons');
//         this.buttonClose = this.element.querySelector('.panel-button-close');
//         this.buttonOpen = this.element.querySelector('.panel-button-open');

//         this.buttonOpen.addEventListener('click', () => this.changeButton());
//         this.buttonClose.addEventListener('click', () => this.changeButton());
       
        
//     }

//     changeButton() {
//         this.content.classList.toggle(".showContent");
//         this.buttonOpen.classList.toggle("hide-button");
//         this.buttonClose.classList.toggle("hide-button");
       
//     }

// }

// const together = document.querySelectorAll('.panel');
// together.forEach(panel => new Person(panel));


class Person {
    constructor(element) {
      this.element = element;
      this.openButton = element.querySelector('.panel-button-open')
      this.closeButton = element.querySelector('.panel-button-close')
      this.panelContent = element.querySelector('.panel-content')
     
      this.openButton.addEventListener('click', () => this.changeButton());
      this.closeButton.addEventListener('click', () => this.changeButton());  
    }
   
    changeButton() {
      this.panelContent.classList.toggle('showContent')
      this.closeButton.classList.toggle('hide-button');
      this.openButton.classList.toggle('hide-button');
    }
  }
  
  const together = document.querySelectorAll('.panel')
  together.forEach(panel => new Person(panel))
 
  