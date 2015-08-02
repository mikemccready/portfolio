angular
	.module('app')
	.controller('MainController', MainController);


	function MainController(){
		var self = this;

		self.projects = [

			{
				title: 'SUM OF THE PARTS',
				description: 'Idea Accelerator built with Ruby on Rails and Foundation',
				image: '_images/sotps_iphone.jpg',
				url: 'https://sotps.herokuapp.com/',
				gitUrl: 'https://github.com/mikemccready/SOTPS',
				detailHead: 'Idea Accelerator built with Ruby on Rails and Foundation.', 
				detailFeatures: [
					{ feature:'Facebook OmniAuth', },
					{ feature:'Stripe Donations', },
					{ feature:'Amazon S3', },
					{ feature:'Responsive & Mobile Optimized', },
					{ feature:'Heroku Deployed', },
				],
			},

			{
				title: 'APPTY',
				description: 'Appointment booking app. Built with Ruby on Rails and Bootstrap',
				image: '_images/appty-iphone.jpg',
				url: 'http://apptyapp.herokuapp.com/',
				gitUrl: 'https://github.com/mikemccready/appty',
				detailHead: 'Appointment booking app. Built with Ruby on Rails and Bootstrap',
				detailFeatures: [
					{ feature:'Google OmniAuth', },
					{ feature:'Google Calendar API', },
					{ feature:'Responsive & Mobile Optimized', },
					{ feature:'Heroku Deployed', },
				],
			},

			{
				title: 'KILOS',
				description: 'Resource for fighters. Built with Ruby on Rails and Bootstrap',
				image: '_images/kilos_iphone.jpg',
				url: 'https://kilosbjj.herokuapp.com/',
				gitUrl: 'https://github.com/mikemccready/kilos',
				detailHead: 'Resource for fighters. Built with Ruby on Rails and Bootstrap',
				detailFeatures: [
					{ feature:'CRUD functionality', },
					{ feature:'User Authentication', },
					{ feature:'Video Upload', },
					{ feature:'Amazon S3', },
					{ feature:'Responsive & Mobile Optimized', },
					{ feature:'Heroku Deployed', },
				],

			},


			{
				title: 'GET THAT DOUGH',
				description: 'Tic-Tac-Toe game built with Angular.js and Firebase',
				image: '_images/gtd_iphone.jpg',
				url: 'https://getthatdough.firebaseapp.com/',
				gitUrl: 'https://github.com/mikemccready/getThatDough-NGFire',
				detailHead: 'Tic-Tac-Toe game built with Angular.js and Firebase',
				detailFeatures: [
					{ feature:'Firebase Application', },
					{ feature:'CSS animation', },
					{ feature:'Responsive & Mobile Optimized', },
					{ feature:'Real-time gameplay on multiple devices', },
				],

			},

		]

	
	}


