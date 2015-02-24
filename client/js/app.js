angular
    .module('app', [
    'lbServices',
    'ui.router'
  ])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider,
        $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'views/home.html'
            })
            .state('profile', {
                url: '/profile',
                templateUrl: 'views/profile.html',
                controller: 'ProfileController'
            })
            .state('settings', {
                url: '/settings',
                templateUrl: 'views/settings.html',
                controller: 'SettingsController'
            })
            .state('preferences', {
                url: '/preferences',
                templateUrl: 'views/preferences.html',
                controller: 'PreferencesController'
            })
            .state('categories', {
                url: '/categories',
                templateUrl: 'views/categories.html',
                controller: 'CategoriesController'
              })
            .state('category', {
                url: '/category',
                templateUrl: 'views/category.html',
                controller: 'CategoryController'
              })
            .state('item', {
                url: '/item',
                templateUrl: 'views/item.html',
                controller: 'ItemController'
              })
            .state('createitem', {
                url: '/createitem',
                templateUrl: 'views/createitem.html'
                
            })
            .state('myitems', {
                url: '/myitems',
                templateUrl: 'views/myitems.html'
                
            })
            .state('myfavorites', {
                url: '/myfavorites',
                templateUrl: 'views/myfavorites.html',
                controller: 'FavoritesController'
            })
            .state('search', {
                url: '/searching',
                templateUrl: 'views/search.html',
                controller: 'SearchController'
              });

        $urlRouterProvider.otherwise('home');
  }]);