var count=45;
console.log("Before call .....");
console.log(count);  /// is it a function ? yes

console.log("after call .....");

var seondaryFunction=function(){
    console.log("secondary function");
}

var mainFunction=function( param)
{
    console.log(param);

    
    console.log("main function is invoked...");
    param();
}

mainFunction(seondaryFunction); /// is it a function ? 
                                // we have passed function pointer
                                // we have passed refernce of function


