const image = document.querySelectorAll("img")
let i = 0;

setInterval(
    function() {
        if (i == 0 ) {
            image[i].style.display = 'block';
        }
    
        else if (i == 1 || i==2){
            image[1 - 1].style.display = 'none';
        }
        
        else{
            image[i-1].style.display = 'none';
            image[0].style.display = 'block';
            i = 0;
        }
    
        i++;
   
    }, 2000);