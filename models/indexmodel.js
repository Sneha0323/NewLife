
var db = require('./connection')
function indexmodel() {

    this.registration = (userDetails, cb) => {
        db.collection('regist').find().toArray((err, result) => {
            if (err) {
                console.log(err)
            } else {
                if (result.length > 0) {
                    var max_id = result[0]._id;
                    for (let row of result) {
                        if (max_id < row._id) {
                            max_id = row._id
                        }
                        userDetails._id = max_id + 1
                    }
                } else {
                    userDetails._id = 1
                }
            }
            userDetails.status = 1
            userDetails.role = "user"
            userDetails.dt = Date()
            db.collection("regist").insertOne(userDetails, (err, result) => {
                err ? console.log(err) : cb(result);
            });
        });

    }
    this.loginCheck = (userdetl, cb) => {
        db.collection('regist').find({ "email": userdetl.email, "pwd": userdetl.pwd }).toArray((err, result) => {
            if (err) {
                console.log(err)
            } else {
                cb(result)
            }
        })
    }
    this.userUpdate = (userupdetl,cb) => {
        var x=parseInt(userupdetl.id);
        let resultl = db.collection('regist').updateOne({'_id': x},
            {
                $set: {"name": userupdetl.name,
                "mno": userupdetl.mno,
                "city": userupdetl.city,
                "email": userupdetl.email,
                "unm": userupdetl.unm,
                "pwd": userupdetl.pwd}
            },(err,result1)=>{
                if(result1>0)
                {
                  cb(result1)
                }else{
                  console.log(err)
                }
              })
    }


    this.showData = (data, cb) => {
        
        db.collection('regist').find({"role": "user" }).toArray((err, result) => {
            if (result.length > 0) {
                cb(result)
            } else {
                console.log(err)
            }
        })
    }

    this.manageuserstatus=(data,cb)=>{
        if(data.s=="block"){
            db.collection('regist').updateOne({'_id':parseInt(data.regid)},{$set:{'status':0}},(err,result)=>{
                if(err){
                    console.log(err)
                }else{
                    cb(result)
                }
            })
        }else{
            db.collection('regist').updateOne({'_id':parseInt(data.regid)},{$set:{'status':1}},(err,result)=>{
                if(err){
                    console.log(err)
                }else{
                    cb(result)
                }
            })
    
        }
    }
    
    
}
module.exports = new indexmodel()