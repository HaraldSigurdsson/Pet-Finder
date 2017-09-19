var counter = 1;

var myIndex = 0;
carousel();

function carousel() {

    var i;

    var x = document.getElementsByClassName("mySlides");

    for (i = 0; i < x.length; i++) {

       x[i].style.display = "none";  

    }
    myIndex++;

    if (myIndex > x.length) {myIndex = 1} 

    x[myIndex-1].style.display = "block";  

    setTimeout(carousel, 10000); 

}

function createPet() {
    
    var petname = $('#pet-name').val();
    var ownername = $('#owner-name').val();
    var owneremail = $('#owner-email').val();
    var ownerphone = $('#owner-phone').val();

    if(petname != '' && ownername != '' && owneremail != '' && ownerphone != '') {
    
         var petObject = {petname, ownername, owneremail, ownerphone};

         localStorage.setItem(counter, JSON.stringify(petObject));

         counter++;
         
    } else {

        alert("Fill In All The Fields");

    }

         $('#pet-name').val('');
         $('#owner-name').val('');
         $('#owner-email').val('');
         $('#owner-phone').val('');
}

function getPets() {

    for(var i = 1; i <= localStorage.length; i++) {
        var retrievedObject = JSON.stringify(localStorage.getItem(i));
        var petObject = JSON.parse(retrievedObject);
        console.log('Value of retrievedObject: ' + petObject);
        
    }
    
}