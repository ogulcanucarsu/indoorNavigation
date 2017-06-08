var adimDefa=6;
function konumDuzelt(isaret,yon)
{  
    isaret=parseInt(isaret);
    for(p=0;p<adimDefa;p++)
    {
        for (var i = 0; i < siniflar[3].sinif.length; i++) 
        {
            if (konumX > siniflar[3].sinif[i].x1 && konumX < siniflar[3].sinif[i].x2 && (konumY == siniflar[3].sinif[i].y1 || konumY == siniflar[3].sinif[i].y2)) {
                konumX = konumX + 1 * isaret;
                konumY = konumY + 0;

                // document.getElementById("buradasinizRota").style["left"] = konumX + "px";
                // document.getElementById("buradasinizRota").style["top"] = konumY + "px";

                break;
            }
            else if (konumY > siniflar[3].sinif[i].y1 && konumY < siniflar[3].sinif[i].y2 && (konumX == siniflar[3].sinif[i].x1 || konumX == siniflar[3].sinif[i].x2)) {
                konumX = konumX + 0;
                konumY = konumY + 1 * isaret;

                // document.getElementById("buradasinizRota").style["left"] = konumX + "px";
                // document.getElementById("buradasinizRota").style["top"] = konumY + "px";

                break;
            }
            else if (siniflar[3].sinif[i].son == 'son') {              

                if(yon=="X")
                konumX = konumX + 1 * isaret;
                else
                konumY = konumY + 1 * isaret;

                // document.getElementById("buradasinizRota").style["left"] = konumX + "px";
                // document.getElementById("buradasinizRota").style["top"] = konumY + "px";

                break;
            }
        }
    }
}