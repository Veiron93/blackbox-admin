module.exports = {
    css: {
      loaderOptions: {
        scss: {
          prependData: `
            @import "@/resources/sass/_mixins.scss";
            @import "@/resources/sass/_vars.scss";
            @import "@/resources/sass/_classes.scss";
          `
        },
      }
    }
  }