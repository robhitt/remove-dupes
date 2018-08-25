// document.addEventListener("DOMContentLoaded", function(){
//   // Handler when the DOM is fully loaded
// });

"use strict";

window.addEventListener('load', app);

function app() {
  document.getElementById('open-file').addEventListener('change', function() {
    var fr = new FileReader();
    fr.onload = function() {
      var emails = [],
          noDuplicateEmails = {};
      emails = this.result;
      emails = emails.split(/\s+/);
      
      for (var i = 0; i < emails.length; i++) {
        var currentEmailAddress = emails[i].toLowerCase();
        if (!noDuplicateEmails[currentEmailAddress]) {
          noDuplicateEmails[currentEmailAddress] = 1;
        } else {
          console.log(currentEmailAddress);
        }
      }

      emails = Object.keys(noDuplicateEmails);            
      console.log('Total Non Duplicate Emails: ', emails.length);
      emails = emails.join('\n');
      
      // document.getElementById('email-address').textContent = this.result;
      document.getElementById('email-address').textContent = emails;


      
    }
    fr.readAsText(this.files[0]);
  });
  
  // const url = "ADD_URL_ENDPOINT_HERE";
  // fetch(url, {
  //     method: "GET"
  //   })
  //   .then(response => response.json())
  //   .then(response => renderPage(response))
  //   .catch(err => console.log(err));
}

// function renderPage(response) {
//   console.log("Hello, World!");
// }