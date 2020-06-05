import React from 'react';
import { ReactHookForm } from 'views/reactHookForm/ReactHookForm';
import './App.css';
// import { Brochure } from 'layouts/brochure/Brochure';

function App() {
    console.log('App...');
    return (
        <div className="App">
            <ReactHookForm />
            {/* <Brochure></Brochure> */}
        </div>
    );
}

export default App;
