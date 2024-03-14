$(document).ready(function() {
    $('select').on('change', function() {
      const state = this.value.toLowerCase();
      let url ='https://api.covidtracking.com/v1/states/' + state + '/daily.json';
    console.log(url);
      fetch(url)
        .then(response => response.json())
        .then(json => {
          myChart.data.labels = json.map((x) => x.date);
          myChart.data.datasets[0].data = json.map((x) => x.positive);        
          myChart.update();
        });
    });
  });
  
  const myChart = new Chart('myChart', {
    type: 'line',
    data: {
      labels: [],
      datasets: [{
        label: 'Positive',
        backgroundColor: 'blue',
        borderColor: 'rgb(255, 99, 132)',
        data: [],
        fill: false
      }]
    },
    options: {
      tooltips: {
        mode: 'index'
      }
    }
  });