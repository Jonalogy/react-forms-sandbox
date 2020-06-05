import React from 'react';
import { BasicReactHookForm } from 'forms/basicReactHookForm/BasicReactHookForm';
import './App.css';
import ReactHookFormArray from 'forms/reactHookFormArray';
// import { Brochure } from 'layouts/brochure/Brochure';

function App() {
    console.log('App...');
    return (
        <div className="App">
            {/* <BasicReactHookForm /> */}
            <ReactHookFormArray />
            {/* <Brochure></Brochure> */}
        </div>
    );
}

export default App;
