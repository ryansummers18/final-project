Highcharts.chart('chart', {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Alachua County Varsity Football 2016: Rushing Stats'
    },
    subtitle: {
      text: 'Click the columns to view versions.'
    },
    xAxis: {
      type: 'category'
    },
    yAxis: {
      title: {
        text: 'Total rushing yards'
      }

    },
    legend: {
      enabled: false
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: false,
          format: ''
        }
      }
    },

    tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat: '<span style="color:{point.color}">{point.name}</span>'
    },

    series: [{
      name: 'Teams',
      colorByPoint: true,
      data: [{
        name: 'Hawthorne',
        y: 1019,
        drilldown: 'Hawthorne'
      }, {
        name: 'Union County',
        y: 1764,
        drilldown: 'Union County'
      }, {
        name: 'Gainesville',
        y: 1118,
        drilldown: 'Gainesville'
      }, {
        name: 'Trenton',
        y: 2916,
        drilldown: 'Trenton'
      }, ]
    }],
    drilldown: {
      series: [{
          name: 'Hawthorne',
          id: 'Hawthorne',
          data: [
            [
              'Devin Lawrence: 821',
              821
            ],
            [
              'Latrevious Mann: 182',
              182
            ],
            [
              'Levon Brown: 15',
              15
            ],
            [
              'Other:50',
              50
            ]
          ]
        }, {
          name: 'Union County',
          id: 'Union County',
          data: [
            [
              'Charles Strong: 1279',
              1279
            ],
            [
              'Carlton Hankerson: 173',
              173
            ],
            [
              'Phillip Harris: 118',
              118
            ],
            [
              'Tryus Cook: 67',
              67
            ],
            [
              'Fred Jackson: 17',
              17
            ],
            [
              'Other: 110',
              110
            ]
          ]
        }, {
          name: 'Gainesville',
          id: 'Gainesville',
          data: [
            [
              'Sean Wiggs: 88',
              88
            ],
            [
              'Moon Bryant-Mitchell: 113',
              113
            ],
            [
              'Tim Adams: 155',
              155
            ],
            [
              'Willie McKnight: 513',
              513
            ],
            [
              'Ty Boyd: 276',
              276
            ],
            [
              'Other: 60',
              60
            ]
          ]
        }, {
          name: 'Trenton',
          id: 'Trenton',
          data: [
            [
              'Michael Smith: 487',
              487
            ],
            [
              'Jacquez Holmes: 237',
              237
            ],
            [
              'Montrez Jackson: 1433',
              1433
            ],
            [
              'Randy Fuller: 551',
              551
            ],
            [
              'Other: 208',
              208
            ],
          ]
        },

      ]
    }
  });

Highcharts.chart('chart2', {
          chart: {
              type: 'bar'
          },
          title: {
              text: 'Alachua County Varsity Football 2016: Passing Comparison'
          },
          subtitle: {
              text: 'Source: <a href="http://www.maxpreps.com">MaxPreps.com</a>'
          },
          xAxis: {
              categories: ['Tazmin James (Hawthorne)', 'Tyrus Cook (Union County)', 'Luke Matthews (Gainesville)', 'Michael Smith (Trenton)'],
              title: {
                  text: null
              }
          },
          yAxis: {
              min: 0,
              title: {
                  text: 'Yards',
                  align: 'high'
              },
              labels: {
                  overflow: 'justify'
              }
          },
          tooltip: {
              valueSuffix: ' yds'
          },
          plotOptions: {
              bar: {
                  dataLabels: {
                      enabled: true
                  }
              }
          },
          legend: {
              layout: 'vertical',
              align: 'right',
              verticalAlign: 'top',
              x: -40,
              y: 80,
              floating: true,
              borderWidth: 1,
              backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
              shadow: true
          },
          credits: {
              enabled: false
          },
          series: [{
              name: '2016 Season',
              data: [1449, 1648, 1391, 791]
          }]
      });
