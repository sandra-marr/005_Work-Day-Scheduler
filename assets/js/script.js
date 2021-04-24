//use moment to pull and format the current date
var currentDate = moment().format("dddd MMMM Do, YYYY hh:mm a");
console.log(currentDate);
//use jQuery to pass the current date into the header with the DOM
var dateEl = $("#currentDay");
dateEl.text(currentDate);

var currentTime = moment().format("HH");
var time9 = moment("9:00", "HH:mm").format("HH");
var time10 = moment("10:00", "HH:mm").format("HH");
var time11 = moment("11:00", "HH:mm").format("HH");
var time12 = moment("12:00", "HH:mm").format("HH");
var time1 = moment("13:00", "HH:mm").format("HH");
var time2 = moment("14:00", "HH:mm").format("HH");
var time3 = moment("15:00", "HH:mm").format("HH");
var time4 = moment("16:00", "HH:mm").format("HH");
var time5 = moment("17:00", "HH:mm").format("HH");

var textArea = $('textarea');

var input9 = $('#9text')
var input10 = $('#10text')
var input11 = $('#11text')
var input12 = $('#12text')
var input1 = $('#1text')
var input2 = $('#2text')
var input3 = $('#3text')
var input4 = $('#4text')
var input5 = $('#5text')

var btn9 = $('#9btn')
var btn10 = $('#10btn')
var btn11 = $('#11btn')
var btn12 = $('#12btn')
var btn1 = $('#1btn')
var btn2 = $('#2btn')
var btn3 = $('#3btn')
var btn4 = $('#4btn')
var btn5 = $('#5btn')


btn9.on("click", saveInput9);
btn10.on("click", saveInput10);
btn11.on("click", saveInput11);
btn12.on("click", saveInput12);
btn1.on("click", saveInput1);
btn2.on("click", saveInput2);
btn3.on("click", saveInput3);
btn4.on("click", saveInput4);
btn5.on("click", saveInput5);

changeStatus();

function changeStatus(){

    //this is not working because the siblings are not valid. it is taking every textarea and changing it. need to fix this section
    if(currentTime > time5){
        textArea.removeClass('future');
        textArea.addClass('past');
        console.log("It is after 5pm")
    }
    if(currentTime === time5){
        input5.removeClass('future');
        input5.addClass('present');
        
        var arr = [0,1,2,3,4,5,6,7];
        for (var i=0; i < arr.length; i++){
            textArea.slice(arr[i], arr[i] + 1).removeClass('future');
            textArea.slice(arr[i], arr[i] + 1).addClass('past');
        }
    } 
    if(currentTime === time4) {
        input4.removeClass('future');
        input4.addClass('present');
        
        var arr = [0,1,2,3,4,5,6];
        for (var i=0; i < arr.length; i++){
            textArea.slice(arr[i], arr[i] + 1).removeClass('future');
            textArea.slice(arr[i], arr[i] + 1).addClass('past');
        }
    }
    if(currentTime === time3) {
        input3.removeClass('future');
        input3.addClass('present');

        var arr = [0,1,2,3,4,5];
        for (var i=0; i < arr.length; i++){
            textArea.slice(arr[i], arr[i] + 1).removeClass('future');
            textArea.slice(arr[i], arr[i] + 1).addClass('past');
        }
    }
    if(currentTime === time2) {

        input2.removeClass('future');
        input2.addClass('present');

        var arr = [0,1,2,3,4];
        for (var i=0; i < arr.length; i++){
            textArea.slice(arr[i], arr[i] + 1).removeClass('future');
            textArea.slice(arr[i], arr[i] + 1).addClass('past');
        }
    }
    if(currentTime === time1) {
        input1.removeClass('future');
        input1.addClass('present');
       
        var arr = [0,1,2,3];
        for (var i=0; i < arr.length; i++){
            textArea.slice(arr[i], arr[i] + 1).removeClass('future');
            textArea.slice(arr[i], arr[i] + 1).addClass('past');
        }
    }
    if(currentTime === time12) {
        input12.removeClass('future');
        input12.addClass('present');
      
        var arr = [0,1,2];
        for (var i=0; i < arr.length; i++){
            textArea.slice(arr[i], arr[i] + 1).removeClass('future');
            textArea.slice(arr[i], arr[i] + 1).addClass('past');
        }
    }
    if(currentTime === time11) {
        input11.removeClass('future');
        input11.addClass('present');
    
        var arr = [0,1];
        for (var i=0; i < arr.length; i++){
            textArea.slice(arr[i], arr[i] + 1).removeClass('future');
            textArea.slice(arr[i], arr[i] + 1).addClass('past');
        }
    }
    if(currentTime === time10) {
        input10.removeClass('future');
        input10.addClass('present');
        textArea.slice(0, 1).removeClass('future');
        textArea.slice(0, 1).addClass('past');
    }
    if(currentTime === time9) {
        input9.removeClass('future');
        input9.addClass('present');
        console.log("It is 9am")
    }
}

function saveInput9(event){
    event.preventDefault();
    var userInput9 = input9.val();
    console.log(userInput9);
    localStorage.setItem("user input 9", JSON.stringify(userInput9));
}

function saveInput10(event){
    event.preventDefault();
    var userInput10 = input10.val();
    console.log(userInput10);
    localStorage.setItem("user input 10", JSON.stringify(userInput10));
}

function saveInput11(event){
    event.preventDefault();
    var userInput11 = input11.val();
    console.log(userInput11);
    localStorage.setItem("user input 11", JSON.stringify(userInput11));
}
function saveInput12(event){
    event.preventDefault();
    var userInput12 = input12.val();
    console.log(userInput12);
    localStorage.setItem("user input 12", JSON.stringify(userInput12));
}
function saveInput1(event){
    event.preventDefault();
    var userInput1 = input1.val();
    console.log(userInput1);
    localStorage.setItem("user input 1", JSON.stringify(userInput1));
}
function saveInput2(event){
    event.preventDefault();
    var userInput2 = input2.val();
    console.log(userInput2);
    localStorage.setItem("user input 2", JSON.stringify(userInput2));
}
function saveInput3(event){
    event.preventDefault();
    var userInput3 = input3.val();
    console.log(userInput3);
    localStorage.setItem("user input 3", JSON.stringify(userInput3));
}
function saveInput4(event){
    event.preventDefault();
    var userInput4 = input4.val();
    console.log(userInput4);
    localStorage.setItem("user input 4", JSON.stringify(userInput4));
}
function saveInput5(event){
    event.preventDefault();
    var userInput5 = input5.val();
    console.log(userInput5);
    localStorage.setItem("user input 5", JSON.stringify(userInput5));
}


window.onload = function(userInput9, userInput10, userInput11, userInput12, userInput1, userInput2, userInput3, userInput4, userInput5){
    
    var textInput9 = JSON.parse(localStorage.getItem("user input 9"));
    console.log(textInput9);
    input9.text(textInput9);
    
    var textInput10 = JSON.parse(localStorage.getItem("user input 10"));
    console.log(textInput10);
    input10.text(textInput10);

    var textInput11 = JSON.parse(localStorage.getItem("user input 11"));
    console.log(textInput11);
    input11.text(textInput11);
    
    var textInput12 = JSON.parse(localStorage.getItem("user input 12"));
    console.log(textInput12);
    input12.text(textInput12);

    var textInput1 = JSON.parse(localStorage.getItem("user input 1"));
    console.log(textInput1);
    input1.text(textInput1);

    var textInput2 = JSON.parse(localStorage.getItem("user input 2"));
    console.log(textInput2);
    input2.text(textInput2);

    var textInput3 = JSON.parse(localStorage.getItem("user input 3"));
    console.log(textInput3);
    input3.text(textInput3);

    var textInput4 = JSON.parse(localStorage.getItem("user input 4"));
    console.log(textInput4);
    input4.text(textInput4);

    var textInput5 = JSON.parse(localStorage.getItem("user input 5"));
    console.log(textInput5);
    input5.text(textInput5);
}