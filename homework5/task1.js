/*

  Задание:

    1. Написать конструктор объекта комментария который принимает 3 аргумента
    ( имя, текст сообщения, ссылка на аватаку);

    {
      name: '',
      text: '',
      avatarUrl: '...jpg'
      likes: 0
    }
      + Создать прототип, в котором будет содержаться ссылка на картинку по умлочанию
      + В прототипе должен быть метод который увеличивает счетик лайков

    var myComment1 = new Comment(...);

    2. Создать массив из 4х комментариев.
    var CommentsArray = [myComment1, myComment2...]

    3. Созадть функцию конструктор, которая принимает массив коментариев.
      И выводит каждый из них на страничку.

    <div id="CommentsFeed"></div>


*/


function Comment(name, text, avatarUrl) {
  this.name = name,
    this.text = text,
    this.avatarUrl = avatarUrl;
  this.likes = 0,
    this.countLikes = function () {
      return this.likes++;
    }
};

var myComment1 = new Comment("Peter", "Hello", "https://shutnikov.club/wp-content/uploads/2019/11/boroda_avatarka_48_26074904.jpg");

console.log(myComment1);

var myComment2 = new Comment("Frank", "Hi", "https://static-cse.canva.com/blob/742071/1600w-2so4RyuRmfc.jpg");
var myComment3 = new Comment("Lisa", "Good day", "https://static-cse.canva.com/blob/742069/1600w-OUwmy_8MS6I.jpg");
var myComment4 = new Comment("Carla", "Hey there", "https://static-cse.canva.com/blob/742068/1600w--JuHp_Tx_2w.jpg");

var CommentsArray = [myComment1, myComment2, myComment3, myComment4];

function CommentsToHtml(arr) {
  var commentsFeed = document.getElementById('CommentsFeed');

  arr.forEach(element => {

    console.log(Object.values(element));

    var li = document.createElement('li');
    li.innerText = Object.values(element);

    commentsFeed.appendChild(li);
  });


}

CommentsToHtml(CommentsArray);