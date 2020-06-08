import React from 'react';
import RadioButtons from 'forms/fields/RadioButtons/RadioButtons';
import { employeesWorkAreaOptions, productionSiteOptions } from 'forms/reactHookFormArray/constants';
import { get } from 'lodash';
import Input from 'forms/fields/Input';
import './SubForm.scss';
import { TManpowerPremise, AnyReactFormHooks } from 'forms/reactHookFormArray/types';
import IdentityTextArea from 'forms/reactHookFormArray/fields/IdentityTextArea';

interface ISubForm {
    errors: Record<string, unknown>;
    workFromFieldName: string;
    premiseTypeFieldName: string;
    numberOfWorkerFieldName: string;
    workerIdenfiersFieldName: string;
    field: TManpowerPremise;
    register: AnyReactFormHooks;
    triggerValidation: AnyReactFormHooks;
    removePremise: AnyReactFormHooks;
    watch: AnyReactFormHooks;
}

const SubForm: React.FC<ISubForm> = (props) => {
    return (
        <div className="subFormLayout">
            <div className="subForm">
                {/* TODO: Updating radio button is causing form the re-render twice */}
                <RadioButtons
                    fieldName={props.workFromFieldName}
                    register={props.register}
                    options={employeesWorkAreaOptions}
                    defaultValue={employeesWorkAreaOptions[0].value as string}
                />

                <RadioButtons
                    fieldName={props.premiseTypeFieldName}
                    register={props.register}
                    options={productionSiteOptions}
                    defaultValue={productionSiteOptions[0].value as string}
                />

                <Input
                    placeholder="Number of on-site workers"
                    register={props.register({ required: 'Please input a number' })}
                    name={props.numberOfWorkerFieldName}
                    maxLength={5}
                    disabled={!(props.watch(props.premiseTypeFieldName) === productionSiteOptions[0].value)}
                    error={get(props.errors, props.numberOfWorkerFieldName, false) as boolean}
                />

                <IdentityTextArea name={props.workerIdenfiersFieldName} />
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
