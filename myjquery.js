$(document).ready(function() {
  
  $('#uras').hide()
  
  
  $('#buttonL').click(function(event){
    
    
    $('#uras').show()
    
  })
  
  
  let counter = 0;
  let seeder  = 0;
  
  $('#buttonJ').click(function(event) {
    
    console.log(counter)
    console.log(counter % 2)
    
    $('#demo').text(custAdd(seeder));
    
    if ((counter % 2) == 1){
      
      $('#demo').text(custAdd(seeder, true));
      
      console.log("SWITCHING NEXT...")
      seeder = Math.random()
      
    } else {
      
      $('#demo').text(custAdd(seeder, false));
      
    }
    
    counter += 1
    
    
    
  });
  
  
});