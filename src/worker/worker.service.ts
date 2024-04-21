import {Injectable, Req, SerializeOptions, UseGuards} from '@nestjs/common';
import { FileManagementService } from "../file-management/file-management.service";
import {IDENTITY, PAYROLL, WorkerEntityDto} from "./modele/worker.entity.dto";
import {instanceToPlain} from "class-transformer";

@Injectable()
export class WorkerService {

    constructor(private fileManagementService: FileManagementService) {
    }

    async findAll(@Req() request: Request): Promise<Partial<WorkerEntityDto>[]> {
        const workers = JSON.parse(await this.fileManagementService.readFile("./src/data/workers.json"))

        const groups = request.headers['groups'] ? request.headers['groups'].split(',') : []

        console.log(groups)

        const workersInstances = workers as WorkerEntityDto[]

        const workersList = workersInstances.map(worker => instanceToPlain(new WorkerEntityDto(worker), {groups: groups}))

        return workersList;
    }

    async findOne(id: number): Promise<WorkerEntityDto> {
        const workers = JSON.parse(await this.fileManagementService.readFile("./src/data/workers.json"));
        return workers.find(worker => worker["employee_id"] === id);
    }
}
