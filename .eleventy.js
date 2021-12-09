module.exports = function (eleventyConfig) {

    
    let markdownIt = require("markdown-it");
    let options = {html: true};
    let markdownLib = markdownIt(options)
    
    //Markdown plugins
    let markdownItFootnote = require("markdown-it-footnote");
    let markdownItKatex = require("markdown-it-katex");
    markdownLib.use(markdownItFootnote);
    markdownLib.use(markdownItKatex);


    eleventyConfig.setLibrary("md", markdownLib);
    

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