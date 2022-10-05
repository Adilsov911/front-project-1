(function() {
    var $doc = $(document);
    var isDown = false;
  
    function bind() {
      $doc.mousedown(toggleDown);
      $doc.mouseup(toggleDown);
      $doc.on('mouseout', 'label', updateChildCheckboxes);
    }
  
    function toggleDown() {
      isDown = !isDown;
    }
    function updateChildCheckboxes() {
      var $els = $(this).find('input[type="checkbox"]');
      check($els);
    }
  
    function check($elements) {
      if (isDown && $elements.prop('checked')) {
        $elements.prop('checked', false);
      } else if (isDown) {
        $elements.prop('checked', true);
      }
    }
  
    $(bind);
  }());
  

  (function() {
    $(function() {
      $('body').append('<div class="checkbox"> \
          <label> \
              <input type="checkbox">Last Item \
          </label> \
      </div>')
    });
  }());
  function getVals(){
  let parent = this.parentNode;
  let slides = parent.getElementsByTagName("input");
    let slide1 = parseFloat( slides[0].value );
    let slide2 = parseFloat( slides[1].value );
  if( slide1 > slide2 ){ let tmp = slide2; slide2 = slide1; slide1 = tmp; }
  
  let displayElement = parent.getElementsByClassName("rangeValues")[0];
      displayElement.innerHTML = "$" + slide1 + " - $" + slide2;
}

window.onload = function(){
  let sliderSections = document.getElementsByClassName("range-slider");
      for( let x = 0; x < sliderSections.length; x++ ){
        let sliders = sliderSections[x].getElementsByTagName("input");
        for( let y = 0; y < sliders.length; y++ ){
          if( sliders[y].type ==="range" ){
            sliders[y].oninput = getVals;
            sliders[y].oninput();
          }
        }
      }
}
function getVals(){
    let parent = this.parentNode;
    let slides = parent.getElementsByTagName("input");
      let slide1 = parseFloat( slides[0].value );
      let slide2 = parseFloat( slides[1].value );
    if( slide1 > slide2 ){ let tmp = slide2; slide2 = slide1; slide1 = tmp; }
    
    let displayElement = parent.getElementsByClassName("rangeValues")[0];
        displayElement.innerHTML = "$" + slide1 + " - $" + slide2;
  }
  
  window.onload = function(){
    let sliderSections = document.getElementsByClassName("range-slider");
        for( let x = 0; x < sliderSections.length; x++ ){
          let sliders = sliderSections[x].getElementsByTagName("input");
          for( let y = 0; y < sliders.length; y++ ){
            if( sliders[y].type ==="range" ){
              sliders[y].oninput = getVals;
              sliders[y].oninput();
            }
          }
        }
  }