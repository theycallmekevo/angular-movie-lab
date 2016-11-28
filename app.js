// Step 4 - initialize angular app and add a controller
angular
  .module('movieLabApp', [])    //same as the html app name
  .controller('MovieLabController', MovieLabController);  //same as the body name

  function MovieLabController () {    //create controller function

    var vm = this;    //add data to vm, which represents the View Model

    vm.moviesToWatch = [
      {
        id: 2,
        name: 'The Godfather',
        releaseYear: 1972
      },
      {
        id: 1,
        name: 'Inside Out',
        releaseYear: 2015
      },
      {
        id: 5,
        name: 'King Kong',
        releaseYear: 1933
      },
      {
        id: 25,
        name: 'Toy Story 2',
        releaseYear: 1999
      },
      {
        id: 35,
        name: 'Up',
        releaseYear: 2009
      }
    ];

// new movie function
    vm.movie = {};
    vm.addMovie = function (){
      var newMovie = vm.movie;
      vm.movie = {};
      vm.moviesToWatch.push(newMovie);
    };

// delete movie function
    vm.deleteMovie = function (movie) {
      console.log("delete button works");
      var movieIndex = vm.moviesToWatch.indexOf(movie);
      vm.moviesToWatch.splice(movieIndex, 1);
    };


  };
