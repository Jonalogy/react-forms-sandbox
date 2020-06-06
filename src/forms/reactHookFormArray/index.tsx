import React from 'react';
import { useForm } from 'react-hook-form';
import './index.scss';
import RadioButtons from 'forms/fields/RadioButtons/RadioButtons';
import Input from 'forms/fields/Input';
import { Fields, employeesWorkAreaOptions, productionSiteOptions } from 'forms/reactHookFormArray/constants';
import { FieldNames } from 'forms/reactHookFormArray/types';

let rendered = 0;

type IReactHookFormArray = Record<string, unknown>;
const ReactHookFormArray: React.FC<IReactHookFormArray> = () => {
    rendered++;
    const { register, getValues, handleSubmit, watch, errors, triggerValidation } = useForm<FieldNames>({
        defaultValues: [{ premise: { [Fields.workFrom]: 'onSite' } }],
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
