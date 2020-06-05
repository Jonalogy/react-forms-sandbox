import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import './index.scss';
import RadioButtons from 'forms/fields/RadioButtons/RadioButtons';
import { validate } from '@babel/types';
import Input from 'forms/fields/Input';
import { TRadioOptions } from 'forms/fields/RadioButtons/types';

const employeesWorkAreaOptions: TRadioOptions[] = [
    { label: 'Working on site', value: 'onSite' },
    { label: 'Working from home / off-site', value: 'offSite' },
];
const productionSiteOptions: TRadioOptions[] = [
    { label: 'Production site (eg. construction site)', value: 'prod' },
    { label: 'Non-production site (eg. back office)', value: 'nonProd' },
];

enum Fields {
    workFrom = 'workFrom',
    premiseType = 'premiseType',
    numberOfWorkers = 'numberOfWorkers',
}
type FieldNames = {
    [Fields.workFrom]: string;
    [Fields.numberOfWorkers]: string;
};
type IReactHookFormArray = Record<string, unknown>;
const ReactHookFormArray: React.FC<IReactHookFormArray> = () => {
    const { register, getValues, handleSubmit, watch, errors, triggerValidation } = useForm<FieldNames>({
        defaultValues: { [Fields.workFrom]: 'onSite' },
    });
    const onSubmit = (data) => console.log('submitted:', data);
    return (
        <>
            <div className="formData">{`${JSON.stringify(getValues(), null, 2)}`}</div>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                {/* TODO: Updating radio button is causing form the re-render twice */}
                <RadioButtons fieldName={Fields.workFrom} register={register} options={employeesWorkAreaOptions} />

                {watch(Fields.workFrom) === 'onSite' && (
                    <RadioButtons fieldName={Fields.premiseType} register={register} options={productionSiteOptions} />
                )}

                {watch(Fields.workFrom) && watch(Fields.premiseType) && (
                    <Input
                        register={register({ required: 'This field is required' })}
                        name={Fields.numberOfWorkers}
                        error={!!errors[Fields.numberOfWorkers]}
                        onChange={() => triggerValidation(Fields.numberOfWorkers)}
                    />
                )}
                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default ReactHookFormArray;
