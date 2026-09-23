const dropContainer = document.getElementById("drop-container");
const imageUrl = "kira.png"; // 表示したい画像のURLに変更してください
const dropInterval = 300; // チカチカ現れる頻度（お好みで調整してください）

function createFallingImage() {
  const img = document.createElement("img");
  img.src = imageUrl;
  img.classList.add("falling-image");

  // ランダムなサイズ、横位置、縦位置を設定
  const size = Math.random() * 25 + 20; // 15px〜35px（少し小さめが綺麗です）
  const startX = Math.random() * window.innerWidth;
  const startY = Math.random() * window.innerHeight; // 💡 縦の位置もランダムにする
  const duration = Math.random() * 2 + 1.5; // 1.5秒〜3.5秒かけてチカチカする

  img.style.width = `${size}px`;
  img.style.left = `${startX}px`;
  img.style.top = `${startY}px`; // 💡 画面上のランダムな高さに固定
  img.style.animationDuration = `${duration}s`;

  dropContainer.appendChild(img);

  img.addEventListener("animationend", () => {
    img.remove();
  });
}

setInterval(createFallingImage, dropInterval);

// ボタンの要素を取得
const scrollTopBtn = document.getElementById("scrollTopBtn");

// 画面がスクロールされたら関数を実行
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  // 20px以上スクロールされたらボタンを表示、それ以外は非表示
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
}

// ボタンがクリックされた時の処理
scrollTopBtn.addEventListener("click", function () {
  // 画面の最上部へスムーズにスクロールする
  window.scrollTo({
    top: 0,
    behavior: "smooth" /* これで「スルする〜」と動くようになります */,
  });
});
