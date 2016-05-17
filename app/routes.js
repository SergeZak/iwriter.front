iwriterApp.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('login',{
                url:'/login',
                views:{
                    'content' :{
                        templateUrl: 'login/login.html',
                        controller: 'loginController'
                    },
                    'header' : {
                        templateUrl: 'layouts/header.html',
                        controller: 'loginController'
                    },
                    'footer' : {
                        templateUrl: 'layouts/footer.html',
                        controller: 'loginController'
                    }
                }
            })
    }
]);