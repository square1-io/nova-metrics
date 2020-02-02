let mix = require('laravel-mix')

mix
  .setPublicPath('dist')
  .js('resources/js/card.js', 'js')
  .sass('resources/sass/card.scss', 'css')
  .webpackConfig({
        resolve: {
            alias: {
                '@/storage': path.resolve(__dirname, '../../nova/resources/js/storage'),
            },
            modules: [
                path.resolve(__dirname, '../../nova/node_modules/'),
            ],
            symlinks: false
        }
    });
