import './App.css';
import React,{useState} from 'react';
import { marked } from 'marked';

function App() {
  const initState =`# Hello, My name is Sean
  ## A Front-End Developer
  This is my Markdown Perviewer Project from [Free Code Camp](https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-markdown-previewer)
  This is a **div** element \`<div></div>\`
  \`\`\`
  // this is multi-line code:
    function helloWold() {
      console.log("Hello World");
    }
  \`\`\`
  This project used following _Tech Stack_:
  - React.js
  - Bootstrap
  - CSS
  - Marked.js

  > Alright this is what my little project looks like.

  In the End of this, I want to say thanks for

  ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
  `

  const[text,setText] = useState(initState);
  const markdown = marked(text,{breaks:true});
  return (
    <div className="container">
        <h1 className="text-center mt-4 Typing">Markdown Previewer</h1>
        <div className="row text-center">
          <div className="col-6">
            <h3>Enter your markdown here: </h3>
            <textarea value={text} className="form-control p-2" id="editor" onChange={e=>setText(e.target.value)}/>
          </div>
          <div className="col-6" >
            <h3>Results :</h3>
            <div className="preview p-2" id="preview" dangerouslySetInnerHTML={{ __html: markdown}} />
          </div>
        </div>
    </div>
  );
}

export default App;
