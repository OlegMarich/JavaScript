const questions = [
	{
		id: 5.1_1,
		question: "",
		checkFunction: function () {
			//alert(resultMessage)
			//document.write(`${}`)
		}
	},
	// {
	// 	id: 5.1_1,
	// 	question: "",
	// 	checkFunction: function () {
	// 		//alert(resultMessage)
	// 		//document.write(`${}`)
	// 	}
	// },

	// ======================================
	{
		id: 5.2_1,
		question: "",
		checkFunction: function () {
			//alert(resultMessage)
			//document.write(`${}`)
		}
	},
	// {
	// 	id: 5.2_,
	// 	question: "",
	// 	checkFunction: function () {
	// 	}
	// 	//alert(resultMessage)
	// 	//document.write(`${}`)
	// },
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
			//alert(resultMessage)
			document.write(`Сума чисел = ${s}`)
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

			document.write(`Загальна вартість оренди = ${money}`)
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
			//alert(resultMessage)
			document.write(`Заробіток банку становить ${profit}`)
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

			//alert(resultMessage)
			document.write(`Путівка коштує = ${total}`)
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

			document.write(`Ширина елемента = ${elementWidthInPx}px`)
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
			//document.write(`${}`)
		}
	}
	// {
	// 	id: 5.3_,
	// 	question: "",
	// 	checkFunction: function () {
	// 		//alert(resultMessage)
	// 		//document.write(`${}`)
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