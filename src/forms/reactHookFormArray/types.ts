import { Fields, Section } from 'forms/reactHookFormArray/constants';

export type TManpowerPremise = {
    premise: {
        [Fields.workFrom]: string;
        [Fields.premiseType]: string;
        [Fields.numberOfWorkers]: string;
    };
};

type TWorkerName = {
    firstName: string;
    lastName: string;
};

export type FieldNames = TManpowerPremise & { [Fields.workerName]: TWorkerName[] };
