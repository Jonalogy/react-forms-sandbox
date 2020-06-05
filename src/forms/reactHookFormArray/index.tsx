import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import './index.scss';

enum Fields {
    workFrom = 'workFrom',
    premiseType = 'premiseType',
}
type FieldNames = {
    [Fields.workFrom]: string;
};
interface IReactHookFormArray {}

const ReactHookFormArray: React.FC<IReactHookFormArray> = () => {
    const { register, getValues, handleSubmit } = useForm<FieldNames>();
    const onSubmit = (data) => console.log('submitted:', data);
    return (
      <>
        <div className="formData">{`${JSON.stringify(getValues(), null, 2)}`}</div>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <section className="radioGroup">
                <label htmlFor={Fields.workFrom}>
                    <input type="radio" id={Fields.workFrom} defaultChecked={true} name={Fields.workFrom} ref={register} value="onSite" />
                    Working on site
                </label>

                <label htmlFor={Fields.workFrom}>
                    <input type="radio" id={Fields.premiseType} name={Fields.workFrom} ref={register} value="offSite" />
                    Working on site
                </label>
            </section>
            <button type="submit">Submit</button>
        </form>
      </>
    );
};

export default ReactHookFormArray;
