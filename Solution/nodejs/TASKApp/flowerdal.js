//a Separate responsibility  for  Flowers database crud operation

var sql = require('./mysqlconnect');

//model

var Flower = function(Flower){
    this.Id=Flower.Id
    this.Title = Flower.Title;
    this.Description = Flower.Description;
    this.UnitPrice = Flower.UnitPrice;
    this.Quantity = Flower.Quantity;
    this.ImageUrl=Flower.ImageUrl;
};

Flower.createFlower = function (newFlower, result) {  

        console.log("New flower to be added ");
        console.log(newFlower);
        sql.query("INSERT INTO flowers set ?", newFlower, function (err, res) {
                if(err) {
                  console.log("error: ", err);
                  result(err, null);
                }
                else{
                  console.log(res.insertId);
                  result(null, res.insertId);
                }
            });           
};

Flower.getFlowerById = function (FlowerId, result) {
        sql.query("Select * from flowers where Id = ? ", FlowerId, function (err, res) {             
                if(err) {
                  console.log("error: ", err);
                  result(err, null);
                }
                else{
                  result(null, res);     
                }
            });   
};


Flower.getAllFlower = function (result) {
      console.log("Invoking dal getall Flowers");
      
        sql.query("Select * from flowers", function (err, res) {
                if(err) {
                  console.log("error: ", err);
                  result(null, err);
                }
                else{
                  console.log('Flowers : ', res);  
                  result(null, res);
                }
            });   
};

Flower.updateById = function(id, Flower, result){

  sql.query("UPDATE flowers SET Title = ? WHERE Id = ?", [Flower.Title, id], 
              function (err, res) {
                  if(err) {
                        console.log("error: ", err);
                        result(null, err);
                    }
                  else{   
                    result(null, res);
                    }
                }); 
};


Flower.remove = function(id, result){
    sql.query("DELETE FROM flowers WHERE Id = ?", [id],
                function (err, res) {
                  if(err) {
                      console.log("error: ", err);
                      result(null, err);
                  }
                  else{
                      result(null, res);
                  }
            }); 
};

module.exports=Flower;