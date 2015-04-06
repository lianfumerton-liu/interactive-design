var state = 'off';

$(document).ready(function() {
  $('#clickBalloon').click(function() {
    
    console.log('hey');

    if(state == 'off'){
      $(this).html('<img id="balloon" src="PNGs/balloon.gif">');
      state = 'on';
    }
    
    else {
      $(this).html('<img id="poppedBalloon" src="PNGs/pop.png">');
      state = 'off';
    }    
      
  });

    $('#clickLamp').click(function() {
    

    if(state == 'off'){
      // turn on the lights
      $(this).html('<img id="classylamp" src="PNGs/classylamp.png">');
      state = 'on';
    }
    
    else {
      // turn off the lights
      $(this).html('<img id="onlamp" src="PNGs/classylamp2.png">');
      state = 'off';
    }    
      
  });

    $('#clickHair').click(function() {
    

    if(state == 'off'){
      // turn on the lights
      $(this).html('<img id="hair" src="PNGs/hair.png">');
      state = 'on';
    }
    
    else {
      // turn off the lights
      $(this).html('<img id="wig" src="PNGs/wig.png">');
      state = 'off';
    }    
      
  });

    $('#clickUmbrella').click(function() {
    

    if(state == 'off'){
      // turn on the lights
      $(this).html('<img id="umbrella" src="PNGs/umbrella.png">');
      state = 'on';
    }
    
    else {
      // turn off the lights
      $(this).html('<img id="umbrellaclosed" src="PNGs/umbrellaclosed.png">');
      state = 'off';
    }    
      
  });

     $('#clickLeaves').click(function() {
  
    if(state == 'off'){
      // turn on the lights
      $(this).html('<img id="leaves" src="PNGs/leaves.png">');
      state = 'on';
    }
    
    else {
      // turn off the lights
      $(this).html('<img id="leavesScattered" src="PNGs/leaves2.png">');
      state = 'off';
    }    
      
  });

      $('#clockEyes').click(function() {
  
    if(state == 'off'){
      // turn on the lights
      $('#eyes').css('display', 'block');
      state = 'on';
    }
    
    else {
      // turn off the lights
      $('#eyes').css('display', 'none');
      state = 'off';
    }    
      
  });


});