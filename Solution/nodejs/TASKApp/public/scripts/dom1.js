
/*
function onInitialize(){
    console.log("On load event is occured.");

    //attach click event handler to both button
    var btn1=document.getElementById("btnHide");
    var btn2=document.getElementById("btnUnHide");

    btn1.addEventListener("click",onButtonHideClick);
    btn2.addEventListener("click",onButtonUnHideClick);
}
*/

$(document).ready(function(){
    //Event Binding
    $("#btnHide").click(onButtonHideClick);
    $("#btnUnHide").click(onButtonUnHideClick);
})

function onButtonHideClick(){
    $("#course").hide();
}

function onButtonUnHideClick(){
    $("#course").show();
    $("#fname").val("This is Ravi Tambade");
}