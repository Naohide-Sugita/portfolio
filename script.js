// フォームの送信時の処理
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  alert('メッセージを送信しました。');
  form.reset();
});
