
var defaultStyle = '* { display: inline; padding: 0; margin: 0;}[dir="rtl"] {  direction: rtl;  unicode-bidi: embed;}[dir="ltr"] {  direction: ltr;  unicode-bidi: embed;}bdo[dir] {  unicode-bidi: bidi-override;}html, div, map, dt, isindex, form {  display: block;}body {  display: block;  margin: 8px;}p, dl, multicol {  display: block;  margin: 1em 0;}dd {  display: block;  -moz-margin-start: 40px;}blockquote {  display: block;  margin: 1em 40px;}address {  display: block;  font-style: italic;}center {  display: block;  text-align: -moz-center;}blockquote[type=cite] {  display: block;  margin: 1em 0px;  -moz-padding-start: 1em;  -moz-border-start: solid;  border-color: blue;  border-width: thin;}span[_moz_quote=true] {  color: blue;}pre[_moz_quote=true] {  color: blue;}h1 {  display: block;  font-size: 2em;  font-weight: bold;  margin: .67em 0;}h2 {  display: block;  font-size: 1.5em;  font-weight: bold;  margin: .83em 0;}h3 {  display: block;  font-size: 1.17em;  font-weight: bold;  margin: 1em 0;}h4 {  display: block;  font-weight: bold;  margin: 1.33em 0;}h5 {  display: block;  font-size: 0.83em;  font-weight: bold;  margin: 1.67em 0;}h6 {  display: block;  font-size: 0.67em;  font-weight: bold;  margin: 2.33em 0;}listing {  display: block;  font-family: -moz-fixed;  font-size: medium;  white-space: pre;  margin: 1em 0;}xmp, pre, plaintext {  display: block;  font-family: -moz-fixed;  white-space: pre;  margin: 1em 0;}table {  display: table;  border-spacing: 2px;  border-collapse: separate;  margin-top: 0;  margin-bottom: 0;  -moz-box-sizing: border-box;  text-indent: 0;}table[align="left"] {  float: left;}table[align="right"] {  float: right;  text-align: start;}table[rules]:not([rules="none"]) {  border-collapse: collapse;}   caption {  display: table-caption;  text-align: center;  -moz-box-sizing: border-box;}table[align="center"] > caption {  margin-left: auto;  margin-right: auto;}table[align="center"] > caption[align="left"] {  margin-right: 0;}table[align="center"] > caption[align="right"] {  margin-left: 0;}tr {  display: table-row;  vertical-align: inherit;}col {  display: table-column;}colgroup {  display: table-column-group;}tbody {  display: table-row-group;  vertical-align: middle;}thead {  display: table-header-group;  vertical-align: middle;}tfoot {  display: table-footer-group;  vertical-align: middle;}table > tr {  vertical-align: middle;}td {   display: table-cell;  vertical-align: inherit;  text-align: inherit;   padding: 1px;}th {  display: table-cell;  vertical-align: inherit;  font-weight: bold;  padding: 1px;}tr > form:-moz-is-html, tbody > form:-moz-is-html,thead > form:-moz-is-html, tfoot > form:-moz-is-html,table > form:-moz-is-html {  display: none !important;}q:before {  content: open-quote;}q:after {  content: close-quote;}b, strong {  font-weight: bolder;}i, cite, em, var, dfn {  font-style: italic;}tt, code, kbd, samp {  font-family: -moz-fixed;}u, ins {  text-decoration: underline;}s, strike, del {  text-decoration: line-through;}blink {  text-decoration: blink;}big {  font-size: larger;}small {  font-size: smaller;}sub {  vertical-align: sub;  font-size: smaller;  line-height: normal;}sup {  vertical-align: super;  font-size: smaller;  line-height: normal;}nobr {  white-space: nowrap;}abbr[title], acronym[title] {  border-bottom: dotted 1px;}ul, menu, dir {  display: block;  list-style-type: disc;  margin: 1em 0;  -moz-padding-start: 40px;}ol {  display: block;  list-style-type: decimal;  margin: 1em 0;  -moz-padding-start: 40px;}li {  display: list-item;}ul ul,   ul ol,   ul dir,   ul menu,   ul dl,ol ul,   ol ol,   ol dir,   ol menu,   ol dl,dir ul,  dir ol,  dir dir,  dir menu,  dir dl,menu ul, menu ol, menu dir, menu menu, menu dl,dl ul,   dl ol,   dl dir,   dl menu,   dl dl {  margin-top: 0;  margin-bottom: 0;}ol ul,   ul ul,   menu ul,   dir ul,ol menu, ul menu, menu menu, dir menu,ol dir,  ul dir,  menu dir,  dir dir {  list-style-type: circle;}ol ol ul,     ol ul ul,     ol menu ul,     ol dir ul,ol ol menu,   ol ul menu,   ol menu menu,   ol dir menu,ol ol dir,    ol ul dir,    ol menu dir,    ol dir dir,ul ol ul,     ul ul ul,     ul menu ul,     ul dir ul,ul ol menu,   ul ul menu,   ul menu menu,   ul dir menu,ul ol dir,    ul ul dir,    ul menu dir,    ul dir dir,menu ol ul,   menu ul ul,   menu menu ul,   menu dir ul,menu ol menu, menu ul menu, menu menu menu, menu dir menu,menu ol dir,  menu ul dir,  menu menu dir,  menu dir dir,dir ol ul,    dir ul ul,    dir menu ul,    dir dir ul,dir ol menu,  dir ul menu,  dir menu menu,  dir dir menu,dir ol dir,   dir ul dir,   dir menu dir,   dir dir dir {  list-style-type: square;}hr {  display: block;  height: 2px;  border: 1px inset;  margin: 0.5em auto 0.5em auto;  color: gray;  -moz-float-edge: margin-box;  -moz-box-sizing: border-box;}hr[size="1"] {  border-style: solid none none none;}img:-moz-broken::before, input:-moz-broken::before,img:-moz-user-disabled::before, input:-moz-user-disabled::before,img:-moz-loading::before, input:-moz-loading::before,applet:-moz-empty-except-children-with-localname(param):-moz-broken::before,applet:-moz-empty-except-children-with-localname(param):-moz-user-disabled::before {  content: -moz-alt-content !important;  unicode-bidi: embed;}img:-moz-suppressed, input:-moz-suppressed, object:-moz-suppressed,embed:-moz-suppressed, applet:-moz-suppressed { display: none !important;  visibility: hidden !important;}img[usemap], object[usemap] {  color: blue;}frameset {  display: block ! important;  overflow: -moz-hidden-unscrollable;  position: static ! important;  float: none ! important;  border: none ! important;}frame {  border: none ! important;}iframe {  border: 2px inset;}noframes {  display: none;}spacer {  position: static ! important;  float: none ! important;}canvas {  -moz-user-select: none;}abbr:focus, acronym:focus, address:focus, applet:focus, b:focus, base:focus, big:focus, blockquote:focus, br:focus, canvas:focus, caption:focus,center:focus, cite:focus, code:focus, col:focus, colgroup:focus, dd:focus,del:focus, dfn:focus, dir:focus, div:focus, dl:focus, dt:focus, em:focus,fieldset:focus, font:focus, form:focus, h1:focus, h2:focus, h3:focus, h4:focus,h5:focus, h6:focus, hr:focus, i:focus, img:focus, ins:focus, kbd:focus, label:focus, legend:focus, li:focus, link:focus, menu:focus, object:focus, ol:focus, p:focus, pre:focus, q:focus, s:focus, samp:focus, small:focus, span:focus, strike:focus, strong:focus, sub:focus, sup:focus, table:focus, tbody:focus, td:focus, tfoot:focus, th:focus, thead:focus, tr:focus, tt:focus, u:focus, ul:focus, var:focus {   outline: 1px dotted;}area, base, basefont, head, meta, script, style, title,noembed, param {   display: none;}marquee {  width: -moz-available;  display: inline-block;  vertical-align: text-bottom;  text-align: start;  -moz-binding: url("chrome://xbl-marquee/content/xbl-marquee.xml#marquee-horizontal");}marquee[direction="up"], marquee[direction="down"] {  -moz-binding: url("chrome://xbl-marquee/content/xbl-marquee.xml#marquee-vertical");  height: 200px;}';



function runSelectors(){
    var styleRules =  getStyles();
    for (var rule in styleRules)
    {
        var nodes = [];  
        if(styleRules[rule].selectorText){
            nodes = Sizzle(styleRules[rule].selectorText);
        }
        else
            nodes.push(styleRules[rule].appliesTo);
        for (var nodeI in nodes){
            var node = nodes[nodeI];
            if (!node.addedCSSRules)
                node.addedCSSRules = [];

            node.addedCSSRules.push(styleRules[rule]);
        }

    }
    var nodes = Sizzle("*");
    for(var i in nodes){
        if(nodes[i].addedCSSRules){
            nodes[i].addedCSSRules.sort(cmpRules);
            nodes[i].addedStyles = {};
            for(var j = 0; j < nodes[i].addedCSSRules.length; j++)
            {
                for(var k in nodes[i].addedCSSRules[j].style)
                {
                    var val = nodes[i].addedCSSRules[j].style[k];
                    if(typeof(val) == "string" && isNaN(Number(k)) && val  != "" && k != "cssText"){
                        if(compoundProps[k])
                            setCompoundStyle(nodes[i].addedStyles,k,val);
                        else{
                            nodes[i].addedStyles[k] = parseAttrib(val);
                            if(!nodes[i].addedStyles[k])
                                nodes[i].addedStyles[k] = val;
                        }
                    }
                }
            }
        }
    }

}

function camelCase(str){
    var i = -1;
    while((i = str.search("-")) != -1){
        if(i+1 >= str.length)
            str = str.substr(0,i);
        else
            str = (str.substr(0,i)) + (str[i+1].toUpperCase()) + (str.substr(i+2));
    }
        
    return str;
}

function cmpSpecificity(spec1, spec2){
    for(var i in spec1){
        if(spec1[i] != spec2[i])
            return spec1[i]-spec2[i];
    }
    return 0;
}

function cmpRules(rule1, rule2){
    if(rule1.origin == "author" && rule2.origin == "agent")
        return 1;
    if(rule1.origin == "agent" && rule2.origin == "author")
        return -1;

    if(rule1.important == "important" && rule2.important == "normal")
        return 1;
    if(rule1.important == "normal" && rule2.important == "important")
        return -1;

    var spec = cmpSpecificity(rule1.specificity,rule2.specificity);
    if (spec != 0)
        return spec;

    if(!rule1.position || !rule2.position)
        throw "ERROR: position not defined";
    return rule1.position - rule2.position;
}
function splitPass(selectors, splitString){
    var res = [];
    for (var i in selectors)
    {
        var c  = selectors[i].split(splitString);
        for(var j in c)
            if (c[j] != "")
                res.push(c[j]);
    }

    return res;
}
function countArray(arr, reg)
{
    res = 0;
    for(var i in arr){
        var tmp = arr[i].match(reg);
        res += tmp ? tmp.length : 0;
    }
    return res;
}
function getSpecificity(selector){
   if(!selector)
      return [1,0,0,0];


   var sl = selector.split(",");
   var maxSpec = [0,0,0,0];
   for(j in sl){
       var sel = [];
       sel.push(sl[j]);
       sel = splitPass(sel, " ");
       sel = splitPass(sel, "+");
       sel = splitPass(sel, ">");
       sel = splitPass(sel, "~");
       var d = countArray(sel, /::/g);
       for(i in sel){
           if(sel[i][0] != "*" && sel[i][0] != "[" && sel[i][0] != "." && sel[i][0] != "#" && sel[i][0] != ":") 
               d += 1;
       }
       var b = countArray(sel, /#/g);
       var c = countArray(sel, /\./g) + countArray(sel, /\[*\]/g) + countArray(sel, /[^:]:[^:]/g);

       if(cmpSpecificity([0,b,c,d], maxSpec) > 0)
           maxSpec = [0,b,c,d];
   }
   //TODO: use proper specificity for pseudo-elements

   return maxSpec;

   
}
function checkMedia(rule){
    if (rule.type == 4){
        var found = false;
        for (var medium=0; medium < rule.media.length; medium++){
            if (rule.media[medium].search("screen") != -1){
                found = true;
                break;
            }
        }
        return found;
    }
    return true;
}
function parseCSS(cssText){
    var rules = cssText.split("}");
    var res = [];
    for (var i in rules){
        if(rules[i].match(/^[\s]*$/g)) //Matches empty whitespace
            continue;
        if(rules[i][0] == "@")
            continue;
        var rule = rules[i].split("{");
        var selectorText = rule[0].trim();
        var ruleText = rule[1];
        res.push({"selectorText":selectorText, "cssText": ruleText});
    }
    return res;
}
function parseStyle(styleText){
    res = {}
    var styles = styleText.split(";");
    for(var i = 0; i < styles.length; i++){       //Ignore semicolons in the middle of url() constructs
        var url = styles[i].match(/url\(\"data:image\/[\w]*$/g);
        if (url)
        {
            styles[i] = styles[i] + ";" + styles[i+1];
            styles.splice(i+1,1);
        }
    }
    for(var i in styles){
        if(styles[i].match(/^[\s]*$/g)) //Matches empty whitespace
            continue;
        var kvpair = styles[i].split(":");
        res[kvpair[0].trim()] = kvpair[1].trim();
        if(kvpair[0].trim() == "fontSize")
            var x = 0;
    }
    return res;
}

function getStylesCSSOM(styleSheet, startIndex){
    var result = [];
    var index = startIndex;
    var rules = styleSheet.cssRules;
    for(var i = 0; i < rules.length; i++){
        var rule = rules[i];
        if(rule.type == 4 && rule.media.mediaText.match("screen") != null){
            var retVal = getStylesCSSOM(rule,index);
            result = result.concat(retVal[0]);
            index = retVal[1];
        }
        else if (rule.type == 1)
        {
            var retRule = {};
            var parsedRule = parseCSS(rule.cssText)[0];
            retRule.selectorText = parsedRule.selectorText;
            retRule.style = parseStyle(parsedRule.cssText);
            retRule.type = 1;
            retRule.origin = "author";
            retRule.important = rule.cssText.search("!important") == - 1 ? "normal" : "important";
            retRule.specificity = getSpecificity(parsedRule.selectorText);
            retRule.position = index;
            result.push(retRule);
            index++;
        }
    }
    return [result, index];
}

function getStyles(){
    var result = [];
    var index = 1;

    //for <link rel = "stylesheet" ...> tags, we can only get the CSSOM-parsed stylesheet
    var linkedSheets = Sizzle("link[rel=stylesheet]");
    for(var i = 0; i < linkedSheets.length; i++){
        var retVal = getStylesCSSOM(linkedSheets[i].sheet,index);
        result = result.concat(retVal[0]);
        index = retVal[1];
    }


    var sheets = document.getElementsByTagName("style");
    for (var sheet = 0; sheet < sheets.length; sheet++){
        var rules = parseCSS(sheets[sheet].innerHTML);
        for (var ruleI = 0; ruleI < rules.length; ruleI++){
            //If the rule has a media declaration, make sure it applies to screens
            var rule = {};
            rule.style = parseStyle(rules[ruleI].cssText);
            rule.selectorText = rules[ruleI].selectorText;
            rule.type = 1;
            if(!checkMedia(rule))
                continue;
            //Get sorting data	    
            rule.origin = "author";
            rule.important = rules[ruleI].cssText.search("!important") == -1 ? "normal" : "important";
            rule.specificity = getSpecificity(rule.selectorText);
            rule.position = index;
            result.push(rule);
            index++;
        }
    }
    //Grab styles from style attributes
    
    var nodes = Sizzle("*[style]");
    for(i in nodes){
        var rule = {};
        rule.origin = "author";
        rule.important = "normal";
        rule.specificity = getSpecificity(null);
        rule.position = index;
        rule.style = parseStyle(nodes[i].getAttribute("style"));
        rule.appliesTo = nodes[i];
        result.push(rule);
        index++;
    }

    
    //Set up default stylesheet
    var rules = parseCSS(defaultStyle);
    for(var i = 0; i < rules.length; i++)
    {
        var rule = {} ;
        if(!checkMedia(rule))
            continue;
        rule.style = parseStyle(rules[i].cssText);
        rule.selectorText = rules[i].selectorText;
        rule.origin = "agent";
        rule.important = "normal";
        rule.specificity = getSpecificity(rule.selectorText);
        rule.position = index;
        result.push(rule);
        index++;
    }
    
    return result;
}


