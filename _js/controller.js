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
				details: 'Idea Accelerator built with Ruby on Rails and Foundation',
			},

			{
				title: 'APPTY',
				description: 'Appointment booking app. Built with Ruby on Rails and Bootstrap',
				image: '_images/appty-iphone.jpg',
				url: 'http://apptyapp.herokuapp.com/',
			},

			{
				title: 'KILOS',
				description: 'Resource for fighters. Built with Ruby on Rails and Bootstrap',
				image: '_images/kilos_iphone.jpg',
				url: 'https://kilosbjj.herokuapp.com/',
			},


			{
				title: 'GET THAT DOUGH',
				description: 'Tic-Tac-Toe game built with Angular.js and Firebase',
				image: '_images/gtd_iphone.jpg',
				url: 'https://getthatdough.firebaseapp.com/',
			},

		]

	
	}


