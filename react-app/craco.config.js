module.exports = {
  style: {
    sass: {
      loaderOptions: {
           additionalData: `
           @import "src/components/_variables.scss";
           `,
      },
    },
  },
};
