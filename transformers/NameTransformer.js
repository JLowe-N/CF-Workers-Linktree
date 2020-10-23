/**
 * Transforms the h1#name to the username
 */
const username = "@JustinLowen"

class NameTransformer {

    /**
     * Sets the h1#name inside the profile to the username
     * @param element
     */
    async element(element) {
        element.setInnerContent(username)
    }
}

module.exports = NameTransformer
