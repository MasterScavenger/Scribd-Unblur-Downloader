// ==UserScript==
// @name            Scribd Unblur-Downloader
// @description		Unblur and downlaod Scribd documents.
// @author          MasterScavenger
// @version         1.2
// @updateURL       https://raw.githubusercontent.com/MasterScavenger/Scribd-Unblur-Downloader/main/scribd_script.js
// @downloadURL     https://raw.githubusercontent.com/MasterScavenger/Scribd-Unblur-Downloader/main/scribd_script.js
// @include         http://*.scribd.com/doc/*
// @include         https://*.scribd.com/doc/*
// @include			http://*.scribd.com/document/*
// @include			https://*.scribd.com/document/*
// @grant           GM_addStyle
// @run-at          document-end
// @require         https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js
// ==/UserScript==

/*
DISCLAIMER:
Use this script for educational purpose only.
If you download contents from Scribd regularly, it is best
for you to purchase a premium account.
*/

let container = document.getElementsByClassName("doc_actions");
let class1 = document.createElement("div");
let contents = container[0].children;
class1.classList.add('my_menu');
$(class1).appendTo(container);
$(contents).appendTo(class1);

let download = document.createElement("div");
download.setAttribute("id", "DL-Group");


//button creation
let id = window.location.href;
let cn = "down_btn"
let DDLurl = "https://docdownloader.com/init/scribd?url=" + id;
let SDurl = "https://scribddown.com/download/" + id.split('https://www.scribd.com/document/')[1];
let DLSurl = "https://dlscrib.com/?url=" + id;
let SFreeurl = "https://scribdfree.com/" + id.split('https://www.scribd.com/')[1];
let SFullurl = "https://scribful.com/" + id.split('https://www.scribd.com/')[1];
let DSurl = "https://downscribd.com/" + id.split('https://www.scribd.com/')[1];
let SPDurl = "https://www.scribd.com/embeds/" + id.split('/')[4] + "/content?start_page=1&view_mode=scroll&access_key=key-DXFMtVntRav5tlToCCWR";
//Button 1
let dl1 = document.createElement("span");
dl1.id = "docdownloader";
let dl1a = document.createElement("A");
dl1a.className = cn;
dl1a.style.backgroundImage = "url('https://docdownloader.com/public/img/android-icon-192x192.png')";
dl1a.href = DDLurl;
dl1a.target = "_blank";
dl1.appendChild(dl1a);
//Button 2
let dl2 = document.createElement("span");
dl2.id = "scribddown";
let dl2a = document.createElement("A");
dl2a.className = cn;
dl2a.style.backgroundImage = "url('https://scribddown.com/favicon.ico')";
dl2a.href = SDurl;
dl2a.target = "_blank";
dl2.appendChild(dl2a);
//Button 3
let dl3 = document.createElement("span");
dl3.id = "dlscrib";
let dl3a = document.createElement("A");
dl3a.className = cn;
dl3a.style.backgroundImage = "url('https://dlscrib.com/public/img/apple-icon-180x180.png')";
dl3a.href = DLSurl;
dl3a.target = "_blank";
dl3.appendChild(dl3a);
//Button 4
let dl4 = document.createElement("span");
dl4.id = "scribdfree";
let dl4a = document.createElement("A");
dl4a.className = cn;
dl4a.style.backgroundImage = "url('https://scribdfree.com/favicon-32x32.png')";
dl4a.href = SFreeurl;
dl4a.target = "_blank";
dl4.appendChild(dl4a);
//Button 5
let dl5 = document.createElement("span");
dl5.id = "scribfull";
let dl5a = document.createElement("A");
dl5a.className = cn;
dl5a.style.backgroundImage = "url('https://scribful.com/favicon-32x32.png')";
dl5a.href = SFullurl;
dl5a.target = "_blank";
dl5.appendChild(dl5a);
//Button 6
let dl6 = document.createElement("span");
dl6.id = "downscribd";
let dl6a = document.createElement("A");
dl6a.className = cn;
dl6a.style.backgroundImage = "url('https://downscribd.com/favicon-32x32.png')";
dl6a.href = DSurl;
dl6a.target = "_blank";
dl6.appendChild(dl6a);
//Button 7
let dl7 = document.createElement("span");
dl7.id = "scribdview";
dl7.style.margin = "0 10px 10px";
let dl7a = document.createElement("A");
dl7a.className = cn;
dl7a.style.backgroundImage = "url('http://simpleicon.com/wp-content/uploads/eye2.png')";
dl7a.href = SPDurl;
dl7a.target = "_blank";
dl7.appendChild(dl7a);
//Appending Buttons
$(dl1).appendTo(download);
$(dl2).appendTo(download);
$(dl3).appendTo(download);
$(dl4).appendTo(download);
$(dl5).appendTo(download);
$(dl6).appendTo(download);
$(dl7).appendTo(class1);
$(download).appendTo(container);

//DL Button (Scroll)
let dl8 = document.createElement("span");
dl8.id = "scroll_DL";
let dl8a = document.createElement("A");
dl8a.className = "dlbtn";
dl8a.style.backgroundImage = "url('https://www.halock.com/wp-content/uploads/2020/02/Download-Button-Free-PNG-Image.png')";
dl8.appendChild(dl8a);
// DL Button Scroll (Contents)
let dlscroll = document.createElement("div");
let dlscroll_contents = document.getElementById("DL-Group").childNodes
dlscroll.setAttribute("id", "DL-Button");
$(dlscroll_contents).clone().appendTo(dlscroll);
$(dlscroll).prependTo(dl8);

dl8.onmouseover = function(){
    $(dl7).appendTo(dlscroll);
    dl7.style.margin = null;
    dl8a.style = null;
    GM_addStyle(`
        #DL-Button {display: inline-grid; position: absolute; z-index: 1; border-radius: 20px 20px 0 0; background-color: #00000061; margin:0 27px; padding: 5px 0; bottom: 25px;}
        .down_btn {display: inherit; height: 30px; width: 30px; background-size: 30px; margin: 6px 6px;}
    `);
};

dl8.onmouseleave = function(){
    dl8a.style.backgroundImage = "url('https://www.halock.com/wp-content/uploads/2020/02/Download-Button-Free-PNG-Image.png')";
    GM_addStyle("#DL-Button {display: none;}");
};

window.onscroll = function(){
    let class3 = document.getElementsByClassName("auto__doc_page_body_toolbar");
    let cont = document.getElementsByClassName("left_tools");
    let loc = document.getElementsByClassName("body");
    let delta = class3[0].offsetTop - window.pageYOffset
    if (delta < 0){
        $(dl8).prependTo(loc);
    };
    if (delta >= 0){
        $(dl8).remove();
        $(download).appendTo(container);
        $(dl7).appendTo(class1);
        dl7.style.margin = "0 10px 10px";
    };
};

GM_addStyle(`
    .doc_actions {justify-content: space-between;}
    .my_menu {display: flex; flex-wrap: wrap; align-items: center;}
    #DL-Group {display: flex;}
    .down_btn {display: inherit; height: 30px; width: 30px; background-size: 30px; margin: 0 6px;}
    .down_btn:hover {transform: scale(1.5);}
    .dlbtn {display: flex; height: 75px; width: 100px; background-size: 100px;}
    #DL-Button {display: none;}
    #scroll_DL {position: fixed; z-index: 99999; bottom: 0; left: 0;}
    .text_layer {color: inherit !important; text-shadow: none !important;}
    .page-blur-promo {display: none !important;}
    .page-blur-promo-overlay:parent {display: none !important;}
    .absimg {opacity: 1.0 !important;}
    .page_missing_explanation {display: none !important;}
    .autogen_class_views_pdfs_page_blur_promo {display: none !important;}
    .a {color: black !important;}
    .promo {display: none !important;}
`);
