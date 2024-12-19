const questions = [
	{
		id: 5.1_1,
		question: "",
		checkFunction: function () {
			//document.write(`<div>${}</div><div><a href="../components/lesson9.html">Повернутися до уроку</a></div>`)
		}
	},
	// ========================================================================================================================================
	{
		id: 5.2_1,
		question: "",
		checkFunction: function () {
			//document.write(`<div>${}</div><div><a href="../components/lesson9.html">Повернутися до уроку</a></div>`)
		}
	},
	// ========================================================================================================================================
	{
		id: 5.3_1,
		question: "З клавіатури вводяться числа до тих пір, поки послідовність є зростаючою або спадною",
		checkFunction: function () {
			function getSeq() {
				let fisrtNumber = parseFloat(prompt("Введіть перше число")) //перше число
				let secondNumber = parseFloat(prompt("Введіть друге число")) //друге число
				let initalDiff = secondNumber - fisrtNumber
				let arr = [fisrtNumber, secondNumber]
				do {
					let num = parseFloat(prompt("Введіть число")) //наступне число, яке вводиться до того часу, поки відповідає умові
					let newDiff = num - arr.at(-1)// .att(-1) .length(-1) пошук останнього елементу в масиві
					if (newDiff * initalDiff > 0) {
						arr.push(num)
					}
					else break
				} while (true)
				return arr
			}
			let seq = getSeq()
			document.write(`<div>${seq.join(', ')}</div>`)
			document.write(`<div><a href="../components/lesson11.html">Повернутися до уроку</a></div>`)
		}
	},
	{
		id: 5.3_2,
		question: "Знайти суму числа, що знаходиться між першою цифрою 7 і останньою цифрою 7 (у числі є всього дві цифри 7б наприклад: 2679328712)",
		checkFunction: function () {
			//щоб знайти останню цифру, необхідно застосувати num%10 num = 429 num%10 = 9
			//щоб відкинути останню цифру: num = 429, num = Math.floor(num / 10) 
			function getSumBetween7(num) {
				//знаходимо першу 7(відкидаємо останні цифри)
				let digit
				do {
					digit = num % 10
					num = Math.floor(num / 10)
				} while (digit !== 7)

				let sum = 0
				do {
					digit = num % 10
					num = Math.floor(num / 10)
					if (digit !== 7) sum += digit
				} while (digit !== 7)
				return sum
			}

			let sum = getSumBetween7(2679328712)
			document.write(`<div>Додаток чисел між 7: ${sum}</div>`)
			//document.write(`<div><a href="../components/lesson11.html">Повернутися до уроку</a></div>`)
		}
	},
	{
		id: 5.3_3,
		question: "Комп'ютер загадує два випадкових числа від 1 до 10. Вгадати обидва числа шляхом введення можливих варіантів. В кінці вивести кількість спроб користувача.",
		checkFunction: function () {
			const firstNumber = 1 + Math.floor(Math.random() * 10)
			const secondNumber = 1 + Math.floor(Math.random() * 10)

			let firstNumberFound = false
			let secondNumberFound = false
			let count = 0

			do {
				let num = parseInt(prompt('Введіть Ваше число'))
				if (num === firstNumber) {
					firstNumberFound = true
				} else if (num === secondNumber) {
					secondNumberFound = true
				}
				count++
			} while (!firstNumberFound || !secondNumberFound);

			document.write(`<div>Перше число: ${firstNumber}, друге число: ${secondNumber}</div>`);
			document.write(`<div>Кількість спроб користувача: ${count}</div>`);
			document.write(`<div><a href="../components/lesson11.html">Повернутися до уроку</a></div>`);
		}
	},
	{
		id: 5.3_4,
		question: "Створити функцію, яка для 3 заданих чисел знаходить одночасно декілька результатів: кількість парних, кількість додатних, кількість більших за 100.",
		checkFunction: function () {
			function getEvenNumber(n1, n2, n3) {
				let count = 0
				if (n1 % 2 === 0) count++
				if (n2 % 2 === 0) count++
				if (n3 % 2 === 0) count++
				return count
			}

			function getPositiveNumber() {
				let count = 0
				for (let i = 0; i < arguments.length; i++) {
					if (arguments[i] > 0)
						count++
				}
				return count
			}

			function getNumberGr100(...arr) {
				//let count = 0
				// for (let i = 0; i < arr.length; i++) {
				// 	if (arr[i] % 2 > 100)
				// 		count++
				// }
				//return count

				return arr.reduce(
					(prevCount, el) => el > 100 ? prevCount + 1 : prevCount,
					0
				)
			}

			function getResult(n1, n2, n3) {
				let evenNumber = getEvenNumber(n1, n2, n3)
				let positveNumber = getPositiveNumber(n1, n2, n3)
				let numberGr100 = getNumberGr100(n1, n2, n3)
				return [evenNumber, positveNumber, numberGr100]
			}
			//let arr = getResult(2, 4, 101)
			//let evenNumber = arr[0]
			//let positiveNumber = arr[1]
			//let numberGr100 = arr[2]
			const [evenNumber, positiveNumber, numberGr100] = getResult(2, 4, 101) //швидке рішення

			document.write(`<div>Парне число: ${evenNumber}</div>`)
			document.write(`<div>Число більше за 0: ${positiveNumber}</div>`)
			document.write(`<div>Число більше за 100: ${numberGr100}</div>`)
			document.write(`<div><a href="../components/lesson11.html">Повернутися до уроку</a></div>`)
		}
	},
	{
		id: 5.3_5,
		question: "Дано історію цін на цінні папери за деякий період (згенерувати від 1 до 10000).",
		checkFunction: function () {
			function generateArray(length, min, max) {
				let arr = []
				for (let i = 0; i < length; i++) {
					let num = min + Math.floor(Math.random() * (max - min + 1))
					arr.push(num)
				}
				return arr
			}
			//Сформувати новий масив, у якому є тільки ті, що більші за 1000 грн.
			let prices = generateArray(20, 1, 10000)
			// let pricesGr1000 = prices.reduce(
			// 	(prevArr, el, index) => (el > 1000 ? [...prevArr, index + 1] : prevArr),
			// 	[]
			// )

			let pricesGr1000 = prices.reduce((prevArr, el, index) => {
				if (el > 1000) prevArr.push(index)
				return prevArr
			}, [])

			//Сформувати список з тих цін, які більші за попередні значення
			let grThanPrev = prices.filter(
				(el, index, baseArr) => index > 0 && baseArr[index - 1] < el
			)
			//Знайти першу ціну, що більше за 1000
			let firstNumGr1000 = prices.find(price => price > 1000)
			if (firstNumGr1000)
				document.write(`<div>Перша ціна більша за 1000: ${firstNumGr1000}</div>`)
			else
				document.write(`<div>Нема такої ціни</div>`)
			document.write(`<div>Вартість цінних паперів: ${prices.join(', ')}</div>`)
			document.write(`<div>Ціни більші за 1000: ${pricesGr1000.join(', ')}</div>`)
			document.write(`<div>Ціни більші за попередні значення: ${grThanPrev.join(', ')}</div>`)
			document.write(`<div><a href="../components/lesson11.html">Повернутися до уроку</a></div>`)
		}
	},
	//==================================================================================
	{
		id: 5.3_6,
		question: "Двовимірні масиви",
		checkFunction: function () {
			let arr = [[26, 20, 12], [61, 22, 53], [96, 28, 53]]
			let sum = 0

			for (let rowIndex = 1; rowIndex <= 2; rowIndex++) {
				for (let colIndex = 1; colIndex <= 2; colIndex++) {
					sum += arr[rowIndex][colIndex]
				}
			}

			document.write(`<div>Сума чисел: ${sum}</div>`);
			document.write(`<div><a href="../components/lesson11.html">Повернутися до уроку</a></div>`)
		}
	},
	{
		id: 5.3_7,
		question: "Приклад генерації двовимірного масиву",
		checkFunction: function () {
			function getRandomNumber(minValue, maxValue) {
				return minValue + Math.floor(Math.random() * (maxValue - minValue + 1))
			}
			//Функція генерування одновимірного масиву (одного рядка)
			function generateRandomArray(arrayLength, minValue, maxValue) {
				const arr = []
				for (let i = 0; i < arrayLength; i++) {
					const randNum = getRandomNumber(minValue, maxValue)
					arr.push(randNum)
				}
				return arr
			}
			// Функція генерування двовимірного масиву (двовимірної таблиці данних)
			function generateRandomTable(rowsNumber, columnsNumber, minValue, maxValue) {
				const table = []   //порожня таблиція (немає жодного рядка)
				for (let i = 0; i < rowsNumber; i++) {
					const randomRow = generateRandomArray(columnsNumber, minValue, maxValue) //Генеруємо рядок 
					table.push(randomRow) //Додаємо рядок у таблицю
				}
				return table
			}

			// Перетворення одновимірного масиву у рядок
			const oneDimensionalArray = generateRandomArray(5, 1, 10).join(', ')

			// Перетворення двовимірного масиву у рядок (кожний рядок на новому рядку)
			const twoDimensionalArray = generateRandomTable(3, 4, 1, 10)
				.map(row => row.join(', ')) // Перетворюємо кожний рядок у строку
				.join('<br>') // Додаємо розрив рядка для відображення кожного масиву на новій лінії

			// Вивід результату на сторінку
			document.write(`<div>Одновимірний масив: [${oneDimensionalArray}]</div>`)
			document.write(`<div>Двовимірний масив:<br>[${twoDimensionalArray}]</div>`)
			// document.write(`<div>Кількість спроб користувача: ${getRandomNumber(1, 100)}</div>`)
			document.write(`<div><a href="../components/lesson11.html">Повернутися до уроку</a></div>`)
		}
	},
	// {
	// 	id: 5.3_8,
	// 	question: "Дано прибуток магазину за K тижнів. Знайти загальний прибуток",
	// 	checkFunction: function () {
	// 		function getTotalSum(table) {
	// 			let sum = 0
	// 			for (let rowNumber = 0; rowNumber < table.length; rowNumber++) {
	// 				for (let columnsNumber = 0; columnsNumber < table[rowNumber].length; columnsNumber++) {
	// 					sum += table[rowNumber][columnsNumber]	
	// 				}
	// 			}
	// 			return sum
	// 		}
	// 		let table = generateRandomTable(4, 3, 1, 30)
	// 		let totalSum = getTotalSum(table)
	// 		document.write(`<div>${table}</div>`);
	// 		document.write(`<div>Загальна сума:${totalSum}</div><div><a href="../components/lesson11.html">Повернутися до уроку</a></div>`)
	// 	}
	// },
	{
		id: 5.3_8,
		question: "Дано прибуток магазину за K тижнів. Знайти загальний прибуток",
		checkFunction: function () {
			// Функція генерує двовимірний масив (прибуток за тижні)
			function generateRandomTable(rowsNumber, columnsNumber, minValue, maxValue) {
				const table = []
				for (let i = 0; i < rowsNumber; i++) {
					const row = []
					for (let j = 0; j < columnsNumber; j++) {
						row.push(minValue + Math.floor(Math.random() * (maxValue - minValue + 1)))
					}
					table.push(row)
				}
				return table
			}

			// Генеруємо таблицю (наприклад, 4 рядки по 3 стовпці, значення від 1 до 30)
			let table = generateRandomTable(52, 7, 1, 1000)

			// Функція підрахунку суми всіх елементів таблиці
			function getTotalSum(table) {
				let sum = 0
				for (let rowNumber = 0; rowNumber < table.length; rowNumber++) {
					for (let col = 0; col < table[rowNumber].length; col++) {
						sum += table[rowNumber][col]
					}
				}
				return sum
			}

			// Підрахунок загальної суми
			let totalSum = getTotalSum(table)

			//Знаходження загальної суми за робочі дні
			function getWorkingDaysSum(table) {
				let sum = 0
				for (let rowNumber = 0; rowNumber < table.length; rowNumber++) {
					for (let colNumber = 0; colNumber < 5; colNumber++) {
						sum += table[rowNumber][colNumber];
					}
				}
				return sum
			}

			//Підрахунок загальної суми в робочі дні
			let workingDaysSum = getWorkingDaysSum(table)

			// Перетворюємо таблицю у HTML для відображення
			const tableHtml = table.map(row => `[${row.join(', ')}]`).join('<br>')

			// Вивід таблиці та загальної суми
			document.write(`<div>Таблиця прибутків за рік:</div>`)
			document.write(`<div>${tableHtml}</div>`)
			document.write(`<div><strong>Загальна сума прибутку за всі тижні:</strong> ${totalSum}</div>`)
			document.write(`<div><strong>Загальна сума прибутку в робочі дні тижня:</strong> ${workingDaysSum}</div>`)
			document.write(`<div><a href="../components/lesson11.html">Повернутися до уроку</a></div>`)
		}
	},
	{
		id: 5.3_9,
		question: "Приклади",
		checkFunction: function () {
			let arr = [
				[1, 2, -9, 9, 2, 10],   //0 
				[3, -9, -5],  					//1
				[4, -8],   							//2 
			]

			let positiveCount1 = 0
			//Варіант 1. Зперебором номерів
			for (let rowIndex = 0; rowIndex < arr.length; rowIndex++) {
				for (let colIndex = 0; colIndex < arr[rowIndex].length; colIndex++) {
					if (arr[rowIndex][colIndex] > 0) positiveCount1++
				}
			}
			let positiveCount2 = 0
			//Варіант 2. З перебором попій елементів
			for (const row of arr) {
				for (const el of row) {
					if (el > 0) positiveCount2++
				}
			}

			//Варіант з використанням методу reduce.
			let positiveCount3 = arr.reduce(
				(prevTotalCount, row) => prevTotalCount + row.reduce((prevRowCount, el) => prevRowCount + (el > 0 ? 1 : 0), 0),
				0
			)
			//document.write(`<div></div>`)
			document.write(`<div>Кількість додатних чисел (варіант 1): <strong> ${positiveCount1}</strong></div>`)
			document.write(`<div>Кількість додатних чисел (варіант 2): <strong> ${positiveCount2}</strong></div>`)
			document.write(`<div>Кількість додатних чисел (варіант 3): <strong> ${positiveCount3}</strong></div>`)
			document.write(`<div><a href="../components/lesson11.html">Повернутися до уроку</a></div>`)

		}
	},
	{
		id: 5.3_11,
		question: "Дано кількість відвідувачів кафе протягом року (для кожного місяця за кожен заокруглений тиждень - 4). ",
		checkFunction: function () {
			//Визначити 
			// Функція для генерації випадкової кількості відвідувачів
			function getRandomVisitors(min, max) {
				return Math.floor(Math.random() * (max - min + 1)) + min
			}

			const visitorPerYear = []

			for (let month = 0; month < 12; month++) {
				const visitorPerMonth = []
				for (let day = 0; day < 28; day++) {
					visitorPerMonth.push(getRandomVisitors(10, 100))
				}
				visitorPerYear.push(visitorPerMonth)
			}

			const visitors = visitorPerYear.map(row => `[${row.join(', ')}]`).join('<br>')

			// Вивід кількості 
			document.write(`<div>Кількість відвідувачів кожного місяця: </div>`)
			document.write(`<div>${visitors}</div>`)

			//1) Загальну кількість відвідувачів
			//Варіант 1
			let sum1 = 0
			for (let monthNum = 0; monthNum < visitorPerYear.length; monthNum++) {
				for (let dayNum = 0; dayNum < visitorPerYear[monthNum].length; dayNum++) {
					sum1 += visitorPerYear[monthNum][dayNum]
				}
			}
			//Варіант 2
			let sum2 = 0
			for (const monthVisitors of visitorPerYear) {
				for (const dayVisitors of monthVisitors) {
					sum2 += dayVisitors
				}
			}

			//Варіант 3
			let sum3 = visitorPerYear.reduce(
				(prevMonthSum, month) => prevMonthSum + month.reduce((prevSum, day) => prevSum + day),
				0
			)

			//2) Кількість відвідувача за літо
			let summerSum = 0
			for (let monthNum = 5; monthNum < 8; monthNum++) {
				for (let dayNum = 0; dayNum < visitorPerYear[monthNum].length; dayNum++) {
					summerSum += visitorPerYear[monthNum][dayNum]
				}
			}

			//3) Кількість відвідувачів за друге півріччя
			let secondHalfOfYear = 0
			for (let monthNum = 6; monthNum < visitorPerYear.length; monthNum++) {
				for (let dayNum = 0; dayNum < visitorPerYear[monthNum].length; dayNum++) {
					secondHalfOfYear+=visitorPerYear[monthNum][dayNum]
				}
			}

			document.write(`<div>Загальна кількість відвідувачів:</div>`)
			document.write(`<div>Варіант 1: <strong> ${sum1}</strong> </div>`)
			document.write(`<div>Варіант 2: <strong> ${sum2}</strong> </div>`)
			document.write(`<div>Варіант 3: <strong> ${sum3}</strong> </div>`)
			document.write(`<div>Кількість відвідувачів за літо: <strong> ${summerSum}</strong> </div>`)
			document.write(`<div>Кількість відвідувачів за за друге півріччя: <strong> ${secondHalfOfYear}</strong> </div>`)
			document.write(`<div><a href="../components/lesson11.html">Повернутися до уроку</a></div>`)
		}
	},
	{
		id: 5.3_12,
		question: "",
		checkFunction: function () {

	document.write(`<div> <strong>${positiveCount}</strong></div>`);
	document.write(`<div>${}</div><div><a href="../components/lesson11.html">Повернутися до уроку</a></div>`)
		}
	},
	// {
	// 	id: 5.3_,
	// 	question: "",
	// 	checkFunction: function () {


	//document.write(`<div> <strong>${positiveCount}</strong></div>`);
	//document.write(`<div>${}</div><div><a href="../components/lesson11.html">Повернутися до уроку</a></div>`)
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