$(document).ready(function(){

    //variables
    $surface =$('.surface');
    $car = $('car');
    $img =$('car img');
    let flag =true;

    const cars=['./Assets/Img_05.png','./Assets/Img_06.png']

    //keypress event
    $(document).on('keypress',function(e){
        if(e.which ==13){
            $($surface).toggleClass('moveRight');
            $($car).toggleClass('suspention');

        }
    })
    $(document).on('keypress',function(e){
        if(e.which ==11){
            if(flag){
                flag=false;
                $img.attr('src',cars[0]);
                
            }else{
                flag=true;
                $img.attr('src',cars[1]); 
            }

        }
    })



});