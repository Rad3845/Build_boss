(function () {
	var today = new Date();

    var hourNow = today.getHours();

    var greeting; 
    if (hourNow > 18) {
	greeting = 'Good Evening';
 } else if (hourNow > 12) {
 	greeting = 'Good Afternoon';
 } else if (hourNow > 0) {
 	greeting = 'Good Morning';
 } else { greeting = 'Welcome';
 
 }
 document.write(greeting);
 
 document.write('<h1>Beautiful<h1>');

 document.write('<h2>People<h2>');

})();

(function (window) {
    var you = 'richard ';
    var name = 'john';
    console.log(you + name);
})(window);