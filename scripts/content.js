window.addEventListener("message", function(event) {
    // We only accept messages from this window to itself [i.e. not from any iframes]
    if (event.source != window)
      return;
  
    if (event.data.type && (event.data.type == "FOR_CHROME_EXTENSION")) {        
        chrome.storage.sync.set({"username":event.data.username,"repo":event.data.repo,"token":event.data.token})
        console.log("This works we got the data")
      
    } 
  }, false);