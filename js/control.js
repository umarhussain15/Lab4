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

 function check() {
     var height = document.getElementById('ap').offsetTop + 50;
     var width = document.getElementById('ap').offsetLeft + 80;
     if (height >= document.getElementById('ob1').offsetTop && (height - 50) < (document.getElementById('ob1').offsetTop + 80) && width >= document.getElementById('ob1').offsetLeft + 25 && (width - 80) < document.getElementById('ob1').offsetLeft + 50) {
         document.getElementById('ap').style.top = '200px';
         document.getElementById('ap').style.left = '0px';
         counter = 0;
         document.getElementById("scores").innerText = "0";
         return;
     }
     if (height >= document.getElementById('ob2').offsetTop && (height - 50) < (document.getElementById('ob2').offsetTop + 120) && width >= document.getElementById('ob2').offsetLeft + 25 && (width - 80) < document.getElementById('ob2').offsetLeft + 50) {
         document.getElementById('ap').style.top = '200px';
         document.getElementById('ap').style.left = '0px';
         counter = 0;
         document.getElementById('scores').innerText = "0";
         //        alert(counter);
         return;
     }
     if (height >= document.getElementById('ob3').offsetTop && (height - 50) < (document.getElementById('ob3').offsetTop + 50) && width >= document.getElementById('ob3').offsetLeft + 25 && (width - 80) < document.getElementById('ob3').offsetLeft + 50) {
         document.getElementById('ap').style.top = '200px';
         document.getElementById('ap').style.left = '0px';
         counter = 0;
         document.getElementById('scores').innerText = "0";
         //         alert(counter);
         return;
     }
 }

 function score() {
     var height = document.getElementById('ap').offsetTop + 50;
     var width = document.getElementById('ap').offsetLeft + 80;
     if ((height < document.getElementById('ob1').offsetTop || (height - 50) > (document.getElementById('ob1').offsetTop + 80)) && (width - 80) > (document.getElementById('ob1').offsetLeft + 50) && (width - 80) <= (document.getElementById('ob1').offsetLeft + 51)) {

         counter++;
         document.getElementById('scores').innerText = counter + "";
         //        alert(counter);
     }
     if ((height < document.getElementById('ob2').offsetTop || (height - 50) > (document.getElementById('ob2').offsetTop + 120)) && (width - 80) > (document.getElementById('ob2').offsetLeft + 50) && (width - 80) <= (document.getElementById('ob2').offsetLeft + 51)) {
         counter++;
         //alert(counter);
         document.getElementById('scores').innerText = counter + " ";
     }
     if ((height < document.getElementById('ob3').offsetTop || (height - 50) > (document.getElementById('ob3').offsetTop + 50)) && (width - 80) > (document.getElementById('ob3').offsetLeft + 50) && (width - 80) <= (document.getElementById('ob3').offsetLeft + 51)) {
         counter++;
         document.getElementById('scores').innerText = counter + " ";
     }
 }
 window.onload = generate;
 window.setInterval(generate, 5010);
 window.setInterval(check, 0);
 window.setInterval(score, 0);