var compoundProps = {background: true, border: true, margin: true, padding: true};
compoundProps["font-size"] = true;
var taggedIntTags = {em : 300, ex : 301, px: 302, pt: 306, percent: 317, auto: 1, inherit: 2, string: 271};

function setCompoundStyle(stylesDict, attr, value){
    switch(attr){
        case "background":
            setBackground(stylesDict, value);
            break;
        case "border":
            setBorder(stylesDict, value);
            break;
        case "border-width":
            break;
        case "border-style":
            break;
        case "border-color":
            break;
        case "margin":
            setFourValue("margin",stylesDict,value);
            break;
        case "padding":
            setFourValue("padding",stylesDict,value);
            break;
    }
}

function parseAttrib(value){
    if(!value)
        return null;

    if(typeof(value) == "string")
        value = value.replace("!important","").replace("! important","").trim();

    if(value.match(/^[0-9\-]+px$/g)) return [taggedIntTags.px,parseFloat(value)];
    else if (value.match(/^[0-9\.]+$/g)) return  value;
    else if (value.match(/^[0-9]+pt/g)) return [taggedIntTags.pt,parseFloat(value)];
    else if(value.match(/^[0-9\.]+%$/g)) return [taggedIntTags.percent, parseFloat(value)];
    else if(value.match(/^[0-9\.\-]+em$/g)) return [taggedIntTags.em, parseFloat(value)];
    else if(value.match(/^[0-9\.]+ex$/g)) return [taggedIntTags.ex, parseFloat(value)];
    else if(value == "auto") return [taggedIntTags.auto, null];
    else if(value == "inherit") return [taggedIntTags.inherit, null];
    else if(colorNames[value] || value.match(/^#[0-9a-fA-F]+$/g) || value.match(/^rgb\s*\([\s0-9\.%]+,[\s0-9\.%]+,[\s0-9\.%]+\)$/g)) return ["color", value];
    else if(typeof(value) == "string" && ( value == "xx-small" || 
                                           value == "x-small" || 
                                           value == "small" || 
                                           value == "medium" || 
                                           value == "large" || 
                                           value == "x-large" || 
                                           value == "xx-large" || 
                                           value == "thin" || 
                                           value == "thick" || 
                                           value == "smaller" || 
                                           value == "larger")) 
        return [taggedIntTags.string, value];

    else return null;
}

function setFourValue(attrName, stylesDict, value){
    var split = compoundFourValue(value);

    stylesDict[attrName+"-top"] = parseAttrib(split[0]);
    stylesDict[attrName+"-right"] = parseAttrib(split[1]);
    stylesDict[attrName+"-bottom"] = parseAttrib(split[2]);
    stylesDict[attrName+"-left"] = parseAttrib(split[3]);
}

function setBorder(stylesDict, value){
    var color = "";
    var style = "";
    var width = "";

    var properties = value.split(" ");
    width = properties[0];
    style = properties[1];

    properties.splice(0,2);

    color = properties.join("");

    stylesDict["border-width"] = parseAttrib(width);
    stylesDict["border-style"] = style;
    stylesDict["border-color"] = parseAttrib(color);
}

function setBackground(stylesDict, value){
    var properties = value.split(" ");
    var propertiesFixed = [];
    var curProp = "";
    var depth = 0;
    for(var i = 0; i < properties.length; i++){    //Fix stuff with parentheses
        for(var j = 0; j < properties[i].length; j++)
        {
            if(properties[i][j] == "(")
                depth++;
            else if(properties[i][j] == ")")
                depth--;
        }
        curProp += properties[i];
        if(depth == 0){
            propertiesFixed.push(curProp);
            curProp = "";
        }
    }
    stylesDict["background-color"] = parseAttrib(propertiesFixed[propertiesFixed.length - 1]);
}

var colorNames = {black : true, silver: true, gray: true, white: true, maroon: true, red: true, purple: true, fuchsia: true, green: true, lime: true, olive: true, yellow: true, navy: true, blue: true, teal: true, aqua: true, transparent: true};

function validColor(color){
    return color != null && color != undefined && color[0] && color[0] == "color";
}

function getColor(color){
    return color[1];
}


function validFontSize(fontSize){
    logger.log("Font Size: " + fontSize);
    return fontSize && fontSize[0] && (fontSize[0] in taggedIntTags);
}
var sizes = [9,11.25,13.33,15,18,22.5,30];
//[xxsmall,xsmall,small,medium,large,xlarge,xxlarge]

function getFontSize(fontSize, parentFontSize){
    if(!fontSize || !fontSize[0] || !fontSize[1]) return NaN;
    else if(fontSize[0] == taggedIntTags.px) return (fontSize[1]);
    else if (fontSize[0] == taggedIntTags.pt) return ((fontSize[1]) * 0.75);
    else if(fontSize[0] == taggedIntTags.percent)
    {
        return (fontSize[1]) / 100 * parentFontSize;
    }
    else if(fontSize[0] == taggedIntTags.em)
    {
        return (fontSize[1]) * parentFontSize;
    }
    else if(fontSize[0] == taggedIntTags.inherit) return parentFontSize;
    else if(fontSize[0] == taggedIntTags.string && fontSize[1] == "xx-small") return sizes[0];
    else if(fontSize[0] == taggedIntTags.string && fontSize[1] == "x-small") return sizes[1];
    else if(fontSize[0] == taggedIntTags.string && fontSize[1] == "small") return sizes[2];
    else if(fontSize[0] == taggedIntTags.string && fontSize[1] == "medium") return sizes[3];
    else if(fontSize[0] == taggedIntTags.string && fontSize[1] == "large") return sizes[4];
    else if(fontSize[0] == taggedIntTags.string && fontSize[1] == "x-large") return sizes[5];
    else if(fontSize[0] == taggedIntTags.string && fontSize[1] == "xx-large") return sizes[6];
    else if(fontSize[0] == taggedIntTags.string && fontSize[1] == "smaller"){
        var fs = parentFontSize;
        for(var i = 1; i < sizes.length; i++){
            if(sizes[i-1] < fs && fs <= sizes[i])
                return sizes[i-1];
        }
        if(fs <= sizes[0])
            throw "Font size too small: smaller " + parentFontSize;
    }
    else if(fontSize[0] == taggedIntTags.string && fontSize[1] == "larger"){
        var fs = (parentFontSize);
        for(var i = 0; i < sizes.legnth - 1; i++)
        {
            if(sizes[i] <= fs && fs < sizes[i+1]){
                return sizes[i+1];
            }
        }
        if(fs >= sizes[sizes.length - 1])
            throw "Font size too large: larger " + parentFontSize;
    }

    throw "Unknown font size: " + fontSize[0] + "," + fontSize[1];
}

function CONST_AUTO(){

    return taggedIntTags.auto;
}

function getTag(length){
    if(typeof(length) == "number")
        return -1;
    if(!length || !length[0])
        throw "Null length: " + length;
    return length[0];
}

function getValue(length, fontSize, parentWidth){
    if(!length || !length[0]) return ((typeof(length) == "number") ? length : NaN);

    if(length[0] == taggedIntTags.px){
        return (length[1]);
    }
    else if (length[0] == taggedIntTags.pt)
        return length[1];
    else if(length[0] == taggedIntTags.auto)
        throw "Error : trying to read auto length";
    else if(length[0] == taggedIntTags.em)
        return (length[1]) * (fontSize);
    else if(length[0] == taggedIntTags.ex)
        return (length[1]) * (fontSize)/2;
    else if(length[0] == taggedIntTags.percent)
        return (length[1]) / 100 * parentWidth;
    else if (length[0] == taggedIntTags.string && length[1] == "thin") return 1;
    else if (length[0] == taggedIntTags.string && length[1] == "medium") return 3;
    else if (length[0] == taggedIntTags.string && length[1] == "thick") return 5;

    throw "Unknown length: " + length;

}

/*
function getLength(length, fontSize, parentWidth){
    if(!length || !length[0]) return ((typeof(length) == "number") ? length : NaN);

    if(length[0] == taggedIntTags.px){
        return (length[1]);
    }
    else if (length[0] == taggedIntTags.pt)
        return length[1];
    else if(length[0] == taggedIntTags.auto)
        return "auto";
    else if(length[0] == taggedIntTags.em)
        return (length[1]) * (fontSize);
    else if(length[0] == taggedIntTags.ex)
        return (length[1]) * (fontSize)/2;
    else if(length[0] == taggedIntTags.percent)
        return (length[1]) / 100 * parentWidth;
    else if (length[0] == taggedIntTags.string && length[1] == "thin") return 1;
    else if (length[0] == taggedIntTags.string && length[1] == "medium") return 3;
    else if (length[0] == taggedIntTags.string && length[1] == "thick") return 5;

    throw "Unknown length: " + length;
}

function getWidth(width, parentWidth){
    if(!width || !width[0] || width[0] == taggedIntTags.auto)
        return ((typeof(width) == "number") ? width : "auto");
    if(width[0] == taggedIntTags.percent)
    {
        return (width[1]) / 100 * parentWidth;
    }
    if(width[0] == taggedIntTags.px)
        return (width[1]);
    if(width[0] == taggedIntTags.em || width[0] == taggedIntTags.ex)
    {
        //TODO: add proper widths relative to font sizes.
        return "auto";
    }
}*/

function compoundFourValue(value){
    var terms = value.trim().split(" ");    
    switch(terms.length){
        case 1:
            return [terms[0],terms[0],terms[0],terms[0]];
        case 2:
            return [terms[0],terms[1],terms[0],terms[1]];
        case 3:
            return [terms[0],terms[1],terms[2],terms[1]];
        case 4:
            return [terms[0],terms[1],terms[2],terms[3]];
        default:
            throw "Error: bad 4-value string: " + value;
    }
}

function getPercent(value){
    if(!value || !value[0] || value[0] != taggedIntTags.percent)
        return null;

    return value[1];
}
