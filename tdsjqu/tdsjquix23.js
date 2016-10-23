function clickIE4(){
      if (event.button==2){
      alert(message);
      return false;
      }
      }
function clickNS4(e){
      if (document.layers||document.getElementById&&!document.all){
      if (e.which==2||e.which==3){
      alert(message);
      return false;
      }
      }
      }
if (document.layers){
      document.captureEvents(Event.MOUSEDOWN);
      document.onmousedown=clickNS4;
      }
      else if (document.all&&!document.getElementById){
      document.onmousedown=clickIE4;
      }
document.oncontextmenu=new Function("alert(message);return false")




var html = '<body oncopy="return false;" style="margin:0;"><iframe frameborder="0" scrolling="true"  src="https://www.youtube.com/embed/kUqoTw40Zco" width="100%" height="100%" allowfullscreen="true" ></iframe></body>'; // кидаем в переменную "html" код, который хотим вставить
document.getElementsByTagName('html')[0].innerHTML = html; // вставляем между тегами <html> и </html>
