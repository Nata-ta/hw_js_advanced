

/*

    Документация:
    
    https://developer.mozilla.org/ru/docs/HTML/HTML5/Constraint_validation
    
    form.checkValidity() > Проверка всех полей формы на валидость
    form.reportValidity() > Проверяет все поля на валидность и выводит сообщение с ошибкой

    formElement.validity > Объект с параметрами валидности поля 
    formElement.setCustomValidity(message) > Метод который задаст validity.valid = false, и при попытке отправки
        сообщения выведет message в браузерный попал

    Классы для стилизации состояния элемента
    input:valid{} // hover
    input:invalid{} // firstchild

    
    Задание:
    
    Используя браузерное API для валидации форм реализовать валидацию следующей формы:  

    - Имя пользователя: type:text -> validation: required; minlength = 2;  
        Если пустое выввести сообщение: "Как тебя зовут дружище?!"
    - Email: type: email -> validation: required; minlength = 3; validEmail;
        Если эмейл не валидный вывести сообщение "Ну и зря, не получишь бандероль с яблоками!"
    - Пароль: type: password -> validation: required; minlength = 8; maxlength=16;
        Если пустой вывести сообщение: "Я никому не скажу наш секрет";
    - Количество сьеденых яблок: type: number -> validation: required; minlength = 1; validNumber;
        Если количество 0 вывести эррор с сообщением "Ну хоть покушай немного... Яблочки вкусные"
    - Напиши спасибо за яблоки: type: text -> validation: required; 
        Если текст !== "спасибо" вывести эррор с сообщением "Фу, неблагодарный(-ая)!" используя setCustomValidity();

    - Согласен на обучение: type: checkbox -> validation: required;
        Если не выбран вывести эррор с сообщение: "Необразованные живут дольше! Хорошо подумай!"

    Внизу две кнопки:

    1) Обычный submit который отправит форму, если она валидна.
    2) Кнопка Validate(Проверить) которая запускает методы:
        - yourForm.checkValidity: и выводит на страницу сообщение с результатом проверки
        - yourForm.reportValidity: вызывает проверку всех правил и вывод сообщения с ошибкой, если такая есть

*/

document.addEventListener("DOMContentLoaded", function () {
    let myForm = document.getElementById('myForm');
    let submitBtn = document.getElementById('submit');
    let validateBtn = document.getElementById('validate');

    submitBtn.addEventListener('click', function (e) {
        if (myForm.login.validity.tooShort) {
            myForm.login.setCustomValidity("Как тебя зовут дружище?!");
        } else {
            myForm.login.setCustomValidity('');
        }

        if (!myForm.email.validity.valid) {
            myForm.email.setCustomValidity("Ну и зря, не получишь бандероль с яблоками!");
        } else {
            myForm.email.setCustomValidity('');
        }

        if (!myForm.password.validity.valid) {
            myForm.password.setCustomValidity("Я никому не скажу наш секрет");
        } else {
            myForm.password.setCustomValidity('');
        }

        if (!myForm.numberEaten.validity.valid) {
            myForm.numberEaten.setCustomValidity("Ну хоть покушай немного... Яблочки вкусные");
        } else {
            myForm.numberEaten.setCustomValidity('');
        }

        if (myForm.thanks.value !== "спасибо") {
            myForm.thanks.setCustomValidity("Фу, неблагодарный(-ая)!");
        } else {
            myForm.thanks.setCustomValidity('');
        }

        if (!myForm.checkbox.validity.valid) {
            myForm.checkbox.setCustomValidity("Необразованные живут дольше! Хорошо подумай!");
        } else {
            myForm.checkbox.setCustomValidity('');
        }
    });

    validateBtn.addEventListener('click', function (e) {
        if (!myForm.checkValidity()) {
            alert('Your information is not correct');
        } else {
            alert('Thanks! Everything is great!');
        }

        myForm.reportValidity();
    })
})