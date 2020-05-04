// Select color input
  const colorPicker = $('#colorPicker');

  //Select form
  const sizePicker = $('#sizePicker');

  // Select size input
  const inputHeight = $('#inputHeight');
  const inputWidth = $('#inputWidth');

  //Select pixelCanvas
  const pixelCanvas = $('#pixelCanvas');

  // When size is submitted by the user, call makeGrid()
  sizePicker.submit(function(event) {
    // Draw grid based on input values
    makeGrid(inputWidth.val(), inputHeight.val());
    // prevent page refresh on submit
    event.preventDefault();
  });

  // When a canvas cell is left-clicked fill the corresponding colorPicker color in it, if right clicked then unfill the color

  pixelCanvas.on('mousedown','td',function (e){//look for mouse down event
     if (e.which == 1) {// this is left click event.
       $(this).css('background-color',colorPicker.val());
      }
     if (e.which == 3) {// this is right click event.
       $(this).css('background-color',"#FFFFFF");  // change table cell back to white
      }
  });


  function makeGrid(w,h) {
    pixelCanvas.children().remove();
    const tr_html = '<tr></tr>';
    const td_html = '<td style="background-color:#FFFFFF;"><span style="width:10px;height:10px;"></span></td>';
    let tr = $(tr_html);
    let td = $(td_html);
    for (let rows = 0; rows < w; rows++){
      tr.remove();
      for (let cols = 0; cols < h; cols++) {
        tr.append(td_html);
      }
      pixelCanvas.append(tr);
      tr = $(tr_html);
    }
  }
  
  function onHover(){
    $("#me").attr('src', 'eyeball.gif');
	$('h1').css({'color' : 'blue'});
	sleep();
}

  function offHover(){
    $("#me").attr('src', 'eyeball1.png');
	$('h1').css({'color' : 'black'});
  }
	
  function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}