import React from 'react';
import { FormContextValues } from 'react-hook-form';
import { register } from 'serviceWorker';

type TRadioOptions = {
    value: string | number;
    label: string;
};

interface IRadioButtons {
    fieldName: string;
    register: (ref: Element | null) => void;
    options: TRadioOptions[];
}
const RadioButtons: React.FC<IRadioButtons> = (props) => {
    return (
        <section className="radioGroup">
            {props.options.map((o, idx) => (
                <React.Fragment key={`${props.fieldName}_${idx}`}>
                    <label htmlFor={props.fieldName}>
                        <input
                            type="radio"
                            id={props.fieldName}
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
