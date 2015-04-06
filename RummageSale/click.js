var state = 'off';

$('#classylamp').click(function(){
    
    if(state == 'off'){
      // turn on the lights
      $('#classylamp').css('display','none');
      $('#classylamp2').css('display','block');
      state = 'on';
    }
    
    else {
      // turn off the lights
      $('#classylamp').css('display','block');
      $('#classylamp2').css('display','none');
      state = 'off';
    }    
    
});