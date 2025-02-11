import React, { useState } from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import QuizApp from './questions';
import DsaCompiler from './dsa';
function Preinfo(){

  const data=`
  Basics of Loops in Python

Loops in Python are used to execute a block of code repeatedly. There are two main types of loops:

For Loop: Iterates over a sequence and executes a block of code for each item in the sequence.
Example:

python
Copy code
for item in sequence:
    # Code block to be executed for each item
While Loop: Repeats a block of code as long as a specified condition is true.
Example:

python
Copy code
while condition:
    # Code block to be executed as long as condition is true
Advanced Looping in Python

Python offers several advanced looping techniques for efficient iteration:

Enumerate: Adds a counter to an iterable object, allowing iteration over elements and their indices simultaneously.

Zip: Combines multiple iterables into tuples, allowing simultaneous iteration over corresponding elements.

List Comprehension: Provides a concise way to create lists using a single line of code.

Dictionary Comprehension: Creates dictionaries in a compact form.

Generator Expression: Creates a generator object that lazily generates values, saving memory compared to lists.

These looping techniques provide powerful tools for iterating over data efficiently in Python, enhancing code readability and reducing complexity.`

    return (
      
        <div>
         <section class="watch-video">

<div class="video-container">
   <div class="video">
      
      <iframe width="1120" height="600" src = {"https://www.youtube.com/embed/94UHCEmprCY"} controls poster="images/post-1-1.png" id="video"></iframe>
   </div>
   <h3 class="title">complete Python tutorial (part 01)</h3>
   <div class="info">
      <p class="date"><i class="fas fa-calendar"></i><span>22-10-2022</span></p>
      <p class="date"><i class="fas fa-heart"></i><span>44 likes</span></p>
   </div>
   <div class="tutor">
      <img src={require("./images/pic-2.jpg")} alt=""/>
      <div>
         <h3>john deo</h3>
         <span>developer</span>
      </div>
   </div>
   <form action="" method="post" class="flex">
      <a href="/course/playlist" class="inline-btn">view playlist</a>
      <button><i class="far fa-heart"></i><span>like</span></button>
   </form>
   <p class="description">
   Python is a popular programming language. It was created by Guido van Rossum, and released in 1991.

It is used for:

web development (server-side),
software development,
mathematics,
system scripting
   </p>
</div>

</section>

<section class="watch-video">
<div class ="video-container">
<div className="description">
<h1>Basics of Loops in Python</h1>

<p>Loops are used in Python to execute a block of code repeatedly. There are mainly two types of loops: <strong>for</strong> loop and <strong>while</strong> loop.</p>

<h2>For Loop</h2>
<p>The <strong>for</strong> loop iterates over a sequence (such as a list, tuple, string, or range) and executes a block of code for each element in the sequence.</p>
<div class="code-example">
  <code>
    {`for item in sequence:
  # Code block to be executed for each item`}
  </code>
</div>

<h2>While Loop</h2>
<p>The <strong>while</strong> loop repeats a block of code as long as a specified condition is true.</p>
<div class="code-example">
  <code>
    {`while condition:
  # Code block to be executed as long as condition is true`}
  </code>
</div>

<h2>Example:</h2>
<p>Let's say we want to print numbers from 1 to 5 using both <strong>for</strong> and <strong>while</strong> loops:</p>
<div class="code-example">
  <code>
    {`# Using for loop
for i in range(1, 6):
  print(i)

# Using while loop
i = 1
while i <= 5:
  print(i)
  i += 1`}
  </code>
</div>
<br></br>

<p>In the above example, both loops achieve the same result of printing numbers from 1 to 5.</p>
<br></br>
      <h1>Python For Loop</h1>

      <p>The <code>for</code> loop in Python is used to iterate over a sequence (such as a list, tuple, string, or range) and execute a block of code for each element in the sequence.</p>

      <h2>Syntax:</h2>

      <pre>
        <code>
          {`for item in sequence:
    # Code block to be executed for each item`}
        </code>
      </pre>

      <p>Here's what each part of the syntax represents:</p>

      <ul>
        <li><code>for</code>: Keyword indicating the beginning of the loop.</li>
        <li><code>item</code>: Variable that takes the value of the next item in the sequence for each iteration.</li>
        <li><code>in</code>: Keyword used to iterate over elements of a sequence.</li>
        <li><code>sequence</code>: Iterable object (list, tuple, string, etc.) over which the loop iterates.</li>
        <li><code>:</code>: Colon at the end of the <code>for</code> statement, indicating the beginning of the indented code block.</li>
        <li><code># Code block to be executed for each item</code>: Placeholder for the code that will run for each item in the sequence.</li>
      </ul>

      <h2>Example:</h2>

      <p>Let's say we have a list of numbers and we want to print each number along with its square:</p>

      <pre>
        <code>
          {`numbers = [1, 2, 3, 4, 5]

for num in numbers:
    square = num ** 2
    print(f"The square of {num} is {square}")`}
        </code>
      </pre>

      <p>This will output:</p>

      <pre>
        <code>
          {`The square of 1 is 1
The square of 2 is 4
The square of 3 is 9
The square of 4 is 16
The square of 5 is 25`}
        </code>
      </pre>

      <p>The <code>for</code> loop iterates over each number in the <code>numbers</code> list, calculates its square, and prints the result.</p>
    </div>

    <div >
      <br></br>
  <h1>While Loop in Python</h1>

  <p>The <strong>while</strong> loop in Python repeats a block of code as long as a specified condition is true. It's useful when you don't know in advance how many times you need to execute a block of code.</p>

  <h2>Syntax:</h2>
  <p>The syntax of a <strong>while</strong> loop in Python is as follows:</p>
  <div class="code-example">
    <li><code>
      {`while condition:
    # Code block to be executed as long as condition is true`}
    </code></li>
  </div>

  <p>Here's what each part of the syntax represents:</p>
  <ul>
    <li><code>while</code>: Keyword indicating the beginning of the loop.</li>
    <li><code>condition</code>: A boolean expression that is evaluated before each iteration. If the condition evaluates to <code>True</code>, the loop continues; if it evaluates to <code>False</code>, the loop exits.</li>
    <li><code>:</code>: Colon at the end of the <code>while</code> statement, indicating the beginning of the indented code block.</li>
    <li><code># Code block to be executed as long as condition is true</code>: Placeholder for the code that will run repeatedly as long as the condition remains true.</li>
  </ul>

  <h2>Example:</h2>
  <p>Let's say we want to print numbers from 1 to 5 using a <strong>while</strong> loop:</p>
  <div class="code-example">
    <code>
      {`i = 1
while i <= 5:
    print(i)
    i += 1`}
    </code>
  </div>

  <p>In this example, the variable <code>i</code> is initialized to 1. The loop continues as long as <code>i</code> is less than or equal to 5. Inside the loop, <code>i</code> is printed and then incremented by 1 in each iteration.</p>

  <p>This will output:</p>
  <div class="code-example">
    <code>
      {`1
2
3
4
5`}
    </code>
  </div>

  <p>The <strong>while</strong> loop continues to execute until the condition becomes false (in this case, when <code>i</code> becomes greater than 5).</p>
</div>
<br></br>
<div >
  <h1>Advanced Looping in Python</h1>

  <p>In addition to the basic <strong>for</strong> and <strong>while</strong> loops, Python provides some advanced looping techniques to handle common scenarios efficiently.</p>

  <h2>Enumerate</h2>
  <p>The <strong>enumerate</strong> function adds a counter to an iterable object and returns it as an enumerate object. This is useful when you want to iterate over both the elements and their indices in a sequence.</p>
  <div class="code-example">
    <code>
      {`fruits = ['apple', 'banana', 'cherry']
for index, fruit in enumerate(fruits):
    print(index, fruit)`}
    </code>
  </div>

  <h2>Zip</h2>
  <p>The <strong>zip</strong> function takes iterables as input and returns an iterator of tuples where the i-th tuple contains the i-th element from each of the input iterables. This is useful for iterating over multiple lists simultaneously.</p>
  <div class="code-example">
    <code>
      {`names = ['Alice', 'Bob', 'Charlie']
ages = [30, 25, 35]
for name, age in zip(names, ages):
    print(name, age)`}
    </code>
  </div>

  <h2>List Comprehension</h2>
  <p>List comprehension provides a concise way to create lists in Python. It consists of brackets containing an expression followed by a <strong>for</strong> clause, then zero or more <strong>for</strong> or <strong>if</strong> clauses.</p>
  <div class="code-example">
    <code>
      {`# Squares of numbers from 1 to 5
squares = [x**2 for x in range(1, 6)]
print(squares)`}
    </code>
  </div>

  <h2>Dictionary Comprehension</h2>
  <p>Similar to list comprehension, dictionary comprehension allows you to create dictionaries in a compact way.</p>
  <div class="code-example">
    <code>
      {`# Squares of numbers from 1 to 5 as key-value pairs
squares_dict = {x: x**2 for x in range(1, 6)}
print(squares_dict)`}
    </code>
  </div>

  <h2>Generator Expression</h2>
  <p>Generator expressions are similar to list comprehensions, but they return a generator object which generates values lazily, one at a time, as opposed to storing them all in memory at once.</p>
  <div class="code-example">
    <code>
      {`# Squares of numbers from 1 to 5 using generator expression
squares_gen = (x**2 for x in range(1, 6))
print(list(squares_gen))  # Convert generator to list to display`}
    </code>
  </div>

</div>

</div>
 <div>
 <QuizApp data={data}/>
 <DsaCompiler data={data}/>
 </div>
</section>
       </div>
        
       
    )
}

export default Preinfo;