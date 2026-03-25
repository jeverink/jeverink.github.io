document.addEventListener("DOMContentLoaded", function () {

  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const typeRadios = document.querySelectorAll('input[name="type"]');
  const rows = document.querySelectorAll("#paperTable tbody tr");

  // Listen to BOTH filters
  checkboxes.forEach(cb => cb.addEventListener("change", filterRows));
  typeRadios.forEach(r => r.addEventListener("change", filterRows));

  function filterRows() {
    const selectedType = document.querySelector('input[name="type"]:checked').value;

    const selectedTags = Array.from(checkboxes)
      .filter(cb => cb.checked)
      .map(cb => cb.value);

    rows.forEach(row => {
      const rowType = row.getAttribute("data-type");
      const rowTags = row.getAttribute("data-tags");

      const typeMatch = selectedType === "all" || rowType === selectedType;

      const tagMatch =
        selectedTags.length === 0 ||
        selectedTags.every(tag => rowTags.includes(tag));

      row.style.display = (typeMatch && tagMatch) ? "" : "none";
    });
  }
});