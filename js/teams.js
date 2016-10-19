//List of all the teams taht will get loaded into the model view in app.js

var teams = [
	chelsea = {
		teamName: 'Chelsea',
		stadium: 'Stamford Bridge',
		coordinates:{lat: 51.481700, lng:-0.191000},
		imgUrl:'http://www.chelseafc.com/content/dam/cfc/stock-photos/stamford-bridge-views/stadium-aerial1.jpg',		
		address: 'Hilary Close, Fulham, London SW6 1EA',
		wikiUrl: 'https://en.wikipedia.org/wiki/Stamford_Bridge_(stadium)',
		yelpID: 'chelsea-football-club-london-2'

	},
		
	palace = {
		teamName: 'Crystal Palace',
		stadium : 'Selhurst Park', 
		coordinates :{lat: 51.398300, lng: -0.086600},
		imgUrl:'http://i.dailymail.co.uk/i/pix/2013/08/14/article-0-1B3BB34A000005DC-31_634x395.jpg',		
		address:'Whitehorse Ln, Selhurst, London SE25 6PU',
		wikiUrl:'https://en.wikipedia.org/wiki/Selhurst_Park',
		yelpID:'selhurst-park-stadium-london'
	},

	arsenal = {
		teamName: 'Arsenal',
		stadium: 'Emirates Stadium',
		coordinates:{lat:51.5533204, lng:-0.1090153},
		imgUrl:'http://www.arsenal.com/assets/_files/scaled/324x182/jan_13/gun__1357737628_emirates_stadium2.jpg',
		address:'Hornsey Rd, London N7 7AJ',
		wikiUrl:'https://en.wikipedia.org/wiki/Emirates_Stadium',
		yelpID:'the-emirates-stadium-london'	
	},
	
	westham = {
		teamName: 'West Ham',
		stadium: 'London Stadium',
		coordinates:{lat:51.5386466, lng:-0.0187137},
		imgUrl:'http://www.chelseafc.com/content/cfc/en/homepage/matches/away-travel-guides/shared/west-ham-united---london-stadium.img.png',
		address: 'Queen Elizabeth Olympic Park, London E20 2ST',
		wikiUrl: 'https://en.wikipedia.org/wiki/Olympic_Stadium_(London)',
		yelpID: 'queen-elizabeth-olympic-park-london-2'
	},

	tottenham = {
		teamName: 'Tottenham Hotspur',
		stadium: 'White Hart Lane',
		coordinates: {lat:51.6032123, lng:-0.0679276},
		imgUrl:'https://upload.wikimedia.org/wikipedia/commons/0/04/White_Hart_Lane_Aerial.jpg',
		address:'748 High Rd, Tottenham, London N17 0AP',
		wikiUrl:'https://en.wikipedia.org/wiki/White_Hart_Lane',
		yelpID:'white-hart-lane-stadium-london'
	},

	fulham = {
		teamName: 'Fulham',
		stadium: 'Craven Cottage',
		coordinates: {lat:51.4748745, lng:-0.2240866},
		imgUrl: 'http://i3.chroniclelive.co.uk/incoming/article5379178.ece/ALTERNATES/s615/Craven-Cottage.jpg',
		address: 'Stevenage Rd, London SW6 6HH',
		wikiUrl: 'https://en.wikipedia.org/wiki/Craven_Cottage',
		yelpID: 'fulham-football-club-craven-cottage-london'
	},

	qpr = {
		teamName: 'Queens Park Rangers',
		stadium: 'Loftus Road',
		coordinates: {lat:51.5092979, lng:-0.2343017},
		imgUrl: 'http://www.webbaviation.co.uk/sports/gallery2/d/2715-2/QPRStadium-ea14151.jpg',
		address: 'S Africa Rd, London W12 7PJ',
		wikiUrl: 'https://en.wikipedia.org/wiki/Loftus_Road',
		yelpID: 'loftus-road-stadium-london'
	},

	brentford = {
		teamName: 'Brentford',
		stadium: 'Griffin Park',
		coordinates: {lat:51.4881774, lng:-0.3047129},
		imgUrl: 'http://www.brentfordfc.co.uk/cms_images/other/20140800-000000-0008277-2490466_478x359.jpg',
		address: 'Braemar Rd, Brentford TW8 0NT',
		wikiUrl: 'https://en.wikipedia.org/wiki/Griffin_Park',
		yelpID: 'griffin-park-football-stadium-brentford'
	},

	charlton = {
		teamName:'Charlton Athletic',
		stadium: 'The Valley',
		coordinates: {lat:51.4861888, lng:0.0340933},
		imgUrl: 'http://www.thefootballstadiums.com/uploads/data/other/4336_Charlton%20Athletic%2004.jpg',
		address:'The Valley, Floyd Rd, London SE7 8BL',
		wikiUrl: 'https://en.wikipedia.org/wiki/The_Valley_(London)',
		yelpID: 'the-valley-london'
	},

	millwall = {
		teamName:'Millwall',
		stadium: 'The Den',
		coordinates: {lat:51.4855203, lng:-0.0538255},
		imgUrl: 'http://www.htafc.com/cms_images/match/millwall-the-den-4-3238-407493.jpg',
		address:'Zampa Rd, London SE16 3LN',
		wikiUrl: 'https://en.wikipedia.org/wiki/The_Den',
		yelpID: 'the-den-stadium-london-3'
	},

	afc = {
		teamName:'AFC Wimbledon',
		stadium: 'Kingsmeadow',
		coordinates: {lat:51.4051854, lng:-0.2839838},
		imgUrl: 'http://www.footballgroundguide.com/images/image/product/property/afc-wimbledon-kingston-road-end-1418901372.jpg',
		address:'Kingston Rd, Kingston upon Thames KT1 3PB',
		wikiUrl: 'https://en.wikipedia.org/wiki/Kingsmeadow',
		yelpID: 'the-fans-stadium-kingsmeadow-london'
	},

	barnet = {
		teamName:'Barnet',
		stadium: 'The Hive Stadium',
		coordinates: {lat:51.602593, lng:-0.2928657},
		imgUrl: 'http://i.dailymail.co.uk/i/pix/2013/07/21/article-2372292-1AE89EEA000005DC-423_634x418.jpg',
		address:'Camrose Ave, London HA8 6AG',
		wikiUrl: 'https://en.wikipedia.org/wiki/The_Hive_Stadium',
		yelpID: 'the-hive-gt-lon'
	},

	leyton = {
		teamName:'Leyton Orient',
		stadium: 'The Matchroom Stadium',
		coordinates: {lat:51.5601826, lng:-0.014854},
		imgUrl: 'http://www.stadiumguide.com/wp-content/gallery/matchroomstadium/matchroom3.JPG',
		address:'Brisbane Rd, London E10 5NF',
		wikiUrl: 'https://en.wikipedia.org/wiki/Brisbane_Road',
		yelpID: 'matchroom-stadium-london'
	}
]

