
const Router = require('./utils/router')
const linksHandler = require('./handlers/linksHandler')
const htmlHandler = require('./handlers/htmlHandler')
/**
 * Entry point for worker
 */

addEventListener('fetch', event => {
  return event.respondWith(handleRequest(event.request))
})

/**
 * Router
 * @param request
 * @returns {Promise<*>}
 */

async function handleRequest(request) {
  let router = new Router()
  router.get('/links', request => linksHandler(request))
  router.get('.*', request => htmlHandler(request))
  return await router.route(request)
}