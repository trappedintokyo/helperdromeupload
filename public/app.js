function createClicked(){
    $.ajax({
      
      url: "/create",
      type: "POST",
      data: {    
      describe: $("#describe").val(),
      proof:$("#proof").val(),
      location: $("#location").val(),
      related: $("#related").val(),
    
    },
  
      success: function(data){
        if (!data)
          alert("bad create");
        else if (data.retVal)
          console.log("working")
        else
          alert("bad create");
        } ,     
      dataType: "json"
    });     
    
  return false;
  
}

$(document).ready(function(){        

  $("#createButton").click(createClicked);
 
}); 
