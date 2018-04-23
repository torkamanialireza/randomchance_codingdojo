function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomChance(quarters){
  var winnumber = getRandomInt(50,100);
  var winnumber1 = getRandomInt(50,100)
    for (var i = 0; i <quarters; i++) {
      
      if(winnumber==winnumber1){
        return (quarters-1)+winnumber;
      }else if (winnumber !== winnumber1) {
        quarters--;
      } 
      }
      return 0;
}


console.log(randomChance(51));

