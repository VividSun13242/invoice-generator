/**
 * Webpack config utils
 */
import { join } from 'path';

export const rootDir = join(__dirname, '../');
export const mode = process.env.NODE_ENV ?? 'production';
export const isDevServer = process.env.WEBPACK_IS_DEV_SERVER === 'true';
export const isProd = mode === 'production';
export const isDev = !isProd;
