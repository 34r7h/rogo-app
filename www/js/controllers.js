angular.module('adolfControllers', [])

.controller('adolfCtrl', function($scope, adolfService) {
		$scope.wordListObject = adolfService.data.wordListObject;
		$scope.wordListArray = adolfService.data.wordListArray;
		$scope.textObj = adolfService.data.textObj;
		$scope.documentation = adolfService.data.documentation;
		$scope.wordSave = adolfService.api.wordSave;
		$scope.remove = adolfService.api.remove;
		$scope.update = adolfService.api.update;
		$scope.new = adolfService.models.newWord;
		$scope.wordListObject.$bindTo($scope,'data');
		$scope.textObj.$bindTo($scope,'text');
		$scope.documentation.$bindTo($scope,'docs');
	});