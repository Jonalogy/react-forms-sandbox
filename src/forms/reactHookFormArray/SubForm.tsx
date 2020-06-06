import React from 'react';
import RadioButtons from 'forms/fields/RadioButtons/RadioButtons';
import { employeesWorkAreaOptions, productionSiteOptions } from 'forms/reactHookFormArray/constants';
import { get } from 'lodash';
import './SubForm.scss';
import Input from 'forms/fields/Input';

interface ISubForm {
    errors: Record<string, unknown>;
    workFromFieldName: string;
    premiseTypeFieldName: string;
    numberOfWorkerFieldName: string;
    register: any;
    triggerValidation: any;
    removePremise: any;
}

const SubForm: React.FC<ISubForm> = (props) => {
    console.log(get(props.errors, props.numberOfWorkerFieldName, false));

    return (
        <div className="subform">
            <div>
                {/* TODO: Updating radio button is causing form the re-render twice */}
                <RadioButtons
                    fieldName={props.workFromFieldName}
                    register={props.register}
                    options={employeesWorkAreaOptions}
                />

                <RadioButtons
                    fieldName={props.premiseTypeFieldName}
                    register={props.register}
                    options={productionSiteOptions}
                />

                <Input
                    placeholder="Number of workers"
                    register={props.register({ required: 'Please input a number' })}
                    name={props.numberOfWorkerFieldName}
                    error={get(props.errors, props.numberOfWorkerFieldName, false) as boolean} // TODO: Error is not working yet!
                    onChange={() => props.triggerValidation(props.numberOfWorkerFieldName)}
                />
            </div>
            {props.removePremise && (
                <button className="removePremise" onClick={props.removePremise}>
                    X
                </button>
            )}
        </div>
    );
};

export default SubForm;
