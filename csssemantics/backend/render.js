if (true) logger = {log: function () {}, group: function (){}, groupEnd: function(){}, error: function() {} };
else logger = console;
currentDOM = null;
try{
    attribMap[""] = null;
}
catch(e)
{
    var attribMap = {};
}

function getPageWidth(){
    return window.innerWidth;
}
function getPageHeight(){
    return window.innerHeight;
}

images = [];

function getImageWidth(imgNum)
{
    return images[imgNum].width;
}
function getImageHeight(imgNum)
{
    return images[imgNum].height;
}

function getAttribSafe(node, attrib){
    var attr = attribMap[attrib] ? attribMap[attrib] : attrib;
    var a = node[attr];
    //special handling for text
    if (attrib == "text")
        return a + "";
    //special handling for complex data types (kind of hacky)
    if (typeof(a) == "object")
        return a;
    if(a != null && a != undefined)
        n = parseFloat(a);
    else
    {
        logger.log("Accessing undefined attribute: " + attrib + " at " + node.tagName + ". Returning null");
        return null;
    }

    if(isNaN(n)){
        if(a == "true") return true;
        else if(a == "false") return false;
        else{
            return a;
        }
    }
    else
    {
        if(typeof(a) == "string" && a.trim().match(/^[0-9]+$/))
            return n;
        else if(typeof(a) != "string")
            return n;
        else
            return a;
    }
}
getInputAttribSafe = function(node, attrib, def){
    var a = getAttribSafe(node,attrib);
    var myDef = def;
    if(typeof(def) == "string")
    {
        myDef = def.replace(/^"/, "").replace(/"$/,"");
        if(myDef.match(/^\{[0-9]+,[0-9]+\}$/))
        {
            myDef = myDef.replace(/^\{/,"").replace(/\}$/,"").split(",");
            myDef[0] = parseFloat(myDef[0]);
            myDef[1] = parseFloat(myDef[1]);
        }
    }
    return a == null ? myDef : a;
}
getInputMaybeAttribSafe = getAttribSafe;
/*
function getInputAttribSafe(node, attrib, def) {
  if (node.nodeType == 1) {
    var a = node.hasAttribute(attrib) ? node.getAttribute(attrib) : def;
    var n = parseFloat(a);
    return isNaN(n) ? a : n;
  } else if (node.nodeType == 3) {  
    if (node[attrib] === undefined) {
      var a = def;
      var n = parseFloat(a);
      return isNaN(n) ? a : n;
    }
    switch (attrib) {
      case "text": return node.nodeValue;
      case "fontfamily": return node.fontfamily ? node.fontfamily : "Verdana";
      case "fontsize": return node.fontsize ? node.fontsize : 20;
      default:
        var a = node[attrib];
        var n = parseFloat(a);
        return isNaN(n) ? a : n;
    }
  }
}

function getInputMaybeAttribSafe(node, attrib) {
  var res;
  var a;
  var n;
  if (node.nodeType == 1) {
    a = node.hasAttribute(attrib) ? node.getAttribute(attrib) : undefined;
    n = parseFloat(a);
    res = isNaN(n) ? a : n;
  } else if (node.nodeType == 3) {  
    if (node[attrib] === undefined) {
      res = undefined;
    } else {
      switch (attrib) {
        case "text": res = node.nodeValue; break;
        default:
          a = node[attrib];
          n = parseFloat(a);
          res = isNaN(n) ? a : n;
      }
    }
  }
  var newRes;
  if (res === undefined) newRes = [true, undefined];
  else newRes = [false, res];
  return newRes;
}*/
/*
function setAttribSafe(node, attrib, val) {
  if (node.nodeType == 1) {
    return node.setAttribute(attrib, val);
  } else if (node.nodeType == 3) {
    return node[attrib] = val;
  }
}
*/
function setAttribSafe(node, attrib, val){
    var attr = attribMap[attrib] ? attribMap[attrib] : attrib;
    return node[attr] = val;
}


function getChildByRefName (node, refName){
    for(var i = 0; i < node.children.length; i++)
    {
        if(getAttribSafe(node.children[i], "refName") == refName){
            return node.children[i];
        }
    }
    throw("child not found: node(" + node.tagName + ", " + getAttribSafe(node, "refName") + ") goal child (" + refName + ")");
}

function getChildren (node, refName, includeText){
    var res = []
    if(!node)
        throw "trying to get children of undefined node";
    for(var i = 0; i < node.children.length; i++)
    {
        if(getAttribSafe(node.children[i], "refName") == refName){
            res.push(node.children[i]);
        }
    }
    return res;
}

function isEmptyFtl (m) {if(!m || !m[0]) return true; return m[0]; }
var isEmptyInt = isEmptyFtl;
var isEmptyBool = isEmptyFtl;
var isEmptyFloat = isEmptyFtl;
var isEmptyColor = isEmptyFtl;
var isEmptyString = isEmptyFtl;

function valueFtl (m) { 
    return m[1]; 
}
var valueInt = valueFtl;
var valueBool = valueFtl;
var valueFloat = valueFtl;
var valueColor = valueFtl;
var valueString = valueFtl;


function inherit(visit, node) {
  visit(node);
  for (var i = 0; i < node.children.length; i++) {
    var child = node.children[i];
    inherit(visit, child);
  }
}
function synthesize(visit, node) {
  for (var i = 0; i < node.children.length; i++) {
    var child = node.children[i];
    synthesize(visit, child);
  }
  visit(node);
}

function render (node, ctx) {
  if (node.nodeType == 1) {
    logger.log(node.tagName  + "::" + getAttribSafe(node,"w") + " x " + getAttribSafe(node,"h") + ": " + getAttribSafe(node,"x") + ", " + getAttribSafe(node,"y"));
  }
  
  var x = getAttribSafe(node, "x");
  var y = getAttribSafe(node, "y");
  var w = getAttribSafe(node, "w");
  var h = getAttribSafe(node, "h");

  if (isNaN(x) || isNaN(y) || isNaN(w) || isNaN(h)) return;

  var bgc = getAttribSafe(node, "bgcolor");
  var hasStyle =  bgc && bgc.length > 0;
  if (!hasStyle) bgc = getAttribSafe(node, "backgroundcolor");
  hasStyle =  bgc && bgc.length > 0;

  if (hasStyle) {
      ctx.save();
      ctx.fillStyle = bgc;
      ctx.fillRect(x, y, w, h);
      ctx.strokeRect(x, y, w, h);
      ctx.restore();
  } else {
      if (node.nodeType == 1) {
        var x1 = Math.round(x) + 0.5
        var y1 = Math.round(y) + 0.5
        var w1 = Math.round(w)
        var h1 = Math.round(h)
        ctx.strokeRect(x1, y1, w1, h1);
      }
  }

  var text = getAttribSafe(node, "text");
  if (text) {
    var m = ctx.measureText(text);
    ctx.fillText(text, x + w / 2, y + h / 2);
  }

  for (var i = 0; i < node.children.length; i++) {
    var child = node.children[i];
    if (child.nodeType == 1 || child.nodeType == 3)
      render(node.children[i], ctx);
  }
}

function init () {
  displayDoc(0);
}

function displayDoc (docId) {
  logger.log("Displaying doc " + docId);
  var body = Sizzle("#contents")[0];
  body.style.display = "none";
  runSelectors();
  var root = convertPage("#contents");
  draw(root);
}


var ctx = null;
var canvas = null;
var paintStarted = false;
//unnecessary in JS
function paintStart(w, h) { 
  if (!w || !h) {
    w = 1000;
    h = 1000;
  }
  paintStarted = true; //can ignore normal rendering calls now..
  canvas.width = w;
  canvas.height = h;
  return 1;
}
function paintDone() { return 1;}
function initFonts () { return 1; }
function runRequests () { return 1; }
function requestGlyphs () { return 1; }

///////////////////////////

function cnv(degRaw) {
  var deg = Math.PI * degRaw / 180.0;
  return deg;
//  if (deg < 0) return deg + 2 * Math.PI;
//  else if (deg > 2 * Math.PI) return deg - 2 * Math.PI;
//  else return deg;
}


function cnv1(degRaw1, degRaw2) {
  return cnv(degRaw1);
  var deg1 = cnv(degRaw1);
  var deg2 = cnv(degRaw2);
  return Math.min(deg1, deg2);
}

function cnv2(degRaw1, degRaw2) {
  return cnv(degRaw2);
  var deg1 = cnv(degRaw1);
  var deg2 = cnv(degRaw2);
  return Math.max(deg1,deg2);
}


function paintArc (x, y, r, alpha, sectorAng, w, bgc, skip) {

//  var alpha = (start + end)/2;
//  var sectorAng = (end - start);
  var start = alpha - sectorAng / 2;
  var end = alpha + sectorAng / 2;
  
  ctx.save();
    try {            

      ctx.fillStyle = bgc;
      ctx.beginPath();

            ctx.lineWidth = 2;
      ctx.strokeStyle = "black";
      
      if (sectorAng == 360) {
        paintArc (x, y, r, 0, 180, w, bgc, true);
        paintArc (x, y, r, 180, 180, w, bgc, true);
      } else {        
        ctx.arc(x, y, r, cnv1(start, end), cnv2(start,end), false);
        ctx.lineTo(x + (r - w) * Math.cos(cnv(end)), y + (r - w) * Math.sin(cnv(end)));
        ctx.arc(x, y, r - w, cnv2(start, end), cnv1(start,end), true);        
        ctx.lineTo(x + r * Math.cos(cnv(start)), y + r * Math.sin(cnv(start)));
        if (!skip) ctx.stroke();
      }
    
      
      
      ctx.closePath();
      ctx.fill();
 
    } catch (e) {
      console.log(["bad ellipse: ", x, y, r, start, end, false, w, bgc, e]);
    }

  ctx.restore();

  return 1;
}

function paintLine (x, y, w, h, width, bgc) {
  if (isNaN(x) || isNaN(y) || isNaN(w) || isNaN(h)) return;
  if (x == "NaN" || y == "NaN" || w == "NaN" || h == "NaN") return;

  ctx.save();
    try {
      ctx.beginPath();
      ctx.moveTo(x,y);
      ctx.lineTo(w,h);
      ctx.closePath();
      ctx.lineWidth = width;
      ctx.strokeStyle = bgc;
      ctx.stroke();
    } catch (e) {
      console.log(["bad edge: ", x, y, w, h]);
    }
  ctx.restore();

  return 1;
}

function paintOval (x, y, w, h, bgc, ignore) {

  if (isNaN(x) || isNaN(y) || isNaN(w) || isNaN(h)) return;
  if (x == "NaN" || y == "NaN" || w == "NaN" || h == "NaN") return;

  ctx.save();
    try {
      ctx.beginPath();
      ctx.translate(canvas.width/2, canvas.height/2);
//      ctx.scale(1, (h+0.0)/(w+0.0));
      ctx.arc(x - canvas.width/2, y - canvas.height/2, w, 0, Math.PI*2, false);
      ctx.fillStyle = bgc;
//      ctx.fill(x, y, w, h);
      ctx.strokeStyle = "#000";
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.closePath();
    } catch (e) {
      console.log(["bad ellipse: ", x, y, w, h]);
    }

  ctx.restore();

  return 1;
}

function paintImg (x, y, imgNum) {
  
  if (isNaN(x) || isNaN(y)) return;
  if (x == "NaN" || y == "NaN") return;

  ctx.save();
    if (isNaN(x) || isNaN(y)) return;  
    ctx.drawImage(images[imgNum],x, y);
  
  ctx.restore();

  return 1;
}

function paintRect (x, y, w, h, bgc) {

  if (isNaN(x) || isNaN(y) || isNaN(w) || isNaN(h)) return;
  if (x == "NaN" || y == "NaN" || w == "NaN" || h == "NaN") return;

  ctx.save();
    if (isNaN(x) || isNaN(y) || isNaN(w) || isNaN(h)) return;  
    var hasStyle =  bgc && bgc.length > 0;
    ctx.lineWidth = 2;
    if (hasStyle) {
      ctx.fillStyle = bgc;
      if (bgc != "#00000000") ctx.fillRect(x, y, w, h);
    } else {
      ctx.strokeRect(x, y, w, h);
    }
  
  ctx.restore();

  return 1;
}


///////////////////////////
//old paint
function paint (shape, x, y, w, h, bgc) {

  if (isNaN(x) || isNaN(y) || isNaN(w) || isNaN(h)) return;
  if (x == "NaN" || y == "NaN" || w == "NaN" || h == "NaN") return;

  logger.log(["special paint!", shape, x, y, w, h, bgc]);
  
  ctx.save();
  if  (shape == "rect") {
    if (isNaN(x) || isNaN(y) || isNaN(w) || isNaN(h)) return;  
    var hasStyle =  bgc && bgc.length > 0;
    ctx.lineWidth = 2;
    if (hasStyle) {
      ctx.fillStyle = bgc;
      if (bgc != "#00000000") ctx.fillRect(x, y, w, h);
      ctx.strokeRect(x, y, w, h);
    } else {
      ctx.strokeRect(x, y, w, h);
    }
  } else if (shape == "ellipse") {
    try {
      ctx.beginPath();
      ctx.translate(canvas.width/2, canvas.height/2);
//      ctx.scale(1, (h+0.0)/(w+0.0));
      ctx.arc(x - canvas.width/2, y - canvas.height/2, w, 0, Math.PI*2, false);
      ctx.fillStyle = bgc;
      ctx.fill(x, y, w, h);
      ctx.strokeStyle = "#000";
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.closePath();
    } catch (e) {
      console.log(["bad ellipse: ", x, y, w, h]);
    }
      
  } else if (shape == "edge") {
    try {
      ctx.beginPath();
      ctx.moveTo(x,y);
      ctx.lineTo(w,h);
      ctx.closePath();
      ctx.lineWidth = 2;
      ctx.strokeStyle = "#000";
      ctx.stroke();
    } catch (e) {
      console.log(["bad edge: ", x, y, w, h]);
    }
  }
  ctx.restore();

  return 1;
}
////////////////////////
function paintParagraph (splitText, font, fontSize, minX, minY, relX, relY, maxWidth, allowOverflow, lineHeight, color, lineSpacing){
    if(!splitText || splitText.length == 0) return;
    if(isNaN(minX) || minX == null || isNaN(minY) || minY == null || isNaN(relX) || relX == null || isNaN(relY) || relY == null) return;
    ctx.font = (fontSize ? fontSize : 20) + "px " + (font ? font + " " : "");
    var rx = relX;
    var ry = relY + lineHeight;
    var spw = ctx.measureText(" ").width;
    ctx.save();
    try{
        ctx.translate(minX, minY);
        if (color)
            ctx.fillStyle = color;
        for(var i = 0; i < splitText.length; i++){
            for(var j = 0; j < splitText[i].length; j++){
               ctx.fillText(splitText[i][j],rx,ry); 
               rx += ctx.measureText(splitText[i][j]).width + spw;
            }
            rx = 0;
            ry += lineHeight + lineSpacing;
        }
    }
    catch(e)
    {
        logger.log("Bad text:" + splitText);
    }
    ctx.restore();
}

function splitText(startX, maxWidth, text, font, fontSize){
    ctx.font = (fontSize ? fontSize : 20) + "px " + (font ? font + " " : "");
    var curX = startX;
    var words = ("" + text).trim().split(" ");
    var lines = [];
    var curLine = [];
    var spw = ctx.measureText(" ").width;

    for(var i = 0; i < words.length; i++){
        if(words[i].trim() == "")
            continue;

        var ww = ctx.measureText(words[i].trim()).width;
        if(curX + ww > maxWidth)
        {
            if(curX == 0)
                throw "Word too long for line";
            lines.push(curLine);
            curLine = [words[i]];
            curX = ww + spw;
        }
        else if(curX + ww <= maxWidth && curX + ww + spw > maxWidth)
        {
            curLine.push(words[i].trim());
            lines.push(curLine);
            curLine = [];
            curX = 0;
        }
        else //curX + ww + spw <= maxWidth
        {
            curLine.push(words[i].trim());
            curX += ww + spw;
        }
    }

    if(curLine.length != 0)
        lines.push(curLine);

    return lines;
}


function getSumWordW (text, font, fontSize) { 
    ctx.font = (fontSize ? fontSize : 20) + "px " + (font ? font + " " : "");

    //var lines = ("" + text).trim().split("\n"); We need to handle newlines in the normalizer (in case of <br>s, but for now we can ignore them
    var lines = [("" + text).trim()];
    var max = 0;
    for (var n = 0; n < lines.length; n++) {
      var line = ctx.measureText(lines[n].trim()).width;
      if (line > max) max = line;
    }
    return max;
}
function getMaxWordW (text, font, fontSize) { 
    ctx.font = (fontSize ? fontSize : 20) + "px " + (font ? font + " " : "");

    var lines = ("" + text).trim().split("\n");
    var max = 0;
    for (var n = 0; n < lines.length; n++) {
      var words = lines[n].split(" ");
      for (var i = 0; i < words.length; i++) {
        var word = ctx.measureText(words[i].trim()).width;      
        if (word > max) max = word;
      }
    }
    return max;
}
function getLineHeight (text, font, fontSize) { 
  ctx.font = (fontSize ? fontSize : 20) + "px " + (font ? font + " " : "");

  return ctx.measureText("m").width; //OMG seriously?
                                     //Pretty accurate though...
}

function getNumberLines(splitText)
{
    return splitText.length;
}

function getLeftoverWidth(splitText, font, fontSize)
{
    ctx.font = (fontSize ? fontSize : 20) + "px " + (font ? font + " " : "");

    var lastLine = splitText[splitText.length - 1];
    var width = 0;
    for(var i = 0; i < lastLine.length; i++)
    {
        var word = lastLine[i];
        width += ctx.measureText(word + (i == 0 ? "" : " ")).width;
    }
    return width;
}

function getFirstWordW (text, font, fontSize){
    ctx.font = (fontSize ? fontSize : 20) + "px " + (font ? font + " " : "");
    var words = ("" + text).trim().split(" ");
    return ctx.measureText(words[0]).width;
}


function sin (x) {
  return Math.sin(x);
}

function cos (x) {
  return Math.cos(x);
}

function PI() {
  return Math.PI;
}

function pow(x,y) {
  return Math.pow(x,y);
}

function max(x,y) {
  return Math.max(x,y);
}

function min(x,y) {
  return Math.min(x,y);
}

function draw (root) {
  currentDOM = root;
  canvas = Sizzle('#canvas')[0];
  canvas.width = 100;
  canvas.height = 1000;
  ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  layout(root);
  
  if (!paintStarted) { //if layout didn't do its own paint calls
    canvas.width = getAttribSafe(root, "w")+1;
    canvas.height = getAttribSafe(root, "h")+1;
    render(root, ctx);  
  }
}

function demux(node, state) {
  if (node.nodeName == "MUX") {
    var fun = node.getAttribute("selector");
    if (fun) {
      var i = eval(fun);
      return demux(node.childNodes[i], state);
    } else {
      console.log("No Selector for Mux!");
      return demux(node.childNodes[0], state);
    }
  } else {
    var res = node.cloneNode(false);
    for (var i = 0; i < node.childNodes.length; i++) {
      var child = node.childNodes[i];
      res.appendChild(demux(child, state));
    }
    return res;
  }
}

window.addEventListener("load", init, false);
