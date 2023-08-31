document.addEventListener('DOMContentLoaded', function() {
    const printButton = document.getElementById('printButton');
    const errorImage = document.getElementById('errorImage');

   
    window.onbeforeprint = function() {
        console.log("Before printing...");
        

    
    window.onafterprint = function() {
        console.log("After printing...");
        
    };


    errorImage.onerror = function() {
        console.log("Image failed to load.");
    };

    printButton.addEventListener('click', function() {
        window.print();
    });
});
