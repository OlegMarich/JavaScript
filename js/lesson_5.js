const questions = [
	{
		id: 5.1_1,
		question: "Задача 2. Створити 10 елементів для введення цін продуктів",
		checkFunction: function () {
			for (let productNum = 1; productNum <= 10; productNum++) {
				document.write(`Product Num: <form><input type="text" name="Product Num" placeholder="Введіть ціну" class="input"></form>`)
			}
			//alert(resultMessage)
		}
	},
	{
		id: 5.1_2,
		question: "Задача 1.Вивести з використанням циклів маркований список з випадковими числами. Кількість випадкових чисел вводиться користувачем.",
		checkFunction: function () {
			const MIN_RANDOM_VALVE = 1,
				MAX_RANDOM_VALVE = 100

			const requiredRandomNumber = parseInt(prompt('Введіть своє число'))
			document.write(`<ul>`)
			for (let i = 0; i < 4; i++) {
				const randNumber =
					MIN_RANDOM_VALVE +
					Math.floor(Math.random() * (MAX_RANDOM_VALVE - MIN_RANDOM_VALVE + 1))
				document.write(`<li>${randNumber}</li>`)
			}
			document.write(`</ul>`)
			//alert(resultMessage)
			//	document.write(`Років : ${totalYear}`)
		}
	},
	{
		id: 5.1_3,
		question: " Задача 5. Вивести таблицю",
		checkFunction: function () {
			document.write('<table border="2px">')
			let cellNum = 0
			for (let row = 0; row < 3; row++) {
				document.write('<tr>')
				for (let cellNum = 1; cellNum <= 3; cellNum++) {
					document.write(`<td> ${cellNum + row * 3}  </td>`)
				}
				document.write('</tr>')
			}
			document.write('</table>')
			//alert(resultMessage)
			//	document.write(`Років : ${totalYear}`)
		}
	},
	{
		id: 5.1_4,
		question: "Задача 6. Вивести 3 таблиці (по 3 рядки і 3 стовпці у кожній) за зразком",
		checkFunction: function () {
			document.write('<table border="2px">')
			let cellNum = 0
			for (let row = 0; row < 3; row++) {
				document.write('<tr>')
				for (let cellNum = 1; cellNum <= 3; cellNum++) {
					document.write(`<td> ${cellNum + row * 3}  </td>`)
				}
				document.write('</tr>')
			}
			document.write('</table><br>')

			document.write('<table border="2px">')
			for (let row = 0; row < 3; row++) {
				document.write('<tr>')
				for (let cellNum = 4; cellNum <= 6; cellNum++) {
					document.write(`<td> ${cellNum + row * 3}  </td>`)
				}
				document.write('</tr>')
			}
			document.write('</table><br>')
			document.write('<table border="2px">')
			for (let row = 0; row < 3; row++) {
				document.write('<tr>')
				for (let cellNum = 7; cellNum <= 9; cellNum++) {
					document.write(`<td> ${cellNum + row * 3}  </td>`)
				}
				document.write('</tr>')
			}
			document.write('</table><br>')
			//alert(resultMessage)
			//document.write(`Років : ${totalYear}`)
		}
	},
	{
		id: 5.1_5,
		question: "Задача -2. Поступово генерувати 100 випадкових чисел від 1 до 1000. Підрахувати яких чисел більше: парних чи непарних.",
		checkFunction: function () {
			let evenNumber = 0
			let notEvenNumber = 0

			for (let i = 0; i < 1000; i++) {
				let randNumber = 1 + Math.floor(Math.random() * 1000)
				//document.write(`${randNumber} <br>`)
				if (randNumber % 2 === 0) {
					evenNumber++	//"Парне";
				} else {
					notEvenNumber++ //"Непарне";
				}
			}
			if (evenNumber > notEvenNumber) {
				document.write(`Парних чисел більше, їх:${evenNumber} `)
			} else (evenNumber < notEvenNumber)
			document.write(`Непарних чисел більше, їх:${evenNumber} `)
			//console.log(randNumber)
			//document.write(`num`)
		}
	},
	// ======================================
	{
		id: 5.2_1,
		question: "Вивести на екран номери місяців весни і літа (від 3 до 8)",
		checkFunction: function () {
			const months = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень']
			for (let month = 3; month <= 8; month++) {
				document.write(`<div class="exampe__item">Місяць ${month}: ${months[month - 1]}</div>`)
			}
			//	document.write(`Років : ${totalYear}`)
		}
	},
	{
		id: 5.2_2,
		question: "Задача 0. Вивести на екран 8 кнопок з написом “Hello”.",
		checkFunction: function () {
			for (let i = 0; i < 8; i++) {
				document.write(`<button class="button">Hello!</button> <br>`)
			}
			//	document.write(`Років : ${totalYear}`)
		}
	},
	{
		id: 5.2_3,
		question: "Задача 0. Вивести на екран 8 кнопок з написом “Hello”.",
		checkFunction: function () {
			document.write('<table border="2px">')
			let cellNum = 0
			for (let cellNum = 1; cellNum <= 7; cellNum++) {
				document.write(`<td> ${cellNum}  </td>`)
			}
			document.write('</table>')
			//alert(resultMessage)
			//	document.write(`Років : ${totalYear}`)
		}
	},
	{
		id: 5.2_3,
		question: "Задача 3. Вивести таблицю з одним рядком і  7 стовпцями.	",
		checkFunction: function () {
			document.write('<table border="2px">')
			let cellNum = 0
			for (let cellNum = 1; cellNum <= 7; cellNum++) {
				document.write(`<td> ${cellNum}  </td>`)
			}
			document.write('</table>')
			//alert(resultMessage)
			//	document.write(`Років : ${totalYear}`)
		}
	},
	{
		id: 5.2_4,
		question: "Задача 7. Вивести на екран N абзаців (N вводиться користувачем) за зразком:",
		checkFunction: function () {

			const n = parseInt(prompt('Введіть кількість абзаців'))

			for (let paragraph = 1; paragraph === 1; paragraph++) {
				let title = `<h2>Заголовок ${n}</h2>`
				let section = n
				document.write(`${title}`)
				for (let paragraph = 1; paragraph <= n; paragraph++) {
					let paragraf = `<p>розділ ${section}, параграф${paragraph}</p>`
					document.write(`${paragraf}`)
				}
			}
			//alert(resultMessage)
			//document.write(`<h1>Заголовок</h1><br><p>розділ ${}, параграф${}</p><br>`)
		}
	},
	{
		id: 5.2_5,
		question: "Задача 8. Користувач загадує число. За 3 спроби комп’ютер намагається вгадати число користувача (використати confirm).",
		checkFunction: function () {
			let userNumber = parseInt(prompt('Введіть число'))
			let attempts = 3
			for (let attempt = 1; attempt <= attempts; attempt++) {
				let guessNumber = 1 + Math.floor(Math.random())
				if (userNumber === guessNumber) {
					document.write(`Комп'ютер вгадав Ваше число! Воно: ${userNumber}`)
				} else if (attempt === attempts)
					document.write(`Комп'ютер не вгадав Ваше число! Воно: ${userNumber}`)
			}
			//alert(resultMessage)
			//	document.write(`<h1>Заголовок</h1><br><p>розділ ${}, параграф${}</p><br>`)
		}
	},
	{
		id: 5.2_6,
		question: "Задача 9. Користувач загадує число. Комп’ютер задає питання поки не вгадає число користувача (використати confirm).",
		checkFunction: function () {
			let userNumber = parseInt(prompt('Введіть число'))

			for (let attempt = 1; attempt <= userNumber; attempt++) {
				let guessNumber = 1 + Math.floor(Math.random() * 100)
				document.write(`Ваше чило: ${guessNumber}? <br>`)
				if (userNumber !== guessNumber) {
					document.write(`Комп'ютер не вгадав Ваше число! Ваше чило: ${userNumber}! <br>`)
				} else if (userNumber == guessNumber) {
					document.write(`Компютер вгадав Ваше число!`)
				}
			}
			document.write(`Ваше чило: ${userNumber}? <br> Компютер вгадав Ваше число! Гру завершено!`);
			//alert(resultMessage)
			//document.write(``)
		}
	},
	{
		id: 5.2_7,
		question: "Задача 10. Знайти суму всіх непарних чисел, що знаходяться між заданими користувачем числами.",
		checkFunction: function () {
			let sum = 0

			for (let i = 0; i < 10; i++) {
				let userNumber = parseInt(prompt('Введіть довільне число.'))
				if (userNumber % 2 === 0)
					sum += userNumber
			}
			document.write(`Сума парних чисел:${sum} `)

			//console.log(randNumber)
			//document.write(`num`)
		}
	},
	{
		id: 5.2_8,
		question: "Задача 11. Знайти суму 5 непарних чисел, що знаходяться між заданими користувачем числами.",
		checkFunction: function () {
			let sum = 0
			let count = 0

			while (count < 5) {
				let userNumber = parseInt(prompt('Введіть довільне число.'))

				if (userNumber % 2 !== 0) {
					sum += userNumber
					count++
				}
			}
			document.write(`Сума 5 непарних чисел: ${sum} `)
			//console.log(randNumber)
			//document.write(`num`)
		}
	},
	{
		id: 5.2_9,
		question: "Задача 15. Користувача поступово вводить показники температури протягом року. Знайти середню температуру.",
		checkFunction: function () {
			let sum = 0
			let daysInYear = 365

			for (let i = 0; i < daysInYear; i++) {
				let dayTemperature = parseInt(prompt('Введіть показник температури для дня ' + (i + 1) + ':'))
				sum += dayTemperature
			}
			let averageTemperature = sum / daysInYear
			document.write(`Середня температура протягом року: ${averageTemperature} `)
			//console.log(randNumber)
			//document.write(`num`)
		}
	},
	{
		id: 5.2_11,
		question: "Задача 14. Каса. Користувачу повідомляють суму, яку йому треба сплатити. Користувач поступово вводить суму грошей до тих пір, поки суми не буде достатньо для оплати товарів (кожного разу користувачу повідомляють, яку ще суму потрібно ввести). ",
		checkFunction: function () {
			let amountToPay = parseInt(prompt('Сума до сплати'))

			while (amountToPay > 0) {
				let amountPay = parseInt(prompt(`Вам потрібно сплатити ${amountToPay}. Яку суму сплачуємо?`))
				amountToPay -= amountPay

				if (amountToPay > 0) {
					alert(`Вам залишилося сплатити ще ${amountToPay}`)
				} else {
					document.write('Вітаємо! Ви все оплатили!')
				}
			}
		}
			//console.log(randNumber)
			//document.write(`num`)
	},
	//========================================
	{
		id: 5.3_1,
		question: "Приклад 1",
		checkFunction: function () {
			for (let i = 0; i <= 5; i++) {
				let num1 = parseInt(prompt("Num1="))
				let num2 = parseInt(prompt("Num2="))
				if (num1 === num2) {
					document.write(`Sum=${num1 + num2} </br>`)
				} else {
					let product = num1 * num2
					document.write(`Prod = ${product} </br>`)
				}
			}
			//alert(resultMessage)
			//document.write(`Років : ${totalYear}`)
		}
	},
	{
		id: 5.3_2,
		question: "Приклад 2",
		checkFunction: function () {
			let guessedCount = 0
			for (let i = 0; i <= 6; i++) {
				let compNum = 1 + Math.floor(Math.random() * 10)
				let userNum = parseInt(prompt("Введіть число (від 1 до 10)"))
				if (userNum === compNum) {
					guessedCount++
				}
				document.write(`User: ${userNum}, Comp: ${compNum} <br>`)
			}

			document.write(`Вгадано : ${guessedCount}`)
			//alert(resultMessage)
			//document.write(`Років : ${totalYear}`)
		}
	},
	{
		id: 5.3_3,
		question: "Поступово вводяться вартості 7 товарів. Знайти загальну вартість",
		checkFunction: function () {
			let totalPrice = 0
			for (let num = 1; num < 7; num++) {
				const goodsPrice = parseInt(prompt(`Введіть вартість ${num} товару`))
				totalPrice = totalPrice + goodsPrice
			}
			document.write(`Загальна вартість: ${totalPrice}`)

			//alert(resultMessage)
		}
	},

	{
		id: 5.3_4,
		question: "Вивести номери місяців другого півріччя (номери місяців від 6 до 12)",
		checkFunction: function () {
			for (let month = 6; month <= 12; month++) {
				document.write(`<div class="exampe__item">Місяць ${month}</div>`);
			}
		}
		//alert(resultMessage)
	},

	{
		id: 5.3_5,
		question: "Вивести суми сплаченого кредиту. Початковий внесок 5000грн кінцевий 15000, а щомісячний внесок 2000грн",
		checkFunction: function () {

			for (let payment = 5000; payment <= 15000; payment += 2000) {
				document.write(`<div> ${payment} </div>`)
			}
		}
		//alert(resultMessage)		
	},
	{
		id: 5.3_6,
		question: "Вивести суми сплаченого кредиту. Початковий внесок 5000грн кінцевий 15000, а щомісячний внесок 2000грн",
		checkFunction: function () {

			for (let num = 0.1; num <= 4.1; num += 0.4) {
				document.write(`<div> ${num.toFixed(1)} </>`)
			}
		}
		//alert(resultMessage)		
	},
	{
		id: 5.3_7,
		question: "Тренажер додавання. Розробити програму для перевірки знань з додавання цілих чисел в межах від 1 до 3",
		checkFunction: function () {

			for (let num1 = 1; num1 <= 3; num1++) {
				for (let num2 = 1; num2 <= 3; num2++) {
					let userAns = parseInt(prompt(`${num1} + ${num2} =`))
					if (userAns == num1 + num2) {
						alert('Ok')
					}
					else {
						alert('Error')
					}
				}
			}
		}

		//document.write(`<div> ${num.toFixed(1)} </>`)
		//alert(resultMessage)		
	},
	{
		id: 5.3_8,
		question: "Тренажер додавання. Розробити програму для перевірки знань з додавання цілих чисел в межах від 1 до 3",
		checkFunction: function () {
			let correctAnswerNum = 0
			for (let i = 1; i <= 4; i++) {
				const num1 = 1 + Math.floor(Math.random() * 9)
				const num2 = 1 + Math.floor(Math.random() * 9)
				const userAnswer = parseInt(prompt(`${num1} * ${num2} = ?`))
				if (userAnswer === num1 * num2)
					correctAnswerNum++
			}
			document.write(`Correct: ${correctAnswerNum}`)
			//alert(resultMessage)	
		}
	},
	{
		id: 5.3_9,
		question: "Маємо чотри марковані списки з трьома елементами у кожному",
		checkFunction: function () {
			for (let listNumber = 0; listNumber < 4; listNumber++) {
				document.write('<ul>')
				for (let liNum = 1; liNum <= 3; liNum++) {
					document.write(`<li>${liNum}</li> `)
				}
				document.write('</ul>')
			}

			//document.write(`Correct: ${correctAnswerNum}`)
			//alert(resultMessage)	
		}
	},
	//=====================================================================
	{
		id: 5.3_11,
		question: "Вводимо початкову кількість булочок, які треба продати. Поки залишаються булочки продавати їх клієнтам",
		checkFunction: function () {
			let bileNumber = parseInt(prompt('Скільки булочок треба продати'))
			while (bileNumber > 0) {
				const userBileNumber = parseInt(prompt(
					`В наявності ${bileNumber} Скільки хочете купити`
				))
				if (bileNumber >= userBileNumber) {
					bileNumber -= userBileNumber
					alert('Заберіть смачні булочки')
				} else {
					alert('Вибачте такої кількості немає')
				}
			}
			//document.write(`Correct: ${correctAnswerNum}`)
			//alert(resultMessage)	
		}
	},
	{
		id: 5.3_12,
		question: "З клавіатури вводиться два числа N і M (N<M). ",
		checkFunction: function () {
			let n = parseInt(prompt('Введіть число N. n= '))
			let m = parseInt(prompt('Введіть число M. m= '))
			// while (n<m) {
			// 	document.write(`${n} - ${m} </br>`)
			// 	n++
			// 	m--
			// }
			for (; n < m; n++, m--) {
				document.write(`${n} - ${m} </br>`)
			}
			//document.write(`Correct: ${correctAnswerNum}`)
			//alert(resultMessage)	
		}
	},
	{
		id: 5.3_13,
		question: "З клавіатури вводиться поступово числа. знаходимо їх добуток доки не буде введено 0",
		checkFunction: function () {
			let sum = 0
			let num
			while (num !== 0) {
				num = parseFloat(prompt('num='))
				sum += num
			}
			document.write(`Sum = ${sum}`)
		}

		//alert(resultMessage)
	},

	//==========================================================
	{
		id: 5.3_14,
		question: "З клавіатури вводиться поступово числа. знаходимо їх добуток доки не буде введено 0",
		checkFunction: function () {
			let sum = 0
			let num
			do {
				num = parseFloat(prompt('num ='))
				sum += num
			} while (num !== 0);
			document.write(`Sum = ${sum}`)
		}

		//alert(resultMessage)
	},
	{
		id: 5.3_15,
		question: "З клавіатури вводиться пароль поки не буде вірним (правильний пароль 123)",
		checkFunction: function () {
			let password
			do {
				password = prompt('Введіть пароль')
			} while (password !== '123')
		}
		//document.write(`Correct: ${correctAnswerNum}`)
		//alert(resultMessage)
	},
	{
		id: 5.3_16,
		question: "Оленка має 0 грн. і хоче назбирати на телефон (10000 грн.). Для цього кожного разу допомагає мамі і отримує гонорар - випадкова величина від 1 до 200 грн. Підрахувати скільки разів треба допомагати Оленці поки не назбирає на телефон.",
		checkFunction: function () {
			let money = 0
			do {
				alert(`В мене є ${money}. Що потрібно зробити?`)
				const mothersMoney = 1 + Math.floor(Math.random() * 2000)
				money += mothersMoney
			} while (money < 10000);
			document.write('Вітаємо!')
		}
		//document.write(`Correct: ${correctAnswerNum}`)
		//alert(resultMessage)
	},
	{
		id: 5.3_17,
		question: "Оленка має М грн. (вводиться з клавіатури) і хоче назбирати на телефон (10000 грн.). Для цього кожного разу допомагає мамі і отримує гонорар - випадкова величина від 1 до 200 грн. Підрахувати скільки разів треба допомагати Оленці поки не назбирає на телефон.",
		checkFunction: function () {
			let money = parseFloat(prompt('Скільки ти вже маєш зібрано'))
			while (money < 10000) {
				alert(`В мене є ${money}. Що потрібно зробити?`)
				const mothersMoney = 1 + Math.floor(Math.random() * 2000)
				money += mothersMoney
			}
			document.write('Вітаємо!')
		}
		//document.write(`Correct: ${correctAnswerNum}`)
		//alert(resultMessage)
	},
	{
		id: 5.3_18,
		question: "Поступово вводити 10 цілих чисел і знайти їх суму. Якщо буде введено некоректне число, то припинити знаходження суми",
		checkFunction: function () {
			let sum = 0
			for (let i = 0; i < 10; i++) {
				const num = parseInt(prompt('num'))
				if (!isFinite(num)) break
				sum += num
			}
			document.write(`Sum = ${sum}`)
		}
		//alert(resultMessage)
	},
	{
		id: 5.3_19,
		question: "3 рази дати можливість ввести пароль(правильний пароль '123')",
		checkFunction: function () {
			let password
			for (let i = 0; i < 3; i++) {
				password = prompt('Пароль = ')
				if (password === '123') break
			}
			if (password === '123')
				alert('Вітаємо!')
			else
				alert('Доступ заборонено')

			//document.write(`Пароль = ${password}`)
		}
		//alert(resultMessage)
	},
	//==================================================================
	{
		id: 5.3_21,
		question: "Користувач кожного дня протягом 3 тижнів купляв товар за ціною, що могла змінюватись щодня. Знайти скільки всього заплатив користувач. Якщо користувач припиняє введення (натиснув на «Відміна» під час введення), товивести поточну суму і припинити сумування.",
		checkFunction: function () {
			let sum = 0
			weekLoop: for (let weekNum = 1; weekNum <= 3; weekNum++) {
				for (let dayNum = 1; dayNum <= 7; dayNum++) {
					let price = parseFloat(prompt(`Week ${weekNum} Day ${dayNum}`))
					if (!isFinite(price)) break weekLoop
					sum += price
				}
			}
			document.write(`Сума = ${sum}`)
		}
		//alert(resultMessage)
	},
	//======================================================
	{
		id: 5.3_22,
		question: "поступово вітаємо 20 користувачів поки не прийде Іван",
		checkFunction: function () {
			for (let i = 0; i < 20; i++) {
				const userName = prompt('Name ')
				alert(`Вітаємо ${userName}`)
				if (userName === 'Іван') break
			}
			//document.write(`Сума = ${sum}`)
		}
		//alert(resultMessage)
	},
	{
		id: 5.3_23,
		question: "поступово вітаємо 5 користувачів, але Іванів не вітаємо",
		checkFunction: function () {
			for (let i = 0; i < 5; i++) {
				const userName = prompt('Name ')
				if (userName === 'Іван') continue
				alert(`Вітаємо ${userName}`)
			}
			//document.write(`Сума = ${sum}`)
		}
		//alert(resultMessage)
	},
	{
		id: 5.3_24,
		question: "Поаступово вітаємо учнів з 3-х класів (по 20 учнів у класі) поки не зустрінемо Івана. Якщо зустріли Івана, то переходимо до наступного класу",
		checkFunction: function () {
			// for (let classNum = 1; classNum <= 3; classNum++) {
			// 	for (let pupilNum = 1; pupilNum <= 20; pupilNum++) {
			// 		const userName = prompt(`Class ${classNum}, pupil ${pupilNum}`)
			// 		alert(`Вітаємо ${userName}`)
			// 		if (userName === 'Іван') break
			// 	}
			// }
			classLabel: for (let classNum = 1; classNum <= 3; classNum++) {
				for (let pupilNum = 1; pupilNum <= 20; pupilNum++) {
					const userName = prompt(`Class ${classNum}, pupil ${pupilNum}`)
					alert(`Вітаємо ${userName}`)
					if (userName === 'Іван') continue classLabel
				}
			}
			//document.write(`Сума = ${sum}`)
		}
		//alert(resultMessage)
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