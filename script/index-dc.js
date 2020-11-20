    function goDcinside(){
    var gallid = prompt("이동할 갤러리의 id를 입력하세요");
    if (gallid == null) {
        }
    else {
        window.open("https://gall.dcinside.com/"+gallid);
        }
    }
    function searchDC(){
    var keyword = prompt("검색어를 입력하세요");
    if (keyword == null){
        }
    else {
         window.open("https://search.dcinside.com/post/sort/accuracy/q/"+keyword);
        }
    }
