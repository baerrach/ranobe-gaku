/*
Ranobe Gaku by https://github.com/baerrach/ranobe-gaku is licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License (http://creativecommons.org/licenses/by-nc-sa/4.0/).
*/

Router.configure({
    notFoundTemplate: 'template404',
});

// Router.map(function() {
//     this.route('introduction', {
//         path: '/'
//     });
// });

Router.map(function() {
    this.route('createLightNovel', {
        path: '/createLightNovel'
    });
});
