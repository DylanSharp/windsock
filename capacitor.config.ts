import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.dmsapps.windsock',
  appName: 'Windsock',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  // server: {
  //   url: 'http://192.168.1.103:5173/',
  //   cleartext: true
  // },
  plugins: {
    extConfig: {},
    CapacitorUpdater: {
      privateKey: '-----BEGIN RSA PRIVATE KEY-----\nMIIEogIBAAKCAQEAuzcjAkWRlRBDgUj4ydgbdKHukftF61Hn5smuxvYrRz5nfUnH\n5zcVadoE2VC0eYHTcBAaXBqo6jbPt0hoKd8jcNCe6NdDomPk6DfJ0EtpdqM+xK9D\njQGi2ZKSULGHg3m+uXvyDf//qb/pKpoFNSCEz2Xe3HdVp7F3WVBv7R5ALtrkDGLQ\nfkkSXOHlHEFqVh04Ow4yzJXFrDB/J5yzt4SlBNzO9UdRD1Joeoq56C9q5ZvONl86\nWXB9Co3TmVXv7s0tawEoV3LLCPIpa9vdZLK6LfHRsyjrE2sry7KmboTtmn/ary3D\nmQhwY2w5r7YpXkNeseLq3uPQPrve7Kzb96mM0QIDAQABAoIBAEgJh8GMhl+uweLh\n8sUsECh5VMS8RKOvQQXnbgal23JO+2BUvwRjiCxSVVJPgRpOD89LivEM2xlAXP3f\n8SDHeSokRDlA94fpWz/Vk6TAF8UsPG9PJzV/Pyvr/7voC8ZV1sMlg7bKXhRxwWUA\nneda62+oebAohP+BRHTMBD1fyf+c1Wqmj5EWdYkZMyIl2XlcGxz/Ze2MD8kZVhPR\n4twENNaWWPmDU45ULqleoFudsEYLvuGltIN6eUmkV/Tyoz5l8RONBF9dQhdpuXnn\nhlgYNqSnNT+VzPduH/2+VQY5FVd5cK7f12FgOTCiI95Uts1M2HjwP/+CTSRgdga8\nMN0ykM8CgYEA+mDoBk9zIrFCT3RKcF2K1l6p/u55tHICQNQCRQatF/nNDgzjOGVe\nXUYXbv6bmPPM7nw8DWfyvJDgMipOpAzNUvudxc2babbsD21WGcaU9Or75lRiNrwC\nZ1I6FlzWMh8ruPI8V7DH2ONJJqT1Virvx0o5q85jRkZfvHuoi9IweBsCgYEAv2sw\ndPvEdCobGQU5LKAwwkfPscY+Pp+7UxxNZk0pd2Gxr/yA5V2pN0CjvTz5FtyoKUbw\nuaOARZfWafopUV1GQ/y+jYgyB7CB5Grcei3eWw0L60qF6SxryIgLpIYuoKz3rchJ\njP1Gf9k8JiXTsMf0rjuxIoU3z47guLb9fCzjtYMCgYA/euJY9zvRx+9wBaP56T2S\nLF4dbIke3ukDVr1ckty//22l6k6RteG+9E5srdD1bpq+vHDdVUWN2Y1+KovVvAky\nyOivhfmpS9996dKypk6N6iYDt9FO30wcthRUJyWHf6+uLHxwHzoMG1QooBozxp8U\ngBUvIhy5bI5JU3DgQmJXkQKBgETbcy/xzUaYSu0iMuH5sfCBUpY5oPR4EzOfb7xI\nL41xSDDtXRSlL5TfnMcbIuN1dsx6Z2fwB9mA+DFhOvG44ujcB1P0VULs3JzlT/Bn\nhaAtPkdipG8veopFXiLN3gIQlnweG08rYOvmojt6yf7CvyLZ+CtZzqzMUcxAj0jX\nAQavAoGAXiFG+tRZDCU45Y98MaHBNtN9CyWKJWZ6cucVzRarO3/dWNxSoRr6UDJi\nAiSK85+eXCzKqd/LZrw7GzU8n6gjm6QisGKvuGJukwjyncs+Xun1d0nDV8cQYstY\nF/jcOU8Ow/EiUKm00RtiwwjvQNh4ssn1UUzK9uQQWKpsr+BuVrU=\n-----END RSA PRIVATE KEY-----\n'
    }
  }
};

export default config;
