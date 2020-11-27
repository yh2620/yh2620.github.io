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
function redditPopup(){
    var subRedditName = prompt("서브레딧의 이름을 입력하세요");
    if (subRedditName != null){
        window.open("https://reddit.com/r/"+subRedditName,"reddit","width=800,height=800")
    }
}
