document.addEventListener("DOMContentLoaded", function(event) {
  var container = document.body.children[0];
  
  var checkScroll = function () {
    var scrollPosition = container.scrollTop;
    var headerHeight = document.getElementsByTagName('header')[0].clientHeight;
    var menuButton = document.getElementById('open-button');

    if (scrollPosition > headerHeight) {
      menuButton.classList.add('is-scrolled');
    } else {
      menuButton.classList.remove('is-scrolled');
    }
  }

  container.addEventListener('scroll', function () {
    checkScroll()
  });
});