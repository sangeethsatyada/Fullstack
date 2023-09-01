const mysql=require("mysql");
const connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"sangeeth7674@",
    database:"usha"
});
connection.connect(function(err){
  if(err)
  throw err;
  else
  console.log("successfully connected to database");
})
module.exports=connection;