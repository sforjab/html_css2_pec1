import Chart from 'chart.js/auto'

(async function() {
  const data = [
    { year: 1901, poblacion: 36844 },
    { year: 1911, poblacion: 43808 },
    { year: 1921, poblacion: 42255 },
    { year: 1931, poblacion: 46518 },
    { year: 1946, poblacion: 46124 },
    { year: 1954, poblacion: 47305 },
    { year: 1962, poblacion: 52355 },
    { year: 1975, poblacion: 64771 },
    { year: 1982, poblacion: 62483 },
    { year: 1990, poblacion: 63498 },
    { year: 1999, poblacion: 65136 },
    { year: 2007, poblacion: 66560 },
    { year: 2015, poblacion: 67956 }
  ];

  new Chart(
    document.getElementById('myChart'),
    {
      type: 'bar',
      data: {
        labels: data.map(row => row.year),
        datasets: [
          {
            label: 'Habitantes por año',
            data: data.map(row => row.poblacion)
          }
        ]
      },
      options: {
        responsive: true
      }
    }
  );
})();