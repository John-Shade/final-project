let buttons = document.getElementsByClassName("content-section__button--with-position")


let changeHeight = function(cButton, parent, text, img, height, list) {
  cButton.addEventListener('click', function() {
    if (cButton.classList.contains('content-section__button--position--up')) {
      list.style.overflowY = 'visible';
      list.style.height = 'fit-content';
      text.textContent = 'Скрыть';
      img.src="img/expand_down.svg";
  } else {
      list.style.overflowY = 'hidden';
      list.style.height = height;
      text.textContent = 'Показать все';
      img.src="img/expand.svg"; 
  }
  cButton.classList.toggle('content-section__button--position--up');
  cButton.classList.toggle('content-section__button--position--down');
  })
}


for (i = 0; i < buttons.length; i++) {
  let parent = buttons[i].closest(".content-section");
  let text = parent.querySelector('.content-section__text-button');
  let img = parent.querySelector('.content-section__img-button');
  let height = parent.querySelector('li').getAttribute('height');
  let list = parent.querySelector('[class*='+'__list'+']')
  changeHeight(buttons[i], parent, text, img, height, list)
}