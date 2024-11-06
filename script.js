const path=require('path')//its a module that get us path
const fs=require('fs')
const user="JeesAppan"
fs.writeFile(path.join(__dirname,"/api2","api.txt"),`User name:${user}`,(err)=>{
    if(err) throw err;
})


  