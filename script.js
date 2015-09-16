// FLL Trash Trek Score Sheet By Gregor Schram aka (gergor160300 aka DeveloperDutch)
// Contact gschram@protonmail.ch for questions

//From here...

var points = 0; // Setup points var and set it to 0, might have given error of adding something to a undefined

function addPoints(selector) { // Make a function that takes the input box/slider/radio as input
    if ($(selector).val() !== undefined) { // Then check to see if it has a defined value (if undefined do nothing)
        points += parseInt($(selector).val()); // When defined make sure the value is a number and add it to points
    }
}

// ... to here only runs on first script inclusion

$(document).ready(function () { // Make a function that runs on page load
    $('#reset').trigger("reset"); // When reloaded reset the #reset form
    $('#reset').change(function () { // Do everything inside this function when a change is made to the #reset form
        // Reset the points counter because counting is done over on every change in the form
        points = 0;

        // M05
        addPoints("input[id=M05]:checked"); // Get the value of the M05 mission checkbox in numeric value and add it to points by passing the checkbox into the addPoints function

        // M06
        addPoints("input[name=M06]:checked"); // Get the value of the current checked M06 mission state in numeric value and add it to points by passing the checkbox into the addPoints function

        // M07
        var M07empty = $("input[id=M07empty]:checked").val(); // Check if plastic bags are removed returns a boolean
        var M07chicken = $("input[id=M07chicken]:checked").val(); // Get the value of the chicken in small circle checkbox also returns a boolean
        var M07animals = parseInt($("#animals").val()); // Get the value of the #animals slider in numeric format
        addPoints("#plastic"); // Get the value of the #plastic slider in numeric format and add it to points by passing the checkbox into the addPoints function
        if (M07empty !== undefined) { // If the circles are clear of plastic (so M07empty is true and not undefined)...
            if (M07chicken !== undefined) { // and if the chicken checkbox is checked (and not undefined)...
                points += 35; // then add 35 points for the chicken...
            }
            points += M07animals; // and always add the amount of animals fully inside circles
        }

        // M08
        addPoints("input[name=M08]:checked"); // Get the value of the current checked M08 mission state in numeric value and add it to points by passing the checkbox into the addPoints function

        if (isNaN(points)) { // If points is not a number...
            points = 0; // Set points to 0, so that noobs won't get scared
        }

        // Total
        $('#totalscore').html(points + " punten"); // Add the points variable to the #totalscore inside html and add the word points
    });
});

