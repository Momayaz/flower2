
var d = new Date();
var fdlower;
var namesofflowers='';
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

alert("we are in " +months[d.getMonth()])
var img = document.getElementById("image");

var flower = prompt("what would you preffer orchde or lilac")
if(flower==="orchde"){
    
    img.setAttribute("src", "https://www.ikea.com/jo/en/images/products/smycka-artificial-flower-orchid-pink__0903669_PE596751_S5.JPG");
  
  
}
if(flower==="lilac"){
    
    img.setAttribute("src", "https://www.almanac.com/sites/default/files/styles/amp_metadata_content_image_min_696px_wide/public/images/photo_11437.jpg?itok=7jm0s9wr");
  
  
}




var pet = document.getElementById("pet");

var animal = prompt("what would you preffer cat or dog")
if(animal==="cat"){
    
    pet.setAttribute("src", "https://www.ikea.com/jo/en/images/products/smycka-artificial-flower-orchid-pink__0903669_PE596751_S5.JPG");
  
  
  
  
}
if(animal==="dog"){
    
    pet.setAttribute("src", "data:image/jpeg;base64,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");
  
}

Details();

function Details(){

    var Name = prompt('Enter Your Name ');
    var Address = prompt('Enter Your Home Location  ');
    var phone = prompt('Enter Your Phone Number ');
    getflowers();

    document.write( '<p> Thanks To Visit Us <br> Your Name : '+  Name   +  '<br> Your Address : '+Address + '<br> Your Phone Number Is'+ phone +'<br> Your Favourit Flowers : '+namesofflowers+'  </p>'   );
}


function getflowers(){


    for( var i=0; i<=4 ;i++    ){

     fdlower = prompt('Enter Your favourit Flowers Number '+i);
     namesofflowers = fdlower.concat(fdlower,+' '+fdlower,+' '+fdlower,+' '+fdlower,+' '+fdlower);

    }

}