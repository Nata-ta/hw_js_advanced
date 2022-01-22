/*
  Задание 1.

  Написать функцию которая будет задавать СЛУЧАЙНЫЙ цвет для фона.
  Каждая перезагрузка страницы будет с новым цветом.
  Для написания используйте функцию на получение случайного целого числа,
  между минимальным и максимальным значением (Приложена снизу задания)

  + Бонус, повесить обработчик на кнопку через метод onClick
  + Бонус, использовать 16-ричную систему исчесления и цвет HEX -> #FFCC00
  + Бонус выводить полученый цвет по центру страницы.
  
  Необходимо создать блок через createElement задать ему стили через element.style
  и вывести через appendChild или insertBefore

  Необходимые материалы:
    Math.Random (Доки): https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    __
    Работа с цветом:
    Вариант 1.
      Исользовать element.style.background = 'rgb(r,g,b)';
      где r,g,b случайное число от 0 до 255;

    Вариант 2.
      Исользовать element.style.background = '#RRGGBB';
      где, RR, GG, BB, значние цвета в 16-ричной системе исчесления
      Формирование цвета в вебе: https://ru.wikipedia.org/wiki/%D0%A6%D0%B2%D0%B5%D1%82%D0%B0_HTML
      Перевод в 16-ричную систему исчесления делается при помощи
      метода 
      
      Number.toString( ) https://www.w3schools.com/jsref/jsref_tostring_number.asp,

      var myNumber = '251'
      myNumber.toString(16) // fb

*/

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// var r = getRandomIntInclusive(0, 255);
// var g = getRandomIntInclusive(0, 255);
// var b = getRandomIntInclusive(0, 255);

//   document.body.style.background = `rgb(${r}, ${g}, ${b})`;

var btn = document.querySelector('._changeColorButton');
var div = document.createElement('div');
div.style.cssText = 'position: absolute; top: 50%; left: 50%; border: 1px solid black; width: 100px; height: 100px;';
document.body.appendChild(div);

// var changeColor = function () {
//   var r = getRandomIntInclusive(0, 255);
//   var g = getRandomIntInclusive(0, 255);
//   var b = getRandomIntInclusive(0, 255);

//   document.body.style.background = `rgb(${r}, ${g}, ${b})`;
// }

// changeColor();
// btn.onclick = changeColor;

var changeColor = function () {
  var r = getRandomIntInclusive(0, 255).toString(16);
  var g = getRandomIntInclusive(0, 255).toString(16);
  var b = getRandomIntInclusive(0, 255).toString(16);

  document.body.style.background = `#${r}${g}${b}`;
  div.innerHTML = `#${r}${g}${b}`;
}

var changeColor2 = function () {
  var r1 = getRandomIntInclusive(0, 255).toString(16);
  var g2 = getRandomIntInclusive(0, 255).toString(16);
  var b3 = getRandomIntInclusive(0, 255).toString(16);

  div.style.background = `#${r1}${g2}${b3}`;
}
changeColor2();

changeColor();
btn.onclick = changeColor;