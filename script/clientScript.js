var question1;
var question2;
var question3;

function loadTest() {
    var number1 = Math.floor(Math.random()*20+1);
    var number2 = Math.floor(Math.random() * 20 + 1);
    question1 = eval(number1 + "+" + number2);
    document.getElementById('question1').innerHTML = number1 + "+" + number2;
    number1 = Math.floor(Math.random()*20+1);
    number2 = Math.floor(Math.random()*20+1);
    question2 = eval(number1 + "-" + number2);
    document.getElementById('question2').innerHTML = number1 + "-" + number2;
    number1 = Math.floor(Math.random() * 20 + 1);
    number2 = Math.floor(Math.random() * 20 + 1);
    question3 = eval(number1 + "+" + number2);
    document.getElementById('question3').innerHTML = number1 + "+" + number2;
}

function ArithmeticTest() {
    var correctAnswersNumber = 0;
    answer1 = document.getElementById('answer1').value;
    answer2 = document.getElementById('answer2').value;
    answer3 = document.getElementById('answer3').value;
    if (answer1 == "")
        alert("На 1 вопрос не был дан ответ");
    if (answer2 == "")
        alert("На 2 вопрос не был дан ответ");
    if (answer3 == "")
        alert("На 3 вопрос не был дан ответ");
    if (answer1 == eval(question1).toString() &&
        answer2 == eval(question2).toString() &&
        answer3 == eval(question3).toString())
        CreateWindow(true);
    else
        CreateWindow(false);
}

function CreateWindow(right) {
    var newwindow2 = window.open('', 'Результат', 'height=200,width=200');
    var tmp = newwindow2.document;
    tmp.write('<html><head><title>Результат</title>');
    tmp.write('</head><body>');
    if (right)
        tmp.write('<div>Все правильно!</div>');
    else
        tmp.write('<div>Не все ответы правильные</div>');
    tmp.write('<p><a href="javascript:self.close()">Закрыть</a></p>');
    tmp.write('</body></html>');
    tmp.close();
}

function MovingBanner(progress, right) {
    banner = document.getElementById("MovingBanner");
    if (progress > banner.parentNode.offsetWidth - banner.offsetWidth)
        right = false;
    if (progress < 0)
        right = true;
    if (right)
        progress += 10;
    else
        progress -= 10;
    banner.style.left = progress + "px";
    setTimeout(function () { MovingBanner(progress,right); }, 100);
}