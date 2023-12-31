let log = console.log;

/////////////////////////////////// unit 1 ///////////////////////////////////

// // Функція, що повертає рядок, який представляє чашку зеленого чаю
// const prepareTea = () => 'greenTea';

// /*
// Беручи до уваги функцію (що відповідає типу чаю) та потрібну кількість чашок, наступна функція повертає масив рядків (кожен позначає чашку із певним видом чаю).
// */
// const getTea = (numOfCups) => {
//   const teaCups = [];

//   for(let cups = 1; cups <= numOfCups; cups += 1) {
//     const teaCup = prepareTea();
//     teaCups.push(teaCup);
//   }
//   return teaCups;
// };

// // Змініть код лише під цим рядком
// const tea4TeamFCC = getTea(40);
// // Змініть код лише над цим рядком

/////////////////////////////////// unit 2 ///////////////////////////////////

// // Функція, що повертає рядок, який представляє чашку зеленого чаю
// const prepareGreenTea = () => 'greenTea';

// // Функція, що повертає рядок, який представляє чашку чорного чаю
// const prepareBlackTea = () => 'blackTea';

// /*
// Беручи до уваги функцію (що відповідає типу чаю) та потрібну кількість чашок, наступна функція повертає масив рядків (кожен позначає чашку із певним видом чаю).
// */
// const getTea = (prepareTea, numOfCups) => {
//   const teaCups = [];

//   for(let cups = 1; cups <= numOfCups; cups += 1) {
//     const teaCup = prepareTea();
//     teaCups.push(teaCup);
//   }
//   return teaCups;
// };

// // Змініть код лише під цим рядком
// const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
// const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);
// // Змініть код лише над цим рядком

// console.log(
//   tea4GreenTeamFCC,
//   tea4BlackTeamFCC
// );

/////////////////////////////////// unit 3 ///////////////////////////////////

// // вкладки – це масив заголовків до кожного сайту, відкритого у вікні
// const Window = function (tabs) {
//   this.tabs = tabs; // Ми зберігаємо записи про масив всередині об'єкта
// };

// // Коли ви об'єднуєте два вікна в одне
// Window.prototype.join = function (otherWindow) {
//   this.tabs = this.tabs.concat(otherWindow.tabs);
//   return this;
// };

// // Коли ви відкриєте нову вкладку в кінці
// Window.prototype.tabOpen = function (tab) {
//   this.tabs.push('new tab'); // Давайте поки відкриємо нову вкладку
//   return this;
// };

// // Коли ви закриєте вкладку
// Window.prototype.tabClose = function (index) {

//   // Змініть код лише під цим рядком

//   const tabsBeforeIndex = this.tabs.slice(0, index); // Отримайте вкладки перед вкладкою
//   const tabsAfterIndex = this.tabs.slice(index + 1); // Отримайте вкладки після вкладки

//   this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // З'єднайте їх разом

//   // Змініть код лише над цим рядком

//   return this;
// };

// // Давайте створимо три вікна браузера
// const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Ваша поштова скринька, диск та інші робочі сторінки
// const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Соціальні сторінки
// const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Розважальні сайти

// // Тепер виконайте закриття, відкриття вкладки та інші операції
// const finalTabs = socialWindow
//   .tabOpen() // Відкрийте нову вкладку для мемів з котами
//   .join(videoWindow.tabClose(2)) // Закрийте третю вкладку у вікні відео та приєднайтеся
//   .join(workWindow.tabClose(1).tabOpen());
// console.log(finalTabs.tabs);

/////////////////////////////////// unit 4 ///////////////////////////////////

// // Глобальна змінна
// let fixedValue = 4;

// function incrementer(num) {
//   // Змініть код лише під цим рядком
//   return fixedValue + 1;
// }

/////////////////////////////////// unit 5 ///////////////////////////////////

// // // Глобальна змінна
// // let fixedValue = 4;

// // // Змініть код лише під цим рядком
// // function incrementer(num) {
// // return num + 1;

// //   // Змініть код лише над цим рядком
// // }

/////////////////////////////////// unit 6 ///////////////////////////////////

// // Глобальна змінна
// const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// // Змініть код під цим рядком
// function add(arr, bookName) {
//   let ar = [...arr];
//   ar.push(bookName);
//   return ar;

//   // Змініть код над цим рядком
// }

// // Змініть код під цим рядком
// function remove(arr, bookName) {
//   const book_index = bookList.indexOf(bookName);
//   let ar = [...arr];
//   if (book_index >= 0) {

//     ar.splice(book_index, 1);
//     return ar;

//     // Змініть код над цим рядком
//   }
// }

/////////////////////////////////// unit 7 ///////////////////////////////////

// // Глобальна змінна
// const watchList = [
//   {
//     "Title": "Inception",
//     "Year": "2010",
//     "Rated": "PG-13",
//     "Released": "16 Jul 2010",
//     "Runtime": "148 min",
//     "Genre": "Action, Adventure, Crime",
//     "Director": "Christopher Nolan",
//     "Writer": "Christopher Nolan",
//     "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
//     "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//     "Language": "English, Japanese, French",
//     "Country": "USA, UK",
//     "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//     "Metascore": "74",
//     "imdbRating": "8.8",
//     "imdbVotes": "1,446,708",
//     "imdbID": "tt1375666",
//     "Type": "movie",
//     "Response": "True"
//   },
//   {
//     "Title": "Interstellar",
//     "Year": "2014",
//     "Rated": "PG-13",
//     "Released": "07 Nov 2014",
//     "Runtime": "169 min",
//     "Genre": "Adventure, Drama, Sci-Fi",
//     "Director": "Christopher Nolan",
//     "Writer": "Jonathan Nolan, Christopher Nolan",
//     "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//     "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//     "Language": "English",
//     "Country": "USA, UK",
//     "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
//     "Metascore": "74",
//     "imdbRating": "8.6",
//     "imdbVotes": "910,366",
//     "imdbID": "tt0816692",
//     "Type": "movie",
//     "Response": "True"
//   },
//   {
//     "Title": "The Dark Knight",
//     "Year": "2008",
//     "Rated": "PG-13",
//     "Released": "18 Jul 2008",
//     "Runtime": "152 min",
//     "Genre": "Action, Adventure, Crime",
//     "Director": "Christopher Nolan",
//     "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//     "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//     "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//     "Language": "English, Mandarin",
//     "Country": "USA, UK",
//     "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
//     "Metascore": "82",
//     "imdbRating": "9.0",
//     "imdbVotes": "1,652,832",
//     "imdbID": "tt0468569",
//     "Type": "movie",
//     "Response": "True"
//   },
//   {
//     "Title": "Batman Begins",
//     "Year": "2005",
//     "Rated": "PG-13",
//     "Released": "15 Jun 2005",
//     "Runtime": "140 min",
//     "Genre": "Action, Adventure",
//     "Director": "Christopher Nolan",
//     "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//     "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//     "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//     "Language": "English, Urdu, Mandarin",
//     "Country": "USA, UK",
//     "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
//     "Metascore": "70",
//     "imdbRating": "8.3",
//     "imdbVotes": "972,584",
//     "imdbID": "tt0372784",
//     "Type": "movie",
//     "Response": "True"
//   },
//   {
//     "Title": "Avatar",
//     "Year": "2009",
//     "Rated": "PG-13",
//     "Released": "18 Dec 2009",
//     "Runtime": "162 min",
//     "Genre": "Action, Adventure, Fantasy",
//     "Director": "James Cameron",
//     "Writer": "James Cameron",
//     "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//     "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//     "Language": "English, Spanish",
//     "Country": "USA, UK",
//     "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
//     "Metascore": "83",
//     "imdbRating": "7.9",
//     "imdbVotes": "876,575",
//     "imdbID": "tt0499549",
//     "Type": "movie",
//     "Response": "True"
//   }
// ];

// // Змініть код лише під цим рядком

// const ratings = watchList.map((el) => {
//   return {'title': el['Title'], 'rating': el.imdbRating}
// });


// // Змініть код лише над цим рядком

// console.log(JSON.stringify(ratings));

/////////////////////////////////// unit 8 ///////////////////////////////////

// Array.prototype.myMap = function(callback) {
//   const newArray = [];
//   // Змініть код лише під цим рядком
//  for (let i = 0; i < this.length; i++){
//    newArray.push(callback(this[i], i, this));
//  }
//   // Змініть код лише над цим рядком
//   return newArray;
// };

/////////////////////////////////// unit 9 ///////////////////////////////////

// // Глобальна змінна
// const watchList = [
//   {
//     "Title": "Inception",
//     "Year": "2010",
//     "Rated": "PG-13",
//     "Released": "16 Jul 2010",
//     "Runtime": "148 min",
//     "Genre": "Action, Adventure, Crime",
//     "Director": "Christopher Nolan",
//     "Writer": "Christopher Nolan",
//     "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
//     "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//     "Language": "English, Japanese, French",
//     "Country": "USA, UK",
//     "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//     "Metascore": "74",
//     "imdbRating": "8.8",
//     "imdbVotes": "1,446,708",
//     "imdbID": "tt1375666",
//     "Type": "movie",
//     "Response": "True"
//   },
//   {
//     "Title": "Interstellar",
//     "Year": "2014",
//     "Rated": "PG-13",
//     "Released": "07 Nov 2014",
//     "Runtime": "169 min",
//     "Genre": "Adventure, Drama, Sci-Fi",
//     "Director": "Christopher Nolan",
//     "Writer": "Jonathan Nolan, Christopher Nolan",
//     "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//     "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//     "Language": "English",
//     "Country": "USA, UK",
//     "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
//     "Metascore": "74",
//     "imdbRating": "8.6",
//     "imdbVotes": "910,366",
//     "imdbID": "tt0816692",
//     "Type": "movie",
//     "Response": "True"
//   },
//   {
//     "Title": "The Dark Knight",
//     "Year": "2008",
//     "Rated": "PG-13",
//     "Released": "18 Jul 2008",
//     "Runtime": "152 min",
//     "Genre": "Action, Adventure, Crime",
//     "Director": "Christopher Nolan",
//     "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//     "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//     "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//     "Language": "English, Mandarin",
//     "Country": "USA, UK",
//     "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
//     "Metascore": "82",
//     "imdbRating": "9.0",
//     "imdbVotes": "1,652,832",
//     "imdbID": "tt0468569",
//     "Type": "movie",
//     "Response": "True"
//   },
//   {
//     "Title": "Batman Begins",
//     "Year": "2005",
//     "Rated": "PG-13",
//     "Released": "15 Jun 2005",
//     "Runtime": "140 min",
//     "Genre": "Action, Adventure",
//     "Director": "Christopher Nolan",
//     "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//     "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//     "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//     "Language": "English, Urdu, Mandarin",
//     "Country": "USA, UK",
//     "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
//     "Metascore": "70",
//     "imdbRating": "8.3",
//     "imdbVotes": "972,584",
//     "imdbID": "tt0372784",
//     "Type": "movie",
//     "Response": "True"
//   },
//   {
//     "Title": "Avatar",
//     "Year": "2009",
//     "Rated": "PG-13",
//     "Released": "18 Dec 2009",
//     "Runtime": "162 min",
//     "Genre": "Action, Adventure, Fantasy",
//     "Director": "James Cameron",
//     "Writer": "James Cameron",
//     "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//     "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//     "Language": "English, Spanish",
//     "Country": "USA, UK",
//     "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
//     "Metascore": "83",
//     "imdbRating": "7.9",
//     "imdbVotes": "876,575",
//     "imdbID": "tt0499549",
//     "Type": "movie",
//     "Response": "True"
//   }
// ];

// // Змініть код лише під цим рядком

// const filteredList = watchList
//   .filter((el) => {
//     return el["imdbRating"] >= 8.0;
//   })
//   .map((el) => {
//     return { "title": el["Title"], "rating": el["imdbRating"] }
//   })

// // Змініть код лише над цим рядком

// log(filteredList);

/////////////////////////////////// unit 10 ///////////////////////////////////

// Array.prototype.myFilter = function(callback) {
//   const newArray = [];
//   // Змініть код лише під цим рядком
//   for (let i = 0; i < this.length; i++){
//     if (callback(this[i], i, this) == true) {
//       newArray.push(this[i]);
//     }
//   }
//   // Змініть код лише над цим рядком
//   return newArray;
// };

/////////////////////////////////// unit 11 ///////////////////////////////////

// function sliceArray(anim, beginSlice, endSlice) {
//   // Змініть код лише під цим рядком
// return anim.slice(beginSlice, endSlice);

//   // Змініть код лише над цим рядком
// }

// const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
// sliceArray(inputAnim, 1, 3);

/////////////////////////////////// unit 12 ///////////////////////////////////

// function nonMutatingSplice(cities) {

//   return cities.slice(0, 3);
// }

/////////////////////////////////// unit 13 ///////////////////////////////////

// function nonMutatingConcat(original, attach) {
//   // Змініть код лише під цим рядком
// return original.concat(attach);

//   // Змініть код лише над цим рядком
// }

// const first = [1, 2, 3];
// const second = [4, 5];
// nonMutatingConcat(first, second);

/////////////////////////////////// unit 14 ///////////////////////////////////

// function nonMutatingPush(original, newItem) {
//   // Змініть код лише під цим рядком

//   return original.concat(newItem);

//   // Змініть код лише над цим рядком
// }

// const first = [1, 2, 3];
// const second = [4, 5];
// nonMutatingPush(first, second);


/////////////////////////////////// unit 15 ///////////////////////////////////

// // Глобальна змінна
// const watchList = [
//   {
//     "Title": "Inception",
//     "Year": "2010",
//     "Rated": "PG-13",
//     "Released": "16 Jul 2010",
//     "Runtime": "148 min",
//     "Genre": "Action, Adventure, Crime",
//     "Director": "Christopher Nolan",
//     "Writer": "Christopher Nolan",
//     "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
//     "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//     "Language": "English, Japanese, French",
//     "Country": "USA, UK",
//     "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//     "Metascore": "74",
//     "imdbRating": "8.8",
//     "imdbVotes": "1,446,708",
//     "imdbID": "tt1375666",
//     "Type": "movie",
//     "Response": "True"
//   },
//   {
//     "Title": "Interstellar",
//     "Year": "2014",
//     "Rated": "PG-13",
//     "Released": "07 Nov 2014",
//     "Runtime": "169 min",
//     "Genre": "Adventure, Drama, Sci-Fi",
//     "Director": "Christopher Nolan",
//     "Writer": "Jonathan Nolan, Christopher Nolan",
//     "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//     "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//     "Language": "English",
//     "Country": "USA, UK",
//     "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
//     "Metascore": "74",
//     "imdbRating": "8.6",
//     "imdbVotes": "910,366",
//     "imdbID": "tt0816692",
//     "Type": "movie",
//     "Response": "True"
//   },
//   {
//     "Title": "The Dark Knight",
//     "Year": "2008",
//     "Rated": "PG-13",
//     "Released": "18 Jul 2008",
//     "Runtime": "152 min",
//     "Genre": "Action, Adventure, Crime",
//     "Director": "Christopher Nolan",
//     "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//     "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//     "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//     "Language": "English, Mandarin",
//     "Country": "USA, UK",
//     "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
//     "Metascore": "82",
//     "imdbRating": "9.0",
//     "imdbVotes": "1,652,832",
//     "imdbID": "tt0468569",
//     "Type": "movie",
//     "Response": "True"
//   },
//   {
//     "Title": "Batman Begins",
//     "Year": "2005",
//     "Rated": "PG-13",
//     "Released": "15 Jun 2005",
//     "Runtime": "140 min",
//     "Genre": "Action, Adventure",
//     "Director": "Christopher Nolan",
//     "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//     "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//     "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//     "Language": "English, Urdu, Mandarin",
//     "Country": "USA, UK",
//     "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
//     "Metascore": "70",
//     "imdbRating": "8.3",
//     "imdbVotes": "972,584",
//     "imdbID": "tt0372784",
//     "Type": "movie",
//     "Response": "True"
//   },
//   {
//     "Title": "Avatar",
//     "Year": "2009",
//     "Rated": "PG-13",
//     "Released": "18 Dec 2009",
//     "Runtime": "162 min",
//     "Genre": "Action, Adventure, Fantasy",
//     "Director": "James Cameron",
//     "Writer": "James Cameron",
//     "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//     "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//     "Language": "English, Spanish",
//     "Country": "USA, UK",
//     "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
//     "Metascore": "83",
//     "imdbRating": "7.9",
//     "imdbVotes": "876,575",
//     "imdbID": "tt0499549",
//     "Type": "movie",
//     "Response": "True"
//   }
// ];

// function getRating(watchList) {
//   // Змініть код лише під цим рядком
//   let averageRating;
//   let arr = watchList.filter((el) => {
//     if (el["Director"] == 'Christopher Nolan') {
//       return el;
//     }
//   })
//   arr = arr.map((el) => {
//     return Number(el["imdbRating"]);
//   })

//   let temp = arr.reduce((akkum, el) => {
//     // let sum = akkum + el;
//     // log(sum)
//     return (akkum + el);
//   })

//   averageRating = temp / arr.length;
//   // Змініть код лише над цим рядком
//   return averageRating;
// }

// log(getRating(watchList));

/////////////////////////////////// unit 16 ///////////////////////////////////

// const squareList = ((arr) => {
//   // Змініть код лише під цим рядком
//   let test = arr.filter((el) => {
//     if (Number.isInteger(el) && el > 0) {
//       return el;
//     }
//   })
//   let result = test.map((el) => Math.pow(el, 2))
//   return result;
//   // Змініть код лише над цим рядком
// });

// const squaredIntegers = squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]);
// log(squaredIntegers);

/////////////////////////////////// unit 17 ///////////////////////////////////

// function alphabeticalOrder(arr) {
//   // Змініть код лише під цим рядком

//   return arr.sort();
//   // Змініть код лише над цим рядком
// }

// log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));

/////////////////////////////////// unit 18 ///////////////////////////////////

// const globalArray = [1, 30, 4, 21, 100000];

// function nonMutatingSort(arr) {
//   // Змініть код лише під цим рядком

//   let newArr = arr.slice();
//   log(newArr);
//   newArr.sort(function (a, b) { return a - b });
//   return newArr;

//   // Змініть код лише над цим рядком
// }

// log(nonMutatingSort(globalArray));
// log(nonMutatingSort([5, 6, 3, 2, 9]));

/////////////////////////////////// unit 19 ///////////////////////////////////

// function splitify(str) {
//   // Змініть код лише під цим рядком
//   return str.split(/\W/);

//   // Змініть код лише над цим рядком
// }

// log(splitify("Hello World,I-am code"));

/////////////////////////////////// unit 20 ///////////////////////////////////

// function sentensify(str) {
//   // Змініть код лише під цим рядком
//   str = str.split(/\W/);
//   return str.join(' ');

//   // Змініть код лише над цим рядком
// }

// log(sentensify("May-the-force-be-with-you"));

/////////////////////////////////// unit 21 ///////////////////////////////////

// // Змініть код лише під цим рядком
// function urlSlug(title) {
//   title = title.toLowerCase();
//   title = title.trim();
//   title = title.split(/\s+/);
//   return title.join('-');

// }
// // Змініть код лише над цим рядком
// log(urlSlug(" Winter Is  Coming"));

/////////////////////////////////// unit 22 ///////////////////////////////////

// function checkPositive(arr) {
//   // Змініть код лише під цим рядком
//   return arr.every((el) => {
//     return el > 0;
//   })

//   // Змініть код лише над цим рядком
// }

// log(checkPositive([1, 2, 3, 4, 5]));

/////////////////////////////////// unit 23 ///////////////////////////////////

// function checkPositive(arr) {
//   // Змініть код лише під цим рядком
// return arr.some((el) => {
//   return el > 0;
// })

//   // Змініть код лише над цим рядком
// }

// checkPositive([1, 2, 3, -4, 5]);

/////////////////////////////////// unit 24 ///////////////////////////////////

// function add(x) {
//   // Змініть код лише під цим рядком

//   return function (y) {
//     return function (z) {
//       return x + y + z;
//     }
//   }

//   // Змініть код лише над цим рядком
// }

// log(add(10)(20)(30));

/////////////////////////////////// unit 25 ///////////////////////////////////

/////////////////////////////////// unit 26 ///////////////////////////////////

/////////////////////////////////// unit 27 ///////////////////////////////////

/////////////////////////////////// unit 28 ///////////////////////////////////

/////////////////////////////////// unit 29 ///////////////////////////////////

/////////////////////////////////// unit 30 ///////////////////////////////////