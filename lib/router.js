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
