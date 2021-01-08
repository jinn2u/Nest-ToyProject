//데이터 전송 객체data -transfer object

import { IsNumber, IsOptional, IsString } from "class-validator"

//사랆들이 보냈으면 하는 변수들
export class CreateMoveiDTO{
    @IsString()
    readonly title: string

    @IsNumber()
    readonly year: number

    @IsOptional()
    @IsString({each: true})
    readonly genre: string[]
}
