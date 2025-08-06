
// SOC : Separation of Concern
// Decoupled solution
//Your software development is just a reflection of your livelihood.
//External Javascript file
var onGetData=function(){

    // by  using Document Object Model
    var firstname=document.getElementById("firstname").value;
    var lasttname=document.getElementById("lastname").value;
    pFullName=document.getElementById("fullname");
    // pFullName.innerHTML= "<ol><li>Salman Khan</li><li>Shaharukh Khan</li><li>Ameer Khan</li></ol>";         
    pFullName.innerHTML=firstname + " " + lasttname;
}

var onPing=function(){
    var person={
                    firstname:'Reena',
                    lastname:'Nene'
                };
    var pTitle1=document.getElementById("ptitle1");
    pTitle1.innerHTML="Ping";
}

var onPong=function(){
    var pTitle1=document.getElementById("ptitle2");
    pTitle1.innerHTML="Pong";
}