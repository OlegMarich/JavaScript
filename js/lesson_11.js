const questions = [
	{
		id: 5.1_1,
		question: "",
		checkFunction: function () {
			//document.write(`<div>${}</div><div><a href="../components/lesson9.html">Повернутися до уроку</a></div>`)
		}
	},
	// ========================================================================================================================================
	{
		id: 5.2_1,
		question: "",
		checkFunction: function () {
			//document.write(`<div>${}</div><div><a href="../components/lesson9.html">Повернутися до уроку</a></div>`)
		}
	},
	// ========================================================================================================================================
	{
		id: 5.3_1,
		question: "З клавіатури вводяться числа до тих пір, поки послідовність є зростаючою або спадною",
		checkFunction: function () {
			function getSeq() {
				let fisrtNumber = parseFloat(prompt("Введіть перше число")) //перше число
				let secondNumber = parseFloat(prompt("Введіть друге число")) //друге число
				let initalDiff = secondNumber - fisrtNumber
				let arr = [fisrtNumber, secondNumber]
				do {
					let num = parseFloat(prompt("Введіть число")) //наступне число, яке вводиться до того часу, поки відповідає умові
					let newDiff = num - arr.at(-1)// .att(-1) .length(-1) пошук останнього елементу в масиві
					if (newDiff * initalDiff > 0) {
						arr.push(num)
					}
					else break
				} while (true)
				return arr
			}
			let seq = getSeq()
			document.write(`<div>${seq.join(', ')}</div>`)
			document.write(`<div><a href="../components/lesson11.html">Повернутися до уроку</a></div>`)
		}
	},
	{
		id: 5.3_3,
		question: "Знайти суму числа, що знаходиться між першою цифрою 7 і останньою цифрою 7 (у числі є всього дві цифри 7б наприклад: 2679328712)",
		checkFunction: function () {
			//щоб знайти останню цифру, необхідно застосувати num%10 num = 429 num%10 = 9
			//щоб відкинути останню цифру: num = 429, num = Math.floor(num / 10) 
			function getSumBetween7(num) {
				//знаходимо першу 7(відкидаємо останні цифри)
				


			}
		//document.write(`<div>${arr.join(', ')}</div>`)
			//document.write(`<div><a href="../components/lesson11.html">Повернутися до уроку</a></div>`)
		}
	},
	{
		id: 5.3_2,
		question: "",
		checkFunction: function () {
		//document.write(`<div>${arr.join(', ')}</div>`)
			//document.write(`<div><a href="../components/lesson11.html">Повернутися до уроку</a></div>`)
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