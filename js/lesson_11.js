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
		id: 5.3_2,
		question: "Знайти суму числа, що знаходиться між першою цифрою 7 і останньою цифрою 7 (у числі є всього дві цифри 7б наприклад: 2679328712)",
		checkFunction: function () {
			//щоб знайти останню цифру, необхідно застосувати num%10 num = 429 num%10 = 9
			//щоб відкинути останню цифру: num = 429, num = Math.floor(num / 10) 
			function getSumBetween7(num) {
				//знаходимо першу 7(відкидаємо останні цифри)
				let digit
				do {
					digit = num % 10
					num = Math.floor(num / 10)
				} while (digit !== 7)

				let sum = 0
				do {
					digit = num % 10
					num = Math.floor(num / 10)
					if (digit !== 7) sum += digit
				} while (digit !== 7)
				return sum
			}

			let sum = getSumBetween7(2679328712)
			document.write(`<div>Додаток чисел між 7: ${sum}</div>`)
			//document.write(`<div><a href="../components/lesson11.html">Повернутися до уроку</a></div>`)
		}
	},
	{
		id: 5.3_3,
		question: "Комп'ютер загадує два випадкових числа від 1 до 10. Вгадати обидва числа шляхом введення можливих варіантів. В кінці вивести кількість спроб користувача.",
		checkFunction: function () {
			const firstNumber = 1 + Math.floor(Math.random() * 10)
			const secondNumber = 1 + Math.floor(Math.random() * 10)

			let firstNumberFound = false
			let secondNumberFound = false
			let count = 0

			do {
				let num = parseInt(prompt('Введіть Ваше число'))
				if (num === firstNumber) {
					firstNumberFound = true
				} else if (num === secondNumber) {
					secondNumberFound = true
				}
				count++
			} while (!firstNumberFound || !secondNumberFound);

			document.write(`<div>Перше число: ${firstNumber}, друге число: ${secondNumber}</div>`);
			document.write(`<div>Кількість спроб користувача: ${count}</div>`);
			document.write(`<div><a href="../components/lesson11.html">Повернутися до уроку</a></div>`);
		}
	},
	{
		id: 5.3_4,
		question: "Створити функцію, яка для 3 заданих чисел знаходить одночасно декілька результатів: кількість парних, кількість додатних, кількість більших за 100.",
		checkFunction: function () {
			function getEvenNumber(n1, n2, n3) {
				let count = 0
				if (n1 % 2 === 0) count++
				if (n2 % 2 === 0) count++
				if (n3 % 2 === 0) count++
				return count
			}

			function getPositiveNumber() {
				let count = 0
				for (let i = 0; i < arguments.length; i++) {
					if (arguments[i] > 0)
						count++
				}
				return count
			}

			function getNumberGr100(...arr) {
				//let count = 0
				// for (let i = 0; i < arr.length; i++) {
				// 	if (arr[i] % 2 > 100)
				// 		count++
				// }
				//return count

				return arr.reduce(
					(prevCount, el) => el > 100 ? prevCount + 1 : prevCount,
					0
				)
			}

			function getResult(n1, n2, n3) {
				let evenNumber = getEvenNumber(n1, n2, n3)
				let positveNumber = getPositiveNumber(n1, n2, n3)
				let numberGr100 = getNumberGr100(n1, n2, n3)
				return [evenNumber, positveNumber, numberGr100]
			}

			let arr = getResult(2, 4, 101)
			let evenNumber = arr[0]
			let positiveNumber = arr[1]
			let numberGr100 = arr[2]
			
			document.write(`<div>Парне число: ${evenNumber}</div>`)
			document.write(`<div>Число більше за 0: ${positiveNumber}</div>`)
			document.write(`<div>Число більше за 100: ${numberGr100}</div>`)
			//document.write(`<div>Кількість спроб користувача: ${count}</div>`)
			//document.write(`<div>Кількість спроб користувача: ${count}</div>`)
		
			document.write(`<div><a href="../components/lesson11.html">Повернутися до уроку</a></div>`)
		}
	},
	// {
	// 	id: 5.3_,
	// 	question: "",
	// 	checkFunction: function () {
	//document.write(`<div>Кількість спроб користувача: ${count}</div>`);
	// 		//document.write(`<div>${}</div><div><a href="../components/lesson11.html">Повернутися до уроку</a></div>`)
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