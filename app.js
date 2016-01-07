(function(){
    var app = angular.module('cassata', []);

    app.controller('MovieController', function(){
        this.movie = movie;
    });

    var movie = {
        name: 'Inception',
        year: 1990,
        contentRating: 'PG-13',
        genre: ['Action', 'Mystery', 'Sci-Fi'],
        onlyRating: 8.8,
        isSequence: false
    };
})();
