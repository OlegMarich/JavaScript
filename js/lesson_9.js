const questions = [
	{
		id: 5.1_1,
		question: "1. Користувач вводить кількість елементів. Створити масив, що складається з вказаної кількості елементів заповнених нулями.",
		checkFunction: function () {
			let userNumber = parseInt(prompt('Введіть необхідну кількість чисел'))
			let elementsArr = []

			if (userNumber > 0) {
				for (let i = 0; i < userNumber; i++) {
					let number = 0
					elementsArr.push(number)
				}
			}
			document.write(`<div>${elementsArr.join(', ')}</div><div><a href="../components/lesson9.html">Повернутися до уроку</a></div>`)
		}
	},
	{
		id: 5.1_2,
		question: "3. Користувач вводить кількість елементів. Створити масив, у якому перші 5 елементів заповнені 1-цями, а інші до кінця масиву заповнені 7-ками.",
		checkFunction: function () {
			let userNumber = parseInt(prompt('Введіть необхідну кількість чисел'))
			let elementsArr = []

			if (userNumber > 0) {
				for (let i = 0; i < 5; i++) {
					elementsArr.push(1)
				}
			}
			if (userNumber > 0) {
				for (let i = 5; i < userNumber; i++) {
					elementsArr.push(7)
				}
			}
			document.write(`<div>${elementsArr.join(', ')}</div><div><a href="../components/lesson9.html">Повернутися до уроку</a></div>`)
		}
	},
	{
		id: 5.1_3,
		question: "4.Дано масив елементів. Вивести на екран елементи, що більші за 100",
		checkFunction: function () {
			let userNumber = parseInt(prompt('Введіть необхідну кількість чисел'))
			let elementsArr = []

			for (let i = 0; i < userNumber; i++) {
				let number = 1 + Math.floor(Math.random() * 200)
				elementsArr.push(number)
			}

			let numbersGreeterThan100 = []

			for (const number of elementsArr) {
				if (number > 100) {
					numbersGreeterThan100.push(number)
				}
			}
			document.write(`
				<div>Числа більші за 100: ${numbersGreeterThan100.join(', ')}</div>
				<div>Всі числа: ${elementsArr.join(', ')}</div>
				<div><a href="../components/lesson9.html">Повернутися до уроку</a></div>
				`)
		}

	},
	{
		id: 5.1_4,
		question: "7.Дано масив цін. Змінити цей масив так, що на ціни товарів, які більші за 1000 грн. дати 30% знижки.",
		checkFunction: function () {
			let userNumber = parseInt(prompt('Введіть кількість чисел які треба згенерувати'))
			let priceArr = []

			for (let i = 0; i < userNumber; i++) {
				let number = 1 + Math.floor(Math.random() * 10000)
				priceArr.push(number)
			}

			let priceDiscount = priceArr.map((number) => {
				if (number > 1000) {
					return (number * 0.7).toFixed(2)
				}
			}
			)

			document.write(`
				<div>Вибрані ціни: ${priceArr.join(', ')}</div>
				<div>Ціни більші за 1000 грн. після знижки 30%: ${priceDiscount.join(', ')}</div>
				<div><a href="../components/lesson9.html">Повернутися до уроку</a></div>`)
		}
	},
	{
		id: 5.1_5,
		question: "8. Дано масив номерів авто. Сформувати новий масив тих, які починаються на «А»",
		checkFunction: function () {
			let carPlatesUA = [
				"АК1234АК", "АА2345АА", "АВ3456АВ", "АЕ4567АЕ", "АН5678АН",
				"АІ6789АІ", "АМ7890АМ", "АО8901АО", "АР9012АР", "АТ0123АТ",
				"ВА1234ВА", "ВВ2345ВВ", "ВС3456ВС", "ВЕ4567ВЕ", "ВН5678ВН",
				"ВІ6789ВІ", "ВК7890ВК", "ВМ8901ВМ", "ВО9012ВО", "АХ0123АХ",
				"ВТ1234ВТ", "ВХ2345ВХ", "СА3456СА", "СВ4567СВ", "СЕ5678СЕ",
				"СН6789СН", "ІА7890ІА", "ІВ8901ІВ", "ІЕ9012ІЕ", "ІН0123ІН",
				"ХС1234ХС"
			];
			let carPlatesA = []
			for (const number of carPlatesUA) {
				if (number[0] === 'А') {
					carPlatesA.push(number)
				}
			}
			document.write(`
				<div>Номерні знаки: ${carPlatesUA.join(', ')}</div>
				<div>Номерні знаки що починаються з А: ${carPlatesA.join(', ')}</div>
				<div><a href="../components/lesson9.html">Повернутися до уроку</a></div>
				`)
		}

	},

	// ========================================================================================================================================
	{
		id: 5.2_1,
		question: "2. Користувач вводить кількість елементів. Створити масив, у якому перша половина заповнена 1-цями, а друга заповнена 7-ками.",
		checkFunction: function () {
			let userNumber = parseInt(prompt('Введіть свою кількість елементів'))
			let elementsArr = []

			if (userNumber > 0) {
				let half = Math.floor(userNumber / 2)
				for (let i = 0; i < half; i++) {
					elementsArr.push(1)
				}
				for (let i = half; i < userNumber; i++) {
					elementsArr.push(7)
				}
			}
			document.write(`<div>${elementsArr.join(', ')}</div><div><a href="../components/lesson9.html">Повернутися до уроку</a></div>`)
		}
	},
	{
		id: 5.2_2,
		question: "5.Дано масив елементів. Знайти добуток додатних елементів",
		checkFunction: function () {
			let userNumber = parseInt(prompt('Введіть кількість чисел які треба згенерувати'))
			let elementsArr = []

			for (let i = 0; i < userNumber; i++) {
				let number = 1 + Math.floor(Math.random() * 200) - 100
				elementsArr.push(number)
			}

			let positiveElements = []
			let product = 1
			for (const number of elementsArr) {
				if (number > 0) {
					positiveElements.push(number)
					product *= number
				}
			}
			document.write(`
					<div>Перелік згенерованих чисел: ${elementsArr.join(', ')}</div>
					<div>Сума чисел більших за 0: ${product}</div>
					<div><a href="../components/lesson9.html">Повернутися до уроку</a></div>
			`)
		}
	},
	{
		id: 5.2_3,
		question: "6.Дано масив елементів. Усі елементи, які більші за перший елемент помножити на 2",
		checkFunction: function () {
			let userNumber = parseInt(prompt('Введіть кількість чисел які треба згенерувати'))
			let elementsArr = []

			for (let i = 0; i < userNumber; i++) {
				let number = 1 + Math.floor(Math.random() * 200)
				elementsArr.push(number)
			}
			let firstElement = elementsArr[0]
			let modifiedElementsArr = []

			for (let i = 0; i < elementsArr.length; i++) {
				if (elementsArr[i] > firstElement) {
					modifiedElementsArr.push(elementsArr[i] * 2);
				}
			}

			document.write(`
				<div>Всі випадкові числа: ${elementsArr.join(', ')}</div>
				<div>Результат множення на 2 чисел більших за преше:${modifiedElementsArr.join(', ')}</div>
				<div><a href="../components/lesson9.html">Повернутися до уроку</a></div>`)

		}
	},
	{
		id: 5.2_4,
		question: "9. Дано масив імен. Сформувати масив з перших літер цих імен.",
		checkFunction: function () {
			let names = [
				"Марія", "Павло", "Анна", "Федір", "Григорій",
				"Юлія", "Зеновій", "Сергій", "Катерина", "Євгенія",
				"Дарина", "Богдан", "Ірина", "Тетяна", "Олена",
				"Назар", "Леонід", "Роксолана", "Уляна", "Христина",
				"Цезар", "Черемис", "Шарлотта", "Щастя", "Йосип",
				"Жанна", "Ярослав"
			];

			let firstLettersOfnames = names.map((name) => name[0])
			document.write(`
				<div>Перші літери вибраних імен: ${firstLettersOfnames.join(', ')}</div>
				<div><a href="../components/lesson9.html">Повернутися до уроку</a></div>`)
		}
	},
	{
		id: 5.2_5,
		question: "10. Дано масив цін у грн. Податок складає 20%. Сформувати масив, який буде містити величину сплаченого податку у грн.",
		checkFunction: function () {
			let userNumber = parseInt(prompt('Введіть кількість цін які треба згенерувати'))
			let elementsArr = []

			for (let i = 0; i < userNumber; i++) {
				let number = 1 + Math.floor(Math.random() * 10000)
				elementsArr.push(number)
			}

			let taxCount = elementsArr.map((price) => (price * 0.2).toFixed(2))
			let sum = taxCount.reduce((total, tax) => total + parseFloat(tax), 0).toFixed(2)

			document.write(` 
				<div>Ціни: ${elementsArr.join(', ')}</div>
        <div>Сплачений податок: ${taxCount.join(', ')}</div>
        <div>Сума податоку: ${sum}</div>
				<div><a href="../components/lesson9.html">Повернутися до уроку</a></div>`)
		}

	},
	// ========================================================================================================================================
	{
		id: 5.3_1,
		question: " Дано послідовність платіжок протягом року. Знайти сумарну кількість грошей за:",
		checkFunction: function () {
			let paymentsList = [
				1200, 1250, 1180, 1300, 1220, 1280, 1235, 1270, 1215, 1290, 1245, 1265,
			]

			function getPaymentsSumInRange(paymentsList, startMonth, endMonth, step = 1) {
				let sum = 0
				for (let month = startMonth - 1; month < endMonth; month += step) {
					sum += paymentsList[month]
				}
				return sum
			}
			// -	за весь рік;
			let sumPerYear = getPaymentsSumInRange(paymentsList, 1, 12)
			// -	у першій половині року;
			let sumPerFirstHalfOfYear = getPaymentsSumInRange(paymentsList, 1, 6)
			// -	у другій половині року;
			let sumPerSecondtHalfOfYear = getPaymentsSumInRange(paymentsList, 6, 12)
			// -	за літо;
			let sumPersummer = getPaymentsSumInRange(paymentsList, 6, 8)
			// -	за ІІ квартал;
			let sumPerSecondQuarter = getPaymentsSumInRange(paymentsList, 4, 6)
			// -	за парні місяці (з парними номерами);
			let sumPerEvenMonth = getPaymentsSumInRange(paymentsList, 2, 12, 2)
			// -	за місяці, які є початковими у сезоні (весна, літо, осінь, зима)
			let sumPerSeasonsStart = getPaymentsSumInRange(paymentsList, 3, 12, 3)

			document.write(`
				<div>		
					<h1>Всього сплачено:</h1>
						<ul>
							<li>За рік: ${sumPerYear} </li>	
							<li>За 1-ше півріччя: ${sumPerFirstHalfOfYear}</li>	
							<li>За 2-ге півріччя: ${sumPerSecondtHalfOfYear}</li>	
							<li>За літо: ${sumPersummer}</li>	
							<li>За 2-гий квартал: ${sumPerSecondQuarter}</li>	
							<li>За парні місяці: ${sumPerEvenMonth}</li>
							<li> За місяці, які є початковими у сезоні (весна, літо, осінь, зима): ${sumPerSeasonsStart}</li>
						</ul>
				</div>
				<div><a href="../components/lesson9.html">Повернутися до уроку</a></div>`)
		}
	},
	{
		id: 5.3_2,
		question: "Приклади",
		checkFunction: function () {
			// 	let arr = new Array(14)
			// 	arr.fill(1, 0, 6)
			// 	arr.fill(2, 6, 10)
			// 	arr.fill(8, 10)
			// 	document.write(`<div>${arr}</div><div><a href="../components/lesson9.html">Повернутися до уроку</a></div>`)
			// }
			//Дано масив показників температур. Вивести на екран додатні значення показників
			const typicalTemperatures = [
				-8.5, -9.2, 10.1, 11.3, 15.0, 18.6, 20.7, 20.2, 16.5, 11.9, -6.9, -3.9,
			]
			// -----------------------------------
			// for (const temp of typicalTemperatures)
			// 	if (temp > 0)
			// 		document.write(`
			// 		<div>
			// 		${temp}
			// 		</div>
			// 		<div><a href="../components/lesson9.html">Повернутися до уроку</a></div>
			// `)
			// document.write(`<div><a href="../components/lesson9.html">Повернутися до уроку</a></div>`)
			// -----------------------------------
			typicalTemperatures.forEach(
				(temp) => {
					if (temp > 0) document.write(`<div>${temp}</div>`)
				}
			)
			document.write(`<div><a href="../components/lesson9.html">Повернутися до уроку</a></div>`)
		}
	},
	{
		id: 5.3_3,
		question: "Дано масив цін товарів. 1) Знайти суму цін більших за 100. 2) Створити новитй масив додавши 20%",
		checkFunction: function () {
			let prices = [100, 364, 607, 888, 3, 456]
			//let sum = 0
			// -----------------------------------
			// for (const price of prices) {
			// 	if (price > 100) sum += price
			// }
			// -----------------------------------
			// 	prices.forEach((price) => {
			// 		sum += price
			// 	}
			// 	)
			// 	document.write(`<div>Сума цін більших за 100 - ${sum}</div><div><a href="../components/lesson9.html">Повернутися до уроку</a></div>`)
			let newPrices = prices.map((price) => price * 1.2)
			document.write(`<div>Ціни збільшилися на 20% і становлять: ${newPrices}</div><div><a href="../components/lesson9.html">Повернутися до уроку</a></div>`)
		}
	},
	{
		id: 5.3_4,
		question: "Дано список імен користувачів. Створити функцію для перегляду користувачів при чому для кожного треба виконати одну з дій: або привітатися, або попрощатися з кожним",
		checkFunction: function () {

			const usersList = ["Олександр", "Марія", "Іван", "Катерина", "Андрій", "Наталія", "Дмитро", "Ольга", "Михайло", "Тетяна"]

			function getGreetingMessage(userName) {
				return `Привіт ${userName} ! <br>`
			}
			function getByeMessage(userName) {
				return `Бувай ${userName} ! <br>`
			}
			function actionsWithUsers(usersList, messageGetterFunction) {
				for (const userName of usersList) {
					document.write(`
							<ul>
								<li>
									${messageGetterFunction(userName)}
								</li>
							</ul>`)
				}
				document.write(`<div><a href="../components/lesson9.html">Повернутися до уроку</a></div>`)
			}
			const userAnswer = parseInt(prompt('1) Привітати всіх \n2) Попрощатися з усіма'))
			//if (userAnswer === 1) actionsWithUsers(usersList, getGreetingMessage)
			//else actionsWithUsers(usersList, getByeMessage)
			let messageCreator = userAnswer === 1 ? getGreetingMessage : getByeMessage
			actionsWithUsers(usersList, messageCreator)
			//document.write(`<div>${}</div><div><a href="../components/lesson9.html">Повернутися до уроку</a></div>`)
		}
	},
	{
		id: 5.3_5,
		question: "Дано масив оцінок учнів у 12 бальній шкалі. Користувач задає шкалу, у якій він хоче отримати результати учнів",
		checkFunction: function () {
			scores = [12, 9, 8, 10, 7, 11, 6, 12, 5, 8, 7, 10, 4, 9, 6, 11, 5, 8, 7, 10, 3, 9, 6, 12, 4, 8, 7, 11, 5, 9]

			// "високий (>=7)"/"нижче середнього(7)"
			function getResultByScale1(score) {
				return score >= 7 ? 'високий' : 'ниже середнього'
			}
			// "переводиться у наступний клас (>=5)" / "залишається, не вистачає ${5-бал} якщо (<5)"
			function getResultByScale2(score) {
				return score >= 5
					? 'Переводиться'
					: `Залишається, не вистачає ${5 - score}`
			}
			function printByScale(scores, userScale) {
				document.write('<ul>')
				for (const score of scores) {
					document.write(`
						<li>
							${userScale(score)}
						</li>
						`)
				}
				document.write('</ul><div><a href="../components/lesson9.html">Повернутися до уроку</a></div>')

			}
			const userAnswer = parseInt(prompt('Виберіть шкалу по якій будемо оцінювити учня'))
			const userScale = userAnswer === 1 ? getResultByScale1 : getResultByScale2
			printByScale(scores, userScale)
		}
	},
	{
		id: 5.3_6,
		question: "Дано масив показників температур. відємні значення замінити на 0",
		checkFunction: function () {

			const typicalTemperatures = [
				-8.5, -9.2, 10.1, 11.3, 15.0, 18.6, 20.7, 20.2, 16.5, 11.9, -6.9, -3.9,
			]
			typicalTemperatures.forEach((temp, index, baseArr) => {
				if (temp < 0) baseArr[index] = 0
			})
			document.write(`
				<div>${typicalTemperatures}</div>
				<div><a href="../components/lesson9.html">Повернутися до уроку</a></div>
			`)
		}
	},
	{
		id: 5.3_7,
		question: "Дано масив років народження працівників (усі народилися 1 січня). Створити масив з кількістю років.",
		checkFunction: function () {
			let birthYears = [1990, 1985, 1970, 2000, 1995]
			let agesList = birthYears.map((year) => 2024 - year)
			document.write(`<div>${agesList}</div><div><a href="../components/lesson9.html">Повернутися до уроку</a></div>`)
		}
	},
	{
		id: 5.3_8,
		question: "Дано масив товарів у долларах. Створити масив цін у гривнях",
		checkFunction: function () {
			let pricesGrn = [1000, 3604, 6070, 8880, 300, 456]
			let dollarRate = 38
			let pricesDol = pricesGrn.map((price) => price / dollarRate)
			document.write(`<div>${pricesDol}<br></div><div><a href="../components/lesson9.html">Повернутися до уроку</a></div>`)
		}
	},
	{
		id: 5.3_9,
		question: "Дано масив років. після кожного значення 2010 додати 2015",
		checkFunction: function () {
			let yearsList = [2001, 1999, 2010, 1967, 2000, 2010, 1988]
			for (let i = 0; i < yearsList.length; i++) {
				if (yearsList[i] === 2010) {
					yearsList.splice(i + 1, 0, 2015)
					i++
				}
			}
			document.write(`<div>${yearsList.join(', ')}</div><div><a href="../components/lesson9.html">Повернутися до уроку</a></div>`)
		}
		//
	},
	{
		id: 5.3_11,
		question: "Дано покази температур за рік (12 місяців). Замінити значення літніх місяців нулями",
		checkFunction: function () {
			const typicalTemperatures = [
				-8.5, -9.2, 10.1, 11.3, 15.0, 18.6, 20.7, 20.2, 16.5, 11.9, -6.9, -3.9,
			]
			typicalTemperatures.splice(5, 3, 0)
			document.write(`<div>${typicalTemperatures.join(', ')}</div><div><a href="../components/lesson9.html">Повернутися до уроку</a></div>`)
		}
		//
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