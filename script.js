let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");
let questionText = document.getElementById("question");
let mainImage = document.getElementById("mainImage");

let clickCount = 0;  // 璁板綍鐐瑰嚮 No 鐨勬鏁�

// No 鎸夐挳鐨勬枃瀛楀彉鍖�
const noTexts = [
    "锛熶綘璁ょ湡鐨勫悧鈥�", 
    "瑕佷笉鍐嶆兂鎯筹紵", 
    "涓嶈閫夎繖涓紒 ", 
    "鎴戜細寰堜激蹇冣€�", 
    "涓嶈:("
];

// No 鎸夐挳鐐瑰嚮浜嬩欢
noButton.addEventListener("click", function() {
    clickCount++;

    // 璁� Yes 鍙樺ぇ锛屾瘡娆℃斁澶� 2 鍊�
    let yesSize = 1 + (clickCount * 1.2);
    yesButton.style.transform = `scale(${yesSize})`;

    // 鎸ゅ帇 No 鎸夐挳锛屾瘡娆″彸绉� 100px
    let noOffset = clickCount * 50;
    noButton.style.transform = `translateX(${noOffset}px)`;

    // **鏂板锛氳鍥剧墖鍜屾枃瀛楀線涓婄Щ鍔�**
    let moveUp = clickCount * 25; // 姣忔涓婄Щ 20px
    mainImage.style.transform = `translateY(-${moveUp}px)`;
    questionText.style.transform = `translateY(-${moveUp}px)`;

    // No 鏂囨鍙樺寲锛堝墠 5 娆″彉鍖栵級
    if (clickCount <= 5) {
        noButton.innerText = noTexts[clickCount - 1];
    }

    // 鍥剧墖鍙樺寲锛堝墠 5 娆″彉鍖栵級
    if (clickCount === 1) mainImage.src = "images/shocked.png"; // 闇囨儕
    if (clickCount === 2) mainImage.src = "images/think.png";   // 鎬濊€�
    if (clickCount === 3) mainImage.src = "images/angry.png";   // 鐢熸皵
    if (clickCount === 4) mainImage.src = "images/crying.png";  // 鍝�
    if (clickCount >= 5) mainImage.src = "images/crying.png";  // 涔嬪悗涓€鐩存槸鍝�

});

// Yes 鎸夐挳鐐瑰嚮鍚庯紝杩涘叆琛ㄧ櫧鎴愬姛椤甸潰
yesButton.addEventListener("click", function() {
    document.body.innerHTML = `
        <div class="yes-screen">
            <h1 class="yes-text">!!!鍠滄浣�!! ( >釒�<)鈾★笌釔�</h1>
            <img src="images/hug.png" alt="鎷ユ姳" class="yes-image">
        </div>
    `;

    document.body.style.overflow = "hidden";
});