var mongoose=require("mongoose")
var url="mongodb://127.0.0.1:27017/regi"
mongoose.connect(url)
var db=mongoose.connection
console.log("succesfully connected to mongodb database")

module.exports=db;