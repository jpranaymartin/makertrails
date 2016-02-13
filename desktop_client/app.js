angular.module("App", [
  'ui.router',
  'App.login',
  'App.signup',
  'App.logout',
  'App.createMap',
  'App.viewMaps',
  'App.MakerMapController',
  'ngMessages'
  ])
.config(function($stateProvider, $urlRouterProvider){

  // $locationProvider.html5Mode({
  //   enabled: true,
  //   requireBase: false
  // });

  $stateProvider
    .state('login',{
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'LoginController',
      authenticate: false
    })
    .state('signup',{
      url:'/signup',
      templateUrl: 'templates/signup.html',
      controller: 'SignupController',
      authenticate: false
    })
    .state('createNewMap',{
      url:'/createNewMap',
      templateUrl: 'templates/createMap.html',
      controller: 'MapController',
      authenticate: true
    })
    .state('viewMaps',{
      url:'/viewMaps',
      templateUrl: 'templates/viewMaps.html',
      controller: 'ViewMapsController',
      authenticate: true
    })
    .state('makerMap', {
      url: '/makerMap/:mapID',
      templateUrl: 'templates/makerMap.html',
      controller: 'MakerMapController',
      params: {
        'mapID': null
      }
    })

  $urlRouterProvider
    .otherwise('/login');
})

.run(function ($rootScope, $state, AppFactory, $window) {
  $rootScope.$on('$stateChangeStart', function (event, toState) {
    if (!toState.authenticate || AppFactory.authenticateFunction()) {
      return;
    }
    event.preventDefault();
    if (toState.authenticate) {
      $state.go('login');
      return;
    }
  });
});
