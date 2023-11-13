console.log("Entró a index.js");
// ENDPOINT - https://dev4humans.com.mx/api/Clases/ventas_platillos //
fetch("https://dev4humans.com.mx/api/Clases/ventas_platillos")
    .then(response => response.json())
    .then(datosApi => {
        console.log(datosApi);
        const ctx = document.getElementById('myChart');

        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: datosApi.data.labels,
                datasets: [{
                    label: 'Promedio ventas',
                    data: datosApi.data.data,
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
        })

    });