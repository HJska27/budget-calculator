// document.getElementById("sidebar").style.display = "none" or flex
let taxArray = [0.12, 0.07, 0.062, 0.0145, 0.01, 0.05];
function careerClick(e) {
    let salary = e.target.next.ElementSibling;
    console.log(salary);
};

const ctx= document.getElementById('tax')

let chart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: [],
        datasets: [{
            labels: '$ In Dollars',
            data: [0, 0, 0, 0, 0, 0, 0, 0],
        }]
    },
    options: {
        scales: {
            y: {
                begininAtZero: true
            }
        }
    }
})

function updateChart(dataset, labels) {
    chart.data.datasets = [{
        label: '(USD) In Dollars',
        date: datasets,
    }]

    chart.data.labels = labels;

    chart.update()
}