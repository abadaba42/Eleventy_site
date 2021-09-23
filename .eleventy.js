module.exports = function (eleventyConfig) {

    eleventyConfig.setTemplateFormats([
        "jpg",
        "css", // css is not yet a recognized template extension in Eleventy
        "html",
        "md"
      ]);

    return {
        dir: {
            input: "src",
            output: "public",
        },
        
    };
};