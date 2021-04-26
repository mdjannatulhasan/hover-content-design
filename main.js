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

var direction = "",
oldx = 0,
mousemovemethod2 = function (e) {
        
    if (e.pageX < oldx) {
         direction = "left"
    } else if (e.pageX > oldx) {
       direction = "right"
    }
        document.getElementsById('newTest').innerHTML += '<div class="afterHoverBox slideLeft" id="testTracker1"><div class="contentBody d-flex justify-content-center align-items-center"><div class="row"><div class="col-12"><div class="title"><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id facere expedita quisquam maiores.</p></div></div><div class="col-12"><div class="links"><a href="" class="btn text-decoration-none btn1" > Click here</a><a href="" class="btn text-decoration-none btn1" > Buy Now</a></div></div></div></div></div>"'
    
     oldx = e.pageX;
        
 }
$('#newTest').on('mousemove', mousemovemethod2);
