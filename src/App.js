import React from 'react';

function App() {
  return (
    <div className="app">
      <header>
        <h1 className="app-title"><span>Mark</span> It <span>Down</span></h1>
      </header>
      <div className="container">
        <div className="md-writer">
          <h2>Type Here...</h2>
          <textarea></textarea>
        </div>
        <div className="previewer">
          <h2>MD Preview</h2>
          <div className='result'>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
