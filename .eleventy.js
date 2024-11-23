module.exports =  function(eleventyConfig) {
     eleventyConfig.addWatchTarget("./_src/sass/");
     eleventyConfig.addWatchTarget("./_src/brois/")
     eleventyConfig.addPassthroughCopy("./_src/brois/")
     eleventyConfig.addWatchTarget("./_src/js/")
     eleventyConfig.addPassthroughCopy("./_src/js/")
     return {
          dir: {
               input: "_src"
          }
     }
}