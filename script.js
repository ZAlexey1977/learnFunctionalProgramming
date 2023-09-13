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

// // Глобальна змінна
// let fixedValue = 4;

// // Змініть код лише під цим рядком
// function incrementer(num) {
// return num + 1;

//   // Змініть код лише над цим рядком
// }

/////////////////////////////////// unit 6 ///////////////////////////////////

// Глобальна змінна
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Змініть код під цим рядком
function add(arr, bookName) {
  let ar = [...arr];
  ar.push(bookName);
  return ar;

  // Змініть код над цим рядком
}

// Змініть код під цим рядком
function remove(arr, bookName) {
  const book_index = bookList.indexOf(bookName);
  let ar = [...arr];
  if (book_index >= 0) {

    ar.splice(book_index, 1);
    return ar;

    // Змініть код над цим рядком
  }
}
/////////////////////////////////// unit 7 ///////////////////////////////////

/////////////////////////////////// unit 8 ///////////////////////////////////

/////////////////////////////////// unit 9 ///////////////////////////////////

/////////////////////////////////// unit 10 ///////////////////////////////////

/////////////////////////////////// unit 11 ///////////////////////////////////

/////////////////////////////////// unit 12 ///////////////////////////////////

/////////////////////////////////// unit 13 ///////////////////////////////////

/////////////////////////////////// unit 14 ///////////////////////////////////

/////////////////////////////////// unit 15 ///////////////////////////////////

/////////////////////////////////// unit 16 ///////////////////////////////////

/////////////////////////////////// unit 17 ///////////////////////////////////

/////////////////////////////////// unit 18 ///////////////////////////////////

/////////////////////////////////// unit 19 ///////////////////////////////////

/////////////////////////////////// unit 20 ///////////////////////////////////