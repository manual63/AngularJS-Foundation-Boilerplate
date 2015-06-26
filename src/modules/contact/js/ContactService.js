var contactService = angular.module('ContactService', ['ngResource']);

contactService.factory('Contact', ['$resource',
	function($resource){
		return $resource('data/email.json', {contact: '@contactForm'}, {
			save: {method:'POST'}
		});
	}
]);