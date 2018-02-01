import {ApiModelProperty, ApiModelPropertyOptional} from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class CreateUserDto {
    @ApiModelProperty({required: true})
    public readonly email: string;
    @ApiModelProperty({required: true})
    public readonly password: string;
    @ApiModelProperty()
    public readonly firstName: string;
    @ApiModelPropertyOptional()
    public readonly lastName: string;
    @ApiModelPropertyOptional()
    public readonly age: number;
}
