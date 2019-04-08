// business logic for Places
var PDX = new Place("United States", "Portland", "Multnomah Falls")
var Kyoto = new Place("Japan", "Kyoto", "monkey mountain")
var bdx = new Place("France", "Bordeaux", "rue Sainte Catherine")

function Place(country, city, landmark) {
  this.country = country,
  this.city = city,
  this.landmark = landmark
}

Place.prototype.totalInfo = function() {
return this.country + ", " + this.city + ", " + this.landmark;
}

// Place.forEach(function(place) {
//   console.log(this.country + this.city + this.landmark);
//   console.log("\n");
// });

// user interface logic

$(function() {
  $("form#luckSurvey").submit(function(event){
    event.preventDefault();

    $(document).ready(function(){
      $("#formConverter").submit(function(event) {
        event.preventDefault();
        var input = parseInt($("#input").val());
        var output = romanNumbers(input);
        $(".outputClass").text(output);

        $("#output").show();
