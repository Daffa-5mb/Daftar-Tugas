function saveToLocalStorage(sectionId) {
  const section = document.getElementById(sectionId);
  const items = section.querySelectorAll('.list-item input[type="text"]');
  const data = [];
  
  items.forEach(item => {
    data.push(item.value);
  });

  // Simpan ke localStorage
  localStorage.setItem(sectionId, JSON.stringify(data));
}

function loadFromLocalStorage(sectionId) {
  const data = JSON.parse(localStorage.getItem(sectionId));
  const section = document.getElementById(sectionId);

  if (data) {
    data.forEach(text => {
      const newItem = document.createElement('div');
      newItem.className = 'list-item';
      newItem.style.display = 'flex';
      newItem.style.alignItems = 'center';
      newItem.style.marginBottom = '10px';
      newItem.innerHTML = `
        <input type="checkbox" class="item-checkbox" style="margin-right: 10px;">
        <input type="text" value="${text}" style="flex: 1; padding: 5px; border: 1px solid #ddd; border-radius: 4px;">
      `;

      // Add event listener for checkbox
      newItem.querySelector('.item-checkbox').addEventListener('change', function () {
        if (this.checked) {
          newItem.classList.add('removing');
          setTimeout(() => {
            section.removeChild(newItem);
            saveToLocalStorage(sectionId);
          }, 500);
        }
      });

      section.appendChild(newItem);
    });
  }
}

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
      newItem.classList.add('removing');
      setTimeout(() => {
        section.removeChild(newItem);
        saveToLocalStorage(sectionId);
      }, 500);
    }
  });

  section.appendChild(newItem);

  // Simpan perubahan ke localStorage
  saveToLocalStorage(sectionId);
}

// Muat data dari localStorage saat halaman dimuat
document.addEventListener('DOMContentLoaded', function () {
  loadFromLocalStorage('toDoSection');
  loadFromLocalStorage('prioritiesSection');
});
