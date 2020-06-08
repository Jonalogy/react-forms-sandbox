import React from 'react';
import TextArea from 'forms/controlledFields/TextArea';
import { useFormContext, Controller, ErrorMessage } from 'react-hook-form';
import './IdentityTextArea.scss';

interface IIdentityTextArea {
    name: string;
}
const IdentityTextArea: React.FC<IIdentityTextArea> = (props) => {
    const { control, errors } = useFormContext();
    return (
        <>
            <Controller
                as={<TextArea />}
                control={control}
                name={props.name}
                onChangeName="onTextAreaChange"
                rules={{
                    required: 'Worker identifiers cannot be left empty',
                    minLength: {
                        value: 8,
                        message: 'Cannot be less than 8 characters'
                    },
                    validate: {
                        noSpecialChar: (val) =>
                            /[^a-zA-Z\s,]/g.test(val)
                                ? `Worker identifiers cannot contain special characters`
                                : undefined
                    }
                }}
            />
            <ErrorMessage className="errorMsg" errors={errors} name={props.name} as="p" />
        </>
    );
};

export default IdentityTextArea;
