// FLL Trash Trek Score Sheet By Gregor Schram aka (gergor160300 aka DeveloperDutch)
// Contact gschram@protonmail.ch for questions
$(document).ready(function () {
    $('#reset').trigger("reset");
    $('#reset').change(function () {
        var points = 0;

        //M05
        points += parseInt($("input[id=M05]:checked").val()); // Get the value of the M05 mission checkbox in numeric value and add it to points

        //M06
        points += parseInt($("input[name=M06]:checked").val()); // Get the value of the current checked M06 mission state in numeric value and add it to points

        //M07
        var M07empty = $("input[id=M07empty]:checked").val(); // Check if plastic bags are removed
        var M07chicken = $("input[id=M07chicken]:checked").val(); // Get the value of the chicken in small circle checkbox
        var M07animals = parseInt($("#animals").val()); // Get the value of the #animals slider in numeric format
        points += parseInt($("#plastic").val()); // Get the value of the #plastic slider in numeric format and add it to points
        if (M07empty) { // If the circles are clear of plastic...
            if (M07chicken) { // and if the chicken checkbox is checked...
                points += 35; // then add 35 points for the chicken...
                points += M07animals; // and add the amount of animals fully inside circles
            } else { // Else, meaning chicken isn't fully inside the small circle...
                points += M07animals; // then only add the amount of animals fully inside circles
            }
        }

        //M08
        points += parseInt($("input[name=M08]:checked").val()); // Get the value of the current checked M08 mission state in numeric value and add it to points

        if (isNaN(points)) {
            points = 0;
        }

        //Total
        $('#totalscore').html(points + " punten"); // Add the points variable to the #totalscore inside html and add the word points
    });
});
