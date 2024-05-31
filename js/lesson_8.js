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
				return (year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)
			}
			function getFirstLeapYear(minYear, maxYear) {
				for (let year = minYear; year < maxYear; year++) {
					if (isLeapYear(year)) return year
				}
				return -1
			}
			function printYearsFromRange(k, minYear, maxYear) {
				let startLeapYear = getFirstLeapYear(minYear, maxYear)
				if (startLeapYear === -1) {
					document.write(`<div>Нема високосного року у заданому діапазоні</div><div><a href="../components/lesson8.html">Повернутися до уроку</a></div>`)
				}
				else {
					if (startLeapYear + k <= maxYear) {
						for (let y = startLeapYear; y <= startLeapYear + k; y++) {
							document.write(`<div>${y}<br></div>`)
						}
						document.write(`<div><a href="../components/lesson8.html">Повернутися до уроку</a></div>`)
					}
					else document.write(`<div>Немає стільки років після пешого високосного</div><div><a href="../components/lesson8.html">Повернутися до уроку</a></div>`)

				}
			}
			printYearsFromRange(10, 2000, 2024)
		}
		//document.write(`<div>${}</div><div><a href="../components/lesson8.html">Повернутися до уроку</a></div>`)
	},
	{
		id: 5.3_5,
		question: "Дано вартість товарів, яку купив користувач. Знайти загальну вартість усіх товарів",
		checkFunction: function () {
			let prices = [2, 1, 4, 5, 12, 23, 45, 213, 12]
			let sum = 0

			for (let i = 0; i < prices.length; i++) {
				sum += prices[i]
			}
			document.write(`<div>${sum}</div><div><a href="../components/lesson8.html">Повернутися до уроку</a></div>`)
		}
	},
	{
		id: 5.3_6,
		question: "Дано розміри доходу магазину за кожен місяць протягом року. Знайти: ",
		checkFunction: function () {
			let profits = [2, 1, 4, 5, 12, 23, 45, 213, 12, 45, 213, 62]
			//1) Загальний дохід за рік (1-12)
			let year = 0
			for (let month = 0; month < profits.length; month++) {
				year += profits[month]
			}
			//2) Загальний дохід за 1-ше півріччя (1-6)
			let firstHalfOfTheYear = 0
			for (let month = 0; month <= 5; month++) {
				firstHalfOfTheYear += profits[month]
			}
			//3) Загальний дохід за 2-ге півріччя
			let secondHalfOfTheYear = 0
			for (let month = 6; month <= 11; month++) {
				secondHalfOfTheYear += profits[month]
			}
			//4) Загальний дохід за 2-гий квартал(4-6)
			let secondQuarter = 0
			for (let month = 3; month <= 5; month++) {
				secondQuarter += profits[month]
			}
			//5) Загальний дохід за 2-гий і 3-тій квартал(4-9)
			let secondAndThirdQuarter = 0
			for (let month = 3; month <= 8; month++) {
				secondAndThirdQuarter += profits[month];
			}
			document.write(`
			<ul>
			<h1>Загальний дохід:</h1>
				<li>За рік: ${year} </li>	
				<li>За 1-ше півріччя: ${firstHalfOfTheYear}</li>	
				<li>За 2-ге півріччя: ${secondHalfOfTheYear}</li>	
				<li>За 2-гий квартал: ${secondQuarter}</li>	
				<li>За 2-гий і 3-тій квартал: ${secondAndThirdQuarter}</li>
			</ul>

			<div><a href="../components/lesson8.html">Повернутися до уроку</a></div>`)
		}
	},
	{
		id: 5.3_7,
		question: "Ввести чотири загадані користувачем числа",
		checkFunction: function () {
			//const usersNumbersLength = 4
			// let usersNumbers = []
			// for (let i = 1; i <= usersNumbersLength; i++) {
			// 	let num = parseInt(prompt(`Введіть загадане число під номером ${i}`))
			// 	usersNumbers.push(num)
			// }
			function inputUsersNumbers(usersNumbersLength) {
				let arr = []
				for (let i = 0; i < usersNumbersLength; i++) {
					let num = parseInt(prompt(`Введіть загадане число під номером ${i + 1}`))
					arr.push(num)
				}
				return arr
			}
			let usersNumbersLength = parseInt(prompt('Скільки Ви хочете ввести чисел?'))
			let usersNumbers = inputUsersNumbers(usersNumbersLength)
			document.write(`<div>${usersNumbers}</div><div><a href="../components/lesson8.html">Повернутися до уроку</a></div>`)
		}
	},
	{
		id: 5.3_8,
		question: "Зробити функцію яка буде генерувати числа у вказаному діапазоні",
		checkFunction: function () {
			function generateNumbers(userNumbersLenght, minNumber, maxNumber) {
				let arr = []
				for (let i = 0; i < userNumbersLenght; i++) {
					let num = minNumber + Math.floor(Math.random() * (maxNumber - minNumber + 1))
					arr.push(num)
				}
				return arr
			}

			let userNumbersLenght = parseInt(prompt('Скільки бажаєте ввести чисел'))
			let minNumber = parseInt(prompt('Введіть мінімальне число'))
			let maxNumber = parseInt(prompt('Введіть максимальне число'))
			let userNumbers = generateNumbers(userNumbersLenght, minNumber, maxNumber)
			document.write(`<div>${userNumbers}</div><div><a href="../components/lesson8.html">Повернутися до уроку</a></div>`)
		}
	},
	{
		id: 5.3_9,
		question: "Створити функцію, яка приймає рік виходу на пенсію та довільну кількість років працівників. Визначти кількість пенсіонерів",
		checkFunction: function () {
			function getPensionersNumber(pensionAge, ...workersAges) {
				let c = 0
				for (let i = 0; i < workersAges.length; i++) {
					if(workersAges[i] >= pensionAge)
						c++
				}
				return c
			}
			let count = getPensionersNumber(65, 71, 82, 52, 24, 89, 67)
			document.write(`<div>Кількість пенсіноерів: ${count}</div><div><a href="../components/lesson8.html">Повернутися до уроку</a></div>`)
		}
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