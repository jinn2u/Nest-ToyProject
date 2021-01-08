//데이터 전송 객체data -transfer object

import { IsNumber, IsString } from "class-validator"
import {PartialType} from "@nestjs/mapped-types"
import { CreateMoveiDTO } from "./create-movie.dto"
//사랆들이 보냈으면 하는 변수들
export class UpdateMovieDTO extends PartialType(CreateMoveiDTO) {}
