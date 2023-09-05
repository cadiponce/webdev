

   

document.addEventListener('DOMContentLoaded', function () {
    const imageElement = document.getElementById('myImage');
    const buttonElement = document.getElementById('changeImageBtn');
  
    buttonElement.addEventListener('click', function () {

      imageElement.src = 'logo2.jpg';
      imageElement.alt = 'A different image';
  
      
      buttonElement.textContent = 'Image Changed!';
    });
  });
  
 


 
