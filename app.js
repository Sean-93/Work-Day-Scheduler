//Makes sure html loads before JS

$(document).ready(function() {

    //On-click event

    $(".saveBtn").on("click" , function() {

        //sets variable that stores value of elements with the class, .description
        var value = $(this).siblings(".description").val();
        //sets variable that references specific id of parent
        var time = $(this).parent().attr("id");
        //saves value in corresponding element to local storage
        localStorage.setItem(time, value);
    }) 
        
    function hourUpdater() {
        //sets variable to be current hour
        var currentHour = moment().hours();
        //selects all elements with .time-block id
        //creates a function that catches all elements with .time-block id
        $(".time-block").each(function() {
            //sets variable that splits each "hour-_" id by the "-" into 2 strings
            //converts the second string into an integer "this" references the id
            var blockHour = parseInt($(this).attr("id").split("-")[1]);
            //if blockHour is less than currentHour, select element and add the .past class
            if(blockHour < currentHour) {
                $(this).addClass("past")
            }
            //else if blockHour is same value as currentHour, remove .past class
            //after removing class, add the .present class onto the element
            else if(blockHour === currentHour) {
                $(this).removeClass("past")
                $(this).addClass("present")
            //if blockHour is neither less than or equal to currentHour, 
            //remove .past and .present from element; add class, .future
            }
            else {
                $(this).removeClass("past")
                $(this).removeClass("present")
                $(this).addClass("future")
            }
        })
    }

    //run function
    hourUpdater();

    //sets an intervals
    var interval = setInterval(hourUpdater, 15000);

    //DRY version VVV
    // $("#hour-9 .description").val(localStorage.getItem("hour-9"))
    // $("#hour-10 .description").val(localStorage.getItem("hour-10"))
    // $("#hour-11 .description").val(localStorage.getItem("hour-11"))
    // $("#hour-12 .description").val(localStorage.getItem("hour-12"))
    // $("#hour-13 .description").val(localStorage.getItem("hour-13"))
    // $("#hour-14 .description").val(localStorage.getItem("hour-14"))
    // $("#hour-15 .description").val(localStorage.getItem("hour-15"))
    // $("#hour-16 .description").val(localStorage.getItem("hour-16"))
    // $("#hour-17 .description").val(localStorage.getItem("hour-17"))

    for (let i = 9; i < 18; i++) {
        $("#hour-" + i + " .description").val(localStorage.getItem("hour-" + i))
        
    }

})