var express = require("express");
const { request } = require("http");
var path = require("path");
var app = express();
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:'true'}))
app.use(express.json());

var flowers = [
    {id:1,name:"Rose",color:"Red"},
    {id:2,name:"Tulip",color:"Yellow"},
    {id:3,name:"Lily",color:"White"},
    {id:4,name:"Daisy",color:"Pink"},
    {id:5,name:"Sunflower",color:"Orange"}

];

var costumes = [
 { "id":"1","firstname":"om","lastname":"ghewade","age":"25",},
 { "id":"2","firstname":"rudra","lastname":"gurung","age":"30",},
 { "id":"3","firstname":"pratham","lastname":"shirol","age":"22",},
 { "id":"4","firstname":"yash","lastname":"jagtap","age":"28",}  
];

var credintials = [
    {"username":"om","password":"123"},
    {"username":"rudra","password":"123"},
    {"username":"pratham","password":"123"},];

app.post("/api/login",(request,responce)=>{
    let username = request.body.username;
    let password = request.body.password;
    let user = credintials.find(x=>x.username==username && x.password==password);
    
    if(user){
        responce.send("you are logged in successfully");
    }
    else{
        responce.send("invalid username or password");
    }
});
app.post("/api/register",(request,responce)=>{
    let username = request.body.username;
    let password = request.body.password;
    let user = credintials.find(x=>x.username==username);

        credintials.push({username:username,password:password});
        
        responce.send("you are registered successfully");
        
}   );
app.get("/api/flowers",(request,responce)=>{

    responce.json(flowers);
});
app.get("/api/flowers/:id",(request,responce)=>{
    let id = request.params.id;
    costumes= costumes.find(x=>x.id==id);
  
    responce.json(costumes);
})


app.get("/",function(req,res){
    res.sendFile("index.html");
});


app.listen(8080);

