
$(".accButton").click(function(event) {
  if(this.id == "clear"){
    $("#number_input").val("");
  }else{
    $("#number_input").val($("#number_input").val() + this.id);
  }

})
