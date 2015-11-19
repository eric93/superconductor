//FloatLst API
function emptyFloatLst(){
    return [];
}

//Given box top & bottom, finds the largest x coordinate the box could have without overlapping a float
function maxRightX(floatLst, topY, botY){
    var rollingMin = Infinity;
    for(var i = 0 ; i < floatLst.length; i++){
        if(floatLst[i].f == "right" && floatLst[i].y <= botY && (floatLst[i].y + floatLst[i].h >= topY)){
            rollingMin = min(rollingMin, floatLst[i].x);
        }
    }
    return rollingMin;
}


//Given box top & bottom, finds the smallest x coordinate the box could have without overlapping a float
function minLeftX(floatLst, topY, botY)
{
    var rollingMax = -Infinity;
    for(var i = 0 ; i < floatLst.length; i++){
        if(floatLst[i].f == "left" && floatLst[i].y <= botY && (floatLst[i].y + floatLst[i].h >= topY)){
            rollingMax = max(rollingMax, floatLst[i].x + floatLst[i].w);
        }
    }
    return rollingMax;
}

function minTopY(floatLst, minY, maxX, width, height){
    var te = trailingEdge(floatLst).sort(sortfn);
    if ((min(maxRightX(floatLst,minY, minY + height),maxX) - max(minLeftX(floatLst, minY, minY + height),0)) > width)
        return minY;
    for(var i = 0; i < te.length; i++)
    {
        if(te[i] > minY && (min(maxRightX(floatLst,te[i] + 1, te[i] + 1 + height),maxX) - max(minLeftX(floatLst, te[i] + 1, te[i] + 1 + height),0)) > width)
        {
            return te[i]+1;
        }
    }
}

function getLastX(floatLst){
    return floatLst[floatLst.length - 1].x;
}

function getLastY(floatLst){
    return floatLst[floatLst.length - 1].y;
}

function getLeftOverhang(floatLst){
    var ret = 0;
    for(var i = 0; i < floatLst.length; i++)
    {
        if(floatLst[i].f == "left")
        {
            ret = max(ret,floatLst[i].y + floatLst[i].h + 1);
        }
    }
    return ret;
}

function getRightOverhang(floatLst){
    var ret = 0;
    for(var i = 0; i < floatLst.length; i++)
    {
        if(floatLst[i].f == "right")
        {
            ret = max(ret,floatLst[i].y + floatLst[i].h);
        }
    }
    return ret;
}

//Returns a new FloatLst that adds a right float of dimension fw x fh
function addRightFloat(floatLst, minY, maxX, fw, fh, clear){
    var te = trailingEdge(floatLst).sort(sortfn);
    var fy = floatLst.length == 0 ? minY : max(minY, floatLst[floatLst.length - 1].y); //Cannot be placed any higher than any previous float.
    var fx = min(maxX,maxRightX(floatLst,fy,fy+fh)) - fw;

    var clearLeft = clear == "left" || clear == "both";
    var clearRight = clear == "right" || clear == "both";



    var teIndex = 0;
    for(var i = 0; i < te.length; i++)
    {
        if(te[i] > fy)
            break;
        teIndex = i;
    }

    while(fx < max(0,minLeftX(floatLst,fy,fy+fh))  || (clearLeft && minLeftX(floatLst,fy,fy+fh) > 0) || (clearRight && maxRightX(floatLst,fy,fy+fh) < maxX)){
        fx = min(maxX,maxRightX(floatLst,fy,fy+fh)) - fw;
        //Will silently fail if float can't be placed.
        fy = te[teIndex++] + 1; //+1 is a way around the >= in the collision detection. Maybe causes off-by-one errors
    }

    var newLst = cloneLst(floatLst);
    newLst.push({f: "right", x: fx, y: fy, w: fw, h: fh});

    return newLst;
}


//Returns a new FloatLst that adds a left float of dimension fw x fh
function addLeftFloat(floatLst, minY, maxX, fw, fh, clear){
    var te = trailingEdge(floatLst).sort(sortfn);
    var fy = floatLst.length == 0 ? minY : max(minY, floatLst[floatLst.length - 1].y); //Cannot be placed any higher than any previous float.
    var fx = max(0,minLeftX(floatLst,fy,fy+fh));

    var clearLeft = clear == "left" || clear == "both";
    var clearRight = clear == "right" || clear == "both";

    var teIndex = 0;
    for(var i = 0; i < te.length; i++)
    {
        if(te[i] > fy)
            break;
        teIndex = i;
    }

    while(fx + fw > min(maxX,maxRightX(floatLst,fy,fy+fh)) || (clearLeft && minLeftX(floatLst,fy,fy+fh) > 0) || (clearRight && maxRightX(floatLst,fy,fy+fh) < maxX)){
        fx = max(0,minLeftX(floatLst,fy,fy+fh));
        //Will silently fail if float can't be placed.
        fy = te[teIndex++] + 1; //+1 is a way around the >= in the collision detection. Maybe causes off-by-one errors
    }

    var newLst = cloneLst(floatLst);
    newLst.push({f: "left", x: fx, y: fy, w: fw, h: fh});

    return newLst;
}

//Translates floats by (shiftX, shiftY)
function translate(floatLst, shiftX, shiftY){
    var newLst = cloneLst(floatLst);
    for(var i = 0; i < newLst.length; i++){
        newLst[i].x = floatLst[i].x + shiftX;
        newLst[i].y = floatLst[i].y + shiftY;
    }
    return newLst;
}

//Internal functions: not used by grammar

function cloneLst(floatLst){
    var ret = [];
    for(var i = 0; i < floatLst.length; i++){
        ret.push({f: floatLst[i].f, x: floatLst[i].x, y: floatLst[i].y, w: floatLst[i].w, h: floatLst[i].h});
    }
    return ret;
}

function trailingEdge(floatLst){
    var ret = [];
    for(var i = 0; i < floatLst.length; i++){
        ret.push(floatLst[i].y + floatLst[i].h);
    }
    return ret;
}

function sortfn(a,b){ return a-b;}

