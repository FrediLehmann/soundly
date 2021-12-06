import type { FlyinStyles } from './FlyinStyles.enum';

export interface FlyinConfig {
  message: string;
  timeout?: number;
  style: FlyinStyles;
}
