/**
 * Transforms fallback Body BG color by transforming
 * body tag's Tailwind CSS class
 */
const bodyColorClass = "bg-green-900"

class BodyColorTransformer {

    /**
     * Sets the body class attribute for Tailwind CSS
     * color palette
     * @param element
     */
    async element(element) {
        element.setAttribute("class", bodyColorClass)
    }
}

module.exports = BodyColorTransformer
