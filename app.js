//Define an angular module for our app
var app = angular.module('sidebar', []);

app.controller('sidebar', function($scope, $http) {
	
 // Load all available items 
	displayOverview();
	function displayOverview(){
		var overviewText = '<h1>Bracketball Overview</h1><br>This is where we put text for the overview/rules etc.';
	  	$("div#maincontent-wrapper").html(overviewText);
	};
	$scope.displayOverview = function () {
		displayOverview();
	};
	$scope.createBracket = function () {

	  	$http.post("ajax/getBracket.php").success(function(data){
	  		var bracketArray = data;

		    $("div#maincontent-wrapper").html('<div id=bracket><table id="bracketTable"><tbody><tr><td>First Round</td><td>Second Round</td><td>Sweet Sixteen</td><td>Elite Eight</td><td>Final Four</td><td>Nat\'l Champ</td></tr></tbody></table></div>');
		    var table = $('#bracketTable').children();
		    var regionOrder = [1,4,3,2];
		    for (i = 0; i < regionOrder.length; i++)
			{
				region = regionOrder[i];
				//<td width="15px">1</td>
				table.append('<br><table id=region' + region + '><tr><td>Region ' + region + '</td></tr><br>');
				//Layout Table By Row Add An Extra Column For The Round it is in
		    	table.append('<tr><td><table id="region' + region + '_game1"><tbody><tr id="region' + region + '_team1"><td>' + data[region][1]['uni_name'] + '</td></tr><tr id="region' + region + '_team16"><td>' + data[region][16]['uni_name'] + '</tr></td></tbody></table></td></tr>');
		    	table.append('<tr><td></td><td><table id="region' + region + '_game9"><tbody><tr id="region' + region + '_winner1"><td>Winner 1</td></tr><tr id="region' + region + '_winner2"><td>Winner 2</tr></td></tbody></table></td></tr>'); 
		    	table.append('<tr><td><table id="region' + region + '_game2"><tbody><tr id="region' + region + '_team8"><td>' + data[region][8]['uni_name'] + '</td></tr><tr id="region' + region + '_team9"><td>' + data[region][9]['uni_name'] + '</tr></td></tbody></table></td></tr>');
		    	table.append('<tr><td></td><td></td><td><table id="region' + region + '_game13"><tbody><tr id="region' + region + '_winner9"><td>Winner 9</td></tr><tr id="region' + region + '_winner10"><td>Winner 10</tr></td></tbody></table></td></tr>');
		    	table.append('<tr><td><table id="region' + region + '_game3"><tbody><tr id="region' + region + '_team5"><td>' + data[region][5]['uni_name'] + '</td></tr><tr id="region' + region + '_team12"><td>' + data[region][12]['uni_name'] + '</tr></td></tbody></table></td></tr>');
		    	table.append('<tr><td></td><td><table id="region' + region + '_game10"><tbody><tr id="region' + region + '_winner3"><td>Winner 3</td></tr><tr id="region' + region + '_winner4"><td>Winner 4</tr></tbody></table></td></tr>');
				table.append('<tr><td><table id="region' + region + '_game4"><tbody><tr id="region' + region + '_team4"><td>' + data[region][4]['uni_name'] + '</td></tr><tr id="region' + region + '_team13"><td>' + data[region][13]['uni_name'] + '</tr></td></tbody></table></td></tr>');		    	
				table.append('<tr><td></td><td></td><td></td><td><table id="region' + region + '_game15"><tbody><tr id="region' + region + '_winner13"><td>Winner 13</td></tr><tr id="region' + region + '_winner14"><td>Winner 14</tr></td></tbody></table></td></tr>');
				table.append('<tr><td><table id="region' + region + '_game5"><tbody><tr id="region' + region + '_team6"><td>' + data[region][6]['uni_name'] + '</td></tr><tr id="region' + region + '_team11"><td>' + data[region][11]['uni_name'] + '</tr></td></tbody></table></td></tr>');
				table.append('<tr><td></td><td><table id="region' + region + '_game11"><tbody><tr id="region' + region + '_winner5"><td>Winner 5</td></tr><tr id="region' + region + '_winner6"><td>Winner 6</tr></td></tbody></table></td></tr>');
				table.append('<tr><td><table id="region' + region + '_game6"><tbody><tr id="region' + region + '_team3"><td>' + data[region][3]['uni_name'] + '</td></tr><tr id="region' + region + '_team14"><td>' + data[region][14]['uni_name'] + '</tr></td></tbody></table></td></tr>');
				table.append('<tr><td></td><td></td><td><table id="region' + region + '_game14"><tbody><tr id="region' + region + '_winner11"><td>Winner 11</td></tr><tr id="region' + region + '_winner12"><td>Winner 12</tr><tr><br/></tr></td></tbody></table></td></tr>');
				table.append('<tr><td><table id="region' + region + '_game7"><tbody><tr id="region' + region + '_team7"><td>' + data[region][7]['uni_name'] + '</td></tr><tr id="region' + region + '_team10"><td>' + data[region][10]['uni_name'] + '</tr></td></tbody></table></td></tr>');
				table.append('<tr><td></td><td><table id="region' + region + '_game12"><tbody><tr id="region' + region + '_winner7"><td>Winner 7</td></tr><tr id="region' + region + '_winner8"><td>Winner 8</tr></td></tbody></table></td></tr>');
				table.append('<tr><td><table id="region' + region + '_game8"><tbody><tr id="region' + region + '_team2"><td>' + data[region][2]['uni_name'] + '</td></tr><tr id="region' + region + '_team15"><td>' + data[region][15]['uni_name'] + '</tr></td></tbody></table></td></tr></table>');

		    }
		 });
	};
});