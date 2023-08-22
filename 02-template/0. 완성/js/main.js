const frome = document.querySelector('section');
const lists = document.querySelectorAll('article');

const deg = 45; // 각각의 article 요소가 회전하는 각도
const len = lists.length-1; // article 요소의 개수 8-1 (0~7)
let i = 0; // article 요소의 인덱스

// article 요소의 개수만큼 반복
for (let el of lists) {
    console.log(el);
    el.style.transform = `rotate(${deg*i}deg) translateY(-100vh)`;
    i++;
}