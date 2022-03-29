// ==UserScript==
// @name DeepL translate
// @match http*://*
// @run-at document-start
// ==/UserScript==

function remUS(){
  var UScript = document.getElementById('kepler-userscript'); //find previous link...
  if (UScript !== null) { //... if it exists
    UScript.remove(); // delete it
  }
}

function fadeOut(){ //fade out
  var Int = null;
  var elem = document.getElementById("kepler-userscript");
  var op = 1; //opacity is 1
  Int = setInterval(fade, 100); //repeat until...
  function fade() {
    if (op <= 0.05) { //...opacity < 0.05
      elem.remove(); //remove link
      clearInterval(id); //clear interval
    } else {
      op = op - 0.05;
      elem.style.opacity = op;
    }
  }
}

    document.querySelector('body').addEventListener("mouseup", function() { //every time something gets clicked
   
    
      s = window.getSelection();
      sText = s.toString(); //get selected Text that will get displayed
      cText = s.toString(); //get selected Text
      oRange = s.getRangeAt(0); //get Text range
      oRect = oRange.getBoundingClientRect(); //get Text position


      if (sText !== '') { // if there is a selected text

        remUS();//remove previous links, if they exist

        if (sText.length > 15) { //if text is too long, slice it
          sText = sText.slice(0, 14) + '...';
        }


        var copyBox = document.createElement('a'); //create link to translator

        copyBox.innerText = sText; // set text
        copyBox.setAttribute('href', 'https://www.deepl.com/en/translator#en/en/'+cText+'/'); //set link
        copyBox.setAttribute('target', '_blank'); //link should open in a new tab
        copyBox.setAttribute('id', 'kepler-userscript'); // mark as created by userscript
        copyBox.setAttribute('style', 'text-decoration:none;color:black;padding:5px 10px;border-radius: 3px;box-shadow: 1px 1px 4px #000;position:fixed;left:'+oRect.x+'px;top:'+(oRect.y + 30)+'px;background:white;z-index:999;'); //set style

        document.getElementsByTagName('body')[0].append(copyBox); //append the link to the website

        navigator.clipboard.writeText(cText); //copy selection co clipboard
        window.getSelection().removeAllRanges(); //remove selection
        fadeOut();

        //console.log('Left: '+oRect.x+'\nTop: '+oRect.y);
      }
    });
