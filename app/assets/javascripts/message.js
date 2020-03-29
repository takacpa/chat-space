$(function(){
  function buildHTML(message){
    if(message.image.url){
      var html =
       `<div class="message-list" data-message-id=${message.id} >
          <div class="message-list__upper">
            <div class="massage-list__name">
            ${message.user_name}
            </div>
            <div class="message-list__date">
            ${message.created_at}
            </div>
          </div>
          <div class="message-list__text">
            <p>${message.body}</p>
          <img class="message-list__text--image" src=${message.image.url} >
          </div>
        </div>`
      return html;
    } else {
      var html =
      `<div class="message-list" data-message-id=${message.id} >
          <div class="message-list__upper">
            <div class="massage-list__name">
            ${message.user_name}
            </div>
            <div class="message-list__date">
            ${message.created_at}
            </div>
          </div>
          <div class="message-list__text">
            <p>${message.body}</p>
          </div>
        </div>`
      return html;
    };
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault()
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data)
      $('.chat-main__message-lists').append(html);
      $('form')[0].reset();
      $('.message-form__send-btn').prop('disabled', false);
      $('.chat-main__message-lists').animate({ scrollTop: $('.chat-main__message-lists')[0].scrollHeight});
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
  });
  });
  var reloadMessages = function() {
    var last_message_id = $('.message-list:last').data("message-id");
    $.ajax({
      url: "./api/messages",
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages){
      if (messages.length !== 0){
      var insertHTML = '';
      $.each(messages, function(i, message){
        insertHTML += buildHTML(message)
      });
      $('.chat-main__message-lists').append(insertHTML);
      $('.chat-main__message-lists').animate({ scrollTop: $('.chat-main__message-lists')[0].scrollHeight})
      }
    })
    .fail(function(){
      alert('error');
    });
  };
  if (document.location.href.match(/\/groups\/\d+\/messages/)) {
    setInterval(reloadMessages, 7000);
  }
});

// test