import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import './index.scss';
import RadioButtons from 'forms/fields/RadioButtons/RadioButtons';
import { validate } from '@babel/types';
import Input from 'forms/fields/Input';
import { TRadioOptions } from 'forms/fields/RadioButtons/types';
import { BasicReactHookForm } from 'forms/basicReactHookForm/BasicReactHookForm';

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
    hours = 'hours',
}
type FieldNames = {
    premise: {
        [Fields.hours]: string;
        [Fields.workFrom]: string;
        [Fields.premiseType]: string;
        [Fields.numberOfWorkers]: string;
    };
};
type IReactHookFormArray = Record<string, unknown>;
let rendered = 0;
const ReactHookFormArray: React.FC<IReactHookFormArray> = () => {
    rendered++;
    const { register, getValues, handleSubmit, watch, errors, triggerValidation } = useForm<FieldNames>({
        defaultValues: { premise: { [Fields.workFrom]: 'onSite' } },
    });
    const onSubmit = (data) => console.log('submitted:', data);

    return (
        <div className="frame">
            <h5>Render Count: {rendered}</h5>
            <div className="formData">{`${JSON.stringify(getValues({ nest: true }), null, 2)}`}</div>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    {/* TODO: Updating radio button is causing form the re-render twice */}
                    <RadioButtons
                        fieldName={`premise.${Fields.workFrom}`}
                        register={register}
                        options={employeesWorkAreaOptions}
                    />

                    {watch(`premise.${Fields.workFrom}`) === 'onSite' && (
                        <RadioButtons
                            fieldName={`premise.${Fields.premiseType}`}
                            register={register}
                            options={productionSiteOptions}
                        />
                    )}

                    {watch(`premise.${Fields.workFrom}`) && watch(`premise.${Fields.premiseType}`) && (
                        <Input
                            placeholder="Number of workers"
                            register={register({ required: 'This field is required' })}
                            name={Fields.numberOfWorkers}
                            error={!!errors[Fields.numberOfWorkers]}
                            onChange={() => triggerValidation(Fields.numberOfWorkers)}
                        />
                    )}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ReactHookFormArray;
