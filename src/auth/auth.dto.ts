import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';

export class LoginDto {
    @ApiModelProperty({ required: true, example: 'john@example.com' })
    public readonly email: string;
    @ApiModelProperty({ required: true, example: 'changeme' })
    public readonly password: string;
}
