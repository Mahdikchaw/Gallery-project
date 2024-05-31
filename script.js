document.addEventListener('DOMContentLoaded', function() {

    let buttonNext = document.getElementsByClassName('button-right')[0];
    let buttonPrevious = document.getElementsByClassName('left-button')[0];
    let currentImage = document.getElementsByClassName('paris-image')[0];
    
    let listOfImages = [
        'https://i.pinimg.com/236x/ef/d4/ab/efd4ab1bbb56bf8840a354105e93b303.jpg',
        'https://i.pinimg.com/564x/ea/66/6b/ea666b83214c1c303570826498fcd5d8.jpg',
        'https://i.pinimg.com/564x/fc/f7/9f/fcf79fc3c9adbc0f1917f608081579cf.jpg'
    ];

    let currentIndex = 0;
    // Function to update the image source
    function updateImage() {
        if (currentImage) {
            currentImage.src = listOfImages[currentIndex];
        }
    }
    // Initial image load
    updateImage();

    // Add event listener to the button
    buttonNext.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % listOfImages.length;
        updateImage();
    });
    buttonPrevious.addEventListener('click', function(){
        currentIndex = (currentIndex + 2) % listOfImages.length;
        updateImage();
    });

    currentImage.addEventListener('click',function(){
        var overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = 0;
        overlay.style.left = 0;
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.8)';
        overlay.style.display = 'flex';
        overlay.style.alignItems = 'center';
        overlay.style.justifyContent = 'center';
        overlay.style.zIndex = 1000;
    
        // Create a new image element for the enlarged image
        var enlargedImg = document.createElement('img');
        enlargedImg.src = this.src;
        enlargedImg.style.maxWidth = '70%';
        enlargedImg.style.maxHeight = '70%';
        enlargedImg.style.boxShadow = '0 0 20px rgba(255,255,255,0.5)';
    
        // Append the enlarged image to the overlay
        overlay.appendChild(enlargedImg);
    
        // Append the overlay to the body
        document.body.appendChild(overlay);
    
        // Add a click event to the overlay to remove it when clicked
        overlay.addEventListener('click', function() {
            document.body.removeChild(overlay);
        });
    }); 
   
    


});
