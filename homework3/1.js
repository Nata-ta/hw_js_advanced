/*

  Задание написать простой слайдер.

    Есть массив с картинками из которых должен состоять наш слайдер.
    По умолчанию выводим первый элмемнт нашего слайдера в блок с id='slider'
    ( window.onload = func(){...} // window.addEventListener('load', function(){...}) )
    По клику на PrevSlide/NextSlide показываем предыдущий или следующий сладй соответствено.

    Для этого необходимо написать 4 функции которые будут:

    1. Срабатывать на событие load обьекта window и загружать наш слайд по умолчанию.
    2. RenderImage -> Очищать текущий контент блока #slider. Создавать нашу картинку и через метод аппенд чайлд вставлять её в слайдер.
    3. NextSlide -> По клику на NextSilde передавать currentPosition текущего слайда + 1 в функцию рендера
    4. PrevSlide -> Тоже самое что предыдущий вариант, но на кнопку PrevSlide и передавать currentPosition - 1
      + бонус сделать так что бы при достижении последнего и первого слада вас после кидало на первый и последний слайд соответственно.
      + бонсу анимация появления слайдов через навешивание дополнительных стилей

*/

let OurSliderImages = ['images/cat1.jpg', 'images/cat2.jpg', 'images/cat3.jpg', 'images/cat4.jpg', 'images/cat5.jpg', 'images/cat6.jpg', 'images/cat7.jpg', 'images/cat8.jpg'];
let currentPosition = 0;

let prev = document.getElementById('PrevSilde');
let next = document.getElementById('NextSilde');
let slider = document.getElementById('slider');



window.onload = function () {
  RenderImage(0);
  function RenderImage(n) {
    slider.innerHTML = '';
    var img = document.createElement('img');

    img.src = OurSliderImages[n];

    slider.appendChild(img);
  }

  function NextSlide() {
    if (currentPosition == OurSliderImages.length - 1) {
      currentPosition = 0;
      RenderImage(currentPosition);
    } else {
      currentPosition++;
      RenderImage(currentPosition);
    }
  }

  function PrevSlide() {
    if (currentPosition == 0) {
      currentPosition = OurSliderImages.length - 1;
      RenderImage(currentPosition);
    } else {
      currentPosition--;
      RenderImage(currentPosition);
    }
  }

  next.addEventListener('click', NextSlide);
  prev.addEventListener('click', PrevSlide);

}
