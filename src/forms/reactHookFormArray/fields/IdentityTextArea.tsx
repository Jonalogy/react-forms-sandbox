import React from 'react';
import TextArea from 'forms/controlledFields/TextArea';

type IIdentityTextArea = Record<string, unknown>;
const IdentityTextArea: React.FC<IIdentityTextArea> = () => {
    return (
        <>
            <TextArea />
        </>
    );
};

export default IdentityTextArea;
