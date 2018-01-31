import {ApiModelProperty, ApiModelPropertyOptional} from '@nestjs/swagger';

export class LoginDto {
    @ApiModelProperty()
    readonly email: string;
    @ApiModelProperty()
    readonly password: string;
}
