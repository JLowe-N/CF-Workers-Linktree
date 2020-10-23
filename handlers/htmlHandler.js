
/**
 * Parses and transforms incoming HTML from the 
 * https://static-links-page.signalnerve.workers.dev
 * endpoint which provides a Tailwind CSS template.
 */
const socialLinks = require('../dao/getSocialLinks')
const storyLinks = require('../dao/getStoryLinks')
const getHtmlTemplate = require('../dao/getHtmlTemplate')
const TitleTransformer = require('../transformers/TitleTransformer')
const StyleTransformer = require('../transformers/StyleTransformer')
const BodyColorTransformer = require('../transformers/BodyColorTransformer')
const ProfileTransformer = require('../transformers/ProfileTransformer')
const AvatarTransformer = require('../transformers/AvatarTransformer')
const NameTransformer = require('../transformers/NameTransformer')
const StoryLinkTransformer = require('../transformers/StoryLinkTransformer')
const SocialLinkTransformer = require('../transformers/SocialLinkTransformer')

/**
 * HTML Handler - served on all routes except /links
 */
async function htmlHandler(request) {
    const htmlTemplateResponse = await getHtmlTemplate()

    const transformer = new HTMLRewriter()
        .on("title", new TitleTransformer())
        .on("style", new StyleTransformer())
        .on("body", new BodyColorTransformer())
        .on("div#profile", new ProfileTransformer())
        .on("img#avatar", new AvatarTransformer())
        .on("h1#name", new NameTransformer())
        .on("div#links", new StoryLinkTransformer(storyLinks))
        .on("div#social", new SocialLinkTransformer(socialLinks))

    return transformer.transform(htmlTemplateResponse)
}

module.exports = htmlHandler