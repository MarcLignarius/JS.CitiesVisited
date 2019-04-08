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
return this.country + ", " + this.landmark + ", " + this.activity;
}

// Place.forEach(function(place) {
//   console.log(this.country + this.landmark);
//   console.log("\n");
// });

// user interface logic

$(function() {
  $("#portland").click(function() {
    $("#portlandHidden").text(portland.totalInfo());
    $("#portlandHidden").toggle();
  });
  $("#kyoto").click(function() {
    $("#kyotoHidden").text(kyoto.totalInfo());
    $("#kyotoHidden").toggle();
  });
  $("#bordeaux").click(function() {
    $("#bordeauxHidden").text(bordeaux.totalInfo());
    $("#bordeauxHidden").toggle();
  });
});
