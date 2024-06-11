const questions = [
	{
		id: 5.1_1,
		question: "Задача 1. Дано масив, який містить оцінки з К предметів. Знайти середній бал і з’ясувати до якої категорії він відноситься (відмінник, двійочник (має хоча би одну двійку), хорошист (оцінки добре і відмінно), трійочник(є хоча би одна трійка).",
		checkFunction: function () {
			let rating = [5, 5, 4, 5, 2, 5, 4, 5, 3]
			let sum = 0
			let hasTwo = false
			let hasThree = false
			for (let i = 0; i < rating.length; i++) {
				sum += rating[i]
				if (rating[i] === 2) {
					hasTwo = true
				}
				if (rating[i] === 3) {
					hasThree = true
				}
			}
			let average = sum / rating.length
			let studentCategory = ''

			if (hasTwo) {
				studentCategory = 'Двійочник'
			} else if (hasThree) {
				studentCategory = 'Трійочник'
			} else if (average >= 4) {
				studentCategory = 'Хорошист'
			} else if (average >= 4.5) {
				studentCategory = 'Відмнник'
			}
			// if (average >= 4.5) {
			// 	studentCategory = 'Відмінник'
			// } else if (average >= 4) {
			// 	studentCategory = 'Хорошист'
			// } else if (average >= 3) {
			// 	studentCategory = 'Трійочник'
			// } else {
			// 	studentCategory = 'Двійочник'
			// }

			document.write(`
			<div>
				Середній бал:${average.toFixed(2)},<br>
				Рівень успішності студента:${studentCategory},
			</div>
			<div><a href="../components/lesson8.html">Повернутися до уроку</a></div>`)
		}
	},
	{
		id: 5.1_2,
		question: "Дано масив, який зберігає кількість відвідувачів магазину протягом тижня.",
		checkFunction: function () {
			let numberOfVisitors = []
			let dayOfTheWeek = ["Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота", "Неділя"]

			for (let i = 0; i < 7; i++) {
				let visitors = parseInt(prompt(`Кількість відвідувачів в ${dayOfTheWeek[i]}`))
				numberOfVisitors[i] = visitors
			}
			//номери днів, протягом яких кількість відвідувачів була меншою за 20
			let daysWithFewVisitors = []
			for (let i = 0; i < numberOfVisitors.length; i++) {
				if (numberOfVisitors[i] < 20) {
					daysWithFewVisitors.push(`${dayOfTheWeek[i]} (${numberOfVisitors[i]})`)
				}
			}
			// номери днів, коли кількість відвідувачів була мінімальною;
			let minVisitors = Math.min(...numberOfVisitors)
			let daysWithMinVisitors = []
			for (let i = 0; i < numberOfVisitors.length; i++) {
				if (numberOfVisitors[i] === minVisitors) {
					daysWithMinVisitors.push(dayOfTheWeek[i])
				}
			}

			// номери днів, коли кількість відвідувачів була максимальною;
			let maxVisitors = Math.max(...numberOfVisitors)
			let daysWithMaxVisitors = []
			for (let i = 0; i < numberOfVisitors.length; i++) {
				if (numberOfVisitors[i] === maxVisitors) {
					daysWithMaxVisitors.push(dayOfTheWeek[i])
				}
			}

			// загальну кількість клієнтів у робочі дні та окремо загальну кількість днів на вихідних.
			let workDaysVisitors = 0
			let weekendVisitors = 0
			for (let i = 0; i < numberOfVisitors.length; i++) {
				if (i >= 0 && i <= 4) {
					workDaysVisitors += numberOfVisitors[i]
				} else {
					weekendVisitors += numberOfVisitors[i]
				}
			}
			document.write(`
				<div>
					Дні, кількість відвідувачів була меншою за 20: ${daysWithFewVisitors.join(', ')} <br> 
					Дні, з найменшою кількістю відвідувачів: ${daysWithMinVisitors.join(', ')} <br> 
					Дні, з найбільшою кількістю відвідувачів: ${daysWithMaxVisitors.join(', ')} <br> 
					Кількість відвідувачів в робочі дні: ${workDaysVisitors} <br> 
					Кількість відвідувачів у вихідні дні: ${weekendVisitors} <br> 
				</div>
				<div><a href="../components/lesson8.html">Повернутися до уроку</a></div>
			`)
		}
	},
	{
		id: 5.1_3,
		question: "Дано послідовність номерів автомобілів. Підрахувати кількість номерів, які :",
		checkFunction: function () {
			function getCarNumber() {
				let arr = []
				let numbers = true

				while (numbers) {
					let carNumber = prompt('Введіть номер автомобіля')
					if (carNumber) {
						arr.push(carNumber)
					} else {
						numbers = false
					}
				}
				return arr
			}

			//починаються на букву «А»
			function getStartFromA(arr) {
				let countA = 0
				for (let i = 0; i < arr.length; i++) {
					if (arr[i].includes('A'))
						countA++
				}
				return countA
			}

			//перша і остання літери співпадають
			function isFirstSameWithLast(arr) {
				let letterCount = 0
				for (let i = 0; i < arr.length; i++) {
					let carNumber = arr[i]
					let firstLetter = carNumber[0]
					let lastLetter = carNumber[carNumber.length - 1]
					if (firstLetter === lastLetter) {
						letterCount++
					}
				}
				return letterCount
			}

			//складаються з більше ніш 5 символів;
			function getNumberLenght(arr) {
				let symbolCount = 0
				for (let i = 0; i < arr.length; i++) {
					let carNumber = arr[i]
					if (carNumber.length > 5) {
						symbolCount++
					}
				}
				return symbolCount
			}

			let carNumbers = getCarNumber()
			let countA = getStartFromA(carNumbers)
			let countFirstLastLetters = isFirstSameWithLast(carNumbers)
			let findTheLenght = getNumberLenght(carNumbers)

			document.write(`
			<div>Кількість номерів, які містять літеру 'A': ${countA}</div>
			<div>Кількість номерів, які починаються і закінчуються літерою 'A': ${countFirstLastLetters}</div>
			<div>Кількість номерів, кількість символів яких більша за 5: ${findTheLenght}</div>
			<div><a href="../components/lesson8.html">Повернутися до уроку</a></div>
			`)
		}
	},
	{
		id: 5.1_4,
		question: "Задача 6. Дано послідовність цін товарів та назв (у окремих масивах). Вивести на екран ті, які може собі дозволити користувач (кількість грошей задається).",
		checkFunction: function () {
			let produktPrices = [1000, 20, 31]
			let produktTitles = ['Chees', 'Juice', 'Bread']
			let buyerMoney = parseInt(prompt('Введіть наявну суму коштів у покупця'))
			let affordableProducts = []

			for (let i = 0; i < produktPrices.length; i++) {
				if (buyerMoney >= produktPrices[i])
					affordableProducts.push(produktTitles[i])
			}

			document.write(`
			<div>Товари, які може собі дозволити покупець: ${affordableProducts.join(', ')}</div>
			<div><a href="../components/lesson8.html">Повернутися до уроку</a></div>
			`)
		}
	},
	{
		id: 5.1_5,
		question: "Задача 8. Дано одновимірний масив, у якому зберігається певна виграшна сума (елементи заповнюються випадковим чином значеннями від -500 до 500). Надаючи користувачу можливість вибирати номери елементів  (поки він не відмовиться). Знаходити сумарний виграш.",
		checkFunction: function () {
			function generateRandomWin() {
				return Math.floor(Math.random() * 1001) - 500
			}

			let randomWins = []
			for (let i = 0; i < 10; i++) {
				randomWins.push(generateRandomWin())
			}

			function getWinNumber() {
				let winArray = []
				let winNumbers = true
				while (winNumbers) {
					let number = parseInt(prompt('Введіть число'))
					if (number) {
						winArray.push(number)

					} else {
						winNumbers = false
					}
				}
				return winArray
			}

			let userIndexes = getWinNumber()

			let sum = 0
			for (let i = 0; i < userIndexes.length; i++) {
				sum += randomWins[userIndexes[i]]
			}
			document.write(`
			<div>Випадкові виграшні числа: ${randomWins.join(', ')}</div>
			<div>Номери, введені користувачем: ${userIndexes.join(', ')}</div>
			<div>Сумарний виграш: ${sum}</div>
			<div><a href="../components/lesson8.html">Повернутися до уроку</a></div>`)
		}
	},
	// ========================================================================================================================================
	{
		id: 5.2_1,
		question: "Дано масив імен учнів. З’ясувати скільки разів зустрічається ім’я «Іван».",
		checkFunction: function () {
			function getStudentName() {
				let arr = []
				let names = true

				while (names) {
					let name = prompt('Введіть ім’я студента')
					if (name) {
						arr.push(name)
					} else {
						names = false
					}
				}
				return arr
			}

			function countName(arr, nameToCount) {
				let count = 0
				for (let i = 0; i < arr.length; i++) {
					if (arr[i] === nameToCount) {
						count++
					}
				}
				return count
			}

			let studentNames = getStudentName()
			let requiredNameCount = countName(studentNames, 'Іван')

			document.write(`
			<div>
				Ім'я "Іван" зустрічається ${requiredNameCount} раз.
			</div>
			<div><a href="../components/lesson8.html">Повернутися до уроку</a></div>`)
		}
	},
	{
		id: 5.2_2,
		question: "Дано послідовність оцінок учня. Підрахувати кількість: 1)	двійок, 2) кількість хороших оцінок (добре, відмінно), 3)	кількість оцінок, які нижче середнього.",
		checkFunction: function () {
			grades = [5, 4, 3, 4, 5, 2, 4, 3, 4, 5, 4, 5, 3, 2, 5]
			function countGrades(grades) {
				let totalTwo = 0
				let totalGood = 0
				let lessThenAverage = 0
				let sum = 0

				for (let i = 0; i < grades.length; i++) {
					sum += grades[i]
				}

				let average = sum / grades.length

				for (let i = 0; i < grades.length; i++) {
					if (grades[i] === 2) {
						totalTwo++
					}
					if (grades[i] === 4 || grades[i] === 5) {
						totalGood++
					}
					if (grades[i] < average) {
						lessThenAverage++
					}
				}
				return { totalTwo, totalGood, lessThenAverage }
			}

			let { totalTwo, totalGood, lessThenAverage } = countGrades(grades)
			document.write(`
				<div>Кількість двійок: ${totalTwo}</div>
				<div>Кількість хороших оцінок: ${totalGood}</div>
				<div>Кількість оцінок, які ниже середнього: ${lessThenAverage}</div>
				<div><a href="../components/lesson8.html">Повернутися до уроку</a></div>
			`)
		}
	},
	{
		id: 5.2_3,
		question: "Дано послідовність платіжок протягом року. Знайти сумарну кількість грошей за:",
		checkFunction: function () {
			let payment = [1200, 800, 100, 150, 200, 800, 900, 200, 500, 700, 900, 1000]
			//за весь рік;
			let yearPayments = 0
			for (let month = 0; month < payment.length; month++) {
				yearPayments += payment[month]
			}
			//у першій половині року;
			let firstHalfOfTheYear = 0
			for (let month = 0; month <= 5; month++) {
				firstHalfOfTheYear += payment[month]
			}
			//у другій половині року;
			let secondHalfOfTheYear = 0
			for (let month = 6; month <= 11; month++) {
				secondHalfOfTheYear += payment[month]
			}
			//за літо;
			let summerPayments = 0
			for (let month = 5; month <= 8; month++) {
				summerPayments += payment[month]
			}
			//за ІІ квартал;
			let secondQuarter = 0
			for (let month = 3; month <= 5; month++) {
				secondQuarter += payment[month]
			}
			//за парні місяці (з парними номерами);
			let evenMonth = 0
			for (let month = 0; month < payment.length; month += 2) {
				evenMonth += payment[month]
			}
			//за місяці, які є початковими у сезоні (весна, літо, осінь, зима).
			let seasonStartMonth = 0
			let seasonStartMonths = [2, 5, 8, 11]
			for (let month of seasonStartMonths) {
				seasonStartMonth += payment[month]
			}

			document.write(`
				<div>		
				<h1>Всього сплачено:</h1>
					<ul>
						<li>За рік: ${yearPayments} </li>	
						<li>За 1-ше півріччя: ${firstHalfOfTheYear}</li>	
						<li>За 2-ге півріччя: ${secondHalfOfTheYear}</li>	
						<li>За літо: ${summerPayments}</li>	
						<li>За 2-гий квартал: ${secondQuarter}</li>	
						<li>За парні місяці: ${evenMonth}</li>
						<li> За місяці, які є початковими у сезоні (весна, літо, осінь, зима): ${seasonStartMonth}</li>
					</ul>
				</div>
				<div><a href="../components/lesson8.html">Повернутися до уроку</a></div>`)
		}
	},
	// ========================================================================================================================================
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
		question: "Дано розміри доходу магазину за кожен місяць протягом року. Знайти:",
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
					if (workersAges[i] >= pensionAge)
						c++
				}
				return c
			}
			let count = getPensionersNumber(65, 71, 82, 52, 24, 89, 67)
			document.write(`<div>Кількість пенсіноерів: ${count}</div><div><a href="../components/lesson8.html">Повернутися до уроку</a></div>`)
		}
	},
	{
		id: 5.3_11,
		question: "Дано покази температур. Підрахувати пількість показників у заданому діапазоні",
		checkFunction: function () {
			//Знайдемо кількість показів між 10 і 15 градусів
			function getTemperatureNumberInRange(minTemp, maxTemp, ...tempList) {
				let count = 0
				for (let i = 0; i < tempList.length; i++) {
					if (tempList[i] >= minTemp && tempList[i] <= maxTemp)
						count++
				}
				return count
			}
			let tempCount = getTemperatureNumberInRange(10, 15, 5, 21, 11, 12, 14, 16, 21, 23, 32)
			document.write(`<div>${tempCount}</div><div><a href="../components/lesson8.html">Повернутися до уроку</a></div>`)
		}
	},
	{
		id: 5.3_12,
		question: "Дано покази теиператур (довільна кількість). Розробити функціюб яка дозволить знайти середнє значення для додатних показів температури.",
		checkFunction: function () {
			function getPositivValNumber(...tempList) {
				let count = 0
				let sum = 0
				for (let i = 0; i < tempList.length; i++) {
					if (tempList[i] > 0) {
						sum += tempList[i]
						count++
					}
				}
				return sum / count
			}

			function inputTemperatures(tempNumber) {
				let arr = []
				for (let i = 0; i < tempNumber; i++) {
					let temp = parseInt(prompt(`Введіть температурний показник ${i + 1}`))
					arr.push(temp)
				}
				return arr
			}

			//let average = getPositivValNumber(3, -9, 23, 0, -8)
			let listOfTemperatures = inputTemperatures(3)
			let average = getPositivValNumber(...listOfTemperatures)
			document.write(`<div>${average}</div><div><a href="../components/lesson8.html">Повернутися до уроку</a></div>`)
		}
	},
	// {
	// 	id: 5.3_12,
	// 	question: "Дано покази температур (довільна кількість). Розробити функцію, яка дозволить знайти середнє значення для додатних показів температури.",
	// 	checkFunction: function () {
	// 		function generateRandomTemperature() {
	// 			return Math.floor(Math.random() * 71) - 30
	// 		}

	// 		function generateTemperatureArray(length) {
	// 			const temperatures = []
	// 			for (let i = 0; i < length; i++) {
	// 				temperatures.push(generateRandomTemperature())
	// 			}
	// 			return temperatures
	// 		}

	// 		function getPositiveAverage(...tempList) {
	// 			let count = 0
	// 			let sum = 0
	// 			for (let i = 0; i < tempList.length; i++) {
	// 				if (tempList[i] > 0) {
	// 					sum += tempList[i]
	// 					count++
	// 				}
	// 			}
	// 			return count > 0 ? sum / count : 0
	// 		}

	// 		const tempList = generateTemperatureArray(10) // Генеруємо масив з 10 температур
	// 		const average = getPositiveAverage(...tempList)

	// 		document.write(`<div>Список температур: ${tempList.join(', ')}</div>`)
	// 		document.write(`<div>Середнє значення додатних температур: ${average}</div>`)
	// 		document.write(`<div><a href="../components/lesson8.html">Повернутися до уроку</a></div>`)
	// 	}
	// }
];

function showQuestion(questionId) {
	const questionObj = questions.find(question => question.id === questionId);
	if (questionObj) {
		questionObj.checkFunction();
	} else {
		document.getElementById('question-content').innerText = "Це питання відсутнє";
	}
}