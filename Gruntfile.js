module.exports = (grunt) => {
    grunt.loadNpmTasks('grunt-spritesmith');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sprite: {
            all: {
                src: 'script/data/diablo2/runeImage/*.gif',
                dest: 'public/diablo2/runes.png',
                destCss: 'public/diablo2/runes.css',

                imgPath: '/diablo2/runes.png',
            },
        },
    });

    grunt.registerTask('default', ['sprite']);
};
