// const books = {};
// books ['sci-fi'] = [
//     {author: 'Айбек', title: 'Робот'},
//     {author: 'Робер', title: 'Десант'},
//     {author: 'Гена', title: 'Война'},
// ];
//
// for (let i = 0; i < books['sci-fi'].length; i++) {
//     console.log(`${books['sci-fi'][i].author}\n`);
// }



// const user = {
//     name: 'Лев Толстой',
//     login: 'leo_tolstoy',
//     reputation: 97,
//     total: 900,
// };
//
// user['chats'] = {};
//
// user['chats']['mama'] = [
//     { author: "mama", text: "Ты покушал?" },
//     { author: "mama", text: "Почему не отвечаешь?" },
//     { author: "вы", text: "Покушал, мам" },
// ];
//
// user['chats']['wife'] = [
//     {author: "вы", text: "Устал и загрустил"},
//     {author: "вы", text: "Ленюсь"},
//     {author: "wife", text: "zzz"},
// ];
//
// for (let i = 0; i < user['chats']['wife'].length; i++) {
//     // let chat =  user['chats']['wife'][i];
//     console.log(`${ user['chats']['wife'][i].author}: ${ user['chats']['wife'][i].text}`)
// }


// let user = {
//     name: 'Мистер дудец',
//     login: 'mrdudec',
//     reputation: 15,
//     messages: [
//         {from: 'administrator', text: 'Вы получили предупреждение за публикацию рекламы на форуме'},
//         {from: 'Пётр', text: 'Собираем встречу в субботу в 19:00. Придёшь?'},
//         {from: 'administrator', text: 'Ваш рейтинг был повышен пользователем DonkeyKong'},
//         {from: 'administrator', text: 'Ваш рейтинг был повышен пользователем Netologist'},
//         {from: 'Brian Kerninghan', text: 'hello, world'}
//     ]
// };

// function printChatUsers(){
//     const uniqueUsers = [];
//     const messages = user.messages;
//     for(let i = 0; i < messages.length; i++){
//         const sender = messages[i].from;
//         let alreadyExists = false;

//         for (let j = 0; j < uniqueUsers.length; j++) {
//             if (uniqueUsers[j] === sender) {
//                 alreadyExists = true;
//                 break;
//             }
//         }

//         if (!alreadyExists) {
//             uniqueUsers.push(sender);
//         }
//     }
//     console.log(`В чате пользователей: ${uniqueUsers.length}`);
//     console.log(`Вот они: ${uniqueUsers.join(', ')}`);
// }
// printChatUsers()








//
// let thread = {
//     title: "Поделитесь книжкой",
//     author: "RuBrick",
//     total: 23,
//     messages: [
//         {
//             id: 13201,
//             date: "2018-01-09",
//             text: "Посоветуйте, пожалуйста, с одной стороны подробную, а с другой доступную для понимания книгу по javascript. Спасибо",
//             author: {
//                 name: "RuBrick",
//                 login: "ru_brick",
//                 reputation: 3,
//                 role: "user"
//             }
//         },
//         {
//             id: 13208,
//             date: "2018-01-12",
//             text: "Неужели нет хорошей литературы?",
//             author: {
//                 name: "RuBrick",
//                 login: "ru_brick",
//                 reputation: 3,
//                 role: "user"
//             }
//         },
//         {
//             id: 13209,
//             date: "2018-01-12",
//             text: "в общем, NodeJS это JS + некоторые доп. модули и объекты. Тебе нужна литература по самому JS и дока на официальном сайте.",
//             author: {
//                 name: "Popov",
//                 login: "popov_ma",
//                 reputation: 2310,
//                 role: "user"
//             }
//         },
//         {
//             id: 13219,
//             date: "2018-01-14",
//             text: "В сети много сайтов с хорошими объяснениями + есть курсы.",
//             author: {
//                 name: "Void",
//                 login: "void",
//                 reputation: 5005,
//                 role: "user"
//             }
//         },
//         {
//             id: 13220,
//             date: "2018-01-14",
//             text: "Есть большая книга «JavaScript. Подробное руководство», потом смотришь документацию.",
//             author: {
//                 name: "noname",
//                 login: "noname",
//                 reputation: 100,
//                 role: "user"
//             }
//         },
//         {
//             id: 13250,
//             date: "2018-01-19",
//             text: "Или можно посмотреть видеокурсы на YouTube! А самое главное — практика! И этот форум — лучшая тренировочная площадка!",
//             author: {
//                 name: "noname",
//                 login: "noname",
//                 reputation: 110,
//                 role: "user"
//             }
//         },
//         {
//             id: 13259,
//             date: "2018-01-20",
//             text: "Понял, спасибо!",
//             author: {
//                 name: "RuBrick",
//                 login: "ru_brick",
//                 reputation: 13,
//                 role: "user"
//             }
//         }
//     ]
// };

// function printMessages(thread, count){
//     const message = thread.messages;
//
//     if (!message.length){
//         console.log(`Ошибка формата! В теме нет сообщений`);
//         return;
//     }
//
//     for (let i = 0; i < message.length; i++){
//         if (i >= message.length -count){
//             console.log(`${message[i].author.name} (репутация: ${message[i].author.reputation}): ${message[i].text}`)
//         }
//     }
// }
// (printMessages(thread, 1));







//
// let allMessages = [
//     {author: "zloy-zloy", text: "А у кого какой мобильный??", edited: true},
//     {author: "zloy-zloy", text: "Я с андроидом. Уже 3 года живёт, он самым крепким оказался, пережил 2 утопления.", edited: false},
//     {author: "МамаЗузу", text: "Айфон в своё время успешно сдох при первом же падении на кафельную плитку.", edited: false},
//     {author: "void", text: "У меня андроид. Особенно нравится, что никаких заморочек с айтюнс.", edited: false},
//     {author: "mama", text: "Айфон.", edited: false},
//     {author: "mama", text: "Почему не отвечаешь?", edited: false},
//     {author: "void", text: "Дэвид Хэрман «Сила JavaScript. 68 способов эффективного использования JS».", edited: false},
//     {author: "void", text: "Marijn Haverbeke, Вячеслав Голованов «Выразительный javascript: Введение».", edited: false},
//     {author: "void", text: "Ленюсь.", edited: false},
//     {author: "void", text: "Пока оценивать нечего.", edited: false},
//     {author: "void", text: "Не по-русски как-то получается, хоть и на русском.", edited: false},
//     {author: "ivanov", text: "Чип и Дейл прикольно, играл в детстве.", edited: false},
//     {author: "ivanov", text: "hello, world", edited: true},
//     {author: "void", text: "Сейчас напишу книгу по JS.", edited: false},
//     {author: "ivanov", text: "Спасибо.", edited: false},
//     {author: "ivanov", text: "Смысл такого видео? Все непонятные функции приходится самому смотреть. Надо не так делать. Пишете код — объясняете сразу, что к чему, голосом, ну, или там, текстом хотя бы, хотя лучше голосом.", edited: true},
//     {author: "void", text: "Поделитесь видеоканалами по js.", edited: false},
//     {author: "void", text: "Ничего не понравилось.", edited: false}
// ];
//
// function getStatistics(messages){
//     let editedCount = 0;
//     let uneditedCount = 0;
//     for (let i = 0; i < messages.length; i++){
//         const edited = messages[i].edited;
//
//         (edited) ? editedCount++ : uneditedCount++;
//     }
//     return{
//         edited: editedCount,
//         unedited: uneditedCount,
//         total: messages.length,
//     }
// }
//
// const stats =getStatistics(allMessages);
// console.log(`отредоктированных сообещний: ${stats.edited}`);
// console.log(`неотредоктированных сообещний: ${stats.unedited}`);
// console.log(`общее кол-во сообщений: ${stats.total}`);






// let calculator = {
//     read() {
//         this.a = +prompt('Введите число a', '');
//         this.b = +prompt('Введите число b', '');
//     },
//     sum() {
//       return this.a + this.b;
//     },
//     mul() {
//         return this.a * this.b;
//     },
// };
//
// calculator.read();
// console.log( calculator.sum() );
// console.log( calculator.mul() );
//



// let ladder = {
//     step: 0,
//     up() {
//         this.step++;
//         return this;
//     },
//     down() {
//         this.step--;
//         return this;
//     },
//     showStep: function() { // показывает текущую ступеньку
//         console.log( this.step );
//         return this;
//     }
// };
//
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// ladder.down();
// ladder.showStep(); // 0
//
// ladder.up().up().down().showStep().down().showStep();




// function Calculator() {
//     this.read = function() {
//         this.a = +prompt(`Ведите число a`, '');
//         this.b = +prompt(`Ведите число b`, '');
//     };
//     this.sum = function() {
//         return this.a + this.b;
//     };
//     this.mul = function() {
//         return this.a * this.b;
//     }
// }
//
// let calculator = new Calculator();
// calculator.read();
//
// console.log( "Sum=" + calculator.sum() );
// console.log( "Mul=" + calculator.mul() );




// function Accumulator(startingValue) {
//    this.value = startingValue;
//    this.read = function() {
//        this.value += +prompt('Введите число','');
//    }
// }
//
// let accumulator = new Accumulator(1); // начальное значение 1
//
// accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
// accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
//
// console.log(accumulator.value); // выведет сумму этих значений

//
// const plugins = [
//     {
//         name: 'Plugin A',
//         features: [
//             { execute: () => console.log('✅ Feature A1 executed') },
//             {},
//             null
//         ]
//     },
//     null,
//     {
//         name: 'Plugin B'
//     },
//     {
//         name: 'Plugin C',
//         features: [
//             { execute: () => console.log('✅ Feature C1 executed') },
//             { name: 'Feature C2' },
//         ]
//     },
//     undefined,
// ];
//
// function runExecutables(plugins) {
//
//     for (let i = 0; i < plugins.length; i++) {
//         const gg = plugins[i]?.features;
//         for (let j =0; j < gg.length; j++) {
//             gg.execute?.();
//         }
//     }
// }
// runExecutables(plugins);



// const users = [
//     { name: 'Alice', score: 42 },
//     { name: 'Bob', score: 75 },
//     { name: 'Charlie', score: 51 },
//     { name: 'Diana', score: 89 },
//     { name: 'Eve', score: 67 }
// ];
//
//
// const maxScore = users.reduce( (acc, score) => {
//    return (acc.score > score.score) ? acc : score;
// }, users[0])
//
// console.log(maxScore);



// const str = "html;css;javascript";
// console.log(str.split(';'));
//
// const arr = [10, 20, 30, 40, 50];
// const newArr = arr.slice(1, 4);
// console.log(newArr);
//
// const nums = [1, 2, 3, 4, 5];
// nums.splice(2, 2, 'a', 'b');
// console.log(nums)
//
// const a = [1, 2];
// const b = [3, 4];
//
// const arrr = a.concat(b);
// console.log(arrr)


// const code = "a,b,c,d";
// console.log(code.split(',').slice(0, 3));
//
//
// const original = [1, 2, 3, 4, 5];
// const cut = original.splice(2, 3);
// console.log(original)
// console.log(cut)
//
//
// const data = [10, 20, 30];
// const newData = data.slice().concat(40, 50);
// console.log(data)
// console.log(newData)
//
//
// const str = "hello world";
// const index = str.indexOf('world')
// console.log(str.slice(index))



// function Calculator() {
//     this.methods = {
//         '+': (a, b) => a + b,
//         '-': (a, b) => a - b,
//     }
//
//     this.calculate = function (src) {
//         const result = src.split(' ');
//
//         if (result.length !== 3) {
//             throw new Error(`Неправильно ввели формат. Должно соответствовать виду: «ЧИСЛО оператор ЧИСЛО» (разделено пробелами)`)
//         }
//
//         let [a, operator, b] = result;
//          a = parseFloat(a);
//          b = parseFloat(b);
//
//          if (isNaN(a) || isNaN(b)) {
//              throw new Error(`Оба операнда должны быть числами`);
//          }
//
//         const operation = this.methods[operator];
//
//         if (!operation) {
//             throw new Error(`Оператор ${operator} не поддерживается. Введите доступный оператор: "+", "-", "*", "/", "**"`)
//         }
//
//         return operation(a, b)
//
//     }
//
//     this.addMethod = function (name, func) {
//         this.methods[name] = func;
//     }
// }
// let calc = new Calculator;
// console.log( calc.calculate("3 + 7") );
//
//
// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);
//
// let result = powerCalc.calculate("3 / 3");
// console.log( result );



// function groupById(arr) {
//    return  arr.reduce((obj, value) => {
//         obj[value.id] = value;
//         return obj
//     }, {})
// }
//
// let users = [
//     {id: 'john', name: "John Smith", age: 20},
//     {id: 'ann', name: "Ann Smith", age: 24},
//     {id: 'pete', name: "Pete Peterson", age: 31},
// ];
//
// let usersById = groupById(users);
// console.log(usersById)





// const words = ['apple', 'banana', 'apple', 'orange', 'banana', 'kiwi'];
// console.log(Array.from(new Set(words)))
//
//
// function getArrNumbers(arr) {
//     console.log(new Set(arr).size !== arr.length);
// }
// getArrNumbers(words)
// getArrNumbers([1, 2, 4, 5, 7])
//
//
//
// const users = [
//     { id: 1, name: 'Alex' },
//     { id: 2, name: 'Maria' },
//     { id: 3, name: 'John' }
// ];
// const map = new Map()
// users.forEach(user => map.set(user.id, user.name));
// console.log(map.get(1))
// console.log(map.get(2))
// console.log(map.get(3))





// const studentDictionary = new Map([
//     ['Анна', 100],
//     ['Борис', 90],
//     ['Виктор', 85],
//     ])
// studentDictionary.delete('Анна');
// for (let student of studentDictionary) {
//     console.log(`Имя: ${student[0]}, Балл: ${student[1]}`)
// }
//
//
//
// const str = 'привет, как дела';
// const char = str.split(',').join('').split(' ').join('')
// console.log(new Set(char))
//
//
//
// const str1 = "шалаш";
// const charArr = str1.split('');
// const mapCount  = new Map();
// for (let char of charArr) {
//     let count = mapCount.get(char);
//
//     if (count === undefined) {
//         mapCount.set(char, 1);
//     }else {
//         mapCount.set(char, count +1)
//     }
// }
// console.log(mapCount)



// const a = [1, 2, 3, 4];
// const b = [3, 4, 5, 6];
// const set = new Set(b);
// const unique= a.filter(item => set.has(item))
// console.log(unique)





// const a = [1, 2, 3, 4];
// const b = [3, 4, 5, 6];
// const set = new Set(b);
// const unique= a.filter(item => !set.has(item))
// console.log(unique)
//
//
// const aa = [1, 2, 3];
// const bb = [3, 4, 5];
//
// const arr = aa.concat(bb)
// console.log(Array.from(new Set(arr)));
//
//
//
// const str = "яблоко груша яблоко вишня груша яблоко";
// const words = str.split(' ');
// const countMap  = new Map();
// for (let word of words) {
//     let currentWord = countMap.get(word);
//
//     currentWord === undefined ? countMap.set(word, 1)
//         : countMap.set(word, currentWord + 1);
// }
// console.log(countMap);
//
//
// const wordss = ['арбуз', 'ананас', 'апельсин', 'банан', 'брусника', 'вишня'];
// const map = new Map();
// for (let word of wordss) {
//     let firstChar = word[0];
//
//     if (!map.has(firstChar)) {
//         map.set(firstChar, [])
//     }
//
//     map.get(firstChar).push(word)
// }
// console.log(map)




// function topSalary(salaries) {
//     let max = 0;
//     let name = null;
//     for (let [key, value] of Object.entries(salaries)) {
//         if (value > max) {
//             [max, name] = [value,key]
//         }
//     }
//     return name;
// }
// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250,
// };
// console.log(topSalary(salaries))
// console.log(topSalary({})); // должен вернуть null




// function compareArrays(arr1, arr2) {
//    if (arr1.length !== arr2.length) {
//       return false;
//    }else {
//      return  arr1.every((element, index) => element === arr2[index]);
//    }
// }
// console.log(compareArrays([8, 9], [6])) // false, разные значения
// compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5]) // false, разные значения
// compareArrays([9, 2, 4, 8, 2], [9, 2, 4]) // false, разные значения
// compareArrays([1, 2, 3], [2, 3, 1]) // false, разные индексы, хотя и одинаковые значения
// compareArrays([8, 1, 2], [8, 1, 2]) // true


// function getUsersNamesInAgeRange(users, gender) {
//        let result = users.filter(user => user.gender === gender);
//     return (result.length === 0) ? 0 : result.reduce((sum, user) => sum + user.age, 0) / result.length;
// }
//
// const people = [
//     {firstName: "Александр", secondName: "Карпов", age: 17, gender: "мужской"},
//     {firstName: "Егор", secondName: "Морозов", age: 21, gender: "мужской"},
//     {firstName: "Мелисса", secondName: "Леонова", age: 40, gender: "женский"},
//     {firstName: "Мелания", secondName: "Савельева", age: 37, gender: "женский"},
//     {firstName: "Мария", secondName: "Овчинникова", age: 18, gender: "женский"},
//     {firstName: "Марьяна", secondName: "Котова", age: 17, gender: "женский"},
//     {firstName: "Фёдор", secondName: "Селезнев", age: 50, gender: "мужской"},
//     {firstName: "Георгий", secondName: "Петров", age: 35, gender: "мужской"},
//     {firstName: "Даниил", secondName: "Андреев", age: 49, gender: "мужской"},
//     {firstName: "Дарья", secondName: "Савельева", age: 25, gender: "женский"},
//     {firstName: "Михаил", secondName: "Шаров", age: 22, gender: "мужской"},
//     {firstName: "Владислав", secondName: "Давыдов", age: 40, gender: "мужской"},
//     {firstName: "Илья", secondName: "Казаков", age: 35, gender: "мужской"},
//     {firstName: "Евгений", secondName: "Кузьмин", age: 19, gender: "мужской"},
// ]
// console.log(getUsersNamesInAgeRange(people, "мужской")); // 32
// console.log(getUsersNamesInAgeRange(people, "женский")); // 27.4
// console.log(getUsersNamesInAgeRange([], "женский")); // 0
// console.log(getUsersNamesInAgeRange(people, "инопланетянин")); // 0




// let now = new Date();
// let nextDay = new Date();
// nextDay.setHours(24, 0, 0, 0);
// let hoursLeft = Math.ceil((nextDay - now) / (1000 * 60 * 60 ));
// console.log(hoursLeft);


// let now = new Date();
// let birthday = new Date(2002, 7, 1);
// birthday.setFullYear(now.getFullYear());
// let daysPassed =  Math.ceil((now - birthday) / (1000 * 60 * 60 * 24));
// daysPassed >= 0 ? console.log(`С дня рождения прошло ${daysPassed} дней`) : console.log(`День рождения еще не наступил`);


// let now = new Date();
// now.setMinutes(now.getMinutes() + 30);
// let formatted = now.toLocaleTimeString("ru-Ru",
//     {hour: '2-digit', minute: '2-digit',
//     });
// console.log(formatted)


// let now = new Date();
// console.log(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }));
// // "02:05 PM"


// let now = new Date();
// now.setDate(now.getDate() + 7);
// console.log(now.toLocaleString('ru-RU', {
//     day: '2-digit',
//     month: '2-digit',
//     year: 'numeric',
//     hour: '2-digit',
//     minute: '2-digit'
// }));



// let now = new Date();
// now.setDate(now.getDay() + 100);
// const days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
// let day = days[now.getDay()];
// console.log(day)


// let now = new Date();
// let nextYear = new Date(now.getFullYear() + 1, 0, 1);
// let diff = nextYear - now;
// let days = Math.ceil(diff / (1000 * 60 * 60 * 24));
// console.log(`До нового года осталось ${days} день`);



// function getWeekDay(date) {
//     let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
//     return days[date.getDay()];
// }
// let date = new Date(2012, 0, 3);  // 3 января 2012 года
// console.log( getWeekDay(date) );        // нужно вывести "ВТ"




// В Европейских странах неделя начинается с понедельника (день номер 1),
// затем идёт вторник (номер 2) и так до воскресенья (номер 7).
// Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.
// function getLocalDay(date) {
//    let day= date.getDay();
//    if (day === 0) day = 7;
//    return day;
// }
// let date = new Date(2012, 0, 3);  // 3 января 2012 года
// console.log( getLocalDay(date) );       // вторник, нужно показать 2



// function getDateAgo(date, days) {
//     let dateCopy = new Date(date);
//     dateCopy.setDate(dateCopy.getDate() - days);
//     return dateCopy.getDate();
// }
// let date = new Date(2015, 0, 2);
// console.log( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
// console.log( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
// console.log( getDateAgo(date, 365) ); // 2, (2 Jan 2014)





// Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.
// function getLastDayOfMonth(year, month) {
//     let date = new Date(year, month + 1, 0);
//     return date.getDate();
// }
// console.log( getLastDayOfMonth(2012, 1));





// Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.
//
//     Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:
// function getSecondsToday() {
//     let now = new Date().getTime();
//     let today = new Date().setHours(0, 0, 0, 0);
//     let secondsPassed = Math.floor((now - today) / 1000);
//     return secondsPassed ;
// }
// console.log(getSecondsToday());
// function getSecondsToday() {
//     let now = new Date();
//     let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
//     return Math.floor((now - today) / 1000);




// function getSecondsToTomorrow() {
//     let now = new Date();
//     let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
//     return Math.floor((tomorrow - now) / (1000));
// }
// console.log(getSecondsToTomorrow());






// Напишите функцию formatDate(date), форматирующую date по следующему принципу:
//
//     Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
//     В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
//     В противном случае, если меньше часа, вывести "m мин. назад".
//     В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.
// function formatDate(date) {
//     const now = new Date();
//     const diff = (now.getTime() - date.getTime()) / 1000;
//     if (diff < 1) {
//         return `прямо сейчас`
//     }else if (diff < 60) {
//         return `${diff} сек. назад`;
//     }else if (diff < 3600) {
//         return `${diff / 60} мин. назад`;
//     }else {
//        let year = date.getFullYear() % 100;
//        let month = date.getMonth() + 1;
//        let day = date.getDate();
//        let hour = date.getHours();
//        let minute = date.getMinutes();
//
//        year = year < 10 ? '0' + year : year;
//        month = month < 10 ? '0' + month : month;
//        day = day < 10 ? '0' + day : day;
//        hour = hour < 10 ? '0' + hour : hour;
//        minute = minute < 10 ? '0' + minute : minute;
//        return `${day}.${month}.${year} ${hour}:${minute}`;
//     }
// }
// console.log( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"
// console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"
// console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"
// // вчерашняя дата вроде 31.12.2016, 20:00
// console.log( formatDate(new Date(new Date - 86400 * 1000)) );


// let user = {
//     name: "Василий Иванович",
//     age: 35
// };
//
// const json = JSON.stringify(user);
// console.log(user);
// console.log(json);
//
// let newUser = JSON.parse(json);
// console.log(newUser);




// let room = {
//     number: 23
// };
//
// let meetup = {
//     title: "Совещание",
//     occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
//     place: room
// };
//
// // цикличные ссылки
// room.occupiedBy = meetup;
// meetup.self = meetup;
//
// console.log( JSON.stringify(meetup, function replacer(key, value) {
//     return (key != "" && value == meetup) ? undefined : value;
// }, 1));
//
// /* в результате должно быть:
// {
//   "title":"Совещание",
//   "occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
//   "place":{"number":23}
// }
// */





// function poww(y, k) {
//     if (k == 1) {
//         return y;
//     } else {
//         return y * poww(y, k - 1);
//     }
// }
// console.log( poww(2, 4) ); // 8



// function sumTo(n) {
//     let sum = 0;
//     for (let i = 1; i <= n ; i++) {
//         sum += i;
//     }
//     return sum;
// }
// console.log( sumTo(100) ); // 5050


// function sumTo(n) {
//     return (n === 1) ? 1 : n + sumTo(n -1);
// }
// console.log( sumTo(100) ); // 5050

// function sumTo(n) {
//     return n * (n + 1) / 2;
// }
// console.log( sumTo(100) ); // 5050





// Разворот строки
// function reverse(str) {
//     if (str.length <= 1) {
//         return str;
//     }else {
//         return reverse(str.slice(1)) + str[0];
//     }
//
// }
// console.log(reverse("hello") ); // "olleh"






// сумма элементов массива
// function sumArray(arr) {
//     if (arr.length === 0) {
//         return 0;
//     }else {
//         return arr[0] + sumArray(arr.splice(1));
//     }
// }
// console.log( sumArray([1, 2, 3]) );






// универсальная степень числа
// function pow(x, n) {
//     if (n === 0) {
//         return 1;
//     }else if (n < 0) {
//        return   1 / pow(x, -n);
//     }else {
//        return  x * pow(x, n - 1);
//     }
// }
// console.log( pow(2, 3) );
// console.log( pow(2, -2) );
// console.log( pow(5, 0) );




// вычислить факториал
// function factorial(n) {
//    return (n === 1) ? 1 : n * factorial(n - 1);
// }
// console.log( factorial(5));



// function fib(n) {
//     return (n === 1 || n === 2) ? 1 :  fib(n - 1) + fib(n - 2);
// }
// console.log( fib(3) );
// console.log( fib(7) );
// console.log( fib(77) );



// function inBetween(a, b) {
//    function f(x) {
//        return a <= x && x <= b;
//    }
//     return f;
// }
//
// function inArray(arr) {
//     function j(x) {
//         return  arr.includes(x);
//     }
//     return j;
// }
//
//
// let arr = [1, 2, 3, 4, 5, 6, 7];
// console.log( arr.filter(inBetween(3, 6)) ); // 3,4,5,6
// console.log( arr.filter(inArray([1, 2, 10])) ); // 1,2






// function byField(str) {
//     // if (str === 'name') {
//     //     function sortName(a, b) {
//     //        return a.name.localeCompare(b.name) ;
//     //     }
//     //     return sortName;
//     // }else if (str === 'age') {
//     //     function sortAge(a, b) {
//     //         return a.age - b.age ;
//     //     }
//     //     return sortAge;
//     // }
//
//     return (a, b) => (typeof a[str] === 'string')
//         ? a[str].localeCompare(b[str])
//         : a[str] - b[str];
// }
//
// let users = [
//     { name: "Иван", age: 20, surname: "Иванов" },
//     { name: "Пётр", age: 18, surname: "Петров" },
//     { name: "Анна", age: 19, surname: "Каренина" }
// ];
//
// console.log( users.sort(byField('name')) );
// console.log( users.sort(byField('age')) );




// function makeArmy() {
//     let shooters = [];
//
//     // let i = 0;
//     // while (i < 10) {
//     //     let j = i;
//     //     let shooter = function() { // функция shooter
//     //         console.log( j ); // должна выводить порядковый номер
//     //     };
//     //    shooters.push(shooter) ; // и добавлять стрелка в массив
//     //     i++;
//     // }
//
//     for (let i = 0; i < 10; i++) {
//         let shooter = function() { // функция shooter
//             console.log(i); // должна выводить порядковый номер
//         };
//         shooters.push(shooter);
//     }
//
//     // ...а в конце вернуть массив из всех стрелков
//     return shooters;
// }
//
// let army = makeArmy();
//
// // все стрелки выводят 10 вместо их порядковых номеров (0, 1, 2, 3...)
// army[0](); // 10 от стрелка с порядковым номером 0
// army[1](); // 10 от стрелка с порядковым номером 1
// army[2](); // 10 ...и т.д.





// Измените код makeCounter() так, чтобы счётчик мог уменьшать и устанавливать значение
// function makeCounter() {
//     let count = 0;
//
//     function counter() {
//       return count++;
//     }
//     counter.set = function (value) {
//         count = value;
//     };
//     counter.decrease = function () {
//         count--;
//     }
//     return counter;
//
// }
//
// let counter = makeCounter();
//
// console.log( counter() ); // 0
// console.log( counter() ); // 1
//
// counter.set(10); // установить новое значение счётчика
//
// console.log( counter() ); // 10
//
// counter.decrease(); // уменьшить значение счётчика на 1
//
// console.log( counter() ); // 10 (вместо 11)



// function sum(numbers) {
//     let total = numbers
//     function inner(number) {
//         total += number;
//         return inner;
//     }
//
//     inner.valueOf = function () {
//         return total;
//     };
//     return inner;
// }
// console.log( sum(1)(2) == 3); // 1 + 2
// console.log(sum(1)(2)(3) == 6); // 1 + 2 + 3
// console.log(sum(5)(-1)(2) == 6);
// console.log(sum(6)(-1)(-2)(-3) == 0);
// console.log(sum(0)(1)(2)(3)(4)(5) == 15);




// function printNumbers(from, to) {
//     let current = from;
//     let timerId = setInterval(() => {
//         console.log(current);
//         if (current === to) {
//             clearInterval(timerId);
//         }
//         current++
//     },1000)
//
// }
// printNumbers(5, 7)


// function printNumbers(from, to) {
//     let current = from;
//     setTimeout(function run (){
//         console.log(current);
//         if (current < to) {
//             setTimeout(run, 1000);
//         }
//         current++;
//     },)
// }
// printNumbers(5, 7)





// // сделаем worker.slow кеширующим
// let worker = {
//     someMethod() {
//         return 1;
//     },
//
//     slow(x) {
//         // здесь может быть страшно тяжёлая задача для процессора
//         console.log("Called with " + x);
//         return x * this.someMethod(); // (*)
//     }
// };
//
// // тот же код, что и выше
// function cachingDecorator(func) {
//     let cache = new Map();
//     return function(x) {
//         if (cache.has(x)) {
//             return cache.get(x);
//         }
//         let result = func.call(this, x); // (**)
//         cache.set(x, result);
//         return result;
//     };
// }
//
// console.log( worker.slow(1) ); // оригинальный метод работает
//
// worker.slow = cachingDecorator(worker.slow); // теперь сделаем его кеширующим
//
// console.log( worker.slow(2) ); // Ой! Ошибка: не удаётся прочитать свойство 'someMethod' из 'undefined'




// function logArgs(fn) {
//    return function (...args) {
//        console.log(args);
//        return fn.apply(this, args);
//    }
// }
// function multiply(a, b) {
//     return a * b;
// }
// const loggedMultiply = logArgs(multiply);
// loggedMultiply(2, 3); // В консоли должно появиться: Аргументы: 2, 3






// const user = { name: "Игорь" };
// function greet(greeting) {
//     console.log(`${greeting}, ${this.name}!`);
// }
// greet.call(user, 'Привет');



// function measureTime (fn) {
//     return function (...args) {
//         const start = performance.now();
//         const result = fn.apply(this, args);
//         const end = performance.now();
//         console.log(`Время выполнения: ${end - start} мс.`);
//         console.log(result);
//     }
// }
//
// function sumUpTo(n) {
//     let sum = 0;
//     for(let i = 1; i <= n; i++) sum += i;
//     return sum;
// }
//
// const timedSum = measureTime(sumUpTo);
//
// timedSum(1000000); // В консоли: Время выполнения: ... мс







// function logAndTime(fn) {
//     return function (...args) {
//         const start = performance.now();
//         const result = fn.apply(this, args);
//         const end = performance.now();
//         console.log(`Время выполнения: ${end - start} мс.`);
//         console.log(result);
//     }
// }
//
// const user = {
//     name: "Анна",
//     age: 25,
// };
//
// function introduce(greeting, city) {
//     console.log(`${greeting}, меня зовут ${this.name}, мне ${this.age} лет, я из ${city}.`);
//     return `${this.name}-${city}`;
// }
//
// const decoratedIntroduce = logAndTime(introduce);
// decoratedIntroduce.call(user, 'Привет', 'Москва');




// function spy(func) {
//      function wrapper (...args) {
//         wrapper.calls.push([...args]);
//         return func.apply(this, args);
//     }
//     wrapper.calls = [];
//      return wrapper;
// }
//
// function work(a, b) {
//     console.log( a + b ); // произвольная функция или метод
// }
//
// work = spy(work);
//
// work(1, 2); // 3
// work(4, 5); // 9
//
// for (let args of work.calls) {
//     console.log( 'call:' + args.join() ); // "call:1,2", "call:4,5"
// }






// function delay(f, ms) {
//     return function (...args) {
//         setTimeout(() => f.apply(this, args), ms)
//     }
// }
//
// function f(x) {
//     console.log(x);
// }
//
// // создаём обёртки
// let f1000 = delay(f, 2000);
// let f1500 = delay(f, 3500);
//
// f1000("test"); // показывает "test" после 1000 мс
// f1500("test"); // показывает "test" после 1500 мс




// function throttle(func, ms) {
//
//     let isThrottled = false,
//         savedArgs,
//         savedThis;
//
//     function wrapper() {
//
//         if (isThrottled) { // (2)
//             savedArgs = arguments;
//             savedThis = this;
//             return;
//         }
//
//         func.apply(this, arguments); // (1)
//
//         isThrottled = true;
//
//         setTimeout(function() {
//             isThrottled = false; // (3)
//             if (savedArgs) {
//                 wrapper.apply(savedThis, savedArgs);
//                 savedArgs = savedThis = null;
//             }
//         }, ms);
//     }
//     return wrapper;
// }
//
// function f(a) {
//     console.log(a)
// }
//
// // f1000 передаёт вызовы f максимум раз в 1000 мс
// let f1000 = throttle(f, 1000);
//
// f1000(1); // показывает 1
// f1000(2); // (ограничение, 1000 мс ещё нет)
// f1000(3); // (ограничение, 1000 мс ещё нет)





// function askPassword(ok, fail) {
//     let password = 'rockstar';
//     if (password == "rockstar") ok();
//     else fail();
// }
//
// let user = {
//     name: 'John',
//
//     login(result) {
//         console.log( this.name + (result ? ' logged in' : ' failed to log in') );
//     }
// };
//
// // askPassword(user.login.bind(user, true), user.login.bind(user, false)); // ?
// askPassword(() => user.login(true), () => user.login(false)); // ?




// let user = {
//     name: "John",
//     surname: "Smith",
//
//     get fullName() {
//         return `${this.name} ${this.surname}`;
//     },
//
//     set fullName(value) {
//         [this.name, this.surname] =value;
//     }
// };
//
// // set fullName запустится с данным значением
// user.fullName = ['Alice','Cooper'];
//
// console.log(user.name); // Alice
// console.log(user.surname); // Cooper
// console.log(user.fullName);


// class User {
//     constructor(age) {
//         this._age = age;
//     };
//
//     get age() {
//         return this._age;
//     };
//
//
//     set age(age) {
//         if (age < 0) {
//             console.log('Отрицательного возраста не существует');
//             return;
//         }
//         this._age = age;
//     };
//
// }
// const vova = new User(26);
// console.log(vova.age);
// vova.age = 30;
// console.log(vova.age);
// vova.age = -1;
// console.log(vova.age);



// class Rectangle {
//     constructor(width, height) {
//         this._width = Number(width);
//         this._height = Number(height);
//     }
//
//     get width () {return `Ширина: ${this._width}`;}
//     set width (value) {
//         this._width = Number(value);
//     }
//
//     get height () {return `Высота: ${this._height}`;}
//     set height (value) {
//         this._height = Number(value);
//     }
//
//     get area () {
//         if (this._width < 0 || this._height < 0) {
//             return 'Площадь не может быть отрицательным числом';
//         }
//         return `Площадь: ${this._width * this._height}`;
//     }
//
//     get perimeter () {
//         if (this._width < 0 || this._height < 0) {
//             return 'Периметр не может быть отрицательным числом';
//         }
//         return `Периметр: ${2 * (this._width + this._height)}`;
//     }
// }
//
// const figure = new Rectangle(-3, 5);
// console.log(figure.area);
// console.log(figure.perimeter);
// console.log(figure.width);
// console.log(figure.height);
// figure.width = 2;
// console.log(figure.area);
// console.log(figure.perimeter);
// figure.width = -1;
// console.log(figure.area);
// console.log(figure.perimeter);
// figure.height = 3
// console.log(figure.area);
// console.log(figure.perimeter);
// figure.width = -10;
// figure.height = -12;
// console.log(figure.area);
// console.log(figure.perimeter);
// console.log(figure.width);
// console.log(figure.height);
// figure.width = 10;
// figure.height = 5;
// console.log(figure.width);
// console.log(figure.height);
// console.log(figure.area);
// console.log(figure.perimeter);


// class BankAccount {
//     constructor(balance = 0, accountNumber) {
//         this._balance = balance;
//         this._accountNumber = accountNumber;
//     }
//
//     get balance () {
//         return `Ваш баланс: ${this._balance}`;
//     }
//     get accountNumber () {
//         return `Номер лицевого счета: ${this._accountNumber}`;
//     }
//
//     set replenishment (value) {
//         this._balance += value;
//     }
//
//     set removal (value) {
//         try {
//             if (this._balance < value) {
//                 throw new Error(`Недостаточно средств для снятия. Ваш баланс ${this._balance}`)
//             } else {
//                 this._balance -= value;
//             }
//         }catch (err) {
//         console.log(err.message);
//         }
//     }
// }
// const vany = new BankAccount(5, 28268299);
// console.log(vany.balance);
// console.log(vany.accountNumber);
// vany.replenishment = 5000;
// console.log(vany.balance);
// vany.removal = 2000;
// console.log(vany.balance);
// vany.removal = 5000;
// vany.replenishment = 5000;
// console.log(vany.balance);
// vany.removal = 10000;


// let user = {
//     name: "John",
//     surname: "Smith",
//
//     set fullName(value) {
//         [this.name, this.surname] = value.split(" ");
//     },
//
//     get fullName() {
//         return `${this.name} ${this.surname}`;
//     }
// };
//
// let admin = {
//     __proto__: user,
//     isAdmin: true
// };
// console.log(user.fullName);
// console.log(admin.fullName); // John Smith (*)
//
// // срабатывает сеттер!
// admin.fullName = "Alice Cooper"; // (**)
// console.log(admin.name); // Alice
// console.log(admin.surname); // Cooper
// console.log(user.fullName);
// console.log(user.name);
// console.log(user.surname);
// user.fullName = 'Vany Van';
// console.log(user.fullName);
// console.log(user.name);
// console.log(user.surname);
// console.log(admin.fullName);



// // методы animal
// let animal = {
//     walk() {
//         if (!this.isSleeping) {
//             console.log(`I walk`);
//         }
//     },
//     sleep() {
//         this.isSleeping = true;
//     }
// };
//
// let rabbit = {
//     name: "White Rabbit",
//     __proto__: animal
// };
//
// // модифицирует rabbit.isSleeping
//
// animal.sleep();
// rabbit.isSleeping = false;
// console.log(rabbit.isSleeping); // true
// console.log(animal.isSleeping); // undefined (нет такого свойства в прототипе)
// rabbit.walk();




// let animal = {
//     eats: true,
//     hp: 500,
// };
//
// let rabbit = {
//     jumps: true,
//     eys: 'blue',
//     __proto__: animal
// };
//
// for(let prop in rabbit) {
//     let isOwn = rabbit.hasOwnProperty(prop);
//
//     if (isOwn) {
//         console.log(`Our: ${prop}`); // Our: jumps
//     } else {
//         console.log(`Inherited: ${prop}`); // Inherited: eats
//     }
// }


// let hamster = {
//     stomach: [],
//
//     eat(food) {
//         this.stomach.push(food);
//     }
// };
//
// let speedy = {
//     __proto__: hamster,
//     stomach: [],
// };
//
// let lazy = {
//     __proto__: hamster,
//     stomach: [],
//
// };
//
// // Этот хомяк нашёл еду
// speedy.eat("apple");
// lazy.eat('banana');
// console.log( speedy.stomach ); // apple
// console.log( lazy.stomach ); // banana
// lazy.eat('banana');
// console.log( speedy.stomach ); // apple
// // У этого хомяка тоже есть еда. Почему? Исправьте
// console.log( lazy.stomach ); // banana, banana




// let head = {
//     glasses: 1,
// };
//
// let table = {
//     pen: 3,
//     __proto__: head,
// };
//
// let bed = {
//     sheet: 1,
//     pillow: 2,
//     __proto__: table,
// };
//
// let pockets = {
//     money: 2000,
//     __proto__: bed,
// };
//
// console.log(pockets.pen);
// console.log(bed.glasses);


// function Rabbit() {}
// Rabbit.prototype = {
//     eats: true
// };
//
// let rabbit = new Rabbit();
//
// Rabbit.prototype = {};
// let rabbit1 = new Rabbit();
// console.log( rabbit.eats ); // ?
// console.log( rabbit1.eats ); // ?




// function f(a, b) {
//     console.log( a + b );
// }
// Function.prototype.defer = function (ms) {
//     const f = this;
//     return function (...args) {
//         setTimeout(() => f.apply(this, args), ms);
//    }
// }
// f.defer(1000)(1, 2); // выведет 3 через 1 секунду.


// let animal = {
//     eats: true,
//     ahh: 'ff',
// };
//
// let line = {
//     size: 44,
//     height: 125,
// }
//
// // создаём новый объект с прототипом animal
// let rabbit = Object.create(animal, {
//     jumps: {
//         value: true
//     }
// });
// rabbit.age = 22;
//
// console.log(rabbit.eats); // true
// console.log(rabbit)
//
// console.log(Object.getPrototypeOf(rabbit)); // получаем прототип объекта rabbit
//
// Object.setPrototypeOf(rabbit, {}); // заменяем прототип объекта rabbit на {}
// console.log(rabbit)
// console.log(Object.getPrototypeOf(rabbit));
// Object.setPrototypeOf(rabbit, animal);
// console.log(Object.getPrototypeOf(rabbit));
// Object.setPrototypeOf(rabbit, line);
// console.log(Object.getPrototypeOf(rabbit));



// let dictionary = Object.create(null, {
//     toString: {
//         value() {
//             return Object.keys(this).join();
//         }
//     }
// });
//
// // Object.defineProperty(dictionary, 'toString', {
// //     enumerable: false,
// // })
//
// // добавляем немного данных
// dictionary.apple = "Apple";
// dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ
//
// // только apple и __proto__ выведены в цикле
// for(let key in dictionary) {
//     console.log(key); // "apple", затем "__proto__"
// }
//
// // ваш метод toString в действии
// console.log(dictionary); // "apple,__proto__"




//
// const animal = {
//     speak() {
//         console.log(`${this.name}: я говорю`);
//     }
// }
// const dog = Object.create(animal);
// dog.name = 'Bob';
// dog.speak();
// console.log(Object.getPrototypeOf(dog) === animal);



// const A = {
//     x: 1
// }
//
// const B = Object.create(A);
// B.y = 1;
// B.j = 3;
// console.log(Object.keys(B))



// const dict = Object.create(null);
// dict['name'] = 'Bob';
// dict.age = 22;
//
// function has(dict, key) {
//    if (Object.keys(dict).includes(key)) {
//       return true;
//    } else return false;
// }
// console.log( has(dict, 'agfe' ))


// const proto = {
//    inc() {
//       this.value++;
//    }
// }
//
// o = Object.create(proto, {
//    value: {
//       value: 0,
//       writable: true
//    }
// })
//
// console.log(o.value)
// o.inc()
// console.log(o.value)
// o.inc()
// console.log(o.value)


// const obj = {};
// obj.a = 10;
//
// Object.setPrototypeOf(obj, { b: 20 });
// for (let key in obj) {
//     console.log(key)
// }


// const proto = {
//     hiddenMethod() {
//     }
// }
//
// Object.defineProperty(proto, 'hiddenMethod', {
//     enumerable: false
// })
//
// obj = Object.create(proto);
// obj.x = 1;
// obj.y = 2;
//
// for (let key in obj) {
//     console.log(key)
// }
//
// console.log(Object.keys(obj));
// console.log(Object.getOwnPropertyNames(proto));


// const personProto = {
//     greet() {
//         console.log(`Привет я ${this.name}`);
//     },
//     rename(newName) {
//         this.name = newName;
//     }
// }
//
// function createPerson(name) {
//     const user = Object.create(personProto);
//     user.name = name;
//     return user;
// }
//
// const p1 = createPerson("Аня");
// const p2 = createPerson("Вася");
//
// p1.greet(); // "Привет, я Аня"
// p2.greet(); // "Привет, я Вася"
// console.log(Object.getPrototypeOf(p1) === Object.getPrototypeOf(p2)); // true
// p1.rename('Вова');
// p1.greet();


// class Clock {
//     constructor({ template }) {
//         this.template = template;
//     }
//
//     render() {
//         let date = new Date();
//
//         let hours = date.getHours();
//         if (hours < 10) hours = '0' + hours;
//
//         let mins = date.getMinutes();
//         if (mins < 10) mins = '0' + mins;
//
//         let secs = date.getSeconds();
//         if (secs < 10) secs = '0' + secs;
//
//         let output = this.template
//             .replace('h', hours)
//             .replace('m', mins)
//             .replace('s', secs);
//
//         console.log(output);
//     }
//
//     stop() {
//         clearInterval(this.timer);
//     }
//
//     start() {
//         this.render();
//         this.timer = setInterval(() => this.render(), 1000);
//     }
// }
//
//
// let clock = new Clock({template: 'h:m:s'});
// clock.start();



// class Animal {
//
//     constructor(name) {
//         this.name = name;
//     }
//
// }
//
// class Rabbit extends Animal {
//     constructor(name) {
//         super(name);
//         this.created = Date.now();
//     }
// }
//
// let rabbit = new Rabbit("Белый кролик"); // Error: this is not defined
// console.log(rabbit.name);


// class Article {
//     static publisher = "Илья Кантор";
// }
//
// console.log( Article.publisher ); // Илья Кантор


// class Rabbit extends Object {
//     constructor(name) {
//         super();
//         this.name = name;
//     }
// }
//
// let rabbit = new Rabbit("Кроль");
//
// console.log( rabbit.hasOwnProperty('name') ); // Ошибка


// const user = {
//     firstName: 'Anton',
//     showName() {
//         console.log(this.firstName)
//     }
// }
// const func = user.showName;
// user.showName = function () {
//     setTimeout(()=> user.showName, 2000)
// }
//
// user.showName()
//


// function debounceDecorator(fn, ms) {
//     let time;
//     let isFirstCall = true;
//     function rapper (...args) {
//         wrapper.allCount++;
//         if (isFirstCall) {
//             // fn.call(this, ...args);
//             wrapper.count++;
//             isFirstCall = false;
//             return
//         }
//
//         clearTimeout(time);
//         time = setTimeout(() => {
//             fn.call(this, ...args);
//             wrapper.count++;
//         }, ms)
//     }
//     wrapper.count = 0;
//     wrapper.allCount = 0;
//     return wrapper;
// }
//
// function sayHi (name) { console.log(`Привет ${name}`)}
//
// let debounceSay = debounceDecorator(sayHi, 1000);
// debounceSay('Fay');
// debounceSay('hh');
// debounceSay('Fkk');
// setTimeout(() => {
//     console.log(debounceSay.count);
//     console.log(debounceSay.allCount);
// }, 1500)







/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                //ДЕКОРАТОРЫ//



// function debounceDecorator (fn, ms) {
//     let timer = null;
//     wrapper.count = 0;
//     wrapper.allCount = 0;
//
//     // let firstCall = true;
//      function wrapper(...args) {
//          wrapper.allCount++;
//         if (timer === null) {
//             fn.apply(this, args);
//             wrapper.count++;
//             // firstCall = false;
//         }
//
//         clearTimeout(timer);
//         timer = setTimeout(() => {
//             fn.apply(this, args);
//             wrapper.count++;
//         }, ms)
//     }
//
//     return wrapper;
// }
//
// function seyHi (name) {console.log(`Привет ${name}`)}
//
// const debounceSey = debounceDecorator(seyHi, 1500);
//
// debounceSey('Ваня');
// debounceSey('Гена');
// debounceSey('Миша');
// debounceSey('Леня');
// debounceSey('Витя');
//
// setTimeout(() => console.log(debounceSey.count), 2000);
// console.log(debounceSey.allCount)


// function cachingDecoratorNew (fn) {
//     const cash = new Map();
//     const limit = 5;
//
//     return function (...args) {
//         const hash = JSON.stringify(args);
//
//         if (cash.has(hash)) {
//             console.log(`Берём из кэша для ${hash}`);
//             return `Из кеша: ${cash.get(hash)}`;
//         }
//
//         if (cash.size >= limit) {
//             let firstKey = cash.keys().next().value;
//             cash.delete(firstKey);
//             console.log(`🗑️ Удалили старый элемент из кэша: ${firstKey}`);
//         }
//
//         let result = fn.call(this, ...args);
//         cash.set(hash, result);
//         console.log("Вычисляем: " + result);
//         console.log(`✅ Добавили в кэш: ${hash} → ${result}`);
//         console.log('📦 Текущее содержимое кэша:', cash);
//         return "Вычисляем: " + result;
//     }
// }
//
// // function slow(x) {
// //     console.log(`Вычисляю для ${x}...`);
// //     return x * 2;
// // }
//
// function slow(a, b) {
//     console.log(`Вычисляю для ${a}, ${b}...`);
//     return a + b;
// }
//
// const cachedSlow = cachingDecoratorNew(slow);
//
// // cachedSlow(1);
// // cachedSlow(2);
// // cachedSlow(3);
// // cachedSlow(4);
// // cachedSlow(5);
// // cachedSlow(6); // здесь кэш уже переполнен → удалится первый элемент (1)
// // cachedSlow(2); // достаём из кэша
// // cachedSlow(1); // снова вычисляется, т.к. 1 был удалён
// // cachedSlow(2); // снова вычисляется, т.к. 2 был удалён
//
//
// cachedSlow(1, 2);
// cachedSlow(1, 2);
// cachedSlow(2, 3);
// cachedSlow(4, 5);
// cachedSlow(5, 6);
// cachedSlow(6 ,7);
// cachedSlow(7, 8); // здесь кэш уже переполнен → удалится первый элемент (1, 2)
// cachedSlow(2, 3); // достаём из кэша
// cachedSlow(1, 2); // снова вычисляется, т.к. 1 был удалён
// cachedSlow(2, 3); // снова вычисляется, т.к. 2 был удалён
