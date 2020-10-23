/**
 * Serves GET requests to /links route, returning JSON of an array of story links
 * @param request
 * @returns {Response} Array of link objects
 */
const links = require('../dao/getLinksEndpoint')

function linksHandler(request) {
    const init = {
        headers: { "content-type": "application/json;charset=UTF-8" }
    }
    const body = JSON.stringify(links, null, 2)
    return new Response(body, init)
}

module.exports = linksHandler