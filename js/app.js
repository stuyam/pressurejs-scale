var save = false;
var saveZero = 0;

Pressure.set('.force-container', {
  change: function(force, event){
    console.log(saveZero);
    if(save){
      console.log(save);
      saveZero = force;
      save = false;
    }
    document.getElementById('weight').innerHTML = Pressure.map(force - saveZero, 0, 1, 0, 445.7).toFixed(2) + 'g';
  },
  end: function(){
    document.getElementById('weight').innerHTML = Pressure.map(-1 * saveZero, 0, 1, 0, 445.7).toFixed(2) + 'g';
  }
});

$(function(){
  // setTimeout(function(){
  //   console.log(save);
  //   save = true;
  // }, 6000);
  $('#zero').click(function(){
    console.log(save);
    save = true;
  });
});
