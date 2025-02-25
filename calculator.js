
    document.getElementById("darkMode-toggle-1").addEventListener('click',function ()
    {
        var element= document.getElementsByClassName("main-div")[0];
        console.log(element.style.backgroundColor);
        if(element.style.backgroundColor == "black"){

            element.style.backgroundColor = "white";
            
        }else{
            element.style.backgroundColor = "black";

        }
       }  ); 