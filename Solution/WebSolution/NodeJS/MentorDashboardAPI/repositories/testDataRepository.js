var fs = require ('fs');

var fileName="../data/testdata.json";

var testDataRepository=()=>{
    var data=(err,data)=>{
        if (err) {
            throw err;
        }
        else
            {
        return data;
    }
    }
    fs.readFile(fileName,testData);
}

module.exports=testDataRepository;