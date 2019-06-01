import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class CreateUserDto {
    @ApiModelProperty({ required: true, example: 'john@example.com' })
    public readonly email: string;
    @ApiModelProperty({ required: true, example: 'changeme' })
    public readonly password: string;
    @ApiModelProperty({ example: 'John' })
    public readonly firstName: string;
    @ApiModelPropertyOptional({ example: 'Doe' })
    public readonly lastName: string;
    @ApiModelPropertyOptional({ example: '25' })
    public readonly age: number;
}
