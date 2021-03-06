(function(angular) {
	'use strict';

	angular.module('xpsui:controllers')
	.controller('xpsui:SecurityLoginCtrl', [ 
		'$scope', 'xpsui:SecurityService', 
		'$rootScope', 
		'$location',
		'xpsui:NotificationFactory', 
		'xpsui:NavigationService' ,
		'$localStorage',
		function($scope, SecurityService, $rootScope, $location,notificationFactory, navigationService, $localStorage) {
			// FIXME remove this in production
			// $scope.user = 'johndoe';
			// $scope.password = 'johndoe';
			$scope.user = '';
			$scope.password = '';
			$scope.$storage = $localStorage.$default({
				rememberme: false,
				loginName: '',
				profile: '',
				securityToken: ''
			});
			$scope.checkboxModel = {
					value : false
			};
			$scope.$storage.rememberme = $localStorage.rememberme;
			console.log($scope.$storage.rememberme);
			var remembermeelement = document.getElementById('x-rememberme-chk');
			if($scope.$storage.rememberme){
				$scope.checkboxModel.value = true;
				remembermeelement.setAttribute('checked','checked'); 
			} else {
				$scope.checkboxModel.value = false;
				$localStorage.$reset();
				remembermeelement.setAttribute('checked','unchecked');
			}
			//console.log(remembermeelement);
			//console.log($scope.checkboxModel);
			/**
			 * Login button click
			 */
			$scope.login = function() {
				SecurityService.getLogin($scope.user, $scope.password).success(function(user) {
					console.log(user.systemCredentials.tokenDao);
					if($scope.checkboxModel.value){
						$scope.$storage.rememberme = true;
						$scope.$storage.loginName = $scope.user;
						$scope.$storage.profile = user.systemCredentials.profiles[0].id;
						$scope.$storage.securityToken = $scope.password;
					} else {
						$localStorage.$reset();
						$scope.$storage.rememberme = false;
					}
					//console.log($scope.checkboxModel);
					console.log(SecurityService);
					if (user.systemCredentials.profiles.length>1){
						$scope.profiles=user.systemCredentials.profiles;
					}
					else {
						SecurityService.selectProfile(user.systemCredentials.profiles[0].id).success(function(){
							SecurityService.getCurrentUser().success(function(data){
							$rootScope.security.currentUser=data;
							
							if (!navigationService.back()) {
								$location.path('/personal-page');
							}
							});
						});
					}
				}).error(function(err) {
					if (err){
						console.log(err);
					}
					delete $rootScope.security.currentUser;
					var mes = {translationCode:'login.authentication.failed',time:5000};
					notificationFactory.error(mes);
				});
			};

			$scope.selectProfile=function(){
				if (!$scope.selectedProfile) return;
				SecurityService.selectProfile($scope.selectedProfile.id).success(function(){
					 SecurityService.getCurrentUser().success(function(data){
						$rootScope.security.currentUser=data;
						if (!navigationService.back()) {
							$location.path('/personal-page');
						}
					});
				});
			};

			$scope.resetPassword = function() {
				SecurityService.getResetPassword($scope.user);
			};
		} 
	]);

}(window.angular));