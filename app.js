const express =require("express");
const bodyParser = require ("body-parser");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended:true}));


app.get("/",function(req,res){

    var today = new Date().getDay();
    var day="";
//     var weekend;
//     var weekday;
//     if(today === 6 || today===0){

//         day="weekend";
        
    
//     }
//     else{
//         day= "weekday";
        
//     }
// res.render("lists",{typeOfDay:day});


    if(today===0){
        day= "Sunday";

    }
    else if(today===1){
        day="Monday";

    }
    else if(today===2){
        day="Tuesday";
        
    }else if(today===3){
        day="Wednesday";
        
    }else if(today===4){
        day="Thursday";
        
    }else if(today===5){
        day="Friday";
        
    }
    else {
        day="Saturday";
    }
    res.render("lists",{kindOfDay:day});
});


app.listen(3000,function(){
    console.log("server started on port 3000.");
});