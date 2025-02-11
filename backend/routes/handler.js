const express = require("express")
const router= express.Router();
const path =require("path")
const bodyParser=require("body-parser");
const compiler=require("compilex")
const {PythonShell}=require("python-shell");
const {spawn}=require("child_process");
const { send } = require("process");
const expressSession=require("express-session");
const flash=require("connect-flash");
const pdfParse = require("pdf-parse");


const option ={stats:true};
compiler.init(option);
router.get("/tweets",(req,res)=>{
    const str={
        "name":"Sathvik",
        "msg":"Hello",
        "username":"sathvikt23"
    };
    res.end(JSON.stringify(str));
})


router.post("/compilecode",async(req,res)=>{
    let code=req.body.code;
    //console.log(code)
    let input=req.body.input;
    let inputRadio=req.body.inputRadio;
    let lang = req.body.lang;
    try{
    if(lang==="Python"){
        if (input!=""){
            let envData={OS:"windows"};
            compiler.compilePythonWithInput(envData,code,input,function (data){
                 res.send(data); data={
                    code:code,
                    output:data["output"]
                }
                res.end(JSON.stringify(data))
            });
        }
        else{
                    let envData={OS:"windows"};
                    let error="Syntax error ";
                    compiler.compilePython(envData,code,function (data){
                    
                       console.log("check1")

                        req.flash("output",data["output"])
                        
                        data={
                            code:code,
                            output:data["output"]
                        }
                        res.end(JSON.stringify(data))
                    }); 
        }
    }
}
catch{
    data={
        code:code,
        output:"Syntax error"
    }
    res.end(JSON.stringify(data))
}

})
router.post("/extract-text", (req, res) => {
    if (!req.files && !req.files.pdfFile) {
        res.status(400);
        res.end();
    }

    pdfParse(req.files.pdfFile).then(result => {
        res.send(result.text);
    });
});
router.post("/transcribe",async (req,res)=>{
    Ytlink=req.body.link
    
     res.end(JSON.stringify({acce:"wrong"}))
        
   
    
})


module.exports= router;