import React, { RefObject } from 'react';
import './Input.scss';

interface IInput {
    register: unknown;
    error: boolean;
    name: string;
    placeholder?: string;
    disabled?: boolean;
    onChange?: (i?: any) => any;
}

function Input(props: IInput) {
    return (
        <input
            className={className('input', props.error ? 'error' : undefined)}
            ref={props.register as RefObject<HTMLInputElement>}
            name={props.name}
            onChange={props.onChange}
            placeholder={props.placeholder}
            disabled={props.disabled}
        />
    );
}

export default Input;

function className(...args) {
    return args.join(' ').trim();
}
