
// SNS 연결 *************************************************************************** //

//http://www.facebook.com/sharer.php?u={페이지 제목}&t={페이지링크}
//http://twitter.com/intent/tweet?text={페이지 제목}&url={페이지링크}
//https://share.naver.com/web/shareView.nhn?url={페이지링크}&title={페이지 제목}
//https://plus.google.com/share?url={페이지링크}&t={페이지 제목}

// var fb = document.querySelector(".facebook");
    
// fb.click(function(e){
//     e.preventDefault();
//     window.open('https://www.facebook.com/sharer/sharer.php?u=' +encodeURIComponent(document.URL)+'&t='+encodeURIComponent(document.title), 
//     'facebooksharedialog', 'menubar=no, toolbar=no, resizable=yes, scrollbars=yes, height=300, width=600'); 
// });

// 페이스북 공유(새창)-jQuery 사용
$(".facebook").click(function(e){
    e.preventDefault();
    window.open('https://www.facebook.com/sharer/sharer.php?u=' +encodeURIComponent(document.URL)+'&t='+encodeURIComponent(document.title), 
    'facebooksharedialog', 'menubar=no, toolbar=no, resizable=yes, scrollbars=yes, height=300, width=600'); 
});

// 트위터 공유-jQuery 사용
$(".twitter").click(function(e){
    e.preventDefault();
    window.open('https://twitter.com/intent/tweet?text=[%EA%B3%B5%EC%9C%A0]%20' +encodeURIComponent(document.URL)+'%20-%20'+encodeURIComponent(document.title), 
    'twittersharedialog', 'menubar=no, toolbar=no, resizable=yes, scrollbars=yes, height=300, width=600');
});

$('.slider').slick({
    dots: true,             // 페이징 버튼 사용 여부(아래점)
    arrows: true,          // 좌우 화살표 사용 여부
    autoplay: true,         // 자동재생 여부
    autoplaySpeed: 3000,    // 자동재생 슬라이드 간격 (ms)
    Infinity: true,         // 반복재생 여부
    responsive: [          // 반응형 웹 구현 옵션
        {
            breakpoint: 768,  //화면 사이즈 768px
            settings: {
                autoplay: false,  // 자동재생 해제
            }
        }
    ]
});

// 라이트 박스
$('.lightbox').lightGallery({
    autoplay: true,
    thumbnail: true,      // 썸네일 사용 여부(미리보기)
    pause: 3000,          // 사이 간격 시간(3000 = 3초)
    progressBar: true,    // 하단 프로그래스 바 사용 여부
})

//접기/펼치기
$(".btn").click(function(e){       // 전체 메뉴 버튼 클릭 시
    e.preventDefault();            // 링크 기본 동작(이동)을 막음
    $(".nav").slideToggle();       // 전체 메뉴 토글 처리
    $(".btn").toggleClass("open");  // 버튼에 클래스 추가/제거 
    //var btn = $(".btn").find(">i").attr("class");
    //alert(btn);

    if($(".btn").hasClass("open")){
        //open이 있을 때
        $(".btn").find(">i").attr("class","fa fa-angle-up");
    } else {
        //open이 없을 때
        $(".btn").find(">i").attr("class","fa fa-angle-down");
    }
});

$(window).resize(function(){           // 윈도우 창 크기 변경 시
    var wWidth = $(window).width();    // 윈도우 가로값 변수에 담기
    if(wWidth > 600){                  // 가로값 600px 이상일 때
        $(".nav").removeAttr("style"); // nav style 속성 삭제
    }
});