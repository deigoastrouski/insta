angular.module ('project')	   
	   .config(function($routeProvider)  
			{
		   		$routeProvider.when	  ('/login'   , { templateUrl :'views/login.html'   , controller: 'LoginCtrl'  })		   						  				    			 
		   		      	      .when	  ('/register', { templateUrl :'views/register.html', controller: 'RegisterCtrl' })
				    	      .when	  ('/schedule'      , { templateUrl :'views/schedule.html'      , controller: 'ScheduleCtrl' })
				    	      .otherwise(		   { redirectTo  :'/login'	  						                      });
			});