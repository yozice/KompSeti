function popup() {
    alert("Hello!");
}
function digitalWatch() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    document.getElementById("digital_watch").innerHTML = hours + ":" + minutes + ":" + seconds;
    setTimeout("digitalWatch()", 1000);
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
function calendar() {
    var today = new Date();
    var year = today.getFullYear();
    var day = today.getDate();
    var month = today.getMonth()+1;
    day = checkTime(day);
    month = checkTime(month);
    document.getElementById('calendar').innerHTML = "Date: " + day + "." + month + "." + year;
}