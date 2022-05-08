function uwu() {
    var ewems = document.getElementsByTagName("*"); //fiwst we nyeed t-to gwab aww the e-ewements on the page x3
    
    // hewe's da dictionawy of things we change uwu
    var uwu = {"r"   : "w",
               "l"   : "w",
               "you" : "u",
               "uck" : "ucky-wucky",
               "mo"  : "myo",
               "no"  : "nyo",
               "meow": "nyaa",
               "the" : "da", 
               "th"  : "d"};
    
    // owokay, it's go time ùwú! wets itewate ovew AWW those ewements!
    for (var i = 0; i < ewems.length; i++) {
        var ewem = ewems[i];
    
        if (ewem.tagName != "STYLE" && ewem.tagName != "SCRIPT") { // oopsies! we dowon't want to accidentawwy cwobbew da scwipts OwO
            for (var j = 0; j < ewem.childNodes.length; j++) {
                var nodey_wodey = ewem.childNodes[j];
                if (nodey_wodey.nodeType === 3) { // text nowodes onwy p-pwease x3
                    var owiginaw_text = nodey_wodey.nodeValue;
                    var nuwu_text = owiginaw_text.toLowerCase();
                    
                    for (const [owd, nuwu] of Object.entries(uwu)) { // wet's gowo thwough aww da twanswations and wepwace dem on da page (′ꈍωꈍ‵)
                        nuwu_text = nuwu_text.replaceAll(owd, nuwu);
                    }
                    
                    nodey_wodey.nodeValue = nuwu_text; // it's done! UwO
                }
            }
        }
    }
}

setTimeout(uwu, 2000); // wet's do it evwey so often sowo wazy-woading wowks
//uwu();