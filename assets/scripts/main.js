document.querySelectorAll('[data-role="menu-toggle"').forEach(function(t) {
  t.addEventListener("click", function() {
    document.body.classList.toggle("has-active-mobile-nav");
  });
});

document.querySelectorAll('[data-role="menu-close"').forEach(function(t) {
  t.addEventListener("click", function() {
    document.body.classList.remove("has-active-mobile-nav");
  });
});
