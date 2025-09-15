const MOUNTAINS = [
  {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
  {name: "Everest", height: 8848, place: "Nepal"},
  {name: "Mount Fuji", height: 3776, place: "Japan"},
  {name: "Vaalserberg", height: 323, place: "Netherlands"},
  {name: "Denali", height: 6168, place: "United States"},
  {name: "Popocatepetl", height: 5465, place: "Mexico"},
  {name: "Mont Blanc", height: 4808, place: "Italy/France"}
];

// Get the container element for our table.
const tableContainer = document.getElementById("mountains");

// Create the main table element.
const table = document.createElement("table");

// Get the column headers from the keys of the first object.
const headers = Object.keys(MOUNTAINS[0]);

// Create the header row.
const headerRow = document.createElement("tr");
headers.forEach(headerText => {
  const headerCell = document.createElement("th");
  headerCell.textContent = headerText;
  headerRow.appendChild(headerCell);
});
table.appendChild(headerRow);

// Populate the table with data rows.
MOUNTAINS.forEach(mountain => {
  const dataRow = document.createElement("tr");
  headers.forEach(header => {
    const dataCell = document.createElement("td");
    const cellValue = mountain[header];
    dataCell.textContent = cellValue;

    // Right-align number values.
    if (typeof cellValue === "number") {
      dataCell.style.textAlign = "right";
    }

    dataRow.appendChild(dataCell);
  });
  table.appendChild(dataRow);
});

// Append the completed table to the container.
tableContainer.appendChild(table);
