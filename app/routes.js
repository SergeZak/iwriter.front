/**
 * define different layouts for members and users
 */
var headerUserTmpl = 'header-user.html';
var headerMemberTmpl = 'header-member.html';
var footerTmpl = 'footer.html';


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
                        templateUrl: 'login/login.html',
                        controller: 'loginController'
                    },
                    'header' : {
                        templateUrl: 'layouts/'+headerUserTmpl,
                        //controller: 'loginController'
                    },
                    'footer' : {
                        templateUrl: 'layouts/'+footerTmpl,
                        //controller: 'loginController'
                    }
                }
            })
    }
]);