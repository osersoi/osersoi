export default function(eleventyConfig) {

    // Copier le CSS tel quel vers le dossier de sortie
    eleventyConfig.addPassthroughCopy("src/css");

    // Copier les images telles quelles
    eleventyConfig.addPassthroughCopy("src/images");

    // Collection d'articles de blog, triés par date décroissante
    eleventyConfig.addCollection("blog", function(collectionApi) {
        return collectionApi.getFilteredByGlob("src/posts/*.md").sort((a, b) => {
            return b.date - a.date;
        });
    });

    // Filtre pour formater les dates en français
    eleventyConfig.addFilter("dateFormat", function(date) {
        return new Date(date).toLocaleDateString("fr-CH", {
            year: "numeric",
            month: "long",
            day: "numeric"
        });
    });
    
    // Filtre pour l'année courante
    eleventyConfig.addFilter("year", function() {
        return new Date().getFullYear();
    });

    return {
        dir: {
            input: "src",
            output: "_site",
            includes: "_includes",
            data: "_data"
        },
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk"
    };
}

