import { Expose } from "class-transformer";

export const IDENTITY = 'identity_user';
export const PAYROLL = 'payroll_user';


export class WorkerEntityDto {

    employee_id: number;

    first_name: string;

    last_name: string;

    nationality: string;

    department_id: number;

    @Expose({ groups: [IDENTITY] })
    national_id_number: string;

    @Expose({ groups: [PAYROLL] })
    bank_account_number: string;

    @Expose({ groups: [PAYROLL] })
    monthly_salary: number;

    job_title: string;

    contract_start_date: string;

    contract_end_date?: string;

    constructor(partial: Partial<WorkerEntityDto>) {
        Object.assign(this, partial);
    }
}