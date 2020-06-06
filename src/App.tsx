import React from 'react';
import ReactHookFormArray from 'forms/reactHookFormArray';
// import { BasicReactHookForm } from 'forms/basicReactHookForm/BasicReactHookForm';
// import { Brochure } from 'layouts/brochure/Brochure';

import './App.css';

function App(): JSX.Element {
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
