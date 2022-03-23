// ==UserScript==
// @name DeepL translate
// @match http*://*
// @run-at document-start
// ==/UserScript==

    document.querySelector('body').addEventListener("mouseup", function() { //every time something gets clicked
      s = window.getSelection();
      sText = s.toString(); //get selected Text
      oRange = s.getRangeAt(0); //get Text range
      oRect = oRange.getBoundingClientRect(); //get Text position

      if (sText !== '') { // if there is a selected text

        var UScript = document.getElementById('kepler-userscript'); //find previous link...
        if (UScript !== null) { //... if it exists
          UScript.remove(); // delete it
        }

        if (sText.length > 15) { //if text is too long, slice it
          sText = sText.slice(0, 14) + '...';
        }


        var copyBox = document.createElement('a'); //create link to translator

        copyBox.innerText = sText; // set text
        copyBox.setAttribute('href', 'https://www.deepl.com/en/translator#en/en/'+s.toString()+'/'); //set link
        copyBox.setAttribute('target', '_blank'); //link should open in a new tab
        copyBox.setAttribute('id', 'kepler-userscript'); // mark as created by userscript
        copyBox.setAttribute('style', 'text-decoration:none;color:black;padding:5px 10px;border-radius: 3px;box-shadow: 1px 1px 4px #000;position:fixed;left:'+oRect.x+'px;top:'+oRect.y+'px;background:white;z-index:999;'); //set style

        document.getElementsByTagName('body')[0].append(copyBox); //append the link to the website

        navigator.clipboard.writeText(s.toString()); //copy selection co clipboard
        window.getSelection().removeAllRanges(); //remove selection

        //console.log('Left: '+oRect.x+'\nTop: '+oRect.y);
      }
    });
