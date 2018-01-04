const path = require("path");

const people = require("../data/people.js")

module.exports = function(app) {
    app.get("/api/people", (req, res) => {
        res.json(people)
    });
    app.post("/api/people", (req, res) => {
        var newPerson = req.body;
        

        
        
        console.log(newPerson.scores)


        var drinkName = "";
        
        var drinkSelfie = "";

        var totalDifference = 50
        for (var i = 0; i < people.length; i++) {

            var difference = 0;
            for (var k = 0; k < newPerson.scores.length; k++) {
                difference += Math.abs(people[i].scores[k] - newPerson.scores[k]);
                console.log(difference)
            }
            if (difference < totalDifference) {

                totalDifference = difference;
                drinkName = people[i].name;
                drinkSelfie = people[i].photo;
                console.log(drinkName)
                console.log(drinkSelfie)
            }
        }
        people.push(newPerson);
        res.json({drinkName: drinkName, drinkSelfie: drinkSelfie});
        console.log(people)
    });
}
