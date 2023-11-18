console.log("Entró a index.js");
// ENDPOINT - https://dev4humans.com.mx/api/Clases/ventas_platillos //
const tbody = document.getElementById('tbody')
fetch("https://dev4humans.com.mx/api/Clases/ventas_platillos")
    .then(response => response.json())
    .then(datosApi => {
        console.log(datosApi);
        const ctx = document.getElementById('myChart');

        const labels = datosApi.data.labels;
        const data = datosApi.data.data;

        //creación de gráfica//
        new Chart(ctx, {
            type: 'pie',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Promedio ventas',
                    data: data,
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
        // Cracion de datos de tabla//
        tbody.innerHTML = "";
        labels.forEach((label, index) => {
            console.log(index);
            //  tbody.innerHTML += `
            // <tr class="table-danger">
            // <td>${index + 1}</td>
            // <td>${label}</td>
            // <td>${data[index]}</td>
            // </tr>
            // `; 
            const tr = document.createElement("tr");
            if (data[index]>50){
                tr.classList.add ("table-danger");
            }

        
            tr.innerHTML = ` 
            <td>${index + 1}</td>
            <td>${label}</td>
            <td>${data[index]}</td>
        `;
        tbody.appendChild(tr);

        });
        console.log("Platillo", labels[0]);
        console.log("Promedio", data[0]);

        console.log("Platillo", labels[1]);
        console.log("Promedio", data[1]);

    });