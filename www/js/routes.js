angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
  
  .state('menu.dashboard', {
    url: '/dashboard',
    views: {
      'side-menu21': {
        templateUrl: 'templates/dashboard.html',
        controller: 'dashboardCtrl'
      }
    }
  })
  
  .state('menu.skydives', {
    url: '/skydives',
    views: {
      'side-menu21': {
        templateUrl: 'templates/skydives.html',
        controller: 'skydivesCtrl'
      }
    }
  })
  
  .state('menu.skydive', {
    url: '/skydive/:id',
    views: {
      'side-menu21': {
        templateUrl: 'templates/skydive.html',
        controller: 'skydiveCtrl',
        controllerAs: 'getSkydive'
      }
    }
  })
  
  .state('skydive', {
      url: '/skydive/:id',
      templateUrl: 'templates/skydive.html',
      controller: 'skydiveCtrl'
    })
  
  .state('menu.addASkydive', {
    url: '/add-skydive',
    views: {
      'side-menu21': {
        templateUrl: 'templates/addASkydive.html',
        controller: 'addASkydiveCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('menu.login', {
    url: '/login',
    views: {
      'side-menu21': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      }
    }
  })

  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('menu.myGear', {
    url: '/gear',
    views: {
      'side-menu21': {
        templateUrl: 'templates/myGear.html',
        controller: 'myGearCtrl'
      }
    }
  })
  
$urlRouterProvider.otherwise('/side-menu/dashboard')

  

});