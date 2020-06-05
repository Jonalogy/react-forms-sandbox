import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import './index.scss';
import RadioButtons from 'forms/fields/RadioButtons';

const radioOptions = [
    { label: 'Working on site', value: 'onSite' },
    { label: 'Non-production site (eg. back office)', value: 'offSite' },
];

enum Fields {
    workFrom = 'workFrom',
    premiseType = 'premiseType',
}
type FieldNames = {
    [Fields.workFrom]: string;
};
interface IReactHookFormArray {}

const ReactHookFormArray: React.FC<IReactHookFormArray> = () => {
    const { register, getValues, handleSubmit } = useForm<FieldNames>();
    const onSubmit = (data) => console.log('submitted:', data);
    return (
        <>
            <div className="formData">{`${JSON.stringify(getValues(), null, 2)}`}</div>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <RadioButtons fieldName={Fields.workFrom} register={register} options={radioOptions} />
                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default ReactHookFormArray;
