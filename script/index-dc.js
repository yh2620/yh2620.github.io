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
function goReddit(){
    var subRedditName = prompt("서브레딧의 ID를 입력하세요");
    if (subRedditName != null){
        window.open("https://reddit.com/r/" + subRedditName)
    }
}
function redditPopup(){
    var subRedditName = prompt("서브레딧의 ID를 입력하세요");
    if (subRedditName != null){
        window.open("https://reddit.com/r/" + subRedditName,"reddit","width=800,height=1000")
    }
}
