let button = document.querySelector('.content-section__button--position--up');

let ul = document.querySelector('.brand__list');
// let text = document.querySelector('.content-section__text-button');
// let img = document.querySelector('.content-section__img-button');

// let openButton = document.getElementById("header__burger")
// let closeButton = document.getElementById("header__close-burger")

let sidebar = document.querySelector(".sidebar")
let main = document.querySelector(".main")

// let sidebars = document.getElementsByClassName("sidebar")
let sidebars = document.querySelectorAll(".sidebar")


// let closeButtons = document.querySelectorAll(".header__button--close")
let closeButtons = document.getElementsByClassName("header__button--close")

// var swiper = new Swiper(".mySwiper--brand", {
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination--brand",
    },
    mousewheel: true,
    keyboard: true,
  });
  

  
var swiper2 = new Swiper(".mySwiper--card", {
  spaceBetween: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination--card",
    // el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});



var swiper3 = new Swiper(".mySwiper--price", {
  spaceBetween: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination--price",
    // el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});


function closeAll() {
  for (let i = 0; i < sidebars.length; i++) {
    sidebars[i].style.display = "none";
    sidebars[i].classList.remove('open')
    main.style.opacity = "1";
  }
}


main.addEventListener('mouseup', function (evt) {
  console.log('opacity')
  // console.log(main.getAttribute('style.opacity'))
  console.log(getComputedStyle(document.querySelector(".main")).opacity)
  // if (main.classList.contains('main--low-opacity')) {
  if (getComputedStyle(document.querySelector(".main")).opacity != 1) {
    console.log(2)
    closeAll()
    // for (let i = 0; i < sidebars.length; i++) {
    //   sidebars[i].style.display = "none";
    //   sidebars[i].classList.remove('open')
    //   main.style.opacity = "1";
    // }
  }

  // main.classList.toggle('main--max-opacity');
  // main.classList.toggle('main--low-opacity');
});

// button.addEventListener('click', function() {
//     if (button.classList.contains('content-section__button--position--up')) {
//         ul.style.overflowY = 'visible';
//         ul.style.height = 'fit-content';
//         text.textContent = 'Скрыть';
//         img.src="img/expand_down.svg";
//     } else {
//         ul.style.overflowY = 'hidden';
//         ul.style.height = '192px';
//         text.textContent = 'Показать все';
//         img.src="img/expand.svg"; 
//     }
//     button.classList.toggle('content-section__button--position--up');
//     button.classList.toggle('content-section__button--position--down');
// })

// openButton.addEventListener('click', function() {
//   sidebar.style.display = "flex";
//   sidebar.style.position = "absolute";
//   main.style.opacity = "0.09";
// })

// closeButton.addEventListener('click', function() {
//   sidebar.style.display = "none";
//   main.style.opacity = "1";
// })

// document.addEventListener('keydown', function (evt) {
//   if (evt.key === "Escape") {
//     sidebar.style.display = "none";
//     main.style.opacity = "1";
//   }
// });




function changeOpacity() {
  let b = true
  for (let i = 0; i < sidebars.length; i++) {
    // console.log(parent.classList.contains('open'))
    console.log(sidebars[i].classList.contains('open'))
    if (sidebars[i].classList.contains('open')) {
      b = false
    }
    if (b) {
      main.style.opacity = "1";
    }
  }
}


let close = function(cButton, parent) {
  // let b = true
  cButton.addEventListener('click', function() {
    // console.log(parent)
    parent.style.display = "none";
    // console.log(parent)
    // console.log(parent.classList.contains('open'))
    parent.classList.remove('open')

    // if (sidebars.some(x => x.classList.contains('open'))) {
    // } else {
    //   main.style.opacity = "1";
    // }

    // sidebars.forEach(item => {
    //   if (item.classList.contains('open')) {
    //   } else {
    //     main.style.opacity = "1";
    //   }
    // });

    // for (let i = 0; i < sidebars.length; i++) {
    //   // console.log(parent.classList.contains('open'))
    //   console.log(sidebars[i].classList.contains('open'))
    //   if (sidebars[i].classList.contains('open')) {
    //     b = false
    //   }
    //   if (b) {
    //     main.style.opacity = "1";
    //   }
    // }

    // main.setAttribute('opacity', 1)
    changeOpacity()
  })
}

for (i = 0; i < closeButtons.length; i++) {
  let parent = closeButtons[i].closest(".sidebar")
  // console.log(parent)
  // console.log(closeButtons[i])
  close(closeButtons[i], parent)
}



// let callButtons = document.getElementsByClassName('button-call')
let a = 'button-call'



// console.log(document.getElementById('call'))
// console.log(document.querySelector('[id*=call]'))
// console.log(document.getElementById('[id*=call]'))
// console.log(document.getElementById('[id^="call"]'))
// console.log(document.getElementById('[id='+'call'+']'))
// console.log(document.querySelector('[id='+a.split("-").pop()+']'))






// for (i = 0; i < callButtons.length; i++) {
//   let sb =document.querySelector('[id='+a.split("-").pop()+']')
//   open(callButtons[i], sb)
// }


let Buttons = ['button-call', 'button-chat', 'button-left-sidebar']


let open = function(oButton, parent) {
  oButton.addEventListener('click', function() {
    parent.style.display = "flex";
    parent.classList.add('open')
    // main.classList.add('main--max-opacity')
    main.style.opacity = "0.09";

  })
}

for (j = 0; j < Buttons.length; j++) {
  console.log(Buttons[j])
  let callButtons = document.getElementsByClassName(Buttons[j])
  for (i = 0; i < callButtons.length; i++) {
    console.log(callButtons[i])
    let sb = document.querySelector('[id='+Buttons[j].split("-").pop()+']')
    open(callButtons[i], sb)
  }
}

let cardList = document.getElementsByClassName('card_list')

// for (i = 0; i < callButtons.length; i++) {
//   cardList.createElement("")
// }


document.addEventListener('keydown', function (evt) {
  if (evt.key === "Escape") {
    // for (let i = 0; i < sidebars.length; i++) {
    //   sidebars[i].style.display = "none";
    //   sidebars[i].cla
    //   main.style.opacity = "1";
    // }
    closeAll()
    // main.classList.toggle('main--low-opacity');
  }
});



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

