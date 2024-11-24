module.exports =  function(eleventyConfig) {
     eleventyConfig.addWatchTarget("./_src/sass/");
     eleventyConfig.addWatchTarget("./_src/images/")
     eleventyConfig.addPassthroughCopy("./_src/images/")
     eleventyConfig.addWatchTarget("./_src/js/")
     eleventyConfig.addPassthroughCopy("./_src/js/")
     return {
          dir: {
               input: "_src"
          }
     }
}