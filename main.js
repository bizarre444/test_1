var btn = document.getElementById('btn');
// console.log(btn);

btn.addEventListener('click', function(){
    var x = +document.getElementById('first_num').value;
    // console.log(x);
    var y = +document.getElementById('second_num').value;
    // console.log(y);
    result = x + y;
    alert('Результат: ' + Math.round(result*10)/10);
})