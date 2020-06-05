import React from 'react';
import { BasicReactHookForm } from 'views/basicReactHookForm/BasicReactHookForm';
import './App.css';
// import { Brochure } from 'layouts/brochure/Brochure';

function App() {
    console.log('App...');
    return (
        <div className="App">
            <BasicReactHookForm />
            {/* <Brochure></Brochure> */}
        </div>
    );
}

export default App;
