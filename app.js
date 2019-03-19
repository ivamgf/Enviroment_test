//Method Modal

//Modal
function modal() {
    var div_01 = `<div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog">    
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Modal Header</h4>
        </div>
        <div class="modal-body">
          <p>Some text in the modal.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">OK</button>
        </div>
      </div>
      <!-- Modal content-->
    </div>
  </div>`;

document.getElementById("buttonAlert").innerHTML = div_01;
}
//Modal

//Alert
function notices() {              

  var render = `<div class="alert alert-success alert-dismissible" id="myAlert">
                <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>Teste</div>`;

  $(document).ready(function(){    
      $("#myAlert").animate({bottom: '10px'});
  });
  
  $(document).ready(function(){
      $("#myAlert").fadeOut(10000);
  });

  document.getElementById("alerts").innerHTML = render;
            
}
//Alert