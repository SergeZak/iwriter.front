/**
 * define different layouts for members and users
 */
var headerUserTmpl = '_layouts/header-user.html';
var headerMemberTmpl = '_layouts/header-member.html';
var footerTmpl = '_layouts/footer.html';
var themeFooterScripts = '_layouts/theme-footer-scripts.html';


/**
 * Define routes and corresponded route params
 */
iwriterApp.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('home',{
                url: '/',
                views:{
                    'header' : {
                        templateUrl: 'pages/'+headerUserTmpl,
                        //controller: 'loginController'
                    },
                    'content' :{
                        templateUrl: 'pages/home/home.html',
                        controller: 'homeController'
                    },
                    'footer' : {
                        templateUrl: 'pages/'+footerTmpl,
                        //controller: 'loginController'
                    },
                    'themeFooterScripts':{
                        templateUrl: 'pages/'+themeFooterScripts,
                    }
                }
            })

            .state('login',{
                url:'/login',
                views:{
                    'content' :{
                        templateUrl: 'pages/login/login.html',
                        controller: 'loginController'
                    },
                    'header' : {
                        templateUrl: 'pages/'+headerUserTmpl,
                        //controller: 'loginController'
                    },
                    'footer' : {
                        templateUrl: 'pages/'+footerTmpl,
                        //controller: 'loginController'
                    },
                    'themeFooterScripts':{
                        templateUrl: 'pages/'+themeFooterScripts,
                    }
                }
            })


        $urlRouterProvider
            .when('', ['$state','$match', function ($state, $match) {
                $state.go('home');
            }]);
    }
]);