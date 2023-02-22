module.exports = ({ env }) => ({
  proxy: true,
  url: env('URL'),
  port: env('PORT'), // This custom port will be important to point a domain to the service
  host: env('HOST'),
  app: { 
    keys: env.array('APP_KEYS')
  },
})