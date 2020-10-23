/**
 * Transforms the page title
 */
const username = "@JustinLowen"

class TitleTransformer {

    /**
     * Transforms the page title to the username
     * @param element
     */
    async element(element) {
        element.setInnerContent(username)
    }
}

module.exports = TitleTransformer
