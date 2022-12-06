// Написать код приложения, интерфейс которого состоит из двух input и кнопки.
//  В input можно ввести любое число.

// Заголовок первого input — «номер страницы».
// Заголовок второго input — «лимит».
// Заголовок кнопки — «запрос».
// При клике на кнопку происходит следующее:

// Если число в первом input не попадает в диапазон от 1 до 10 
// или не является числом — выводить ниже текст «Номер страницы вне диапазона от 1 до 10»;
// Если число во втором input не попадает в диапазон от 1 до 10 
// или не является числом — выводить ниже текст «Лимит вне диапазона от 1 до 10»;
// Если и первый, и второй input не в диапазонах или не являются числами — выводить ниже
//  текст «Номер страницы и лимит вне диапазона от 1 до 10»;
// Если числа попадают в диапазон от 1 до 10 — сделать запрос по
//  URL https://picsum.photos/v2/list?page=1&limit=10, где GET-параметр page — это число из первого input, а GET-параметр limit — 
//  это введённое число второго input.

 // Ищем ноду для вставки результата запроса
 const resultNode = document.querySelector('.j-result');
 // Ищем кнопку, по нажатии на которую будет запрос
 const btn = document.querySelector('.j-btn-request');

 // Вешаем обработчик на кнопку для запроса
 btn.addEventListener('click', () => {
     const value1 = document.getElementById('page').value;
     const value2 = document.getElementById('limit').value;
     let s = document.getElementById('result');
     s.textContent = '';
     if (!(value1 >= 1 && value1 <= 10)) {
         s.textContent = 'Номер страницы вне диапазона от 1 до 10';
         return;
     }
     else if(!(value2 >= 1 && value2 <= 10)) {
         s.textContent = 'Лимит вне диапазона от 1 до 10';
         return;
     }
     else if(!(value1 >= 1 && value1 <= 10 && value2 >= 1 && value2 <= 10)) {
         s.textContent = 'Номер страницы и лимит вне диапазона от 1 до 10';
         return;
     } else {
         fetch(`https://picsum.photos/v2/list?page=1&limit=10`)
             .then((response) => {
                 document.getElementById('result').src = response.url;
             });
         console.log(result);
     }
 });
 const getElementById = localStorage.setItem('click', 'limit');