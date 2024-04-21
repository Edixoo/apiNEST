import {
    ClassSerializerInterceptor,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    Req,
    SerializeOptions,
    UnauthorizedException,
    UseGuards, UseInterceptors
} from '@nestjs/common';
import {WorkerService} from './worker.service';
import {AuthGuard} from "../guards/auth.guard";
import {PAYROLL, WorkerEntityDto} from "./modele/worker.entity.dto";

@Controller('worker')
@UseGuards(AuthGuard)
export class WorkerController {
    constructor(private readonly workerService: WorkerService) {}

    @Get()
    async findAll(@Req() request: Request): Promise<Partial<WorkerEntityDto>[]> {

        return await this.workerService.findAll(request);

    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<WorkerEntityDto> {
        return await this.workerService.findOne(id);
    }
}
