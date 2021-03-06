import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig()
export const API = publicRuntimeConfig.PRODUCTION ? 'https://duclux.com' : 'http://localhost:8000/api';
export const APP_NAME = publicRuntimeConfig.APP_NAME;
export const FP_APP_ID = publicRuntimeConfig.FB_APP_ID;
export const DOMAIN = publicRuntimeConfig.PRODUCTION ? publicRuntimeConfig.DOMAIN_PRODUCTION : publicRuntimeConfig.DOMAIN_DEVELOPMENT