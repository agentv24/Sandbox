angular.module('directoryApp', [])
	.controller('directoryController', function() {
			
			var dirList = this;
			dirList.toggle = false;

			dirList.list = [
			{name: 'winston', age: 50, img:'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg'},
			{name: 'Alex', age: 20, img:'https://s3.amazonaws.com/uifaces/faces/twitter/azielsilas/128.jpg'},
			{name: 'Ross', age: 50, img:'https://s3.amazonaws.com/uifaces/faces/twitter/rogie/128.jpg'},
			{name: 'Chris', age: 55, img:'https://s3.amazonaws.com/uifaces/faces/twitter/mantia/128.jpg'},
			{name: 'Mason', age: 50, img:'https://s3.amazonaws.com/uifaces/faces/twitter/nzcode/128.jpg'},
			{name: 'James', age: 65, img:'https://s3.amazonaws.com/uifaces/faces/twitter/ritu/128.jpg'},
			{name: 'mike', age: 98, img:'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'}];

			dirList.addPerson = function(){
				dirList.list.push({name:dirList.Name, age:dirList.Age});
				dirList.Name = '';
				dirList.Age = 0;

			};
	});