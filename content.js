window.onload = function() {
  // 確保頁面已經加載完畢
  setTimeout(() => {
    // 假設你已經知道時間顯示的位置
    const timeElement = document.querySelector(".time-picker");

    if (timeElement) {
      // 創建兩個新按鈕
      const button1 = document.createElement("button");
      button1.innerText = "Button 1";
      button1.style.marginLeft = "10px"; // 可以調整樣式
      button1.addEventListener("click", () => {
        alert("Button 1 clicked!");
      });

      const button2 = document.createElement("button");
      button2.innerText = "Button 2";
      button2.style.marginLeft = "10px";
      button2.addEventListener("click", () => {
        alert("Button 2 clicked!");
      });

      // 將按鈕插入到時間顯示元素後面
      timeElement.parentNode.insertBefore(button1, timeElement.nextSibling);
      timeElement.parentNode.insertBefore(button2, button1.nextSibling);
    }
  }, 1000); // 確保頁面元素都已經加載
};
