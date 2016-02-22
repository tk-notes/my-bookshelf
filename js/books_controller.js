var app = angular.module('myBookshelf', []);

app.controller('BooksController', ['$scope', function($scope) {	

	$scope.books = [
		{ 
			'title': 'Delivering Happiness',
			'author': 'Tony Hsieh',
			'url': 'http://www.amazon.com/Delivering-Happiness-Profits-Passion-Purpose/dp/160941280X',
			'hasMediumPost': false,
			'mediumPostUrl': '',
			'read': false
		},

		{
			'title': 'Elon Musk',
			'author': 'Ashlee Vance',
			'url': 'http://www.amazon.com/Elon-Musk-SpaceX-Fantastic-Future/dp/0062301233',
			'hasMediumPost': false,
			'mediumPostUrl': '',
			'read': false
		}
	];

}]);