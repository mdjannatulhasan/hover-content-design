var direction = "",
oldx = 0,
mousemovemethod = function (e) {
        
    if (e.pageX < oldx) {
         direction = "left"
    } else if (e.pageX > oldx) {
       direction = "right"
    }
        $('.testTracker').html("Mouse Direction: <b>" + direction + "</b>");
    
     oldx = e.pageX;
        
 }
$('.testTracker').on('mousemove', mousemovemethod);
$('#testTracker2').hover(
    document.getElementsByClassName("slideLeft1").style.left = 0
    // function(){ $(this).addClass('slideLeft') }
    // function(){ $(this).removeClass('slideLeft') }
    )
