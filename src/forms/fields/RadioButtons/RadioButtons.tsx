import React from 'react';
import { TRadioOptions } from 'forms/fields/RadioButtons/types';

interface IRadioButtons {
    fieldName: string;
    options: TRadioOptions[];
    register: (ref: Element | null) => void;
}
const RadioButtons: React.FC<IRadioButtons> = (props) => {
    return (
        <section className="radioGroup">
            {props.options.map((o, idx) => (
                <React.Fragment key={`${props.fieldName}_${idx}`}>
                    <label htmlFor={`${props.fieldName}_${idx}`}>
                        <input
                            type="radio"
                            id={`${props.fieldName}_${idx}`}
                            name={props.fieldName}
                            ref={props.register}
                            value={o.value}
                        />
                        {o.label}
                    </label>
                </React.Fragment>
            ))}
        </section>
    );
};

export default RadioButtons;
