import React from 'react';
import './Brochure.scss';

type IBrochure = Record<string, any>;
export const Brochure: React.FC<IBrochure> = (props) => {
    return (
        <div className={'layout'}>
            <div className={'sidebar'}>sidebar</div>
            <div className={'view'}>{props.children}</div>
        </div>
    );
};
