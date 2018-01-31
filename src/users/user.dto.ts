import {ApiModelProperty, ApiModelPropertyOptional} from '@nestjs/swagger';

export class CreateUserDto {
    @ApiModelProperty()
    public readonly email: string;
    @ApiModelProperty()
    public readonly firstName: string;
    @ApiModelPropertyOptional()
    public readonly lastName: string;
    @ApiModelPropertyOptional()
    public readonly age: number;
}
