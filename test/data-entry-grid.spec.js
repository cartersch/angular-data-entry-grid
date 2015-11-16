'use strict';

describe('entryGrid', function(){
	var element;
	var scope;
	
	beforeEach(module('entry-grid'));
	beforeEach(inject(function($compile, $rootScope){
		scope = $rootScope.$new();
		element = $compile('<entry-grid row-count="test.rowCount" entry-types="test.entryTypes"></entry-grid>')(scope);	
	}));
	
	it('should be loaded', function(){
		expect(element).toBeDefined();
	});
	
	
	it('should have rows', function(){
		scope.test = {
			rowCount : 5,
			entryTypes : {
				"First Name" : {"type" : "text", "required" : false},
                "Last Name"  : {"type" : "text", "required" : false},
                "Email Address" : {"type" : "email", "required" : true}
			}
		};
		
		scope.$digest();
		
		var items = $(element[0]).find('tr').length;
		
		expect(items).toEqual(6);
	});
	
});