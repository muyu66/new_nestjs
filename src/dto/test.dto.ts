import { } from '../const/index';
import { IsString, IsInt, IsIn } from 'class-validator';

export class CreateTestDto {

    @IsString()
    readonly name: string;

}