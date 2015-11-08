angular.module ('project' )   
		.factory('fbDebugMsg' , function($firebase, fbURL, fbAuthToken) 
			{ 	
				var firebase = new Firebase(fbURL  + "/debugMsg");					
				firebase.auth(fbAuthToken);					
		   		return firebase;
			})
	    .factory('fbRequestUrl'   , function($firebase, fbURL, fbAuthToken) 
			{ 	
	    			var firebase = new Firebase(fbURL  + "/requestUrl");					
				firebase.auth(fbAuthToken);					
		   		return firebase;
			})
	    .factory('fbaDebugMsg'    , function($firebase, fbDebugMsg) 
	    		{ 									
	   			return $firebase(fbDebugMsg);	   			
		    	});	   
		