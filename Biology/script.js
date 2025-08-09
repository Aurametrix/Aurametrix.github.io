const addBtn = document.getElementById('addBtn');
const symptomInput = document.getElementById('symptom');
const foodInput = document.getElementById('foodTrigger');
const notesInput = document.getElementById('notes');
const entriesDiv = document.getElementById('entries');

let entries = JSON.parse(localStorage.getItem('symptomEntries')) || [];
renderEntries();

addBtn.addEventListener('click', () => {
  const symptom = symptomInput.value.trim();
  const foodTrigger = foodInput.value.trim();
  const notes = notesInput.value.trim();

  if (!symptom || !foodTrigger) return;

  const entry = {
    id: Date.now(),
    symptom,
    foodTrigger,
    notes,
    date: new Date().toLocaleString()
  };

  entries.push(entry);
  localStorage.setItem('symptomEntries', JSON.stringify(entries));

  symptomInput.value = '';
  foodInput.value = '';
  notesInput.value = '';

  renderEntries();
});

function renderEntries() {
  entriesDiv.innerHTML = '';

  if (entries.length === 0) {
    entriesDiv.innerHTML = '<p class="empty">No entries yet. Start tracking your symptoms above.</p>';
    return;
  }

  entries.forEach(entry => {
    const card = document.createElement('div');
    card.className = 'entry-card';

    card.innerHTML = `
      <p><strong>Date:</strong> ${entry.date}</p>
      <p><strong>Symptom:</strong> ${entry.symptom}</p>
      <p><strong>Possible Trigger:</strong> ${entry.foodTrigger}</p>
      ${entry.notes ? `<p><strong>Notes:</strong> ${entry.notes}</p>` : ''}
    `;

    entriesDiv.appendChild(card);
  });
}

