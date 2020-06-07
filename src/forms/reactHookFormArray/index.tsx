import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import './index.scss';
import { Fields } from 'forms/reactHookFormArray/constants';
import { FieldNamesArray } from 'forms/reactHookFormArray/types';
import SubForm from 'forms/reactHookFormArray/SubForm';
import { DevTool } from 'react-hook-form-devtools';

let rendered = 0;

type IReactHookFormArray = Record<string, unknown>;
const ReactHookFormArray: React.FC<IReactHookFormArray> = () => {
    const { register, getValues, handleSubmit, errors, triggerValidation, control, watch } = useForm<FieldNamesArray>({
        defaultValues: {
            form: [
                {
                    premise: {}
                }
            ]
        }
    });

    const { fields, append, remove } = useFieldArray({ control, name: 'form' });

    return (
        <div className="frame">
            <DevTool control={control} />
            <h5>Render Count: {rendered++ && rendered}</h5>
            <div className="formData">{`${JSON.stringify(getValues({ nest: true }), null, 2)}`}</div>
            <form className="form" onSubmit={handleSubmit((data) => console.log('submitted:', data))}>
                {fields.map((field, idx) => {
                    console.log({ field });
                    return (
                        <SubForm
                            key={field.id}
                            register={register}
                            triggerValidation={triggerValidation}
                            watch={watch}
                            errors={errors}
                            field={field.premise}
                            workFromFieldName={`form[${idx}].premise.${Fields.workFrom}`}
                            premiseTypeFieldName={`form[${idx}].premise.${Fields.premiseType}`}
                            numberOfWorkerFieldName={`form[${idx}].premise.${Fields.numberOfWorkers}`}
                            removePremise={fields.length > 1 ? () => remove(idx) : undefined}
                        />
                    );
                })}

                <div className="formArrayActions">
                    <button
                        type="button"
                        onClick={() => {
                            append({
                                // TODO: Defaulting values are not working
                                premise: {}
                            });
                        }}
                    >
                        Add Premise
                    </button>
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ReactHookFormArray;
