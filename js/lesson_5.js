const questions = [
	{
		id: 5.1,
		question: "",
		checkFunction: function () {


			//alert(resultMessage)
			//document.getElementById('lessons-page__ansver').innerText = resultMessage;
		}
	},
	// ======================================
	{
		id: 5.2,
		question: "",
		checkFunction: function () {


			//alert(resultMessage)
			//	document.write(`Років : ${totalYear}`)
		}
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
				//const element = array[7];
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
				document.write(`<div class="lesson-page__exampe example"><div class="exampe__item">Місяць ${month}</div></div>`);
			}
		}
		//alert(resultMessage)
	},

	{
		id: 5.3_5,
		question: "Вивести суми сплаченого кредиту. Початковий внесок 5000грн кінцевий 15000, а щомісячний внесок 2000грн",
		checkFunction: function () {

			for (let payment = 5000; payment <= 15000; payment += 2000) {
				document.write(`<div> ${payment} </>`)
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