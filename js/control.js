 var counter = 0;

 document.onkeydown = function (e) {
     var code = e.keyCode || e.which;
     //        alert("He;;p ");
     var UP = 38;
     var DOWN = 40;
     var LEFT = 37;
     var RIGHT = 39;
     var elementno = document.querySelector("#ap").offsetTop;
     if (code === UP) {
         //        alert(elementno);
         if (elementno > 5) {
             //            alert(elementno);
             elementno -= 10;
             var d = document.getElementById('ap');
             d.style.position = "absolute";
             //            d.style.left = x_pos;
             d.style.top = elementno + 'px';

         }
     }
     if (code === DOWN) {

         if (elementno <= 450) {
             elementno += 10;
             var d = document.getElementById('ap');
             d.style.position = "absolute";
             //            d.style.left = x_pos;
             d.style.top = elementno + 'px';

         }
     }
     var elementno = document.querySelector("#ap").offsetLeft;
     if (code === LEFT) {
         //        alert(elementno);
         if (elementno > 5) {
             //            alert(elementno);
             elementno -= 10;
             var d = document.getElementById('ap');
             d.style.position = "absolute";
             //            d.style.left = x_pos;
             d.style.left = elementno + 'px';

         }
     }
     if (code === RIGHT) {

         if (elementno <= 1200) {
             elementno += 10;
             var d = document.getElementById('ap');
             d.style.position = "absolute";
             //            d.style.left = x_pos;
             d.style.left = elementno + 'px';

         }
     }

 };

 function generate() {
     document.getElementById('ob1').style.top = Math.floor(Math.random() * 420 + 1) + 'px';
     //    document.getElementById('ob1').style.left=Math.floor(Math.random()*500+100)+'px';
     document.getElementById('ob2').style.top = Math.floor(Math.random() * 380 + 1) + 'px';
     //    document.getElementById('ob2').style.left=Math.floor(Math.random()*500+100)+'px';
     document.getElementById('ob3').style.top = Math.floor(Math.random() * 450 + 1) + 'px';
     //    document.getElementById('ob3').style.left=Math.floor(Math.random()*500+100)+'px';

 };

 function ob1r() {
     document.getElementById('ob1').style.top = Math.floor(Math.random() * 420 + 1) + 'px';
 };

 function ob2r() {
     document.getElementById('ob2').style.top = Math.floor(Math.random() * 380 + 1) + 'px';
 };

 function ob3r() {
     document.getElementById('ob3').style.top = Math.floor(Math.random() * 450 + 1) + 'px';
 };

 function check() {
      var planetop = document.getElementById('ap').offsetTop;
     var height = planetop + 50;
     var planeleft = document.getElementById('ap').offsetLeft;
     var width = planeleft + 80;
     if (height >= (document.getElementById('ob1').offsetTop +10) 
         && planetop < (document.getElementById('ob1').offsetTop + 70) 
         && width >= (document.getElementById('ob1').offsetLeft + 25 )
         && planeleft< (document.getElementById('ob1').offsetLeft + 50)) {
//         document.getElementById('ap').style.top = '200px';
//         document.getElementById('ap').style.left = '0px';
         counter = 0;
         document.getElementById("scores").innerText = "0";
         pause();
         return;
     }
      if (height >= (document.getElementById('ob2').offsetTop +10) 
         && planetop < (document.getElementById('ob2').offsetTop + 110) 
         && width >= (document.getElementById('ob2').offsetLeft + 25 )
         && planeleft< (document.getElementById('ob2').offsetLeft + 50)) {
//         document.getElementById('ap').style.top = '200px';
//         document.getElementById('ap').style.left = '0px';
         counter = 0;
         document.getElementById('scores').innerText = "0";
         //        alert(counter);
          pause();
          return;
     }
      if (height >= (document.getElementById('ob3').offsetTop +10) 
         && planetop < (document.getElementById('ob3').offsetTop + 40) 
         && width >= (document.getElementById('ob3').offsetLeft + 25 )
         && planeleft< (document.getElementById('ob3').offsetLeft + 50)) {
//         document.getElementById('ap').style.top = '200px';
//         document.getElementById('ap').style.left = '0px';
         counter = 0;
         document.getElementById('scores').innerText = "0";
         //         alert(counter);
          pause();
          return;
     }
 }

 function score() {
     var planetop = document.getElementById('ap').offsetTop;
     var height = planetop + 50;
     var planeleft = document.getElementById('ap').offsetLeft;
     var width = planeleft + 80;
     //Obstacle 1
     if ((height < (document.getElementById('ob1').offsetTop) || planetop > (document.getElementById('ob1').offsetTop + 80)) && planeleft >= (document.getElementById('ob1').offsetLeft + 50) && planeleft <= (document.getElementById('ob1').offsetLeft + 52)) {

         counter++;
         document.getElementById('scores').innerText = counter + "";
         //        alert(counter);
     }
     //Obstacle 2
     if ((height < (document.getElementById('ob2').offsetTop) || planetop > (document.getElementById('ob2').offsetTop + 120)) && planeleft > (document.getElementById('ob2').offsetLeft + 50) && planeleft <= (document.getElementById('ob2').offsetLeft + 52)) {

         counter++;
         //alert(counter);
         document.getElementById('scores').innerText = counter + " ";
     }
     //Obstacle 3
     if ((height < (document.getElementById('ob3').offsetTop) || planetop > (document.getElementById('ob3').offsetTop + 50)) && planeleft > (document.getElementById('ob3').offsetLeft + 50)&& planeleft <= (document.getElementById('ob3').offsetLeft + 52)) {
         counter++;
         document.getElementById('scores').innerText = counter + " ";
     }
 }
 document.getElementById("ob1").addEventListener("webkitAnimationIteration", ob1r);
 document.getElementById("ob1").addEventListener("animationiteration", ob1r);

 document.getElementById("ob2").addEventListener("webkitAnimationIteration", ob2r);
 document.getElementById("ob2").addEventListener("animationiteration", ob2r);

 document.getElementById("ob3").addEventListener("webkitAnimationIteration", ob3r);
 document.getElementById("ob3").addEventListener("animationiteration", ob3r);
 window.onload = generate;
 // window.setInterval(generate, 5200);
function refresh(){
    window.location.reload();
};
function pause(){
   document.getElementById("ob1").style.webkitAnimationPlayState= 'paused';
    document.getElementById("ob2").style.webkitAnimationPlayState= 'paused';
    document.getElementById("ob3").style.webkitAnimationPlayState= 'paused';
    document.getElementById("background").style.webkitAnimationPlayState= 'paused';
    document.getElementById('ap').style.display='hidden';
    document.getElementById('scores').innerText = "Game Over";
    document.onkeydown=null;
};
 window.setInterval(check, 0);
 window.setInterval(score, 0);