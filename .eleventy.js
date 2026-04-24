module.exports = function(eleventyConfig) {
  // Pass the CSS folder through unchanged
  eleventyConfig.addPassthroughCopy("public");

    return {
    dir: {
        input: ".",
        output: "docs",
        includes: "_includes"
    }
    };
};