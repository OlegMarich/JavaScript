const questions = [
	{
		id: 5.1_1,
		question: "",
		checkFunction: function () {
			//alert(resultMessage)
			//document.write(`${}`)
		}
	},

	// ======================================
	{
		id: 5.2_1,
		question: "",
		checkFunction: function () {
			//alert(resultMessage)
			//document.write(`${}`)
		}
	},
	// {
	// 	id: 5.2_1,
	// 	question: "",
	// 	checkFunction: function () {
	// 	}
	// 	//alert(resultMessage)
	// 	//document.write(`${}`)
	// },
	//========================================
	{
		id: 5.3_1,
		question: "Створити функцію яка дозволяє визначити чи вказаний місяць (1-12) є літнім (6-8)",
		checkFunction: function () {
			function isSummerMonth(monthNumber) {
				return monthNumber >= 6 && monthNumber <= 8
			}

			let monthNumber = parseInt(prompt('Введіть місяць року (від 1 до 12)'))
			if (isSummerMonth(monthNumber)) document.write(`<div>Літо</div><div><a href="../components/lesson8.html">Повернутися до уроку</a></div>`)
			else document.write(`<div>Не літо</div><div><a href="../components/lesson8.html">Повернутися до уроку</a></div>`)
		}
	},
	{
		id: 5.3_2,
		question: "Створити функцію, яка дозволяє визначити чи є працівник пенсіонером(вік >=65)",
		checkFunction: function () {
			function isPensiner(age, pensionerAge = 65) {
				return age >= pensionerAge
			}
			let age = parseInt(prompt('Введіть вік працівника'))
			if (isPensiner(age)) document.write(`<div>Пенсіонер</div><div><a href="../components/lesson8.html">Повернутися до уроку</a></div>`)
			else document.write(`<div>Іди працюй</div><div><a href="../components/lesson8.html">Повернутися до уроку</a></div>`)
		}

		//document.write(`<div>${}</div><div><a href="../components/lesson8.html">Повернутися до уроку</a></div>`)
	},
	{
		id: 5.3_3,
		question: "Поступово генеруються R випадкових чисел у вказаному діапазоні. Знайти суму тільки парних.",
		checkFunction: function () {
			function getRandomNumber(minNumber, maxNumber) {
				// if (minNumber > maxNumber) {
				// 	let num = minNumber
				// 	minNumber = maxNumber
				// 	maxNumber = num
				// }
				return (
					minNumber + Math.floor(Math.random() * (maxNumber - minNumber + 1))
				)
			}
			function getEvenNumbersSum(numbersCount, minNumber, maxNumber) {
				let s = 0
				for (let i = 0; i < numbersCount; i++) {
					let num = getRandomNumber(minNumber, maxNumber)
					if (num % 2 === 0) s += num
				}
				return s
			}
			let sum = getEvenNumbersSum(30, 1, 100)
			//document.write(`
			//<div>${getRandomNumber(1, 100)}</div>
			//<div><a href="../components/lesson8.html">Повернутися до уроку</a></div>
			//`)
			document.write(`<div>${sum}</div><div><a href="../components/lesson8.html">Повернутися до уроку</a></div>`)
		}

	},
	{
		id: 5.3_4,
		question: "Задано деякий діапазон років. Вивести на екран К років починаючи з першого високосного року.",
		checkFunction: function () {
			function isLeapYear(year) {
				return (year % 4 === 0) && (year % 100 !== 0) || year % 400 === 0
			}
			function getFirstLeapYear(minYear, maxYear) {
				for (let year = minYear; year < maxYear; year++) {
					if(isLeapYear()) return year					
				}
				return -1
			}
			function printYearsFromRange(k, minYear, maxYear) {
				let startLeapYear = getFirstLeapYear(minYear, maxYear)
				if (startLeapYear === -1)
					do
				cument.write(`<div>('Нема високосного року у заданому діапазоні')</div><div><a href="../components/lesson8.html">Повернутися до уроку</a></div>`)
				else 
					for
			}
		}
		//document.write(`<div>${}</div><div><a href="../components/lesson8.html">Повернутися до уроку</a></div>`)
	},
	// {
	// 	id: 5.3_,
	// 	question: "",
	// 	checkFunction: function () {
	// 	}
	// 	//document.write(`<div>${}</div><div><a href="../components/lesson8.html">Повернутися до уроку</a></div>`)
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