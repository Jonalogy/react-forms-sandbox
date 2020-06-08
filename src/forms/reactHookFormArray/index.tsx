import React from 'react';
import { useForm, useFieldArray, FormContext } from 'react-hook-form';
import './index.scss';
import { Fields } from 'forms/reactHookFormArray/constants';
import { FieldNamesArray } from 'forms/reactHookFormArray/types';
import SubForm from 'forms/reactHookFormArray/SubForm';
// For debugging purposes
import Markdown from 'react-markdown';
import { DevTool } from 'react-hook-form-devtools';
import { jsonSource } from 'forms/markdownHelper';

let rendered = 0;

type IReactHookFormArray = Record<string, unknown>;
const ReactHookFormArray: React.FC<IReactHookFormArray> = () => {
    const useFormMethods = useForm<FieldNamesArray>({
        mode: 'onChange',
        defaultValues: {
            form: [
                {
                    premise: {}
                }
            ]
        }
    });
    const { register, getValues, handleSubmit, errors, triggerValidation, control, watch } = useFormMethods;

    const { fields, append, remove } = useFieldArray({ control, name: 'form' });

    return (
        <div className="frame">
            <DevTool control={control} />
            <Markdown className="markdown" source={jsonSource(getValues({ nest: true }))} />
            <h5>Render Count: {rendered++ && rendered}</h5>

            <FormContext {...useFormMethods}>
                <form className="form" onSubmit={handleSubmit((data) => console.log('submitted:', data))}>
                    {fields.map((field, idx) => {
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
                                workerIdenfiersFieldName={`form[${idx}].premise.${Fields.workerIdenfiers}`}
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
            </FormContext>
        </div>
    );
};

export default ReactHookFormArray;
