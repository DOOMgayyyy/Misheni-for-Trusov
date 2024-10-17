//function for create random counts min, max
function rand(min,max) {
    return Math.random() * (max - min) + min;
}
//функцтя выстрела в точку
function shootToPoint(x,y) {
    return (x === 0 && y === 0) ? 10:0;
}
//функция выстрела в ромб
function shootToRhomb(x,y){
    return((Math.abs(x) + Math.abs(y)) <= 1) ? 3:0;
}
//функция выстрела в круг
function shootToCircle(x,y){
    return(Math.sqrt(x**2 + y**2) <= 1) ? 2:0;
}
//функция выстрела в квадрат
function shootToSquare(x,y){
    return(Math.abs(x) <= 1 && Math.abs(y) <= 1) ? 1:0;
}
//функция передачи выстрелов по меншеням
function shoot(x,y){
    return shootToPoint(x,y)||
    shootToRhomb(x,y) ||
    shootToCircle(x,y) ||
    shootToSquare(x,y);
}
// выстрелы по мешени с параметрами
// function shootToTarget(countShoots, isRandom, isSpread){
//     let points = 0;
//     //проверка на заданный разброс
//     if (isSpread){
//         const spreadRadius = parseFloat( prompt ('Задайте радиус разброса:'));
//         for (let i = 0; i < countShoots; i++){
//             const angle = rand(0, 360) * Math.PI / 180
//             const preRadius = rand(0, spreadRadius)
//             var x = Math.cos(angle) * preRadius
//             var y = Math.sin(angle) * preRadius
//             points += shoot(x,y);
//         }
//     }
//     else{
//     for (let i = 0; i < countShoots; i++){
//         var x = isRandom ? rand(-2, 2):prompt('Введи x: ') - 0;
//         var y = isRandom ? rand(-2, 2):prompt('Введи y: ') - 0;
//         points += shoot(x,y);}
//     }
    
//     return points;
// }
function shootToTarget(countShoots, isRandom, isSpread) {
    let points = 0;

    if (isSpread) {
        const spreadRadius = parseFloat(document.getElementById("spreadCount").value); // Получаем радиус разброса
        for (let i = 0; i < countShoots; i++) {
            const angle = rand(0, 360) * Math.PI / 180;
            const preRadius = rand(0, spreadRadius);
            let x = Math.cos(angle) * preRadius;
            let y = Math.sin(angle) * preRadius;
            points += shoot(x, y);
        }
    } else {
        for (let i = 0; i < countShoots; i++) {
            // Используем prompt для ввода координат, если выстрелы не случайные
            let x = isRandom ? rand(-2, 2) : parseFloat(prompt('Введите координату x: '));
            let y = isRandom ? rand(-2, 2) : parseFloat(prompt('Введите координату y: '));
            points += shoot(x, y);
        }
    }

    alert(`Вы набрали ${points} очков!`);
    return points;
}


const randomCheck = document.getElementById("randomCheck"); // получаем чекбокс

const shoots = document.getElementById("bangCount"); // Count of shoots
// Преобразуем значение из поля ввода в число при необходимости
let countShoot = parseInt(shoots.value); // Преобразование строки в число

const sendButton = document.getElementById("bangButton"); // Button for shooting

const spreadCheckDiv = document.getElementById("spreadCheckDiv"); // Block DIV for check random
const spreadCount = document.getElementById("spreadCount")// Counts of spread


sendButton.addEventListener("click", function() {
    const countShoot = parseInt(shoots.value); // Получаем количество выстрелов

    if (isNaN(countShoot) || countShoot <= 0) {
        alert("Введите корректное количество выстрелов!");
        return;
    }

    const isRandom = randomCheck.checked; // Проверяем, случайные ли выстрелы
    const isSpread = !spreadCheckDiv.classList.contains("hidden"); // Проверяем, включён ли разброс

    // Вызываем функцию для выстрелов
    shootToTarget(countShoot, isRandom, isSpread);
});




randomCheck.addEventListener("change", function() {
    if (randomCheck.checked) {
        spreadCheckDiv.classList.remove("hidden"); // unVanish block
    } else {
        spreadCheckDiv.classList.add("hidden"); // Vanish block
    }
});






