import React from 'react';
import { Brochure } from 'layouts/brochure/Brochure';
import { ReactHookForm } from 'views/reactHookForm/ReachHookForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <Brochure>
        <ReactHookForm />
      </Brochure>
    </div>
  );
}

export default App;
