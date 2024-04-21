import { Injectable } from '@nestjs/common';
import * as fs from "fs";

@Injectable()
export class FileManagementService {

    public async readFile(fileName: string): Promise<string> {
        return fs.readFileSync(fileName, 'utf8');
    }

    public async writeFile(fileName: string, data: string): Promise<void> {
        fs.writeFileSync(fileName, data);
    }
}
