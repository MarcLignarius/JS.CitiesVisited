// business logic for Places
var portland = new places("United States", "Multnomah Falls", "See a Timbers game")
var kyoto = new places("Japan", "Monkey Mountain", "Drink shochu")
var bordeaux = new places("France", "Rue Sainte Catherine", "Drink wine")

function places(country, landmark, activity) {
  this.country = country,
  this.landmark = landmark,
  this.activity = activity
}

places.prototype.totalInfo = function() {
return "<li>" + "Country: " + this.country + "</li>" + "<li>" + "Landmark: " + this.landmark + "</li>" + "<li>" + "Activity: " + this.activity + "</li>";
}

// Place.forEach(function(place) {
//   console.log(this.country + this.landmark);
//   console.log("\n");
// });

// user interface logic

$(function() {
  $("#portland").click(function() {
    $("#portlandHidden").html(portland.totalInfo());
    $("#portlandHidden").toggle();
  });
  $("#kyoto").click(function() {
    $("#kyotoHidden").html(kyoto.totalInfo());
    $("#kyotoHidden").toggle();
  });
  $("#bordeaux").click(function() {
    $("#bordeauxHidden").html(bordeaux.totalInfo());
    $("#bordeauxHidden").toggle();
  });
});
