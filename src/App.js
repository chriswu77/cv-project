import React from 'react';
import './style.css';
import ContactInfo from './components/ContactInfo';
import WorkExp from './components/WorkExp';
import Education from './components/Education';

function App() {
  return (
    <div className="App">
      <ContactInfo />
      <WorkExp />
      <Education />
    </div>
  );
}

export default App;
