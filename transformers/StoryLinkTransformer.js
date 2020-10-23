/**
 * Transforms story links and adds them to the HTML page
 */
class StoryLinkTransformer {
    constructor(links) {
        this.links = links
    }

    /**
     * Add each link that was declared before
     * @param element
     * @returns {Promise<void>}
     */
    async element(element) {
        let childElements = ''
        this.links.forEach(link => {
            childElements += `
            <a href="${link.url}">
            ${link.name}
            </a>
        `
        })
        element.setInnerContent(childElements, { html: true })
    }
}

module.exports = StoryLinkTransformer
