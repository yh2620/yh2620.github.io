    function goDcinside(){
    var gallid = prompt("이동할 갤러리의 id를 입력하세요");
    if (gallid == null) {
        }
    else {
        location.href = "https://gall.dcinside.com/" + gallid;
        }
    }
    function searchDC(){
    var q = prompt("검색어를 입력하세요");
    if (q == null){
        }
    else {
         location.href = "https://search.dcinside.com/post/sort/accuracy/q/" + q;
        }
    }
