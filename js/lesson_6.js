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
		question: "",
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

];

function showQuestion(questionId) {
	const questionObj = questions.find(question => question.id === questionId);
	if (questionObj) {
		questionObj.checkFunction();
	} else {
		document.getElementById('question-content').innerText = "Це питання відсутнє";
	}
}