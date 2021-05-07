/*
alert("Hello World!");

var inputElement = document.getElementsByTagName("input")[0];

inputElement.onclick = function(){
    var formElement = document.forms[0];
    alert(formElement);
}*/

$(function() {
    $('input[name="datetimes"]').daterangepicker({
      timePicker: true,
      startDate: moment().startOf('hour'),
      endDate: moment().startOf('hour').add(32, 'hour'),
      locale: {
        format: 'M/DD hh:mm A'
      }
    });
  });

/*Click submit, get the input values*/
$(document).ready(function(){
  $("#submit").click(function(){
    var first_name    = $("#fname").val();
    var last_name     = $("#lname").val();
    var num_traveller = $("#num_traveller").val();
    var gender        = $("#gender").val();
    var country       = $("#country").val();
    var budget        = $("#budget").val();
    var date          = $("#data").val();
    var info = "Your name : " + first_name + " " + last_name + ", traveller : " 
                 + num_traveller + ", gender : " + gender + ", You want to travel " + country 
                 + ". Your budget is : " + budget + ". The date : " + date;
    alert(info);
    $("p").html($("p").html() + " " + info);
  });
});