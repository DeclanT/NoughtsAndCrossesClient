/**
 * Created by adam.dixon on 23/10/2014.
 */

function setActiveStyleSheet(title) {

    var i,a;
    for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {

        if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title")) {
            a.disabled = true;{

            }

        if(a.getAttribute("title") == title)
            a.disabled = false;

        }
    }
}