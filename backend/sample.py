import Textsum as ps
import sys 
import threading
#def print_square(prev,i):
#	          temp=(ps.all_in_one.askgem(data[prev:i]+"reframe the text in detail "))
   
"""def transcribe():
   prompt=str(sys.argv[1])
   ids=prompt.split("=")

   data=ps.all_in_one.transcribe(prompt)
   if len(data)<=40000:
     print(ps.all_in_one.askgem(data+"Explain it in very depth and extra information "))
   
   else:
    a=[]


    prev=0
    j=0
    


    for i in range(5000,len(data),5000):
        a.append( threading.Thread(target=print_square, args=(prev,i)))
    for i in range(0,len(a)):
	     a[i].start()
    for i in range(0,len(a)):
	     a[i].start()
    for i in range(0,len(a)):
	     a[i].start()
         
      
    for i in range(0,len(a)):
	          a[i].join()

   """
def genQues():
 try:
  prompt="""Generate 5 questions with 4 multiple choices on this text , return in JSON format '{'questions':[question: , choices:[],answer:],'answer':}' ? """
  prompt=sys.argv[1]+"\n"+prompt
  # final=ps.all_in_one.askgem(prompt).replace("`","").replace("json","").replace("JSON","")
  final=ps.all_in_one.ask_gemini_flash(prompt).replace("`","").replace("json","").replace("JSON","")
#  ask_gemini_flash
  print(final)
 except:
   print("Unknown Problem Occured , Please try again")

def transcribe():
  
   prompt=str(sys.argv[1])
   ids=prompt.split("=")

   data=ps.all_in_one.transcribe(prompt)
   if len(data)<=40000:
     print(ps.all_in_one.askgem(data+"Explain it in very depth and extra information "))
   else:
      prev=0
      for i in range(5000,len(data),5000):
         print(ps.all_in_one.askgem(data[prev:i]+"Explain it in very depth and extra information "))
         prev=i
  
   
def codeanaylsis():
  try:
   data1=ps.all_in_one.askgem(f"explain this code and give a better alternative approach time complexity  \n  {str(sys.argv[1])}  ")
   print(data1)   
  except:
   print("Unknown Problem Occured , Please try again") 
def cuscodeanaylsis():
 try:
  data1=ps.all_in_one.askgem(f" \n  {str(sys.argv[1])}  ")

  print(data1)       
 except:
   print("Unknown Problem Occured , Please try again") 
def enhancetext():
 try:
  data=str(sys.argv[1])
  if len(data)<=40000:
     print(ps.all_in_one.askgem(data+"reframe the text and explain in  detail "))
   
  else:
    for i in range(1000,len(data),1000):
    
      print(ps.all_in_one.askgem(data[prev:i]+"reframe the text and explain in detail "))
      prev=i 
 except:
    print("Unknown Problem Occured , Please try again") 
def chatbox():

  n=sys.argv[1]
  try:
    response=ps.all_in_one.askai(n)
    if response=="None":
      print(ps.all_in_one.askgem(n))
    else:
      print(response)
  except:
    print("please try again")

def lessonchat():
 try:
  n=sys.argv[3]
  data=sys.argv[1]
  if len(n)<=20000:
    response=ps.all_in_one.askai21(data,n)
    if response["valid"]==False:
       data=ps.all_in_one.askai(n)
       if data=="None":
          data=ps.all_in_one.askgem(n)
          print("Out of context/ "+data)
       else:
         print("Out of context/ "+data)
    else:
       print(response["answer"])
  else:
   print("too large text ")
 except:
    print("Unknown Problem Occured , Please try again") 
   
def videorecom():
 try:
  final=ps.all_in_one.ytid(sys.argv[1])
 
  print(list(set(final)))
 except:
    print("Unknown Problem Occured , Please try again") 
   
def dsaques():
 try:
  data=sys.argv[1]
  prompt="""Generate 5 coding DSA questions with expected output on this text , return in JSON format '{'questions':['question','output']}' ?"""
  final=ps.all_in_one.askgem( data+"\n"+prompt)

  print(final.replace("`","").replace("json","").replace("JSON",""))
 except:
   print("Unknown Problem Occured , Please try again") 

match sys.argv[2]:
  case "1": 
    transcribe()
    #print("Under construction ")
  case "2": 
    codeanaylsis()
  case "3":
    enhancetext()
  case "4":
    chatbox()
  case "5":
    lessonchat()
  case "6":
    cuscodeanaylsis()
  case "7":
    genQues()
  case "8":
    videorecom()
  case "9":
    dsaques()
  
