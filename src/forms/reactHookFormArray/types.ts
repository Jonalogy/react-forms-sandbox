import { Fields } from 'forms/reactHookFormArray/constants';

export type TManpowerPremise = {
    premise: {
        [Fields.workFrom]: string;
        [Fields.premiseType]: string;
        [Fields.numberOfWorkers]: string;
        [Fields.workerIdenfiers]: string;
    };
};

type TWorkerName = {
    firstName: string;
    lastName: string;
};

export type FieldNames = TManpowerPremise & { [Fields.workerName]: TWorkerName[] };

export type FieldNamesArray = {
    form: TManpowerPremise[];
};

export type AnyReactFormHooks = any;
