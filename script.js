function addItem(sectionId) {
  const section = document.getElementById(sectionId);
  const newItem = document.createElement('div');
  newItem.className = 'list-item';
  newItem.style.display = 'flex';
  newItem.style.alignItems = 'center';
  newItem.style.marginBottom = '10px';
  newItem.innerHTML = `
    <input type="checkbox" class="item-checkbox" style="margin-right: 10px;">
    <input type="text" placeholder="Masukan tugas" style="flex: 1; padding: 5px; border: 1px solid #ddd; border-radius: 4px;">
  `;

  // Add event listener for checkbox
  newItem.querySelector('.item-checkbox').addEventListener('change', function () {
    if (this.checked) {
      // Add "removing" class for animation
      newItem.classList.add('removing');

      // Remove item after animation ends
      setTimeout(() => {
        section.removeChild(newItem);
      }, 500); // Match duration of the animation
    }
  });

  section.appendChild(newItem);
}