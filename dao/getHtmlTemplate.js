/**
 * Get Html template from worker endpoint
 * @returns {Promise<Response}
 */

async function getHtmlTemplate() {
    const htmlHeaderContentType = {
        headers: { "content-type": "text-html;charset=UTF-8" }
    }
    const url = "https://static-links-page.signalnerve.workers.dev"
    return fetch(url, htmlHeaderContentType)
}

module.exports = getHtmlTemplate