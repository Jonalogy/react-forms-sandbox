import React from 'react';
import { TRadioOptions } from 'forms/fields/RadioButtons/types';

interface IRadioButtons {
    fieldName: string;
    options: TRadioOptions[];
    defaultValue?: string | number;
    register: (ref: Element | null) => void;
}

const renderCount = {};

const RadioButtons: React.FC<IRadioButtons> = (props) => {
    if (renderCount[props.fieldName]) {
        renderCount[props.fieldName]++;
    } else {
        renderCount[props.fieldName] = 1;
    }

    return (
        <section className="radioGroup">
            <h5>
                {props.fieldName}: {renderCount[props.fieldName]}
            </h5>
            {props.options.map((o, idx) => {
                return (
                    <React.Fragment key={`${props.fieldName}_${idx}`}>
                        <label htmlFor={`${props.fieldName}_${idx}`}>
                            <input
                                type="radio"
                                id={`${props.fieldName}_${idx}`}
                                name={props.fieldName}
                                ref={props.register}
                                value={o.value}
                                defaultChecked={o.value === props.defaultValue}
                            />
                            {o.label}
                        </label>
                    </React.Fragment>
                );
            })}
        </section>
    );
};

export default RadioButtons;
