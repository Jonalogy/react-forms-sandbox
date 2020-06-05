import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import './ReactHookForm.scss';

enum Fields {
    name = 'Name',
    age = 'Age',
    hobbies = 'Hobbies',
}

type Inputs = {
    [Fields.name]: string;
    [Fields.age]: number;
    [Fields.hobbies]: string;
};

export function ReactHookForm() {
    const { register, handleSubmit, watch, errors, triggerValidation, control, getValues, formState } = useForm<
        Inputs
    >();
    const onSubmit = (data) => console.log('submitted:', data);

    /* Do not trigger validation for registered uncontrolled components here.
       Every call to [triggerValidation] forces a re-render
    */
    triggerValidation(Fields.hobbies);

    return (
        <div className="frame">
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <input name={Fields.name} placeholder="Name" ref={register({ required: true })} />

                <input
                    name={Fields.age}
                    // disabled={!watch(Fields.name)}
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
                    as={<textarea />}
                    // disabled={!getValues(Fields.age)}
                    name={Fields.hobbies}
                    control={control}
                    rules={{
                        required: `Please list your hobbies ${Fields.hobbies}`,
                        validate: {
                            noSpecialChar: (val) =>
                                /\W+/.test(val) ? `${Fields.hobbies} cannot contain special characters` : undefined,
                            minStrLength: (val) =>
                                String(val).length < 5 ? 'At least 5 characters please' : undefined,
                        },
                    }}
                    onChange={([event]) => {
                        console.log('RHF:', event.target.value);
                        return event.target.value.replace(/\d/g, '');
                    }}
                />
                {errors[Fields.hobbies] && <span className="errorMsg">{errors[Fields.hobbies]!.message}</span>}

                <input type="submit" />
            </form>
        </div>
    );
}
