// Ячейки попадания
// var location1 = 3;
// var location2 = 4;
// var location3 = 5;

// Версия с рандомными числами
var randomLoc = Math.floor(Math.random()*5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;

var guess; // Ячейка попытки
var hits = 0; // Количество попаданий
var guesses = 0; // Количество попыток
var isSunk = false; //Потоплен корабль

while (isSunk == false) {
    guess = prompt("Готов, стреляй! Введи координату ячейки от 0 до 6!");
    if (guess < 0 || guess > 7) {
        alert('Сказано же блять введи от 0 до 6')
    }  else {
        guesses++;
        if (guess == location1 || guess == location2 || guess == location3){
            hits++;
            alert('Попал')
            
            if (hits == 3) {
                isSunk = true;
            }
        } else {
            alert("Промах")
        }
    }
}

var messageWin = `Ты потом мой корябль ${hits}-мя попадниями за ${guesses} попытки`;
alert(messageWin);