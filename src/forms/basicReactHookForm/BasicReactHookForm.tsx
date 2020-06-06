import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import './BasicReactHookForm.scss';
import TextArea from 'forms/basicReactHookForm/controlledFields/TextArea';

enum Fields {
    name = 'Name',
    age = 'Age',
    hobbies = 'Hobbies'
}

type Inputs = {
    [Fields.name]: string;
    [Fields.age]: number;
    [Fields.hobbies]: string;
};

export function BasicReactHookForm() {
    const { register, handleSubmit, watch, errors, triggerValidation, control, getValues, setValue } = useForm<
        Inputs
    >();
    const onSubmit = (data) => console.log('submitted:', data);

    console.log('getValue:hobbies ->', getValues(Fields.hobbies));

    /* Do not trigger validation for both controlled and uncontrolled components here.
      Try trigerring the validation from their onChange handlers first!
    */

    return (
        <div className="frame">
            <div className="formData">{`${JSON.stringify(getValues(), null, 2)}`}</div>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <input name={Fields.name} placeholder="Name" ref={register({ required: true })} />

                <input
                    name={Fields.age}
                    disabled={!watch(Fields.name)}
                    placeholder="Age"
                    ref={register({ required: `${Fields.age} is required` })}
                    onChange={() => triggerValidation(Fields.age)}
                />
                {errors[Fields.age] && <span className="errorMsg">{errors[Fields.age]!.message}</span>}

                {/* Controlled Component's validation
                    - Unlike uncontrolled components, controlled components are assumed to have their own validation
                    - To rely on [rules] for validation, one has to call it intentionally (For example: on form re-render)
                */}
                <Controller
                    as={<TextArea />}
                    disabled={!getValues(Fields.age)}
                    name={Fields.hobbies}
                    value={getValues(Fields.hobbies)}
                    label={'Hobbies'}
                    control={control}
                    placeholder="eg. Football"
                    onChangeName="onTextChange"
                    rules={{
                        required: `Please list your ${Fields.hobbies}`,
                        validate: {
                            noSpecialChar: (val) =>
                                /[^a-zA-Z\s,]/g.test(val)
                                    ? `${Fields.hobbies} cannot contain special characters`
                                    : undefined,
                            minStrLength: (val) => (String(val).length < 5 ? 'At least 5 characters please' : undefined)
                        }
                    }}
                    onChange={([event]) => {
                        const hobbies = event.target.value.replace(/\d/g, '');
                        setValue(Fields.hobbies, hobbies);
                        triggerValidation(Fields.hobbies);
                        return hobbies;
                    }}
                />
                {errors[Fields.hobbies] && <span className="errorMsg">{errors[Fields.hobbies]!.message}</span>}

                <input type="submit" />
            </form>
        </div>
    );
}
