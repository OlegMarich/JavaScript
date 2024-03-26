const questions = [
	{
		id: 5.1_1,
		question: "",
		checkFunction: function () {

			//alert(resultMessage)
			//document.write(`Років : ${totalYear}`)
		}
	},

	// ======================================
	{
		id: 5.2_1,
		question: "",
		checkFunction: function () {

			//	document.write(`Років : ${totalYear}`)
		}
	},
	//alert(resultMessage)
	//document.write(`Років : ${totalYear}`)
	//========================================
	{
		id: 5.3_2,
		question: "Задача 5. Знайти суму 5 непарних	чисел, що знаходяться між заданими користувачем числами.",
		checkFunction: function () {
			//sum
			//firstUserNumber, secondUserNumber
			//oddNumber
			let firstUserNumber = parseInt(prompt('Введіть перше число'))
			let secondUserNumber = parseInt(prompt('Введіть друге число'))
			if (firstUserNumber > secondUserNumber) {
				let temp = firstUserNumber
				firstUserNumber = secondUserNumber
				secondUserNumber = temp
			}
			let oddNumber = 0
			let sum = 0

			let startNum
			if ((firstUserNumber + 1) % 2 === 1) startNum = firstUserNumber + 1
			else startNum = firstUserNumber + 2

			for (let num = startNum; num < secondUserNumber; num += 2) {
				if (num % 2 !== 0) {
					sum += num
					oddNumber++
					if (oddNumber === 5) break
				}
			}
			//alert(`Sum : ${sum}`)
			document.write(`Sum : ${sum}`)
		}
	},
	{
		id: 5.3_1,
		question: "Задача 11. Знайти суму 5 непарних випадкових чисел, що знаходяться між заданими користувачем числами.",
		checkFunction: function () {
			//sum
			//firstUserNumber, secondUserNumber
			//oddNumber
			let firstUserNumber = parseInt(prompt('Введіть перше число'))
			let secondUserNumber = parseInt(prompt('Введіть друге число'))
			if (firstUserNumber > secondUserNumber) {
				let temp = firstUserNumber
				firstUserNumber = secondUserNumber
				secondUserNumber = temp
			}

			let oddNumber = 0
			let sum = 0

			while (oddNumber < 5) {
				let randNum = firstUserNumber + Math.floor(Math.random() * (secondUserNumber - firstUserNumber + 1))
				if (randNum % 2 === 1) {
					sum += randNum
					oddNumber++
				}
			}
			//alert(resultMessage)
			document.write(`Всього = ${sum}`)
		}
	},
	{
		id: 5.3_3,
		question: "Задача 9.Користувач загадує число. Комп’ютер задає питання поки не вгадає число користувача (використати confirm).",
		checkFunction: function () {
			//compNumber
			let minNumber = parseInt(prompt('Введіть мінімільне число'))
			let maxNumber = parseInt(prompt('Введіть максимальне число'))
			let attemptsNumber = 0
			let isGuessed

			do {
				let compNumber =
					minNumber + Math.floor(Math.random() * (maxNumber - minNumber + 1))
				attemptsNumber++
				isGuessed = confirm(`Чи ваше число таке: ${compNumber}?`)
			} while (isGuessed === false)

			document.write(`Число вгадано після ${attemptsNumber} спроби`)
			//alert(resultMessage)
		}
	},
	{
		id: 5.3_4,
		question: "Вивести 5 маркованих списків по 3 випадкових числа (1-100)",
		checkFunction: function () {


			for (let listNum = 1; listNum <= 5; listNum++) {
				document.write(`List number = ${listNum}`)
				document.write('<ul>')
				for (let i = 1; i <= 3; i++) {
					let randNum = Math.floor(Math.random() * 100)
					document.write(`<li>${randNum}</li>`)
				}
				document.write('</ul>')
			}
			//alert(resultMessage)
			//document.write(`Років : ${totalYear}`)
		}
	},
	{
		id: 5.3_5,
		question: "Вивести 4 двовимірні таблиці 5*6. Заповнити рандомними номерами місяців",
		checkFunction: function () {
			for (let tableIndex = 0; tableIndex < 4; tableIndex++) {
				document.write('<table border="2px">')
				for (let rowInex = 0; rowInex < 5; rowInex++) {
					document.write('<tr>')
					for (let colIndex = 0; colIndex < 6; colIndex++) {
						let randMonth = 1 + Math.floor(Math.random() * 12)
						document.write(`<td>${randMonth}</td>`)
					}
					document.write('</tr> <br>')
				}
				document.write('</table>')
			}
			//alert(resultMessage)
		}
	},
	{
		id: 5.3_6,
		question: "Вивести горизонтальну діаграму з 8 рандомними ",
		checkFunction: function () {
			for (let i = 0; i < 8; i++) {
				let randNum = 0 + Math.floor(Math.random() * 100)
				document.write(`<div  style="height: 20px; width: ${randNum}%; background-color: red; margin: 10px;">${randNum}</div>`)
			}
			//alert(resultMessage)
			//document.write(`Років : ${totalYear}`)
		}
	},
	{
		id: 5.3_7,
		question: "Задача 1.Поступово генеруються N чисел (-100 - 100). Знайти максимальне, мінімальне та середнє значення",
		checkFunction: function () {
			let numberCount = parseInt(prompt('Скільки чисел'))
			let maxNumber = -Infinity,
				minNumber = +Infinity,
				sum = 0
			for (let i = 0; i < numberCount; i++) {
				let randNum = -100 + Math.floor(Math.random() * 201)
				if (randNum > maxNumber) maxNumber = randNum
				if (randNum < minNumber) minNumber = randNum
				sum += randNum
			}
			let average = sum / numberCount
			//alert(resultMessage)
			document.write(`Max =  ${maxNumber}, min = ${minNumber}, average = ${average}`)
		}
	},
	{
		id: 5.3_2,
		question: "",
		checkFunction: function () {

			//alert(resultMessage)
			//document.write(`Років : ${totalYear}`)
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