const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const pluginTOC = require("eleventy-plugin-nesting-toc");

module.exports = function (eleventyConfig) {
    const md = markdownIt({ html: true }).use(markdownItAnchor, {
    level: [2, 3],
    permalink: false,
  });
  eleventyConfig.addGlobalData("currentYear", () => new Date().getFullYear());
  eleventyConfig.setLibrary("md", md);

  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(pluginTOC, { tags: ["h3", "h2"], wrapper: "div", wrapperClass: "toc" });
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/videos");
  eleventyConfig.addPassthroughCopy("src/downloads");
  eleventyConfig.addPassthroughCopy("src/js");

  return {
    dir: {
      input: "src",
      output: "_site",
    },
    markdownTemplateEngine: "njk",
  };
};