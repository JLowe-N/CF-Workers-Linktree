/**
 * Transforms img#avatar by setting the src attribute.
 */
const avatarSrc = "https://raw.githubusercontent.com/JLowe-N/CF-Workers-Linktree/master/img/JLowen_avatar.png"

class AvatarTransformer {

    /**
     * Inserts an avatar by setting img#avatar src attribute
     * @param element
     */
    async element(element) {
        element.setAttribute("src", avatarSrc)
    }
}

module.exports = AvatarTransformer
