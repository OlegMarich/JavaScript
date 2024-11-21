const questions = [
	{
		id: 5.1_1,
		question: "Дано історію цін на цінні папери за деякий період (згенерувати від 1 до 10000)",
		checkFunction: function () {
			//Дано історію цін на цінні папери за деякий період (згенерувати від 1 до 10000)
			let userNumber = parseInt(prompt('Введіть кількість чисел які треба згенерувати'))
			let prices = []

			for (let i = 0; i < userNumber; i++) {
				let number = 1 + Math.floor(Math.random() * 10000)
				prices.push(number)
			}
			document.write(`<div>Згенеровані ціни: ${prices.join(', ')}</div>`)

			//1)Сформувати новий масив, у якому є тільки ті, що більші за 1000 грн.
			let priceLargerThousand = []
			for (let i = 0; i < prices.length; i++) {
				if (prices[i] > 1000)
					priceLargerThousand.push(prices[i])
			}
			document.write(`<div>Ціни що більші за 1000 грн: ${priceLargerThousand.join(', ')}</div>`)

			//2)Сформувати новий масив, у якому є номери тільки тих, що більші за 1000 грн.
			let numbers = []
			for (let i = 0; i < prices.length; i++) {
				if (prices[i] > 1000)
					numbers.push(i + 1)
			}
			document.write(`<div>Номери цін більші за 1000 грн.: ${numbers.join(', ')}</div>`)

			//3)Сформувати список з тих цін, які більші за попереднє значення
			let priceGreaterPrevious = []
			for (let i = 1; i < prices.length; i++) {
				if (prices[i] > prices[i - 1]) {
					priceGreaterPrevious.push(prices[i])
				}
			}
			document.write(`<div>Ціни, значення якмих більші за попереднє значення:${priceGreaterPrevious.join(', ')}</div>`)

			//4)Сформувати новий масив, що міститиме значення цін у відсотках стосовно максимального
			let maxPrice = Math.max(...prices)
			let persentagePrices = prices.map(price => ((price / maxPrice) * 100).toFixed(2))

			document.write(`<div>Ціни у відсотках відносно максимального значення: ${persentagePrices.join('%, ')}</div>`)

			//5)Підрахувати кількість змін цін
			let priceChanges = 0
			for (let i = 1; i < prices.length; i++) {
				if (prices[i] !== prices[i - 1]) {
					priceChanges++
				}
			}
			document.write(`<div>Kількість змін цін: ${priceChanges}</div>`)

			//6)Визначити, чи є ціна, що менше 1000
			if (prices.some(price => price < 1000))
				document.write(`<div>Так, є ціна менша за 1000.</div>`)
			else document.write(`<div>Ні, нема ціни меншої за 1000.</div>`)

			//7)Визначати, чи усі ціни більше за 1000
			if (prices.every(price => price > 1000))
				document.write(`<div>Так, усі ціни більше за 1000.</div>`)
			else document.write(`<div>Ні, не усі ціни більше за 1000.</div>`)

			//8)Підрахувати кількість цін, що більше за 1000
			let pricesSum = 0
			for (let i = 0; i < prices.length; i++) {
				if (prices[i] > 1000) {
					pricesSum++
				}
			}
			document.write(`<div>Всього цін більших за 1000: ${pricesSum}</div>`)

			//9)Підрахувати суму цін, що більше за 1000
			let amountPrices = 0
			for (let i = 0; i < prices.length; i++) {
				if (prices[i] > 1000) {
					amountPrices += prices[i]
				}
			}
			document.write(`<div>Сума цін більших за 1000: ${amountPrices}</div>`)

			//10)Знайти першу ціну, що більше за 1000
			let firstPrice = prices.find(price => price > 1000)
			if (firstPrice !== undefined) {
				document.write(`<div>Перша ціна, що більше за 1000: ${firstPrice}</div>`)
			}
			else {
				document.write(`<div>Ціни, що більше за 1000, не знайдено.</div>`)
			}

			//11)Знайти індекс першої ціни, що більше за 1000
			let indexOfPrice = prices.findIndex(price => price > 1000)
			if (indexOfPrice !== -1) {
				document.write(`<div>Індекс першої ціни, що більше за 1000: ${indexOfPrice + 1}</div>`)
			}
			else {
				document.write(`<div>Індекс першої ціни, що більше за 1000не знайдено</div>`)
			}

			//12)Знайти останню ціну, що більше за 1000
			let lastPrice = prices.findLast(price => price > 1000)
			if (lastPrice !== undefined) {
				document.write(`<div>Остання ціна, що більше за 1000: ${lastPrice}</div>`)
			}
			else {
				document.write(`<div>Ціни, що більше за 1000, не знайдено.</div>`)
			}

			//13)Знайти індекс останньої ціни, що більше за 1000  
			let lastPriceIndex = prices.findLastIndex(price => price > 1000)
			if (lastPriceIndex !== -1) {
				document.write(`<div>Індекс останньої, що більше за 1000: ${lastPriceIndex + 1}</div>`)
			}
			else {
				document.write(`<div>Ціни, що більше за 1000, не знайдено.</div>`)
			}

			document.write(`<div><a href="../components/lesson10.html">Повернутися до уроку</a></div>`)
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
	{
		id: 5.3_12,
		question: "Дано масив кімнат, які звернулися на рецепцію. Визначити чи зверталися з кімнати номер 5.",
		checkFunction: function () {
			let rooms = [12, 15, 7, 23, 45, 21, 35, 8, 10]
			if (rooms.includes(5))
				document.write(`<div>Звертався</div><div><a href="../components/lesson10.html">Повернутися до уроку</a></div>`)
			else document.write(`<div>Не звертався</div><div><a href="../components/lesson10.html">Повернутися до уроку</a></div>`)
		}
	},
	{
		id: 5.3_13,
		question: "Матиматичні приклади на основі за допомогою метода reduсe",
		checkFunction: function () {

			let arr = [-10, -9, 5, 13, 17, 16, 18, 19, 21, 11, 7, -4]
			let scores = [8, 9, 2, 4, 7, 1, 10, 8, 9, 2]
			let ages = [21, 13, 45, 68, 23, 74, 66, 9, 25, 56, 69]

			//Знайти суму елементів масиву
			let sum = arr.reduce((prewSum, el, index, baseRef) => prewSum + el)
			document.write(`<div>Сума елементів масиву: ${sum}</div>`)

			//Знайти добуток елементів масиву
			let prod = arr.reduce((prevProd, el) => prevProd * el)
			document.write(`<div>Добуток елементів масиву: ${prod}</div>`)

			//Знайти добуток від'ємних елементів масиву
			let prodNegative = arr.reduce((prevProd, el) => (el < 0 ? prevProd * el : prevProd), 1)
			document.write(`<div>Добуток від'ємних елементів масиву: ${prodNegative}</div>`)

			//Знайти суму парних елементів
			let evenNumber = arr.reduce((prevSum, el) => el % 2 === 0 ? prevSum + el : prevSum, 0)
			document.write(`<div>Сума парних елементів: ${evenNumber}</div>`)

			//Підрахувати кількість 7
			let numberOfSeven = arr.reduce((prevNuberOfSeven, el) => el === 7 ? prevNuberOfSeven + 1 : prevNuberOfSeven, 0)
			document.write(`<div>Kількість 7: ${numberOfSeven}</div>`)

			//Знайти максимальний елемент
			//let max = Math.max(...arr) найкраще рішення
			let max = arr.reduce((prevMax, el) => (el > prevMax ? el : prevMax))
			document.write(`<div>Найбільший елемент: ${max}</div>`)

			//Знайти елемент максимальний серед від'ємних
			let minusMax = arr.reduce(
				(prevMax, el) => (el < 0 && el > prevMax ? el : prevMax),
				-Infinity
			)
			document.write(`<div>Найбільший від'ємний елемент: ${minusMax}</div>`)

			//Дано масив оцінок учня. Підрахувати кількість поганних оцінок
			let res = scores.reduce(
				(prevCount, score) => (score < 4 ? prevCount + 1 : prevCount), 0
			)
			document.write(`<div>Кількість поганних оцінок: ${res}</div>`)

			//Дано масив показів температур за рік (12 місяців). Підрахувати кількість додатних значень.
			let positiveNumberCount = arr.reduce((prevCount, temp) => temp > 0 ? prevCount + 1 : prevCount, 0)
			document.write(`<div>Додатніх значень температури за рік: ${positiveNumberCount}</div>`)

			//Дано масив чисел. Підрахувати суму елементів таких що <20 і зняходяться в першів половині масиву, або >40 і знаходяться в другій половині масиву
			let halfLength = arr.length / 2
			let sumLarger = arr.reduce(
				(prevSum, el, index) => (index < halfLength && el < 20) || (index >= halfLength && el > 40) ? prevSum + el : prevSum, 0
			)
			document.write(`<div>Сума елементів що <20 і зняходяться в першів половині масиву<br>або >40 і знаходяться в другій половині масиву: ${sumLarger}</div>`)

			//Дано масив років відвідувачів басейну. Визначити середній вік відвідувачів.
			let s = ages.reduce(
				(prevSum, age) => prevSum + age
			)
			let average = s / ages.length
			document.write(`<div>Cередній вік відвідувачів басейну: ${average}</div>`)

			document.write(`<div></div><div><a href="../components/lesson10.html">Повернутися до уроку</a></div>`)
		}
	},
	{
		id: 5.3_14,
		question: "Матиматичні приклади на основі метода 'filter'",
		checkFunction: function () {
			let temperatureList = [-10, 3, -21, 10, 18]

			//Дано покази температур термометра за місяць. Сформувати покази додатніх значень
			let positiveArray = temperatureList.filter((temp) => temp > 0)
			document.write(`<div>Додатні покази:${positiveArray}</div>`)

			//Сформуватипокази тільки значень, які знаходяться між 10 і 15
			let resArr = temperatureList.filter((temp) => temp >= 10 && temp <= 15)
			document.write(`<div>Значеня, які знаходяться між 10 і 15: ${resArr}</div>`)

			//Дано масив цін.Сформувати масив який складається з цін більших за 500
			let prices = [124, 6700, 2345, 322, 99, 324, 900]
			let restArr = prices.filter((price) => price > 500)
			document.write(`<div>${restArr}</div>`)

			//Задача 4. Дано масив імен учнів. Сформувати масив, які починаються на букви : 'A', 'B', 'J', 'S'
			let names = ['Nona', 'John', 'Sara', 'Peter', 'Monica', 'Andrew', 'Niko']
			const searchLetters = ['A', 'B', 'J', 'S']
			let letterArr = names.filter((name) => searchLetters.includes(name[0]))
			document.write(`<div>${letterArr}</div>`)
			//document.write(`<div>${}</div>`)
			//document.write(`<div>${}</div>`)

			document.write(`<div><a href="../components/lesson10.html">Повернутися до уроку</a></div>`)
		}
	},
	{
		id: 5.3_15,
		question: "Матиматичні приклади на основі метода 'some', 'every'",
		checkFunction: function () {
			// Дано масив показників термометра протягом місяця. З’ясувати, чи є серед них є дні, коли температура була меншою за 5 градусів.
			let temperatures = [-10, -9, 5, 13, 17, 16, 18, 19, 21, 11, 7, -4]
			if (temperatures.some((t) => t < 5))
				document.write(`<div>Була температура була меншою за 5 градусів</div>`)
			else document.write(`<div>Ні, не  було температури меншої за 5 градусів</div>`)

			//Дано масив цін. Визначити чи є серед вказаних цін товарів ті, які дорожчі за 1000
			let prices = [124, 6700, 2345, 322, 99, 324, 900]
			if (prices.some(price => price > 1000))
				document.write(`<div>Так, є такі товари, які дорожчі за 1000 грн.</div>`)
			else document.write(`<div>Ні, нема таких товарів, які дорожчі за 1000 грн.</div>`)

			//Дано масив оцінок. 
			let scores = [8, 9, 12, 4, 7, 1, 10, 8, 9, 2]
			//Визначити чи він є хорошистом
			if (scores.every(score => score >= 7))
				document.write(`<div>Так, він є хорошистом,</div>`)
			else document.write(`<div>Ні, він не є хорошистом,</div>`)

			//Визначити чи він є двійочником
			if (scores.some(score => score < 4))
				document.write(`<div>Так, він є двійочником.</div>`)
			else document.write(`<div>Ні, він є хорошистом.</div>`)

			//Дано масив років відвідувачів басейну. Визначити чи були пенсіонери.
			let ages = [21, 13, 45, 68, 23, 74, 66, 9, 25, 56, 69]
			if (ages.some(age => age >= 60))
				document.write(`<div>Так, серед відвідувачів були пенсіонери.</div>`)
			else document.write(`<div>Ні, серед відвідувачів не було пенсіонерів.</div>`)

			// Дано масив показників термометра протягом місяця. З’ясувати, чи усі показники є більшими за 10 градусів.
			let temp = [-10, -9, 5, 13, 17, 16, 18, 19, 21, 11, 7, -4]
			if (temp.every(temperatur => temperatur >= 10))
				document.write(`<div>Так, всі показники температури є більшими за 10.</div>`)
			else document.write(`<div>Ні, не всі показники температури є більшими за 10.</div>`)

			document.write(`<div><a href="../components/lesson10.html">Повернутися до уроку</a></div>`)
		}
	},
	{
		id: 5.3_16,
		question: "Матиматичні приклади на основі метода 'sort'",
		checkFunction: function () {
			// Упорядкувати масив чисел за зростанням.
			let arr = [-10, -9, 5, 13, 17, 16, 18, 19, 21, 11, 7, -4]
			// arr.sort((el1, el2) => {
			// 	if (el1 > el2) return 1
			// 	if (el1 < el2) return -1
			// 	return 0
			// })
			arr.sort((el1, el2) => el1 - el2)
			document.write(`<div>${arr}</div>`)

			// Упорядкувати масив чисел за зростанням.
			arr.sort((el1, el2) => el2 - el1)
			document.write(`<div>${arr}</div>`)

			//Упорядкувати масив імен за зростанням
			let names = ['Nona', 'John', 'Sara', 'Peter', 'Monica', 'Andrew', 'Niko']
			names.sort()
			document.write(`<div>Імена за зростанням: ${names}</div>`)

			//Упорядкувати масив імен за спаданням
			names.sort((name1, name2) => {
				if (name1 < name2) return 1
				if (name1 > name2) return -1
				return 0
			})
			document.write(`<div>Імена за спаданням: ${names}</div>`)

			//Упорядкувати масив імен за зростанням за другою буквою
			names.sort((name1, name2) => {
				if (name1[1] < name2[1]) return -1
				if (name1[1] > name2[1]) return 1
				return 0
			})
			document.write(`<div>Імена за зростанням за другою буквою: ${names}</div>`)

			//Упорядкуватичисла так, щоб з початку йшли парні, потім непарні
			arr.sort(
				(num1, num2) => {
					if (num1 % 2 === 0 && num2 % 2 !== 0) return -1
					if (num1 % 2 !== 0 && num2 % 2 === 0) return -1
					return 0
				}
			)
			document.write(`<div>Перелік чисел з початку йшли парні, потім непарні: ${arr}</div>`)

			//Упорядкувати за спаданням довжин імен
			names.sort(
				(name1, name2) => {
					if (name1.length < name2.length) return 1
					if (name1.length > name2.length) return -1
					return 0
				}
			)
			document.write(`<div>Перелік імен за спаданням довжин імені: ${names}</div>`)
			//document.write(`<div>${}</div>`)	
			document.write(`<div><a href="../components/lesson10.html">Повернутися до уроку</a></div>`)
		}
	},
];

function showQuestion(questionId) {
	const questionObj = questions.find(question => question.id === questionId);
	if (questionObj) {
		questionObj.checkFunction();
	} else {
		document.getElementById('question-content').innerText = "Це питання відсутнє";
	}
}