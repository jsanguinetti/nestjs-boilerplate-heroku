import {ApiModelProperty, ApiModelPropertyOptional} from '@nestjs/swagger';

export class CreateUserDto {
    @ApiModelProperty()
    readonly email: string;
    @ApiModelProperty()
    readonly firstName: string;
    @ApiModelPropertyOptional()
    readonly lastName: string;
    @ApiModelPropertyOptional()
    readonly age: number;
}
