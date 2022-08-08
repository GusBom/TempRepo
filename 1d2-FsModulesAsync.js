const {readFile,writeFile} = require('fs')

readFile('./textFolder/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    } 
    const res = result
    writeFile('./textFolder/mega.txt',
              `This is a combo of this and ${res}`,(err, result)=>{
                if(err){
                    console.log(err)
                    return
                }
                console.log(result)
              })
}) 





 