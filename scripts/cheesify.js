function cheesify() {
  // TODO: Add the image replacement script here

  const images = document.querySelectorAll('img'); //select all images

  images.forEach( (img) => {
   // img.src = 'https://source.unsplash.com/featured/?cheese';
   // img.src = 'https://source.unsplash.com/collection/8884129/';
   img.src = `https://source.unsplash.com/collection/8884129/${img.width}x${img.height}?${Math.random()}`;
   img.srcset = img.src;
  })

}

// TODO: Write a function to listen for messages on the content page using chrome.runtime.onMessage
  
//cheesify(); //running the function defined above

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.action === 'cheesify') cheesify();
  }
);
