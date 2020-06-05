import React from 'react';
import { useForm, Controller, EventFunction } from 'react-hook-form';
import './ReactHookForm.scss';

enum Fields {
    name = 'name',
    age = 'age',
    hobbies = 'hobbies',
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
    console.log(watch(Fields.hobbies));
    console.log(errors);
    
    return (
        <div className="frame">
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input name={Fields.name} placeholder="Name" ref={register({ required: true })} />

                {/* include validation with required or other standard HTML validation rules */}
                <input
                    name={Fields.age}
                    disabled={!watch(Fields.name)}
                    placeholder="Age"
                    ref={register({ required: true })}
                    onChange={() => triggerValidation(Fields.age)}
                />
                {/* errors will return when field validation fails  */}
                {errors[Fields.age] && <span className="errorMsg">This field is required</span>}
                <Controller
                    as={<textarea />}
                    disabled={!getValues(Fields.age)}
                    name={Fields.hobbies}
                    control={control}
                    rules={{ required: true }}
                    onChange={([event]) => {
                      if(!event.target.value) { 
                        return
                      }
                      return String(event.target.value).replace(/\d/g, '')
                    }}
                />

                <input type="submit" />
            </form>
        </div>
    );
}
