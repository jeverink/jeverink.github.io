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

    // Hide empty tables and their headings
    document.querySelectorAll(".table-wrapper").forEach(wrapper => {
      const table = wrapper.querySelector("table");

      const hasVisibleRows = Array.from(
        table.querySelectorAll("tbody tr")
      ).some(row => row.style.display !== "none");

      const heading = wrapper.previousElementSibling;

      if (hasVisibleRows) {
        wrapper.style.display = "";
        if (heading?.classList.contains("pub-heading")) {
          heading.style.display = "";
        }
      } else {
        wrapper.style.display = "none";
        if (heading?.classList.contains("pub-heading")) {
          heading.style.display = "none";
        }
      }
    });

  }

});