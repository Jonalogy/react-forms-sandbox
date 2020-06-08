import React from 'react';
import './TextArea.scss';

interface ITextArea {
    onTextChange?: () => void;
    value?: string;
    label?: string;
    defaultText?: string;
    placeholder?: string;
}

const TextArea: React.FC<ITextArea> = (props) => {
    return (
        <div className="TextArea">
            <h5 className="label">{props.label}</h5>
            <textarea
                value={props.value}
                placeholder={props.placeholder}
                onChange={props.onTextChange}
                /* A controlled component simply means:
                    - it takes the value passed from react
                    - accepts a callback (e.g. onChange) to handle the value 
                  
                  Don't try to add internal logic to the change handler within the controlled
                  input and surrender it to the parent React-Hook-Form
                */
            />
        </div>
    );
};

export default TextArea;
