const path=require('path')//its a module that get us path
const fs=require('fs')
const user="JeesAppan"
fs.readFile(path.join(__dirname,"/api2","api.txt"),"utf8",(err,data)=>{
    if(err) throw err;
    console.log(data)
});


  