let ws = new WebSocket("ws:192.168.0.80:591"),
text = $("#text"),
name = $("#name"),
chat = $("#chat_body"),
mas = $(".massage"),
cat = $("#chat");

ws.onmessage = function(mas_ws) {
    let mas_in = JSON.parse(mas_ws.data);
  let mas_field =
   `<div class="massage alert-light">
   <div class="username ">${mas_in.name}</div>
   <div class="usertext">${mas_in.text}</div>
</div>`
    cat.append(mas_field);
    
    chat.scrollTop(cat.height())
}

ws.onopen = function(){
 text.keyup(function(event){
     if (event.which === 13 && name.val() && text.val().trim()){
         let mas_out = {
             name : name.val(),
             text : text.val()
         }
         ws.send(JSON.stringify(mas_out));
         text.val("");
     }
 })   
}