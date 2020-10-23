/**
 * Transforms the div#profile by removing the style
 * attribute, which previously was display: none.
 */
class ProfileTransformer {

    /**
     * Removes the inline style "display: none" from the div#profile.
     * @param element
     */
    async element(element) {
        element.removeAttribute("style")
    }
}

module.exports = ProfileTransformer
