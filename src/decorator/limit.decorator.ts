import { ReflectMetadata } from '@nestjs/common';

export const DLimit = (level: number) => ReflectMetadata('level', level);