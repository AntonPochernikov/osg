export const isDev = process.env.NODE_ENV !== 'production';

export const ENV_PREFIX = isDev ? '' : '/osg';
