import React, { useState } from "react";
import "./index.css"; // Ensure Tailwind is applied

function App() {
  const [symptom, setSymptom] = useState("");
  const [foodTrigger, setFoodTrigger] = useState("");
  const [notes, setNotes] = useState("");
  const [entries, setEntries] = useState([]);

  const handleSubmit = () => {
    if (!symptom || !foodTrigger) return;
    setEntries([
      ...entries,
      {
        id: Date.now(),
        symptom,
        foodTrigger,
        notes,
        date: new Date().toLocaleString(),
      },
    ]);
    setSymptom("");
    setFoodTrigger("");
    setNotes("");
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Food Symptom Tracker
      </h1>
      <div className="bg-white p-4 rounded shadow mb-6 space-y-4">
        <input
          className="w-full border p-2 rounded"
          placeholder="What symptom did you notice?"
          value={symptom}
          onChange={(e) => setSymptom(e.target.value)}
        />
        <input
          className="w-full border p-2 rounded"
          placeholder="What food might have caused it?"
          value={foodTrigger}
          onChange={(e) => setFoodTrigger(e.target.value)}
        />
        <textarea
          className="w-full border p-2 rounded"
          placeholder="Additional notes (optional)"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
        <button
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          onClick={handleSubmit}
        >
          Add Entry
        </button>
      </div>

      <h2 className="text-xl font-semibold mb-2">Past Entries</h2>
      <div className="space-y-3">
        {entries.map((entry) => (
          <div key={entry.id} className="bg-gray-100 p-3 rounded shadow">
            <p><strong>Date:</strong> {entry.date}</p>
            <p><strong>Symptom:</strong> {entry.symptom}</p>
            <p><strong>Possible Trigger:</strong> {entry.foodTrigger}</p>
            {entry.notes && <p><strong>Notes:</strong> {entry.notes}</p>}
          </div>
        ))}
        {entries.length === 0 && (
          <p className="text-sm text-gray-500">
            No entries yet. Start tracking your symptoms above.
          </p>
        )}
      </div>
    </div>
  );
}

export default App;

