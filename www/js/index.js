	        
			// Wait for PhoneGap to load
	        document.addEventListener("deviceready", onDeviceReady, false);           
        	
	        function onDeviceReady() {	        		
	        		    		
	      		var networkState = checkConnection();
	      		
	        	 /* load local files if there is not network connection */
	        	if (networkState == Connection.NONE || networkState == Connection.UNKNOWN) {
	
	            	// window.location="local/index.html";
	        		navigator.notification.alert(
	                	'Por favor, abre MENCANTA cuando tengas acceso a Internet y te mostraremos los mejores bolsos del mundo', 	// message            	       
			        	cerrarApp,         					// callback
			        	'MENCANTA necesita Internet :(',  	// title
			        	'OK'                  				// buttonName            	       	
	            	);
	        	} else {
	            	
	        		alert("NetworkState: " + networkState);	     
	        		   
	        		//window.location="http://www.mencanta.mobi";	

	        		//var registration_id = $(".reg_id").val();	    		
	        		//alert("final - REGISTRATION ID = "+registration_id);	
	        		
	        	}  	            
	       	}

	        function checkConnection() {
	            var networkState = navigator.connection.type;            
	            var states = {};
	            states[Connection.UNKNOWN]  = 'Unknown connection';
	            states[Connection.ETHERNET] = 'Ethernet connection';
	            states[Connection.WIFI]     = 'WiFi connection';
	            states[Connection.CELL_2G]  = 'Cell 2G connection';
	            states[Connection.CELL_3G]  = 'Cell 3G connection';
	            states[Connection.CELL_4G]  = 'Cell 4G connection';
	            states[Connection.CELL]     = 'Cell generic connection';            
	            states[Connection.NONE]     = 'No network connection';	          
	            return networkState;          
	        }
	
	     	// process the callback
	        function cerrarApp() {
	            // cerrar la app
	            navigator.app.exitApp();
	        }      