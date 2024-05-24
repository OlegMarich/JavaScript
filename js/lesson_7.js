const questions = [
	{
		id: 5.1_1,
		question: "Створити функцію, яка за номером місяця повертає пору року, до якої відноситься цей місяць.",
		checkFunction: function () {
			function getSeason(season) {
				if (monthNumber >= 3 && monthNumber <= 5) season = 'Весна'
				else if (monthNumber >= 6 && monthNumber <= 8) season = 'Літо'
				else if (monthNumber >= 9 && monthNumber <= 11) season = 'Осінь'
				else season = 'Зима'
				return season
			}

			let monthNumber = parseInt(prompt('Введіть вибраний Вами місяць (від 1 до 12)'))
			let divisionsOfTheYear = getSeason(3)

			document.write(
				`<div>Вибраний Вами місяць означає що зараз на дворі: ${divisionsOfTheYear}</div> 
				<div><a href="../components/lesson7.html">Повернутися до уроку</a></div>`)
		}
	},
	{
		id: 5.1_2,
		question: "Задача 3. Створити окремі функції, які для 4 чисел знаходять: 1)суму; 2)добуток;	3)середнє арифметичне;	4)мінімальне значення.",
		checkFunction: function () {
			function getSum(a, b, c, d) {
				let sum = a + b + c + d;
				return sum
			}

			function getProduct(a, b, c, d) {
				let product = a * b * c * d;
				return product
			}

			function getAverage(a, b, c, d) {
				let average = (a + b + c + d) / 4;
				return average
			}

			function getMin(a, b, c, d) {
				let min = Math.min(a, b, c, d);
				return min
			}

			let a = parseFloat(prompt('Перше число'))
			let b = parseFloat(prompt('Друге число'))
			let c = parseFloat(prompt('Третє число'))
			let d = parseFloat(prompt('Четверте число'))

			let sum = getSum(a, b, c, d)
			let product = getProduct(a, b, c, d)
			let average = getAverage(a, b, c, d)
			let min = getMin(a, b, c, d)

			document.write(
				`<div> Ваші числа: ${a}, ${b}, ${c}, ${d}. </br>
				Сума Ваших чисел: ${sum}, добуток: ${product}, середнє арифметичне: ${average}, мінімальне значення: ${min} </div>
				<div><a href="../components/lesson7.html">Повернутися до уроку</a></div>`)
		}
	},
	{
		id: 5.1_3,
		question: "Задача 6. Створити функцію, яка створює таблицю з вказаною кількістю рядків і стовпців (таблиця заповнюється заданим фіксованим повідомленням).",
		checkFunction: function () {
			function createTable(numbersOfRows, numbersOfColumn, message) {
				let talbeHTML = '<table border="2px">'
				for (let j = 0; j < numbersOfRows; j++) {
					talbeHTML += '<tr>'
					for (let i = 0; i < numbersOfColumn; i++) {
						talbeHTML += `<td>${message}</td>`
					}
					talbeHTML += '<tr>'
				}
				talbeHTML += '</table>'
				return talbeHTML
			}
			let numbersOfRows = parseInt(prompt('Введіть необхідну кількість рядків'))
			let numbersOfColumn = parseInt(prompt('Введіть необхідну кількість стовпців'))
			let message = prompt('Введіть повідомлення для заповнення комірок')

			let talbeHTML = createTable(numbersOfRows, numbersOfColumn, message)

			document.write(
				`<div>${talbeHTML}</div>
			<div><a href="../components/lesson7.html">Повернутися до уроку</a></div>`
			)
		}
	},
	{
		id: 5.1_4,
		question: "Задача 8. Створити функцію, яка виводить банер (у функцію передаються: зображення, заголовок та посилання, куди переходимо при кліку на зображення",
		checkFunction: function () {
			function showBanner(imageSrc, title, linkUrl) {
				document.write(`
					<div>
					<h2>${title}</h2>
					<a href="${linkUrl}"> 
						<img src="${imageSrc}" style="width:100px">
					</a>
					</div>
				`)
			}

			let imageSrc = `../img/smile/img2.jpg`
			let title = `Лише посміхайся, навіть коли вчиш JS`
			let linkUrl = `../components/lesson7.html`

			showBanner(imageSrc, title, linkUrl)

		}
	},
	{
		id: 5.1_5,
		question: "Задача 9. Дано покази температур (довільна кількість). Розробити функцію, яка дозволить підрахувати кількість від’ємних показів температури.",
		checkFunction: function () {
			function countNegativeTemperatures() {
				let negativeCount = 0
				let negativeSum = 0
				let negativeTemperatureList = ''
				let input
				while (true) {
					input = prompt('Введіть температуру (або натисніть "Скасувати" для завершення введення):')
					if (input === null) {
						break
					}
					let temperature = parseFloat(input)
					if (temperature < 0) {
						negativeCount++
						negativeSum += temperature
						if (negativeTemperatureList.length > 0) {
							negativeTemperatureList += ', '
						}
						negativeTemperatureList += temperature
					}
				}
				return {
					count: negativeCount,
					sum: negativeSum,
					list: negativeTemperatureList
				}
			}

			let negativeData = countNegativeTemperatures()

			document.write(
				`<div>Кількість від’ємних температур: ${negativeData.count}</div>
    		<div>Сума від’ємних температур: ${negativeData.sum}</div>
    		<div>Від’ємні температури: ${negativeData.list}</div>
    		<div><a href="../components/lesson7.html">Повернутися до уроку</a></div>`
			)
		}
	},

	// ======================================
	{
		id: 5.2_1,
		question: "Задача 1. Створити функцію, яка за номером місяця повертає його назву.",
		checkFunction: function () {
			function getMonthName(monthNumber) {
				let monthName
				if (monthNumber === 1) monthName = 'Січень'
				if (monthNumber === 2) monthName = 'Лютий'
				if (monthNumber === 3) monthName = 'Березень'
				if (monthNumber === 4) monthName = 'Квітень'
				if (monthNumber === 5) monthName = 'Травень'
				if (monthNumber === 6) monthName = 'Червень'
				if (monthNumber === 7) monthName = 'Липень'
				if (monthNumber === 8) monthName = 'Серпень'
				if (monthNumber === 9) monthName = 'Вересень'
				if (monthNumber === 10) monthName = 'Жовтень'
				if (monthNumber === 11) monthName = 'Листопад'
				if (monthNumber === 12) monthName = 'Грудень'
				return monthName
			}

			let monthNumber = parseInt(prompt('Введіть номер місяця (від 1 до 12)'))
			let monthName = getMonthName(monthNumber)

			document.write(
				`<div> Вибраний Вами місяць: ${monthName}</div>
				<div><a href="../components/lesson7.html">Повернутися до уроку</a></div>`
			)
		}
	},
	{
		id: 5.2_2,
		question: "Задача 2. Створити функцію, яка за номером дня дозволяє з’ясувати чи є цей день робочим.",
		checkFunction: function () {
			function getWorkingPeriod() {
				let dayType
				if (dayNumber >= 6 && dayNumber <= 7) dayType = 'Вихідний'
				else dayType = 'Робочий день'
				return dayType
			}

			let dayNumber = parseInt(prompt('Оберіть Ваш день (від 1 до 7)'))
			let dayType = getWorkingPeriod()

			document.write(
				`<div> Ваш день є ${dayType}</div>
				<div><a href="../components/lesson7.html">Повернутися до уроку</a></div>`
			)
		}
	},
	{
		id: 5.2_3,
		question: "Створити функцію, яка для 3 заданих чисел знаходить одночасно декілька результатів: кількість парних, кількість додатних, кількість більших за 100.",
		checkFunction: function () {

			function chekNumbers(a, b, c) {
				let evenCount = 0
				let positiveCount = 0
				let greaterThan100Count = 0

				if (a % 2 === 0) {
					evenCount++
				}
				if (a > 0) {
					positiveCount++
				}
				if (a > 100) {
					greaterThan100Count++
				}

				if (b % 2 === 0) {
					evenCount++
				}
				if (b > 0) {
					positiveCount++
				}
				if (b > 100) {
					greaterThan100Count++
				}

				if (c % 2 === 0) {
					evenCount++
				}
				if (c > 0) {
					positiveCount++
				}
				if (c > 100) {
					greaterThan100Count++
				}

				return {
					evenCount,
					positiveCount,
					greaterThan100Count
				}
			}

			let a = parseInt(prompt('Введіть число 1 (від 1 до 1000)'))
			let b = parseInt(prompt('Введіть число 2 (від 1 до 1000)'))
			let c = parseInt(prompt('Введіть число 3 (від 1 до 1000)'))

			let result = chekNumbers(a, b, c)

			document.write(
				`<div>
					Введені числа ${a} ${b} ${c}.<br>
					Кількість парних чисел: ${result.evenCount}.<br>	
					Кількість додатних чисел: ${result.positiveCount}.<br> 
					Кількість чисел більших за 100: ${result.greaterThan100Count}.
				</div>
				<div><a href="../components/lesson7.html">Повернутися до уроку</a></div>`)
		}
	},
	{
		id: 5.2_4,
		question: "Задача 5. Створити окремі функції, які переводять: 1)Сантиметри у дюйми; 2)Кілограми у фунти;	3) Кілометри у милі.",
		checkFunction: function () {
			function getInches(numberOfCentimeters, numberOfInches) {
				return numberOfInches
			}
			function getPounds(numberOfKilograms, numberOfPounds) {
				return numberOfPounds
			}
			function getMiles(numberOfKilometers, numberOfMiles) {
				return numberOfMiles
			}

			let numberOfCentimeters = parseInt(prompt('Введіть необхідну кількість сантиметрів'))
			let numberOfKilograms = parseInt(prompt('Введіть необхідну кількість кілограм'))
			let numberOfKilometers = parseInt(prompt('Введіть необхідну кількість кілометрів'))

			let numberOfInches = numberOfCentimeters * 0.3937
			let numberOfPounds = numberOfKilograms * 0.2425
			let numberOfMiles = numberOfKilograms * 3.2808

			let translateInches = getInches(numberOfCentimeters, numberOfInches)
			let translatePounds = getPounds(numberOfKilograms, numberOfPounds)
			let translateMiles = getMiles(numberOfKilometers, numberOfMiles)

			document.write(
				`<div> 
					${numberOfCentimeters} см. це ${translateInches} дюйми.<br>
					${numberOfKilograms} кг. це ${translatePounds} фунти.<br>
					${numberOfKilometers} км. це ${translateMiles} милі.
				</div>
				<div><a href="../components/lesson7.html">Повернутися до уроку</a></div>`
			)
		}
	},
	{
		id: 5.2_5,
		question: "Задача 7. Створити функцію, яка випадковим чином виводить на екран одне із 4 зображень (шляхи до зображень передаються у функцію)",
		checkFunction: function () {
			function showRandomImage() {
				let randImageIndex = 1 + Math.floor(Math.random() * 4)
				document.write(
					`<div> Вибрана картинка номер ${randImageIndex}.<br>
					<img src = "../img/smile/img${randImageIndex}.jpg" style = "width:100px"><br></div>
					<div><a href="../components/lesson7.html">Повернутися до уроку</a></div>`)
			}
			showRandomImage()
		}
	},
	{
		id: 5.2_6,
		question: "Задача 10. Дано покази температур (довільна кількість). Розробити функцію, яка дозволить знайти середнє значення для додатних показів температури.",
		checkFunction: function () {

			function countPositiveTemperatures() {
				let positiveCount = 0
				let positiveSum = 0
				let positiveTemperatureList = ''
				let input
				while (true) {
					input = prompt('Введіть температуру (або натисніть "Скасувати" для завершення введення):')
					if (input === null) {
						break
					}
					let temperature = parseFloat(input)
					if (temperature > 0) {
						positiveCount++
						positiveSum += temperature
						if (positiveTemperatureList.length > 0)
							positiveTemperatureList += ', ' 
					}
					positiveTemperatureList += temperature
			}

			let average = positiveCount > 0 ? (positiveSum / positiveCount) : 0
		
				return {
					count: positiveCount,
					sum: positiveSum,
					list: positiveTemperatureList,
					average: average
				}
			}

			let positiveData = countPositiveTemperatures()

			document.write(
				`<div>Кількість додатніх температур: ${positiveData.count}</div>
    		<div>Середнє значення додатних температур: ${positiveData.average}</div>
    		<div>Додатні температури: ${positiveData.list}</div>
    		<div><a href="../components/lesson7.html">Повернутися до уроку</a></div>`
			)

			//alert(resultMessage)
			//document.write(`< div > ${}</ > <div><a href="../components/lesson7.html">Повернутися до уроку</a></div>`)
		}
	},
	//========================================
	{
		id: 5.3_1,
		question: "Знайти суму трьох чисел",
		checkFunction: function () {
			function getSum(num1, num2, num3) {
				let sum = num1 + num2 + num3
				return sum
			}
			let a = parseFloat(prompt('Перше число'))
			let b = parseFloat(prompt('Друге число'))
			let c = parseFloat(prompt('Третє число'))
			let s = getSum(a, b, c)

			document.write(
				`Сума чисел = ${s}
			< a href = "../components/lesson7.html" > Повернутися до уроку</ > `
			)
		}
	},
	{
		id: 5.3_2,
		question: "Знайти вартість оренди авто за заданою вартістю на місяць і кількістю місяців",
		checkFunction: function () {
			function getTotalRentalCost(costPerMonth, numberOfMonth) {
				return costPerMonth * numberOfMonth
			}
			let costPerMonth = parseFloat(prompt('Вартість за місяць'))
			let numberOfMonth = parseFloat(prompt('Скільки місяців?'))

			let money = getTotalRentalCost(costPerMonth, numberOfMonth)

			document.write(
				`Загальна вартість оренди = ${money}
			< a href = "../components/lesson7.html" > Повернутися до уроку</ > `
			)
		}
	},
	{
		id: 5.3_3,
		question: "Знайти прибуток банку при купівлі та реалізації доларів",
		checkFunction: function () {
			function getBankProfit(dollarBuyRate, dollarSaleRate, dollarAmount) {
				return (dollarSaleRate - dollarBuyRate) * dollarAmount
			}

			let dollarBuyRate = parseFloat(prompt('Курс купівлі'))
			let dollarSaleRate = parseFloat(prompt('Курс продажу'))
			let dollarAmount = parseFloat(prompt('Кількість долларів'))

			let profit = getBankProfit(dollarBuyRate, dollarSaleRate, dollarAmount)

			document.write(
				`Заробіток банку становить ${profit}`
					`< a href = "../components/lesson7.html" > Повернутися до уроку</ > `
			)
		}
	},
	{
		id: 5.3_4,
		question: "Знайти вартісь путівки на вказану кількість днів (вказано вартість проживання, харчування, комплекса процедур)",
		checkFunction: function () {
			function getTripCost(livingCost, foodCost, proceduresCost, daysNumber) {
				return (livingCost + foodCost + proceduresCost) * daysNumber
			}
			let livingCost = parseFloat(prompt('Вартість проживання'))
			let foodCost = parseFloat(prompt('Вартість харчування'))
			let proceduresCost = parseFloat(prompt('Вартість комплекса процедур'))
			let daysNumber = parseInt(prompt('Період нроживання(кількість днів)'))

			let total = getTripCost(livingCost, foodCost, proceduresCost, daysNumber)

			document.write(
				`Путівка коштує = ${total}
			< a href = "../components/lesson7.html" > Повернутися до уроку</ > `
			)
		}
	},
	{
		id: 5.3_5,
		question: "Задано ширину елемента у відсотках та ширину контейнера у пікселях. Визначити ширину елемента у пікселях",
		checkFunction: function () {
			function getElementWidthInPx(containerWidthPx, elementWidthPercent) {
				return containerWidthPx * elementWidthPercent / 100
			}
			const containerWidthPx = parseFloat(prompt('Введіть ширину контейнера (px)'))
			const elementWidthPercent = parseFloat(prompt('Введіть ширину елемента у відсотках'))
			const elementWidthInPx = getElementWidthInPx(containerWidthPx, elementWidthPercent)

			document.write(
				`Ширина елемента = ${elementWidthInPx}px
			< a href = "../components/lesson7.html" > Повернутися до уроку</ > `
			)
		}
	},
	{
		id: 5.3_6,
		question: "Задано ширину контейнера у пікселях та мінімальну ширину K елементів. Визначити чи можна розмістити елементи в одному рядку",
		checkFunction: function () {
			function isSpaceAvalible(elementWidth, containerWidth, elementsNumber) {
				return elementWidth * elementsNumber <= containerWidth
			}

			let elementWidth = parseFloat(prompt('Ширина елемента (px)'))
			let containerWidth = parseFloat(prompt('Ширина контейнера (px)'))
			let elementsNumber = parseInt(prompt('Кількість елементів'))

			if (isSpaceAvalible(elementWidth, containerWidth, elementsNumber))
				alert('Помістяться')
			else alert('Не помістяться')

		}
	},
	{
		id: 5.3_7,
		question: "Задано показники таймера відліку. Знайти колір, який треба застосувати для його виведення (100 - 80 зелений, 79 - 30 жовтий, 29 - 0 червоний).",
		checkFunction: function () {
			function getTimerColor(timerValve) {
				let color
				if (timerValve >= 80) color = 'green'
				else if (timerValve >= 30) color = 'yellow'
				else color = 'red'
				return color
			}

			const timerValve = parseInt(prompt('Які показники таймера?'))
			const timeColor = getTimerColor(timerValve)

			document.write(
				`< div style = "background-color:${timeColor}; width:${timerValve}%" > ${timerValve}</ >
			<a href="../components/lesson7.html">Повернутися до уроку</a>`
			)
		}
	},
	{
		id: 5.3_8,
		question: "Двоє гравців кидають два рази кубик і визначається загальна кількість балів. Визначити переможця",
		checkFunction: function () {
			function getRandomeScore(edgeNumber) {
				return 1 + Math.floor(Math.random() * edgeNumber)
			}
			function getTotalPlayerScore(edgeNumber) {
				let score1 = getRandomeScore(edgeNumber)
				let score2 = getRandomeScore(edgeNumber)
				return score1 + score2
			}

			let edgeNumber = parseInt(prompt('Скільки граней у кубика'))

			let player1ScoreTotal = getTotalPlayerScore(edgeNumber)
			let player2ScoreTotal = getTotalPlayerScore(edgeNumber)

			alert(
				`Релультат першого гравця : ${player1ScoreTotal}, Результат другого гравця: ${player2ScoreTotal}`
			)

			if (player1ScoreTotal > player2ScoreTotal) alert('Виграв перший гравець')
			else if (player1ScoreTotal < player2ScoreTotal) alert('Виграв другий гравець')
			else alert('Нічия')
			//document.write(`${} < a href = "../components/lesson7.html" > Повернутися до уроку</ > `)
		}
	},
	// {
	// 	id: 5.3_,
	// 	question: "",
	// 	checkFunction: function () {
	// 		//alert(resultMessage)
	// 		//document.write(`${} < a href = "../components/lesson7.html" > Повернутися до уроку</ > `)
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