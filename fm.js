function dt() {
  const date = new Date();
  date.setTime(date.getTime());
  const dateString = date.getTime() + '|' + date.toISOString() + '|' + Math.random();
  const key = new Uint8Array([0x68]);
  const textEncoder = new TextEncoder();
  const resultBuffer = textEncoder.encode(dateString);
  const originalBuffer = new Uint8Array(resultBuffer.length);
  for (let i = 0; i < resultBuffer.length; i++) {
    originalBuffer[i] = resultBuffer[i] ^ key[i % key.length];
  }
  const convertedDate = Array.from(originalBuffer).map(byte => byte.toString(16).padStart(2, '0')).join('');
  return convertedDate;
}

fetch(
  `https://free4talk-identity.herokuapp.com/identity/post/follow/?a=identity-post-follow&v=513-1&t=${Date.now()}`,
  {
  "method": "POST",
  "body": `{
    \"token\":\"${JSON.parse(localStorage['user:token']).data}\",
    \"body\":{\"toId\":\"BLA29484A3A6\"},
    \"_\":\"${dt()}\"
  }`,
});
