import {ApiModelProperty, ApiModelPropertyOptional} from '@nestjs/swagger';

export class LoginDto {
    @ApiModelProperty()
    public readonly email: string;
    @ApiModelProperty()
    public readonly password: string;
}
