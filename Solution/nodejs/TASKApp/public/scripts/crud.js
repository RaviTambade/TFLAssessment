            //first fetch data from server
            //url  http://localhost:9898/api/flowers
            
            // PRC : Remote Procedural Call
            //ready made API provided by one standard javascript library
            //Library : jQuery 
            //set of reusable  javascript functions

            var  readAllData=function(data){

                var html = [];
                html.push("<table><thead><tr><th>ID</th><th>Title</th><th>Unit Price</th><th>Stcok Available</th><th>Action</th></tr></thead>");
                
                //insert  new Table  row for each json object received from REST API

                for(var i=0; i<data.length; i++) {
                    html.push("<tr>");
                    html.push("<td>");
                    html.push(data[i].id);
                    html.push("</td>");
                    html.push("<td>");
                    html.push(data[i].name);
                    html.push("</td>");
                    html.push("<td>");
                    html.push(data[i].unitprice);
                    html.push("</td>");
                    html.push("<td>");
                    html.push(data[i].quantity);
                    html.push("</td>");
                    html.push("<td>");
                    html.push("<a href='/details.html'>Details</a>");
                    html.push("</td>");
                    html.push("</tr>");
                }
        
            html.push("</table>");
            document.getElementById("pId").innerHTML=JSON.stringify(data);
            var div1=document.getElementById("divData");
            div1.innerHTML=html.join('');
            };

            var  readOneData=function(data){
                var html = [];
                html.push("<table><thead><tr><th>ID</th><th>Title</th><th>Unit Price</th><th>Stcok Available</th></tr></thead>");               
                    html.push("<tr>");
                    html.push("<td>");
                    html.push(data.id);
                    html.push("</td>");
                    html.push("<td>");
                    html.push(data.name);
                    html.push("</td>");
                    html.push("<td>");
                    html.push(data.unitprice);
                    html.push("</td>");
                    html.push("<td>");
                    html.push(data.quantity);
                    html.push("</td>");
                    html.push("</tr>");   
        
            html.push("</table>");
            document.getElementById("pId").innerHTML=JSON.stringify(data);
            var div1=document.getElementById("divData");
            div1.innerHTML=html.join('');
            };

        // Invoke server side data 

        var dataUrl="http://localhost:3000/flowers";
        //CRUD AJax Call client side

        //Create Ajax call
        var onInsert=function(){
            //Ajax call for Delete
            // This function will fetch data from above url
            $.ajax({
            url:dataUrl,  // which url
            type:"POST",  // What is the type of request
            success:function(data){
                        console.log(data);
                        readAllData(data);
                    },
            error:function(err){
                        console.log(err);
                    }
        });

        }

        // Read Ajax call
        var onGetAll=function(){

                // This function will fetch data from above url
                // from external world data will be fetched
                // using  Ajax

            $.ajax({
                url:dataUrl,  // which url
                type:"GET",  // What is the type of request
                success:function(data){
                            console.log(data);
                            readAllData(data);
                        },
                error:function(err){
                            console.log(err);
                        }
            });
        }
       
// Read Ajax call
var onGetById=function(){

      // get the id selected from session stroage

      var id=4;
            // This function will fetch data from above url
        $.ajax({
            url:dataUrl+"/"+ id,  // which url
            type:"GET",  // What is the type of request
            success:function(data){
                        console.log(data);
                        readOneData(data);
                    },
            error:function(err){
                        console.log(err);
                    }
        });
        }

        // Update Ajax call
        var onUpdate=function(){
            //Ajax call for update

            // This function will fetch data from above url
            $.ajax({
            url:dataUrl,  // which url
            type:"PUT",  // What is the type of request
            success:function(data){
                        console.log(data);
                        readAllData(data);
                    },
            error:function(err){
                        console.log(err);
                    }
        });

        };

        //Delete Ajax call
        var onDelete=function(){
            //Ajax call for Delete


            // This function will fetch data from above url
            $.ajax({
                    url:dataUrl+"/12",  // which url
                    type:"DELETE",  // What is the type of request
                    success:function(data){
                                console.log(data);
                                readAllData(data);
                            },
                    error:function(err){
                                console.log(err);
                            }
            });
        }
