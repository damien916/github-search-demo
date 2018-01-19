import rest from 'rest'
import template from 'rest/interceptor/template'
import mime from 'rest/interceptor/mime'
import pathPrefix from 'rest/interceptor/pathPrefix'
import errorCode from 'rest/interceptor/errorCode'
import response from './responseInterceptor'

export default rest
  .wrap(template)
  .wrap(mime, {mime: 'application/json'})
  .wrap(pathPrefix, {prefix: 'https://api.github.com/'})
  .wrap(errorCode, {code: 401})
  .wrap(response)
