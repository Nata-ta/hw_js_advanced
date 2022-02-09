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
  this.name = name;
  this.text = text;
  if (avatarUrl) this.avatarUrl = avatarUrl;
  this.likes = 0;
};

Comment.prototype.avatarUrl = "https://shutnikov.club/wp-content/uploads/2019/11/boroda_avatarka_48_26074904.jpg";
Comment.prototype.countLikes = function () {
  return this.likes++;
}

var myComment1 = new Comment("Peter", "Hello");
var myComment2 = new Comment("Frank", "Hi", "https://static-cse.canva.com/blob/742071/1600w-2so4RyuRmfc.jpg");
var myComment3 = new Comment("Lisa", "Good day", "https://static-cse.canva.com/blob/742069/1600w-OUwmy_8MS6I.jpg");
var myComment4 = new Comment("Carla", "Hey there", "https://static-cse.canva.com/blob/742068/1600w--JuHp_Tx_2w.jpg");

var CommentsArray = [myComment1, myComment2, myComment3, myComment4];

function CommentsToHtml(arr) {
  var commentsFeed = document.getElementById('CommentsFeed');

  arr.forEach(element => {

    var containerName = document.createElement('h2');
    containerName.innerText = element.name;
    commentsFeed.appendChild(containerName);

    var newText = document.createElement('p');
    newText.innerText = element.text;
    commentsFeed.appendChild(newText);

    var newAva = document.createElement('img');
    newAva.src = element.avatarUrl;
    newAva.style.width = 100 + 'px';
    newAva.style.height = 100 + 'px';
    commentsFeed.appendChild(newAva);

    var likes = document.createElement('button');
    likes.innerText = element.likes;

    likes.addEventListener('click', function () {
      element.countLikes();
      likes.innerText = element.likes;
    });

    commentsFeed.appendChild(likes);
  });

}

CommentsToHtml(CommentsArray);