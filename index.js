// number count for stats, using jQuery animate

$('.counting').each(function() {
  // var tr = "450000".replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") ;
  // console.log(tr);
  
  var allwellvar  = $(this).attr( "data-count" );
    var $this = $(this),countTo = $this.attr('data-count');
    $({ countNum: $this.text()}).animate({
      countNum: countTo.toLocaleString()
    },
    {
      duration: 3000,
      easing:'linear',
      step: function() {
       
        if(allwellvar == "550"){
          $this.text((Math.floor(this.countNum))+"%");
         }else{
           $this.text("$"+(Math.floor(this.countNum)).toLocaleString());
         }
      },
      complete: function() {
        if(allwellvar == "550"){
          $this.text(this.countNum+"%");
         }else{
          $this.text("$"+this.countNum.toLocaleString());
         }
        //alert('finished');
      }
    });  
  });

