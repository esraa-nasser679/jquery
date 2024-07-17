/// <referance type="../@types/jquery" />;


$("#navButton").on("click",function()
{
    $(".left-nav").animate({width:'250px'},3000);
    $("#navButton").animate({left:'250px'},3000);

})

$(".closeButton").on("click", function()
{
    $(".left-nav").animate({width:'0px'},1000);
    $("#navButton").animate({left:'30px'},1000);
})

$("h2").on("click", function()
{
    $(".singer-text").not($(this).next()).slideUp(1000);
    $(this).next().slideToggle(1000);
})

var countDownDate = new Date("Jan 5, 2025 15:37:25").getTime();

var x = setInterval(function() {

    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("day").innerHTML = days + "d " ;
document.getElementById("hour").innerHTML = hours + "h " ;
document.getElementById("minutes").innerHTML = minutes + "m " ;
document.getElementById("seconds").innerHTML = seconds + "s " ;
}, 1000);








$(".left-nav").on("scroll" , function(e)
{
    let sectionId = $(e.target).attr("href");
    let offSet = sectionId.offSet().top;
    $("body").animate({scrollTo: offSet},2000);
})

// $('#massage').on('keyup',function(){
// 	var count = $('#massage').val().trim();
//     let len = $('#chars').text(count.length);
//   if (len >= 100)
//   {
//     $("#chars").text("your available character finished")
//   }
//   else
//   {
    
//   }
// }); 



var maxLength = 100;
$('#massage').keyup(function() {
  var length = $('#massage').val().length;
  var AmountLeft = maxLength-length;
  if(AmountLeft<=0)
            {
                 $("#chars").text("your available character finished");
                
            }
        else{
        
        $("#chars").text(AmountLeft);
        }
});
