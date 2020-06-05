import React, { RefObject } from 'react';
import './Input.scss';

interface IInput {
    register: unknown;
    error: boolean;
    name: string;
    onChange?: (i?: any) => any;
}

function Input(props: IInput) {
    return (
        <input
            className={className('input', props.error ? 'error' : undefined)}
            ref={props.register as RefObject<HTMLInputElement>}
            name={props.name}
            onChange={props.onChange}
        />
    );
}

export default Input;

function className(...args) {
    return args.join(' ').trim();
}
