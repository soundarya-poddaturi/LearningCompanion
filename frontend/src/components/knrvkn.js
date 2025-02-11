let a ="\r\n{\r\n  \"questions\": [\r\n    {\r\n      \"question\": \"What is the name of the main character in the text?\",\r\n      \"choices\": [\r\n        \"Martin\",\r\n        \"Jane\",\r\n        \"John\",\r\n        \"Mary\"\r\n      ]\r\n    },\r\n    {\r\n      \"question\": \"Where does the story take place?\",\r\n      \"choices\": [\r\n        \"A forest\",\r\n        \"A city\",\r\n        \"A school\",\r\n        \"A hospital\"\r\n      ]\r\n    },\r\n    {\r\n      \"question\": \"What is the main conflict in the story?\",\r\n      \"choices\": [\r\n        \"Martin is lost in the forest\",\r\n        \"Jane is sick\",\r\n        \"John is in danger\",\r\n        \"Mary is missing\"\r\n      ]\r\n    },\r\n    {\r\n      \"question\": \"How does the story resolve?\",\r\n      \"choices\": [\r\n        \"Martin finds his way home\",\r\n        \"Jane gets better\",\r\n        \"John is rescued\",\r\n        \"Mary is found\"\r\n      ]\r\n    },\r\n    {\r\n      \"question\": \"What is the moral of the story?\",\r\n      \"choices\": [\r\n        \"It is important to be careful when you are in the forest\",\r\n        \"It is important to help those who are in need\",\r\n        \"It is important to be brave when you are in danger\",\r\n        \"It is important to forgive those who have wronged you\"\r\n      ]\r\n    }\r\n  ],\r\n  \"answers\": [\r\n    \"Martin\",\r\n    \"A forest\",\r\n    \"Martin is lost in the forest\",\r\n    \"Martin finds his way home\",\r\n    \"It is important to be careful when you are in the forest\"\r\n  ]\r\n}\r\n\r\n"
a=JSON.parse(a)
console.log(a)
const getquestions=()=>{
    axios.post(('/genques'),{
        text:props.data
        
       })
       .then(function(response){
        obj=JSON.parse(response.data);
        setdata(obj.questions);
        setcheck("kecvbuvwu")
        console.log(obj.questions.)

       })
       .then(function (error){
        console.log(error)
       })
  }