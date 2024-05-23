
   // Function to simulate typing animation
   function startTypingAnimation(messageText, typingAnimationDiv, images = []) {

       

       let index = 0;
       const typingInterval = setInterval(function() {
           if (index < messageText.length) {
               typingAnimationDiv.textContent += messageText[index];

               index++;

               // Scroll to the bottom after each character
               message.scrollTop = typingAnimationDiv.scrollHeight;

           } else {
               clearInterval(typingInterval);



               images.forEach((imageURL, index) => {
                   // Create a container for each image
                   const imagesContainer = document.createElement('div');
                   imagesContainer.classList.add("block", "w-full", "mb-4");

                   // Create the image element
                   const imagesContainerImage = document.createElement('img');
                   imagesContainerImage.classList.add("w-full", "h-full", "object-contain", "rounded-md")
                   imagesContainerImage.src = imageURL;

                   // Create the download button
                   const downloadBtn = document.createElement('a');

                   // Create a Blob object from the image URL
                   fetch(imageURL)
                       .then(response => response.blob())
                       .then(blob => {
                           // Create a URL for the Blob object
                           const imageURLBlob = URL.createObjectURL(blob);
                           downloadBtn.href = imageURLBlob;
                       });

                   downloadBtn.download = `image ${index + 1}`; // Set a default name for downloaded images
                   downloadBtn.innerHTML = "Download Image"; // Set the text of the button
                   downloadBtn.classList.add("block", "text-center", "bg-blue-500", "text-white", "py-1", "px-2", "rounded-md", "mt-2", "cursor-pointer");
                   downloadBtn.style.width = "fit-content"; // Make the button width fit its content

                   // Append the image and download button to the container
                   imagesContainer.appendChild(imagesContainerImage);
                   imagesContainer.appendChild(downloadBtn);

                   // Append the container to the typing animation div
                   typingAnimationDiv.appendChild(imagesContainer);
                   
                   message.scrollTop = typingAnimationDiv.scrollHeight;

               });



           }
       }, 100); // Adjust the typing speed as needed
   }

window.addEventListener('load', function() {
        // Your JavaScript code here
        // console.log('All resources have finished loading.');

    // Get the elements to fade out
    const loadingScreen = document.querySelector('.loading');
    // Add the fade-out class to trigger the animation
    loadingScreen.classList.add('fade-out');

    // Get the envelope and message elements
    const envelope = document.getElementById('envelope');
    const messageContainer = document.getElementById('message');
    const typingAnimation = document.getElementById('typing-animation');

    const images = [
        "./images/person/1.jpg",
        "./images/person/2.jpg",
        "./images/person/3.jpg",
    ];


    const message = `Happy Birthday POOKIE!. I know we just met 5 months ago but I feel like there's alot more to come from here and that's special. You may be a mumu but you are my mumu and I love you. Hope you enjoy the rest of your day. P.S GET YOUR MONEY UP!!!!!!😘🌚`;

    // Add click event listener to the envelope
    envelope.addEventListener('click', function() {
        envelope.classList.add('hidden');
        // Show the message
        messageContainer.classList.remove('hidden');
        // Start typing animation
        startTypingAnimation(message, typingAnimation , images);
        // Play typing audio
        const typingAudio = document.getElementById('typingAudio');
        typingAudio.play();
        // When the typing audio ends, play the loading audio
        typingAudio.onended = function() {
            document.getElementById('loadingAudio').play();
        };
    });



});
