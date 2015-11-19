            state = undefined;
            images = [];
            otherAttrs = [];
            attribMap = {borders: "border-style", borderw: "border-width", borderc: "border-color", bgc: "background-color", intrinsfontsize : "font-size",  verticalalign : "vertical-align"};
            attribMap = {borders: "border-style", borderw: "border-width", borderc: "border-color", bgc: "background-color", intrinsfontsize : "font-size",  verticalalign : "vertical-align", margintop: "margin-top", marginbottom: "margin-bottom", marginleft: "margin-left", marginright: "margin-right", paddingtop: "padding-top", paddingbottom: "padding-bottom", paddingleft: "padding-left", paddingright: "padding-right"};

            window.removeEventListener("load",init,false);
            origInit = init;
            init = function(){
                var docImages = Sizzle("img");
                if (docImages.length == 0)
                    return origInit();
                var numloaded = 1;
                for(var k = 0; k < docImages.length; k++){
                    var i = new Image();
                    i.onload = function(){
                        if(numloaded >= docImages.length)
                            origInit();
                        else
                            numloaded ++;
                    };
                    docImages[k].setAttribute("style", (docImages[k].getAttribute("style") == null ? "" : docImages[k].getAttribute("style")) + "; imagehandle : "+ k + ";" );
                    images.push(i);
                    i.src = docImages[k].src;
                }
            }
            window.addEventListener("load", init, false); 
