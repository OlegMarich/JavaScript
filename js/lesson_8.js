const questions = [
	{
		id: 5.1_1,
		question: "",
		checkFunction: function () {
			//alert(resultMessage)
			//document.write(`${}`)
		}
	},

	// ======================================
	{
		id: 5.2_1,
		question: "",
		checkFunction: function () {
			//alert(resultMessage)
			//document.write(`${}`)
		}
	},
	{
		id: 5.2_1,
		question: "",
		checkFunction: function () {
		}
		//alert(resultMessage)
		//document.write(`${}`)
	},
	//========================================
	{
		id: 5.3_2,
		question: "",
		checkFunction: function () {

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