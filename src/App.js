import React, { useState } from 'react';
import MarkdownView from 'react-showdown';

function App() {
  const [inputText, setInputText] = useState(`### Don't Know how to write MD? 
[Get a quick tutorial](https://markdown-it.github.io/)`);

  const onChangeHandler = (event) => {
    setInputText(event.target.value);
  }

  return (
    <div className="app">
      <header>
        <h1 className="app-title"><span>Mark</span> It <span>Down</span></h1>
      </header>
      <div className="container">
        <div className="md-writer">
          <h2>Type Here...</h2>
          <textarea value={inputText} onChange={onChangeHandler}></textarea>
        </div>
        <div className="previewer">
          <h2>MD Preview</h2>
          <div className='result'>
            <MarkdownView
              markdown={inputText}
              options={{ tables: true, emoji: true }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
