/**
 * Returns an array of links that represent stories of Linktree for /links endpoint
 * @type {({name: string, url: string}[])}
 */

function getLinksEndpoint() {
    return [
        {
            "name": "Portfolio",
            "url": "https://JLowe-N.github.io"
        },
        {
            "name": "Project: React-based Netflix",
            "url": "https://jlowen-netflix.netlify.app/"
        },
        {
            "name": "Project: Front End UI - Beer Locator",
            "url": "https://justin-lowen.herokuapp.com/punk-api-beer-app"
        },
        {
            "name": "Download My Resume (PDF)",
            "url": "https://github.com/JLowe-N/MyResume/raw/master/Justin%20Lowen%20-%20Software%20Engineer%20-%20Sept%202020%20-%20Public%20Copy.pdf"
        },
        {
            "name": "Learn Something New: How To Brew",
            "url": "http://www.howtobrew.com/"
        }
    ]
}

module.exports = getLinksEndpoint()
