import { Fields } from 'forms/reactHookFormArray/constants';

export type ManpowerPremise = {
    premise: {
        [Fields.hours]: string;
        [Fields.workFrom]: string;
        [Fields.premiseType]: string;
        [Fields.numberOfWorkers]: string;
    };
};

export type FieldNames = ManpowerPremise[];
