function getDateToken() {
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

const token = JSON.parse(localStorage['user:token']).data;
const myId = "KOIQUBLRTTLT";

fetch(
  `https://free4talk-identity.herokuapp.com/identity/post/follow/?a=identity-post-follow&v=513-1&t=${Date.now()}`,
  {
  "method": "POST",
  "body": `{
    \"token\":\"${token}\",
    \"body\":{\"toId\":\"${myId}\"},
    \"_\":\"${getDateToken()}\"
  }`,
});
