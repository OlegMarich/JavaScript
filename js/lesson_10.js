const questions = [
	{
		id: 5.1_1,
		question: "",
		checkFunction: function () {
			//document.write(`<div>${}</div><div><a href="../components/lesson10.html">Повернутися до уроку</a></div>`)
		}
	},
	// ========================================================================================================================================
	{
		id: 5.2_1,
		question: "",
		checkFunction: function () {
			//document.write(`<div>${}</div><div><a href="../components/lesson10.html">Повернутися до уроку</a></div>`)
		}
	},
	// ========================================================================================================================================
	{
		id: 5.3_1,
		question: "Дано масив цін. вивести їх окремими div",
		checkFunction: function () {
			let prices = [100, 90, 5, 13, 17, 16, 18]
			prices.forEach(
				(element, index) => document.write(`<div>${index + 1} - ${element} грн.</div>`)
			)
			document.write(`<div><a href="../components/lesson10.html">Повернутися до уроку</a></div>`)
		}
	},
	{
		id: 5.3_2,
		question: "Задано масив імен праццівників. Сформувати масив. який складається з перших літкр імен",
		checkFunction: function () {
			let names = [
				"Марія", "Павло", "Анна", "Федір", "Григорій", "Юлія", "Зеновій", "Сергій", "Катерина", "Євгенія", "Дарина", "Богдан", "Ірина", "Тетяна", "Олена", "Назар", "Леонід", "Роксолана", "Уляна", "Христина", "Цезар", "Черемис", "Шарлотта", "Щастя", "Йосип", "Жанна", "Ярослав"
			];
			let firstLettersArray = names.map(name => name[0])
			document.write(`<div>${firstLettersArray.join(', ')}</div><div><a href="../components/lesson10.html">Повернутися до уроку</a></div>`)
			//document.write(`<div><a href="../components/lesson10.html">Повернутися до уроку</a></div>`)
		}
	},
	{
		id: 5.3_3,
		question: "Дано масив днів. Сформувати масив з відповідними назвами днів",
		checkFunction: function () {
			let daysNames = ["Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота", "Неділя"];
			let daysNumbersList = [3, 2, 1, 5, 4, 7]
			let daysNamesList = daysNumbersList.map(
				(dayNumber) => daysNames[dayNumber - 1]
			)
			document.write(`<div>${daysNamesList.join(', ')}</div><div><a href="../components/lesson10.html">Повернутися до уроку</a></div>`)
		}
	},
	{
		id: 5.3_4,
		question: "Реєструвати імена користувачів (вводити і зберігати в масиві).",
		checkFunction: function () {
			let users = []
			for (let i = 0; i < 3; i++) {
				let name = prompt('User name')
				users.push(name)
			}
			while (users.length > 0) {
				let name = users.pop()
				document.write(`<div>${name}</div>`)
			}
			document.write(`<div><a href="../components/lesson10.html">Повернутися до уроку</a></div>`)
		}
	},
	{
		id: 5.3_5,
		question: "Дано упорядкований за зростанням масив цін. Сформувати новий масив, Сформувати новий масив, який складається тільки з різних значень",
		checkFunction: function () {
			let prices = [67, 89, 89, 89, 89, 89, 90, 90, 122, 122, 122, 900]

			let uniquePrices = []

			for (let i = 0; i < prices.length; i++) {
				if (i === 0 || prices[i] !== prices[i - 1])
					uniquePrices.push(prices[i])
			}
			//document.write(`<div>${}</div>`)
			document.write(`<div>${uniquePrices}</div><div><a href="../components/lesson10.html">Повернутися до уроку</a></div>`)
		}
	},
	{
		id: 5.3_6,
		question: "Дано масив чисел, що містять нулі. Створити масив, що складається з елементів між цими нулями",
		checkFunction: function () {
			let arr = [23, 1, 4, 0, 4, 6, 9, 0, 2, 12, 75]

			let firstZeroIndex = arr.indexOf(0)
			let secondZeroIndex = arr.lastIndexOf(0)
			let resArray = arr.slice(firstZeroIndex + 1, secondZeroIndex)

			document.write(`<div>${resArray}</div><div><a href="../components/lesson10.html">Повернутися до уроку</a></div>`)
		}
	},
	{
		id: 5.3_7,
		question: "Дано масив чисел, що містять нулі. Створити масив, що складається з елементів між цими нулями",
		checkFunction: function () {
			let arr = [23, 1, 4, 0, 4, 6, 9, 0, 2, 12, 0, 2, 11, 8, 4, 53]

			let firstZeroIndex = arr.indexOf(0)
			let secondZeroIndex = arr.indexOf(0, firstZeroIndex + 1)

			let resArray = arr.slice(firstZeroIndex + 1, secondZeroIndex)
			document.write(`<div>${resArray}</div><div><a href="../components/lesson10.html">Повернутися до уроку</a></div>`)
		}
	},
	{
		id: 5.3_8,
		question: "Дано масив з віком відвідувачів.	Визначити індекс першого пенсіонера (>=65)",
		checkFunction: function () {
			let ages = [21, 13, 45, 68, 23, 74, 66, 9, 25, 56, 69]
			let firstPensionerIndex = ages.findIndex((age) => age >= 65)
			document.write(`<div>${firstPensionerIndex}</div><div><a href="../components/lesson10.html">Повернутися до уроку</a></div>`)
		}
	},
	{
		id: 5.3_9,
		question: "Дано масив оцінок двійочника. Визначити першу поганну оцінку (<4)",
		checkFunction: function () {
			let scores = [8, 9, 12, 4, 7, 1, 10, 8, 9, 2]
			let bedScore = scores.find(score => score < 4)
			//let bedScore = scores.findLast(score => score < 4)
			document.write(`<div>${bedScore}</div><div><a href="../components/lesson10.html">Повернутися до уроку</a></div>`)
		}
	},
		{
		id: 5.3_11,
		question: "Дано масив років відвідувачів басейну. Визначити вік останнього пенсіонера (вік більше або рівно 65 років)",
		checkFunction: function () {
			let ages = [21, 13, 45, 68, 23, 74, 66, 9, 25, 56, 69]
			let lastPensionerAge = ages.findLast((age) => age >= 65)
			document.write(`<div>${lastPensionerAge}</div><div><a href="../components/lesson10.html">Повернутися до уроку</a></div>`)
		}
	},
	// {
	// 	id: 5.2_1,
	// 	question: "",
	// 	checkFunction: function () {
	// 		//document.write(`<div>${}</div><div><a href="../components/lesson10.html">Повернутися до уроку</a></div>`)
	// 	}
	// },
];

function showQuestion(questionId) {
	const questionObj = questions.find(question => question.id === questionId);
	if (questionObj) {
		questionObj.checkFunction();
	} else {
		document.getElementById('question-content').innerText = "Це питання відсутнє";
	}
}