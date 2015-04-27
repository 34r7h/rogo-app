angular.module('adolfServices', ['firebase'])

.factory('adolfService', function($firebaseObject, $firebaseArray) {
		// data structure
		var service = {data:{},api:{},models:{}};

		// gather and prepare data
		var wordList = new Firebase('http://adolf.firebaseio.com/wordList');
		var text = new Firebase('http://adolf.firebaseio.com/text');
		var documentation = new Firebase('http://adolf.firebaseio.com/documentation');
		var obj = $firebaseObject(wordList);
		var arr = $firebaseArray(wordList);
		var textObj = $firebaseObject(text);
		var docs = $firebaseObject(documentation);
		service.data.wordListObject = obj;
		service.data.wordListArray = arr;
		service.data.textObj = textObj;
		service.data.documentation = docs;

		// define database methods
		service.api.wordSave = function(wordEntry){
			service.data.wordListArray.$add(wordEntry);
		};
		service.api.remove = function(id, arr){
			console.log(arr ,id);
			arr.$remove(id);
		};
		service.api.update = function(obj, val){
			console.log(val,obj);
			obj.$save();
		};

		// define data model for new words
		service.models.newWord={name:'', meanings:[{wz0:''},{wz1:''}]};

		// object to be injected in controller
		return service;
});
