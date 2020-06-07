import React from 'react';
import { TRadioOptions } from 'forms/fields/RadioButtons/types';

interface IRadioButtons {
    fieldName: string;
    options: TRadioOptions[];
    defaultValue?: string | number;
    register: (ref: Element | null) => void;
}
const RadioButtons: React.FC<IRadioButtons> = (props) => {
    return (
        <section className="radioGroup">
            {props.options.map((o, idx) => {
                console.log(
                    'defaultChecked',
                    props.defaultValue,
                    props.options.some(({ value }) => value === props.defaultValue)
                );
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
