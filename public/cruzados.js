function renderTable(data) {
    const tableBody = document.querySelector("#table tbody");
    tableBody.innerHTML = "";

    data.forEach((item, idx) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${idx}</td>
            <td>${(new Date (parseInt(item.ts))).toString().replace(" GMT-0500 (Colombia Standard Time)","")}</td>
            <td>${item.NombreEquipo}</td>
            <td>${item.NombreBodega}</td>
            <td>${item.EquipoID}</td>
            <td>${item.EstadoTeorico}</td>
            <td>${item.ActividadAplicacion}</td>
            <td>${item.TagID}</td>
        `;
        tableBody.appendChild(row);
    });
}

function fetchDataAndRenderTable() {
    // Make an API request to fetch the JSON data
    fetch(`http://${window.location.host}/joins/reg-hyd-rec-bod`)
        .then((response) => response.json())
        .then((data) => {
            renderTable(data);
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
}

// Fetch data and render the table initially
fetchDataAndRenderTable();

// Refresh the data and render the table every 3 seconds
setInterval(fetchDataAndRenderTable, 3000);
