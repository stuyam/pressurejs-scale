var save = false;
var saveZero = 0;

Pressure.set('.force-container', {
  change: function(force, event){
    if(save){
      saveZero = force;
      save = false;
    }
    document.getElementById('weight').innerHTML = force;//Pressure.map(force - saveZero, 0, 1, 0, 300).toFixed(2) + 'g';
  },
  end: function(){
    document.getElementById('weight').innerHTML = '0.00g';
  }
});

$(function(){
  $('.zero').click(function(){
    save = true;
  });
});
