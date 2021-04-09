import theme from '@nuxt/content-theme-docs'

export default theme({
  docs: {
    primaryColor: '#E24F55'
  },
  i18n: {
    locales: () => [{
      code: 'de',
      iso: 'de-DE',
      file: 'de-DE.js',
      name: 'Deutsch'
    }],
    defaultLocale: 'de'
  }
})
