import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import './index.scss';
import RadioButtons from 'forms/fields/RadioButtons/RadioButtons';
import Input from 'forms/fields/Input';
import { Fields, employeesWorkAreaOptions, productionSiteOptions, Section } from 'forms/reactHookFormArray/constants';
import { FieldNames } from 'forms/reactHookFormArray/types';

let rendered = 0;

type IReactHookFormArray = Record<string, unknown>;
const ReactHookFormArray: React.FC<IReactHookFormArray> = () => {
    const { register, getValues, handleSubmit, watch, errors, triggerValidation, control } = useForm<FieldNames>({
        defaultValues: { premise: { [Fields.workFrom]: 'onSite' }, workerName: [{ firstName: '', lastName: '' }] },
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: Fields.workerName,
    });

    return (
        <div className="frame">
            <h5>Render Count: { (rendered++) && rendered}</h5>
            <div className="formData">{`${JSON.stringify(getValues({ nest: true }), null, 2)}`}</div>
            <form className="form" onSubmit={handleSubmit((data) => console.log('submitted:', data))}>
                <div>
                    {/* TODO: Updating radio button is causing form the re-render twice */}
                    <RadioButtons
                        fieldName={`${Section.premise}.${Fields.workFrom}`}
                        register={register}
                        options={employeesWorkAreaOptions}
                    />

                    {watch(`${Section.premise}.${Fields.workFrom}`) === 'onSite' && (
                        <RadioButtons
                            fieldName={`${Section.premise}.${Fields.premiseType}`}
                            register={register}
                            options={productionSiteOptions}
                        />
                    )}

                    {watch(`${Section.premise}.${Fields.workFrom}`) &&
                        watch(`${Section.premise}.${Fields.premiseType}`) && (
                            <Input
                                placeholder="Number of workers"
                                register={register({ required: 'This field is required' })}
                                name={Fields.numberOfWorkers}
                                error={!!errors[Fields.numberOfWorkers]}
                                onChange={() => triggerValidation(Fields.numberOfWorkers)}
                            />
                        )}
                </div>
                <div>
                    <header>
                        <b>Worker Names</b>
                    </header>
                    {fields.map((field, index) => (
                        <div key={field.id}>
                            <input name={`${Fields.workerName}[${index}].firstName`} ref={register()} />
                            <input name={`${Fields.workerName}[${index}].lastName`} ref={register()} />
                            <button
                                type="button"
                                onClick={() => remove(index)}
                            >
                                X
                            </button>
                        </div>
                    ))}
                </div>

                <div className="formArrayActions">
                    <button
                        type="button"
                        onClick={() => {
                            append({ name: Fields.workerName });
                        }}
                    >
                        append
                    </button>
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ReactHookFormArray;
