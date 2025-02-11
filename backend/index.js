const express = require("express")
const app = express()
const bodyParse= require("body-parser");
const bodyParser = require("body-parser");
const routesHandler= require("./routes/handler.js");
const cors = require("cors")
const path =require("path")

const compiler=require("compilex")
const {PythonShell}=require("python-shell");
const {spawn}=require("child_process");
const { send } = require("process");
const expressSession=require("express-session");
const flash=require("connect-flash");
const fileUpload = require("express-fileupload");



//const route

app.use(cors())
app.use(fileUpload());
app.use(expressSession({
    resave:false,
    saveUninitialized:false,
    secret:"illhvihvihv"
}))
app.use(flash())

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.post("/transcribe",async(req,res)=>{
    Ytlink=req.body.link
    ytid=Ytlink.split("=")[1]
    ytembed=`https://www.youtube.com/embed/${ytid.slice(0,11)}`
    console.log(Ytlink)
    console.log(typeof(Ytlink))
    console.log(ytembed)
    console.log("request 1 ")
    const child= spawn("python",['sample.py',Ytlink,"1"]);
    child.stdout.on('data',(data)=>{
       
        data1= data.toString()
        console.log(data1)
        console.log("request recived ")
        data33={
            link:ytembed,
            data:data1
        }
        //setTimeout()
        res.end(JSON.stringify(data33))
        
   });
})
app.post("/compilecodeai",(req,res)=>{
    code=req.body.code
    console.log(code)
    const child= spawn("python",['sample.py',code,"2"]);
    child.stdout.on('data',(data)=>{
       
        data1= data.toString()
        console.log(data1)
        console.log("request recived ")
        data33={
           code:code,
           anaylsis:data1
        }
        //setTimeout()
        res.end(JSON.stringify(data33))
        
   });
})
app.post("/enhancetext",(req,res)=>{
    text=req.body.text
    console.log("check1")
    const child= spawn("python",['sample.py',text,"3"]);
    child.stdout.on('data',(data)=>{
       
        data1= data.toString()
        console.log(data1)
        console.log("request recived ")
        data33={
           
           anaylsis:data1
        }
        //setTimeout()
        res.end(JSON.stringify(data33))
        
   });
})
app.post("/chatresponse",(req,res)=>{
    ques=req.body.ques
    console.log("check1")
    const child= spawn("python",['sample.py',ques,"4"]);
    child.stdout.on('data',(data)=>{
       
        data1= data.toString()
        console.log(data1)
        console.log("request recived ")
        data33={
           
           anaylsis:data1
        }
        //setTimeout()
        res.end(JSON.stringify(data33))
        
   });
})
app.post("/lessonresponse",(req,res)=>{
    text=req.body.text
    ques=req.body.ques
    console.log(text)

    console.log("check1")
    const child= spawn("python",['sample.py',text,"5",ques]);
    child.stdout.on('data',(data)=>{
       
        data1= data.toString()
        console.log(data1)
        console.log("request recived ")
        data33={
           
           anaylsis:data1
        }
        //setTimeout()
        res.end(JSON.stringify(data33))
        
   });
})
app.post("/genques",(req,res)=>{
    data=req.body.text
    console.log("heyhoi\n\n")
   //  console.log(data)
    const child= spawn("python",['sample.py',data,"7"]);
    console.log("ggghghghhjhjh")
    child.stdout.on('data',(data)=>{
       
        data1= data.toString()
        console.log(data1)
        console.log("request recived ")
        data33={
           
           data1
        }
        //setTimeout()
        console.log("first")
        res.end(JSON.stringify(data1))
        
   });
})
app.post("/getvideo",(req,res)=>{
    data=req.body.data;
    console.log("flag 1 recom")
    console.log(data)
    const child= spawn("python",['sample.py',data,"8"]);
    child.stdout.on('data',(data)=>{
       
        data1= data.toString()
        console.log(data1)
        console.log("request recived ")
        data33={
           id:data1
        }
        //setTimeout()
        res.end(JSON.stringify(data33))
        
   });

})
app.post("/dsaques",(req,res)=>{
    data=req.body.data;
    console.log("flag 1 recom")
    console.log(data)
    const child= spawn("python",['sample.py',data,"9"]);
    child.stdout.on('data',(data)=>{
       
        data1= data.toString()
        console.log(data1)
        console.log("request recived ")
        data33={
           id:data1
        }
        //setTimeout()
        res.end(JSON.stringify(data33))
        
   });

})
app.post("/cuscompilecodeai",(req,res)=>{
    code=req.body.code
    custom=req.body.custom
    code= custom +"\n"+code
    console.log(code)
    const child= spawn("python",['sample.py',code,"6"]);
    child.stdout.on('data',(data)=>{
       
        data1= data.toString()
        console.log(data1)
        console.log("request recived ")
        data33={
           code:code,
           anaylsis:data1
        }
        //setTimeout()
        res.end(JSON.stringify(data33))
        
   });
})

app.use("/", routesHandler);


const PORT= 4000;
app.listen(PORT,()=>{
    console.log(`Running on ${PORT}\n Happy coding .`)
})