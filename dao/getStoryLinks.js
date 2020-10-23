/**
 * Makes a request to /links endpoint, simulating API call to remote resource
 * @returns {Promise<{name: string, url: string}[]>}
 */

const links = require('./getLinksEndpoint')

async function getStoryLinks() {
    // const jsonHeaderContentType = {
    //     headers: { "content-type": "application/json" }
    // }
    // const url = "https://linktree.justinlowen.workers.dev/links"
    // const response = await fetch(url, jsonHeaderContentType)
    // console.log(await response.text())
    // return JSON.stringify(await response.json())
    return links
}

module.exports = getStoryLinks