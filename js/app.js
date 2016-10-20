var map;
var infoWindow = null;
var windowContent = null;

//jquery elements used later for showing/hiding list
var $body = $('body');
var $searchBar = $('#search_bar');
var $list = $('#team_list');

// YELP REQUEST PARAMETERS
var CONSUMER_KEY =	'1RP8aqKrIyNUCYnjjEMvHg';
var SECRET = 'qDjzJCHK0G_ft9o-EG4Gtqn5wws';
var TOKEN =	'AsIR0Jj1XusRduntA7ZZnNV5kBp9dvYV';
var TOKEN_SECRET = '1AKuFd6yzYEEvIJReZCfNP-fYFw';

//map intialize function
var initMap = function() {
	map = new google.maps.Map(document.getElementById('map'), {
			center: {lat: 51.481700, lng:-0.191000},
			zoom: 10
		});	
}

//KO ViewModel used to automatically update the UI
var ViewModel = function(){	
	initMap();
	var self = this;
	self.teamList = ko.observableArray(teams);
	self.currentTeam = ko.observable(this.teamList()[0]);
	self.searchTerm = ko.observable('');

	//sort self.teamList by teamName
	self.teamList.sort(function (left, right) { 
		return left.teamName == right.teamName ? 0 : (left.teamName < right.teamName ? -1 : 1); 
	}); 

	//create a new map marker for each team
	self.teamList().forEach(function(team){
		var marker = new google.maps.Marker({
						position: team.coordinates,
						icon: 'img/marker.png',
						animation: google.maps.Animation.DROP,
						map: map
					});			
		team.marker = marker;

		//animate marker when clicked. Animation lasts for 850ms
		google.maps.event.addListener(team.marker, 'click', function () {			
          	marker.setAnimation(google.maps.Animation.BOUNCE);
          	setTimeout(function(){ marker.setAnimation(null); }, 850);
			self.setTeam(team);
		});
	});

	self.setTeam = function(clickedTeam){
		self.currentTeam(clickedTeam);
		if (infoWindow){
			infoWindow.close();
		}
	
	//next few lines build the parameters and settings for an ajax call to yelp
	// yelp uses oauth for api calls
	var yelp_url = 'https://api.yelp.com/v2/business/' + self.currentTeam().yelpID;

    var parameters = {
      oauth_consumer_key: CONSUMER_KEY,
      oauth_token: TOKEN,
      oauth_nonce: nonce_generate(),
      oauth_timestamp: Math.floor(Date.now()/1000),
      oauth_signature_method: 'HMAC-SHA1',
      oauth_version : '1.0',
      callback: 'cb'             
    };

    //create oauth signature for authentication
    var encodedSignature = oauthSignature.generate('GET', yelp_url, parameters, SECRET, TOKEN_SECRET);
    parameters.oauth_signature = encodedSignature;

    var settings = {
    	url: yelp_url,
    	data: parameters,
    	cache: true,           
    	dataType: 'jsonp',
    	success: function(yelpData) {
	        populateWindow(yelpData);
      	},
      	fail: function() {
	        populateWindow(false);
	        console.log('Yelp Ajax call failed');
      	}
    };
    
    // Send AJAX query via jQuery library.
    $.ajax(settings);

    //populate the info window of the marker
    //execute after ajax call whether success or fail 
    var populateWindow = function(yelpData){
    	windowContent = '<h3>'+ self.currentTeam().teamName +'</h3>' +
							'<p>'+ self.currentTeam().stadium +'</p>' +
							'<img width="300px" height="200px" src="' + self.currentTeam().imgUrl + '">' +
							'<p>'+ self.currentTeam().address +'</p>'+							
							'<a href="' + self.currentTeam().wikiUrl + '">' + '<br> More Info</a>';
		if (yelpData != false){
			//if yelpData present, add yelp review info to info window
			windowContent = windowContent + '<p>'+ yelpData['review_count'] +' Yelp reviews </p>'+
											'<img src="' + yelpData['rating_img_url'] + '">';
		}
    	infoWindow = new google.maps.InfoWindow({
					content: windowContent
		});	
		infoWindow.open(map,self.currentTeam().marker);

		}
   		


	}		
	
	//ko computed function for generating list based on search value
	self.searchResults = ko.computed(function(){
		var searchTerm = self.searchTerm().toLowerCase();
		var results = [];
		for (var i = 0; i < self.teamList().length; i++) {
			var teamName = self.teamList()[i].teamName.toLowerCase();
			//if the search term appears within the team name, add it to the generated list
			if (teamName.indexOf(searchTerm) != -1){
				results.push(self.teamList()[i]);				
			}
		};
		return results;		
	})

	//jQuery for hiding/showing list under search bar
	$body.click(function(event) {
		// if the element clicked on is not the search bar, hide list
  		if (!$(event.target).closest($searchBar).length) {
    		$list.slideUp();
  		}
  		else{
  			$list.slideDown();
  		}
	});
}

//used to generate parameters.oauth_nonce for yelp api call
function nonce_generate() {
  return (Math.floor(Math.random() * 1e12).toString());
}

//first function called as soon as html loaded
var startAll = function(){
	ko.applyBindings(new ViewModel());
}