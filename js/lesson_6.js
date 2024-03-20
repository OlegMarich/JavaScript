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
		id: 5.3_1,
		question: "Задача 11. Знайти суму 5 непарних випадкових чисел, що знаходяться між заданими користувачем числами.",
		checkFunction: function () {
			//sum
			//firstUserNumber, secondUserNumber
			//oddnumber
			let firstUserNumber = parseInt(prompt('First'))
			let secondUserNumber = parseInt(prompt('Second'))
			if (firstUserNumber > secondUserNumber) {
				let temp = firstUserNumber
				firstUserNumber = secondUserNumber
				secondUserNumber = temp
			}
			let oddnumber = 0
			let sum = 0

			let startNum
			if ((firstUserNumber + 1) % 2 === 1) startNum = firstUserNumber + 1
			else startNum = firstUserNumber + 2

			for (let num = startNum; num < secondUserNumber; num += 2) {
				if (num % 2 !== 0) {
					sum += num
					oddnumber++
					if (oddnumber === 5) break
				}
			}
			//alert(`Sum : ${sum}`)
			document.write(`Sum : ${sum}`)
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