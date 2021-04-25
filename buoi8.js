

var x = document.getElementById("email").value;
var y = document.getElementById("pass").value;
if (x == 'example@gmail.com' && y == '123'){
    function dieu_huong(){
        location.assign("file:///D:/webdieuhuong.html");
    }
}
else if (x != 'example@gmail.com' && y == '123'){
    alert('try again')
}
else if (x == 'example@gmail.com' && y != '123'){
    alert('try again')
}
else {
    alert('try again')
}