const questions = [
	{
		id: 8,
		question: "З клавіатури вводиться номер дня тижня (від 1 до 7). Визначити який буде тижня через N днів.",
		checkFunction: function () {
			const currentDayNum = parseInt(prompt('Current day'))
			const n = parseInt(prompt('n='))

			const newDayNum = ((currentDayNum - 1 + n) % 7) + 1

			document.write(`New day number = ${newDayNum}`)
		}
	},
	{
		id: 9,
		question: "Зашифрувати один введений англійський символ у верхньому регістрі методом зміщення",
		checkFunction: function () {
			//newValve = (curentValve - min + N) % (max - min + 1) + min
			const initialChar = prompt('Початковий символ')
			const shift = parseInt(prompt('Ведіть зміщення'))
			const initialCharCode = initialChar.charCodeAt(0)

			const newCharCode = ((initialCharCode - 65 + shift) % 26) + 65
			const newChar = String.fromCharCode(newCharCode)

			document.write(`${initialChar} => ${newChar}`)
		}
	},
	{
		id: 10,
		question: "З клавіатури вводиться орендна плата за місяць. Визначити на скільки місяців вистачить вказаної суми грошей, а також скільки повних років",
		checkFunction: function () {
			const rentPerMonth = parseFloat(prompt('Введіть оренду за місяць'))
			const userMoney = parseFloat(prompt('Скільки є грошей'))
			const totalMonth = Math.floor(userMoney / rentPerMonth)
			const totalYear = Math.floor(totalMonth / 12)

			document.write(`Місяців : ${totalMonth} <br>`)
			document.write(`Років : ${totalYear}`)
		}
	},
	{
		id: 11,
		question: "Потрібно перевести N учнів у автобусах з M місцями. Визначити скільки потрібно автобусів",
		checkFunction: function () {
			const puplesNumber = parseInt(prompt('Кількість учнів'))
			const saetsInBusNumber = parseInt(prompt('Кількість місць в автобусі'))

			const busNumber = Math.ceil(puplesNumber / saetsInBusNumber)

			document.write(`Необхідна кількість автобусів : ${busNumber}`)
		}
	},
	{
		id: 12,
		question: "Цв'ях довжиною L забивають в дошку. За один удар цв'ях заглиблюється на в дерево на K мм. За скільки ударів цв'ях забють в дошку",
		checkFunction: function () {
			const nailLenth = parseFloat(prompt('Довжина цв’яху в сантиметрах'))
			const hitLenth = parseFloat(prompt('Сила удару в міліметрах'))

			const hitNumber = Math.ceil(nailLenth * 10 / hitLenth)

			document.write(`Необхідно ${hitNumber}`)
		}
	},
	{
		id: 13,
		question: "Вводиться кількість місяців. Вивести кількість повних років і місяців",
		checkFunction: function () {
			const totalMonth = parseInt(prompt('Введіть повну кількість місяців'))
			const yearNum = Math.floor(totalMonth / 12)

			const monthNum = totalMonth % 12

			document.write(`${totalMonth} місяців => ${yearNum} р. ${monthNum} міс.`)
		}
	},
	{
		id: 14,
		question: "Випадковим чином генерується число від 1 до 5. Спробуйте вгадати число за 2 спроби",
		checkFunction: function () {
			//const randNum = min + Math.floor(Math.random()*(max - min + 1))

			const randNum = 1 + Math.floor(Math.random() * 5)
			let userNumber = parseInt(prompt('Введіть випадкове число від 1 до 5'))
			if (userNumber === randNum)
				alert('Вгадав. Молодець!')
			else {
				userNumber = parseInt(prompt('Шкода, ви не вгадали. Спробуйте ще раз'))
				if (userNumber === randNum)
					alert('Перемога')
				else
					alert(`Ви не вгадали загадане число : ${randNum}`)
			}
		}
	},
	{
		id: 15,
		question: "З клавіатури вводиться ціна товару і кількість грошей. Якщо грошей не вистачає то відмовляємо у покупці, інакше,	якщо ще залишаються гроші, то пропонуємо купити лотерею за 4 грн.",
		checkFunction: function () {
			const userMoney = parseFloat(prompt('Кільлкість грошей користувача'))
			const productPrice = parseFloat(prompt('Введіть ціну товару'))
			const loteryPrice = 4

			if (userMoney < productPrice)
				alert('У вас недостатньо коштів')
			else {
				alert('Вітаємо з вдалою покупкою')
				const change = userMoney - productPrice
				if (change >= loteryPrice)
					alert('Ви можете придбати лоторею')
				else alert('У вас недостатньо коштів для придбання лоторейного квитка')
			}
		}

	},
	{
		id: 16,
		question: "З клавіатури вводиться вік людини. Вивести на екран ким він є (дитиною у садочку, школярем, студентом, працівником, пенсіонером).",
		checkFunction: function () {
			const userAge = parseInt(prompt('Введіть вік'))
			let userStatus
			if (userAge < 7)
				userStatus = 'У садочку'
			else if (userAge < 17)
				userStatus = 'У школі'
			else if (userAge < 22)
				userStatus = 'В університеті'
			else if (userAge < 65)
				userStatus = 'На роботі'
			else
				userStatus = Пенсіонер
			alert(`${userStatus}`)
		}
	},
	{
		id: 17,
		question: "З клавіатури вводиться назва категорії водія (А-мотоцикл, В-легковий автомобіль, С-вантажний автомобіль). Вивести на	екран назву транспортного засобу, яким він може керувати. (Мова введення Англійська)",
		checkFunction: function () {
			const category = prompt('Категорія')
			let vehType
			switch (category.toUpperCase()) {
				case 'A': vehType = 'Мотоцикл'
					break;
				case 'B': vehType = 'Легковий автомобіль'
					break;
				case 'C': vehType = 'Вантажний автомобіль'
					break;

				default: vehType = 'Невідомий транспорт'
					break;
			}
			//alert(`${}`)
			document.write(`${vehType}`)
		}
	},
	{
		id: 18,
		question: "Вводиться назва фреймворку 'Vue', 'React', 'Express'. Вивести для який цілей вони використовуються",
		checkFunction: function () {
			const frameworkTitle = prompt('Введіть назву фреймворку')
			let frameworkType = 'front'
			switch (frameworkTitle.toLowerCase()) {
				case 'vue':
				case 'react':
					frameworkType = 'front'
					break;
				case 'express':
					frameworkType = 'back'
				default:
					frameworkType = 'щось інше'
					break;
			}
			//alert(`${}`)
			document.write(`${frameworkTitle} -> ${frameworkType}`)
		}
	},
	{
		id: 19,
		question: "Вводиться тип користувача",
		checkFunction: function () {
			const userType = prompt('Введіть тип користувача')
			switch (userType) {
				case 'admin':
					alert('add')
				case 'manadger':
					alert('edit')
				case 'user':
					alert('read')
					break;

				default:
					alert('Невідомо')
					break;
			}
			//alert(`${}`)
			//document.write(`${}`)
		}
	},
	{
		id: 20,
		question: "Знайти найбільше серед трьох",
		checkFunction: function () {
			// (1)
			//Знайти найбільше з двох чисел
			// const num1 = parseFloat(prompt('Num1'))
			// const num2 = parseFloat(prompt('Num2'))
			// let max
			// if (num1 > num2) max = num1
			// else max = num2
			// alert(`Max = ${max}`)
			//document.write(`${}`)

			// (2)
			//Найбільше серед двох замінити на 0.
			// let num1 = parseFloat(prompt('Num1'))
			// let num2 = parseFloat(prompt('Num2'))
			// if (num1 === num2)
			// 	alert('Числа одинакові')
			// else {
			// 	if (num1 > num2) num1 = 0
			// 	else num2 = 0
			// 	alert(`num1 = ${num1}, num2 = ${num2}`)
			// }
			//document.write(`${}`)

			// // (3)
			// //Дано три значення. Значення більше за середнє замінити на 0.
			// let num1 = parseFloat(prompt('Num1'))
			// let num2 = parseFloat(prompt('Num2'))
			// let num3 = parseFloat(prompt('Num3'))

			// const avarage = (num1 + num2 + num3) / 3

			// if (num1 > avarage) num1 = 0
			// if (num2 > avarage) num2 = 0
			// if (num3 > avarage) num3 = 0

			// alert(`num1 = ${num1}, num2 = ${num2}, num3 = ${num3}`)

			// //document.write(`${}`)

			// (4)
			//Знайти найбільше серед трьох.
			const num1 = parseFloat(prompt('Num1'))
			const num2 = parseFloat(prompt('Num2'))
			const num3 = parseFloat(prompt('Num3'))
			const num4 = parseFloat(prompt('Num3'))

			let max = num1
			if (num2 > max) max = num2
			if (num3 > max) max = num3
			if (num4 > max) max = num4
			alert(`Max = ${max}`)

			//document.write(`${}`)
		}
	},
	{
		id: 21,
		question: "Вправи з числами",
		checkFunction: function () {
			//Задано 3 числа. Знайти найменше серед додатних(>0)
			const num1 = parseFloat(prompt('Num1'))
			const num2 = parseFloat(prompt('Num2'))
			const num3 = parseFloat(prompt('Num3'))

			let max = -Infinity
			if (num1 < 0 && num1 > max) max = num1
			if (num2 < 0 && num2 > max) max = num2
			if (num3 < 0 && num3 > max) max = num3
			if (isFinite(max)) alert(`Max = ${max}`)
			else alert('Немає від`ємних')
		}
	},
	{
		id: 22,
		question: "Вправи з числами",
		checkFunction: function () {
			//Знайти найбільше з двох чисел
			//1) https://cdn.meteoprog.net/thumbnails/newsweather/cropr_784x441/big_602456.jpg?1643968800
			//2) https://viche.ck.ua/wp-content/uploads/2020/01/14022017110052123573.jpg
			//3) https://www.iphones.ru/wp-content/uploads/2017/03/mb_gt.jpg

			const randChoise = 1 + Math.floor(Math.random() * 3)
			let imgPath
			switch (randChoise) {
				case 1:
					imgPath = 'https://cdn.meteoprog.net/thumbnails/newsweather/cropr_784x441/big_602456.jpg?1643968800'
					break;
				case 2:
					imgPath = 'https://viche.ck.ua/wp-content/uploads/2020/01/14022017110052123573.jpg'
					break;
				case 3:
					imgPath = 'https://www.iphones.ru/wp-content/uploads/2017/03/mb_gt.jpg'
					break;
			}
			//alert(`<img src="${imgPath}">`)
			document.write(`<img src="${imgPath}" alt="Image">`)
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
