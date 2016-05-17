/**
 * define different layouts for members and users
 */
var headerUserTmpl = '_layouts/header-user.html';
var headerMemberTmpl = '_layouts/header-member.html';
var footerTmpl = '_layouts/footer.html';


/**
 * Define routes and corresponded route params
 */
iwriterApp.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider){
        $stateProvider
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
                    'footerScripts': {
                        templateUrl: 'pages/login/footerScripts.html',
                        //controller: 'loginController'
                    }
                }
            })
    }
]);