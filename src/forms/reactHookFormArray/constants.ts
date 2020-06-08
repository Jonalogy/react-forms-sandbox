import { TRadioOptions } from 'forms/fields/RadioButtons/types';

const employeesWorkAreaOptions: TRadioOptions[] = [
    { label: 'Working on site', value: 'onSite' },
    { label: 'Working from home / off-site', value: 'offSite' }
];
const productionSiteOptions: TRadioOptions[] = [
    { label: 'Production site (eg. construction site)', value: 'prod' },
    { label: 'Non-production site (eg. back office)', value: 'nonProd' }
];

enum Section {
    premise = 'premise',
    worker = 'worker'
}

enum Fields {
    workFrom = 'workFrom',
    premiseType = 'premiseType',
    numberOfWorkers = 'numberOfWorkers',
    workerName = 'workerName',
    workerIdenfiers = 'workerIdenfiersFieldName'
}

export { employeesWorkAreaOptions, productionSiteOptions, Fields, Section };
