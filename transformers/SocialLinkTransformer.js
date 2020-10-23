/**
 * Transforms story links and adds them to the HTML page
 */
class SocialLinkTransformer {
    constructor(links) {
        this.links = links
    }

    /**
     * Add each link that was declared before
     * @param element
     * @returns {Promise<void>}
     */
    async element(element) {
        element.removeAttribute("style")
        element.setAttribute("class", "flex justify-evenly")
        let socialLinksHtml = `
            <div id="links">
        `
        this.links.forEach(link => {
            socialLinksHtml += `
            <a href="${link.url}">
            ${link.svg}
            </a>
        `
        })
        socialLinksHtml += `
        </div>
        `
        element.append(socialLinksHtml, { html: true })
    }
}

module.exports = SocialLinkTransformer
