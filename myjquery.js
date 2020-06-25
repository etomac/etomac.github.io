$(document).ready(function() {
  
  let counter = 0;
  let seeder  = 0;
  
  $('button').click(function(event) {
    
    console.log(counter)
    console.log(counter % 2)
    
    
    
    $('#demo').text(custAdd(seeder));
    
    counter += 1
    if ((counter % 2) == 1){
      
      $('#demo').text(custAdd(seeder, true));
      
      console.log("SWITCH AFTER THIS")
      seeder = Math.random()
      
    } else {
      
      $('#demo').text(custAdd(seeder, false));
      
    }
    
    
    
    
  });
  
  
});