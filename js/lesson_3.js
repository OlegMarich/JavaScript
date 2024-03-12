const questions = [
	{
		id: 1,
		question: "  З клавіатури вводяться імена двох дітей та кількість у них цукерок. Вивести не екран ім’я тієї дитини, у якої кількість цукерок є більшою, або вивести, що кількість однакова.",
		checkFunction: function () {
			let childOneName = prompt('Введіть ім\'я першої дитини');
			let childOneCandies = parseInt(prompt(`Скільки цукерок у ${childOneName}?`));

			let childTwoName = prompt('Введіть ім\'я другої дитини');
			let childTwoCandies = parseInt(prompt(`Скільки цукерок у ${childTwoName}?`));

			let resultMessage;

			if (childOneCandies > childTwoCandies) {
				resultMessage = `${childOneName} має більше цукерок`;
			} else if (childOneCandies < childTwoCandies) {
				resultMessage = `${childTwoName} має більше цукерок`;
			} else {
				resultMessage = `Кількість цукерок у ${childOneName} та ${childTwoName} однакова`;

			}

			alert(resultMessage)
			//document.getElementById('lessons-page__ansver').innerText = resultMessage;
		}
	},
	{
		id: 2,
		question: "З клавіатури вводиться ціна товару і кількість грошей. Якщо грошей не вистачає то відмовляємо у покупці, інакше,	якщо ще залишаються гроші, то пропонуємо купити лотерею за 4 грн.",
		checkFunction: function () {
			// Додайте перевірку для другого питання
			let priceOfTheGoods = prompt('Ціна товару')
			let amountOfMoney = parseInt(prompt(`Наявна кількість коштів`))

			if (amountOfMoney < priceOfTheGoods) {
				resultMassage = 'У Вас недостатньо коштів для даної покупки, спробуйте іншого разу'
			} else if (amountOfMoney > priceOfTheGoods) {
				resultMassage = 'Все добре, у Вас залишилась решта. Бажаєте придбати лоторейного квитка? Його вартість 4 грн.'
			}
			alert(resultMassage)
		}

	},
	{
		id: 3,
		question: "Випадковим чином генерується число від 1 до 5. Спробуйте вгадати число за 2 спроби.",
		checkFunction: function () {
			// Додайте перевірку для другого питання
			const minValue = 1;
			const maxValue = 5;
			const randNumber = minValue + Math.floor(Math.random() * (maxValue - minValue + 1));
			let userNum = parseInt(prompt('Введіть число'));

			if (userNum === randNumber) {
				alert('Ви вгадали');
			} else {
				userNum = parseInt(prompt('Ви не вгадали. Введіть число знову'));
				if (userNum === randNumber) {
					alert('Ви вгадали');
				} else {
					alert('Ви не вгадали. Спробуйте наступного разу');
				}
			}
		}
	},
	{
		id: 4,
		question: "З клавіатури вводиться вік людини. Вивести на екран ким він є (дитиною у садочку, школярем, студентом, працівником, пенсіонером).",
		checkFunction: function () {
			// Додайте перевірку для другого питання
			let userAge = parseInt(prompt('Скільки Вам років?'));

			if (userAge < 1 || userAge > 150) {
				result = 'Некоректний вік'
			} else if (userAge <= 7) {
				result = 'Дитина у садочку'
			} else if (userAge <= 17) {
				result = 'Дитина у школі'
			} else if (userAge <= 22) {
				result = 'Студент'
			} else if (userAge <= 65) {
				result = 'Працівник'
			}
			else result = 'Пенсіонер'
			alert(result)
		}
	},
	{
		id: 5,
		question: "З клавіатури вводиться назва категорії водія (А-мотоцикл, В-легковий автомобіль, С-вантажний автомобіль). Вивести на	екран назву транспортного засобу, яким він може керувати. (Мова введення Англійська)",
		checkFunction: function () {
			// Додайте перевірку для другого питання
			let userLicenceCategory = prompt('Посвідчення водія якої категорії у Вас');
			let result
			switch (userLicenceCategory) {
				case 'A':
					result = 'Мотоцикл'
					break;
				case 'B':
					result = 'Легковий автомобіль'
					break;
				case 'C':
					result = 'Вантажний автомобіль'
					break;

				default:
					result = 'unknown'
					break;
			}

			alert(result)
		}
	},
	{
		id: 6,
		question: "З клавіатури вводиться номер дня тижня. Вивести на екран назву дня.",
		checkFunction: function () {
			// Додайте перевірку для другого питання
			let dayOfTheWeek = prompt('Виберіть день');
			let result
			switch (dayOfTheWeek) {
				case '1':
					result = 'Понеділок'
					break;
				case '2':
					result = 'Вівторок'
					break;
				case '3':
					result = 'Середа'
					break;
				case '4':
					result = 'Четвер'
					break;
				case '5':
					result = 'П\'ятниця'
					break;
				case '6':
					result = 'Субота'
					break;
				case '7':
					result = 'Неділя'
					break;

				default:
					result = 'unknown'
					break;
			}

			alert(result)
		}
	},
	{
		id: 7,
		question: "З клавіатури вводиться номер місяця. Вивести до якої пори він відноситься",
		checkFunction: function () {
			// Додайте перевірку для другого питання
			const monthNumber = parseInt(prompt('Виберіть місяць(від 1 до 12)'));

			if (monthNumber >= 1 && monthNumber <= 12) {
				let season

				if (monthNumber >= 3 && monthNumber <= 5) {
					season = 'весна'
				} else if (monthNumber >= 6 && monthNumber <= 8) {
					season = 'літо'
				} else if (monthNumber >= 9 && monthNumber <= 11) {
					season = 'осінь'
				} else {
					season = 'зима'

				} alert(season)
			} else { 'Введено некоректний номер місяця. Будь ласка, введіть число від 1 до 12.' }
		}
	},
	{
		id: 2,
		question: "Текст питання 2",
		checkFunction: function () {
			// Додайте перевірку для другого питання
		}
	},
	// Додайте інші питання
];

function showQuestion(questionId) {
	const questionObj = questions.find(question => question.id === questionId);
	if (questionObj) {
		questionObj.checkFunction();
	} else {
		document.getElementById('question-content').innerText = "Це питання відсутнє";
	}
}
