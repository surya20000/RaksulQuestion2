const fs = require('fs')
const path = require('path')

const filePath1 = "./dummy1.txt"
const filePath2 = "./dummy2.txt"

fs.readFile(filePath1,'utf-8',(err,fcontent) => {
    if(err){
        console.log(err);
        return
    }
    fs.readFile(filePath2,'utf-8',(err,f2content) =>{
        if(err){
            console.log(err);
            return
        }

        const combineOutput = fcontent + f2content;
        console.log(combineOutput);
    })
})