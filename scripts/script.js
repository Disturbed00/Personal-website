document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('about-me-button').addEventListener('click', function () {
      console.log('About me button clicked');
      window.location.href = "../screens/about_me.html";
    });

    document.getElementById('contact-me-button').addEventListener('click', function(){
      console.log('contact me button clicked');
      window.location.href = "../screens/contact.html";
    });
  });

  const collapsibles = document.querySelectorAll(".collapsible");
  collapsibles.forEach((item) =>
    item.addEventListener("click", function () {
      this.classList.toggle("collapsible-expanded");
    })
  );
  
  