import React from 'react';
import './Brochure.scss';

type IBrochure = Record<string, any>; // Eslint suggests that to use [Record<>] to represent the idea of any object (https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkt)
export const Brochure: React.FC<IBrochure> = (props) => {
    return (
        <div className={'layout'}>
            <div className={'sidebar'}>sidebar</div>
            <div className={'view'}>{props.children}</div>
        </div>
    );
};
