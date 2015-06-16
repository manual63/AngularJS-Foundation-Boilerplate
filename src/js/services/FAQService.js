var faqService = angular.module('FAQService', ['ngResource']);

faqService.factory('FAQ', ['$resource',
	function($resource){
		return $resource('data/faq.json', {}, {
			query: {method:'GET', params:{}, isArray:true}
		});
	}
]);