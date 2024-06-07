var PrimeiraDash = document.getElementById('PrimeiraDash').getContext('2d');
var Problemas =
    new Chart(PrimeiraDash,        
                {
                    type: 'pie',
                    data: {
                        labels: ['Fazenda x', 'Fazenda y'],
                        datasets: [{
                            label: 'Quantidade de problemas',
                            data: [11, 7],
        
                            backgroundColor: [
                               '#69E056',
                               '#FFF857',
                            ],
        
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