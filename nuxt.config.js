import { withDocus } from 'docus'

export default withDocus({
  buildModules: [
    'vue-plausible/lib/esm'
  ],
  plausible: {
    domain: 'help.generation-alive.org'
  },
  i18n: {
    locales: [{
      code: 'de',
      iso: 'de-DE',
      file: 'de-DE.js',
      name: 'Deutsch'
    }],
    defaultLocale: 'de'
  },
  server: {
    port: 3000
  }
})