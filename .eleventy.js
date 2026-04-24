module.exports = function(eleventyConfig) {
  // Pass the CSS folder through unchanged
  eleventyConfig.addPassthroughCopy("public");

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    }
  };
};