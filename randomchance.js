function slotmachine(quarters){
  var winning = Math.floor(Math.random() * ((100-50)+1) + 50);
  var chance = Math.floor((Math.random() * 100) + 1);
  
  while(quarters>0){
    
    var roll = Math.floor((Math.random() * 100) + 1);
    console.log("Roll is " + roll)
    console.log('Chance is ' + chance)
    if(roll == chance)
    {
      console.log('YOU WON')
      quarters = quarters + winning;
      return quarters
    }
    else if (roll !==chance)
    {
      quarters -= 1; 
    }
    else if (quarters === 0)
     {
       return 0;
     }
  }
  console.log(quarters);
  
}
slotmachine(51);