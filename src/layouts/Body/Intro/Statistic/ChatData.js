import ChartDataLabels from 'chartjs-plugin-datalabels';


export const ChartData = {
    registered_users: {
        actualData: {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{
                label: "Monthly new users",
                fill: true,
                backgroundColor: 'white',
                borderColor: '#E91E63',
                data: [2111,2344,4232,5987,12090,19242,21094,24444],
            }],
        },
        options: {
            responsive:true,
            showLines:true,
            legend:{
                display:false,
                position:'top',
            },
            scales: {
                xAxes: [{
                   gridLines: {
                      display: false
                   }
                }],
                yAxes: [{
                   gridLines: {
                      display: false,
                   },
                }]
            },
            plugins: {
                datalabels: {
                    color:'#fff',
                    anchor: 'end',
                    align:  'start',
                    offset: -35,
                    borderWidth: 2,
                    borderColor: '#fff',
                    borderRadius: 5,
                    backgroundColor: '#E91E63',
                }
            },
        },
    },
    downloads: {
        actualData: {
            labels: ["Android", "iOS", "Windows", "Linux"],
            datasets: [{
                label: "Monthly new users",
                fill: true,
                backgroundColor: ['rgb(233, 30, 98)','rgb(244, 85, 138)','rgb(244, 127, 166)','rgb(151, 10, 57)'],
                borderColor: 'white',
                data: [152552,297421,102492,5205],
            }],
        },
        options: {
            responsive:true,
            showLines:false,
            legend:{
                display:true,
                position:'bottom',
            },
            scales: {
                // unused
            }
            ,
            plugins: {
                datalabels: {
                    color:'#fff',
                    anchor: 'end',
                    align:  'start',
                    offset: 0,
                    borderWidth: 2,
                    borderColor: '#fff',
                    borderRadius: 5,
                    backgroundColor: '#E91E63',
                }
            },
        },
    }
};