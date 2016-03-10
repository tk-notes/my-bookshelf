var app = angular.module('myBookshelf', []);

app.controller('BooksController', ['$scope', function($scope) {

	$scope.books = [
		{
			'title': 'Delivering Happiness',
			'author': 'Tony Hsieh',
			'url': 'http://www.amazon.com/Delivering-Happiness-Profits-Passion-Purpose/dp/160941280X',
			'hasMediumPost': false,
			'mediumPostUrl': '',
			'read': true
		},

		{
			'title': 'Elon Musk',
			'author': 'Ashlee Vance',
			'url': 'http://www.amazon.com/Elon-Musk-SpaceX-Fantastic-Future/dp/0062301233',
			'hasMediumPost': false,
			'mediumPostUrl': '',
			'read': false
		},

		{
			'title': 'Zero To One',
			'author': 'Peter Thiel',
			'url': 'http://www.amazon.com/Zero-One-Notes-Startups-Future/dp/0804139296',
			'hasMediumPost': false,
			'mediumPostUrl': '',
			'read': false
		},

		{
			'title': 'How to Win Friends and Influence People in the Digital Age',
			'author': 'Dale Carnegie & Associates',
			'url': 'http://www.amazon.com/How-Friends-Influence-People-Digital/dp/1451612591',
			'hasMediumPost': false,
			'mediumPostUrl': '',
			'read': false
		}
	];

}]);
