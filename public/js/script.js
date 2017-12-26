//console.log("Hello World from Script.js");
//var age = prompt('Your age: ');
//var days = age * 365;
//var alive = alert(age  + " years is  " +  days + " days");

/*var age = prompt("Age: ");

if (age < 18) {
alert("Sorry you are not old enough to enter here");
}

else if (age < 21) {
alert("You are enter but cannot drink");
}
else {
	alert("Come on in. You can drink");
}
*/

/*var age = prompt("Age: ");
var n = parseInt(age);

if (n < 0){
	alert("Negative age");
}
else if (n === 21){
	alert("happy 21s birthday");
}
else (!(n % 2))  
	alert("youre age is odd");
*/
/*var count = -10;

while (count < 19) {
	
	console.log("count is: " + count);
	count ++;


}
*/
/*var count = 10;

while (count <= 40) {
	if (count % 2 == 0){
	
	console.log("count is: " + count);
}
	count ++;
}
*/
//for (var i=10; i <= 40; i=i+2){
//	console.log(i);
//}

/*function doSomething(){
	console.log("Hiiii");
}
doSomething();

function test(x){

	//return x * 2;

	console.log(x*2);
	//return x / 2;
	console.log(x/2);
}

test(40);
*/
function isEven(x){
	
	if (x % 2 == 0){
		 return "qift";
	}
	else {
		return "tek";
	}

	
}

console.log(isEven(21));

//JSON example
var friends = ["bob", "sam", 1, 2];
  friends[1];
  friends.length;

 var person = {
 	name: "Bob",
 	age: 24,
 	city: "LA"
 };

 console.log(person["name"]);
 console.log(person.name);
 console.log(person.city);

 /*$(document).ready(function() {

 $('.highlight', '#third').click(function() {
 	alert("Triger is clicked");

 	$('h1').css('background-color', 'red');
 	//$(this).hide();
 });
 */
/*$(document).ready(function() {
 $('div').css("background-color", "gray");

  $('.highlight').addClass('highlight-width'); // menyra me e mire e qasjes 
// $('.highlight').width(200);

  $('#third').addClass('third-border');


 });
 */

$(document).ready(function() {
    $("button").addClass("animated bounce");
    $("#buttons").addClass("animated shake");
 });

$(document).ready(function() {
Highcharts.chart('container', {

    title: {
        text: 'Solar Employment Growth by Sector, 2010-2016'
    },

    subtitle: {
        text: 'Source: thesolarfoundation.com'
    },

    yAxis: {
        title: {
            text: 'Number of Employees'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2010
        }
    },

    series: [{
        name: 'Instalation',
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
    }, {
        name: 'Manufacturing',
        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
    }, {
        name: 'Sales & Distribution',
        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
    }, {
        name: 'Project Development',
        data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
    }, {
        name: 'Other',
        data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});
});
    




