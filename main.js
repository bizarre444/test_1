var btn = document.getElementById('btn');
// console.log(btn);

btn.addEventListener('click', function(){
    var x = +document.getElementById('first_num').value; //получаем первое введенное значение, по умолчанию 0.1
    // console.log(x);
    var y = +document.getElementById('second_num').value; //получаем второе введенное значение, по умолчанию 0.2
    // console.log(y);
    result = x + y;
    alert('Результат: ' + Math.round(result*10)/10); //выводим результат, попутно округляя до необходимого количество знаков после запятой
})