module.exports = {
    plugins: [
        require('postcss-nested'),
        require('postcss-import'),
        require('postcss-at-rules-variables'),
        require('postcss-custom-media'),
        require('postcss-extend-rule'),
        require('postcss-preset-env'),
        require('postcss-for'),
        require('postcss-each'),
        require('postcss-hexrgba'),
    ]
}
