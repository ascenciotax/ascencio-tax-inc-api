import {
  IsArray,
  IsBoolean,
  IsInt,
  IsOptional,
  IsString,
  IsUrl,
  MinLength,
} from 'class-validator';

export class CreateServiceDto {
  @IsString()
  @MinLength(3)
  name: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsString()
  @MinLength(3)
  address: string;

  @IsInt()
  durationMinutes: number;

  @IsBoolean()
  isAvailableOnline: boolean;

  @IsString()
  @IsUrl()
  @IsOptional()
  imageUrl?: string;

  @IsBoolean()
  isActive: boolean;

  @IsArray()
  @IsOptional()
  @IsString({ each: true })
  staffIds: string[];
}
