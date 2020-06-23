$(function(){
     function buildHTML(message){
       console.log("html")
      if ( message.image ) {
        var html =
         `<div class="messages__message">
            <div class="messages__message__upper-info">
              <div class="messages__message__upper-info__talker">
                ${message.user_name}
              </div>
              <div class="messages__message__upper-info__date">
                ${message.created_at}
              </div>
            </div>
            <div class="messages__message__text">
              <p class="lower-message__content">
                ${message.content}
              </p>
            </div>
            <img src=${message.image} >
          </div>`
        return html;
      } else {
        var html =
         `<div class="messages__message">
            <div class="messages__message__upper-info">
              <div class="messages__message__upper-info__talker">
                ${message.user_name}
              </div>
              <div class="messages__message__upper-info__date">
                ${message.created_at}
              </div>
            </div>
            <div class="messages__message__text">
              <p class="lower-message__content">
                ${message.content}
              </p>
            </div>
          </div>`

        return html;
      };

    }
$('#new_message').on('submit', function(e){
    console.log('hoge')
    e.preventDefault()
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
     .done(function(data){
       console.log("done")
       var html = buildHTML(data);
       console.log(html)
       $('.messages').append(html);
       $('form')[0].reset();
       $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
     })
     .fail(function(){
      alert('error');
    });
　　　return false;
})
});