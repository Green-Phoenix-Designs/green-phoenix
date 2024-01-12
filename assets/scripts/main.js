document.querySelectorAll('[data-role="menu-toggle"').forEach(function(t) {
  t.addEventListener("click", function() {
    document.body.classList.toggle("has-active-mobile-nav");
  });
});
