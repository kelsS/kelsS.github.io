export default (eleventyConfig) => {
    // Input directory: _src
    // Output directory: _site

    // Copy `_src/assets/images/` to `_site/assets/img`
    eleventyConfig.addPassthroughCopy({ "_src/assets/images": "/assets/img" });

    // Copy `_src/assets/fonts/` to `_site/assets/fonts`
    eleventyConfig.addPassthroughCopy({ "assets/fonts": "assets/fonts" });

    // Copy `_src/assets/images/` to `_site/assets/img`
    eleventyConfig.addPassthroughCopy({ "_src/assets/images": "/assets/img" });

    // Copy favicon.ico to _site
    eleventyConfig.addPassthroughCopy('favicon.ico');

    eleventyConfig.addPlugin(syntaxHighlight);
    eleventyConfig.addPlugin(pluginRss);

    // Ignore README.md
    eleventyConfig.ignores.add("README.md");

    const options = {
        html: true,
        breaks: true,
        linkify: false
    };

   const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight'),
         markdownIt = require('markdown-it'),
         pluginRss = require('@11ty/eleventy-plugin-rss');

    let markdownItEmoji = require("markdown-it-emoji"),
        markdownLib = markdownIt(options).use(markdownItEmoji);
  

    eleventyConfig.setLibrary('md', markdownLib);

    return {
        dir: {
            input: "_src",
            output: "_site"
        },

        // Use nunjucks in html templates
        htmlTemplateEngine: 'njk'
    };
};