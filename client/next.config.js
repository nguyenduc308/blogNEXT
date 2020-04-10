const withCSS = require('@zeit/next-css')
module.exports = withCSS({
    publicRuntimeConfig: {
        APP_NAME: 'DucLux.Com',
        API_DEVELOPMENT: 'http://localhost:8000/api',
        PRODUCTION: false,
        DOMAIN_DEVELOPMENT:'http://locahost:3000',
        DOMAIN_PRODUCTION: 'https://duclux.com',
        FB_APP_ID: '168288347925036'
    }
} 
)
