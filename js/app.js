/* 
    app.js
    Angular application for the address book challenge

    Add code here to create a new Angular application and controller.
    The array of employee objects is already in a global variable named 'pawneeEmployees'
*/
"use strict";

//This creates an Angular module with no dependency that allows the html file to dynamically read
//the contents of the employees.js through a controller. In addition, it also helps sort the
//results of the employees so it provides a greater user experience.
angular.module('AddressBook', []) 
	.controller('AddressController', function($scope) {
		$scope.employees = pawneeEmployees;
		$scope.sortCol = 'lastName';
        $scope.sortBy = function(sortCol) {
            if ($scope.sortCol == sortCol) {
                $scope.sortReverse = !$scope.sortReverse;
            }
            else {
                $scope.sortCol = sortCol;
                $scope.sortReverse = false;
            }
        };
        $scope.isSortedBy = function(colName) {
            return colName == $scope.sortCol;
        }
    });
