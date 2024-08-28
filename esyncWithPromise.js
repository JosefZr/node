const {readFile,writeFile}= require("fs").promises
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

// const getText=(path)=>{
//     return new Promise((resolve,reject)=>{
//         readFile(path, 'utf8',(err,data)=>{
//             if(err) reject(err)
//                 else resolve(data)
//         })
//     })
// }

const start = async()=>{ 
    try{
        const first = await readFile("./content/first.txt","utf8")
        const seconde = await readFilel("./content/seconde.txt",'utf8')
        console.log(first,seconde)
    }catch(error){
        console.log(error)
    }
}
start()
// readFile('./content/first.txt', 'utf8',(err, data)=>{
//     if(err){
//         return
//     }else{
//         console.log(data)
//     }
// })