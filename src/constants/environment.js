export const IS_DEV = process.env.NODE_ENV !== 'production';

export const ENV_PREFIX = IS_DEV ? '' : '/osg';
