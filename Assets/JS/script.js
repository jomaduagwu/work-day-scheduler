// load all the elements in the html first before running code
$(document).ready(function () {
  var currentHour = dayjs().format("HH");
  // add listener for click events on the save button
  $(".saveBtn").on("click", function () { 

    //get the user input and time for the time block
    var userInput = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id").split("-")[1]; 

    // save the user input to local storage with the time ID as the key
    localStorage.setItem(time, userInput); 
    console.log(this);
  });

  
  // apply the past, present, or future class to each time block by comparing the id to the current hour
  $(".time-block").each(function () {
    var timeBlock = $(this).attr("id").split("-")[1]; 
    console.log(timeBlock, currentHour)
      if (currentHour == timeBlock) { 
        $(this).addClass("present");
      } else if (currentHour < timeBlock) {
        $(this).removeClass("present");
        $(this).addClass("future");
      } else if (currentHour > timeBlock) {
        $(this).removeClass("future");
        $(this).addClass("past");
      }
  }); 


// get any user input that was saved in localStorage and set the values of the corresponding textarea elements.
  $("#hour-9 .description").val(localStorage.getItem("hour-9")); 
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));

  // display the current date in the header of the page.
  $("#currentDay").text(dayjs().format("MMMM DD YYYY h:mm A")); 
  // var hour = dayjs().hours();
  
 });
  

 

