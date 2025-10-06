// Add this to your JS file
document.querySelectorAll('.destination-img').forEach(img => {
  img.addEventListener('mouseenter', function() {
    this.closest('.destination-card.glass').classList.add('hovered');
  });
  img.addEventListener('mouseleave', function() {
    this.closest('.destination-card.glass').classList.remove('hovered');
  });
});