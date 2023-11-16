import { Component, OnDestroy, OnInit } from '@angular/core';
import { StatisticsService } from '@core/services';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit, OnDestroy {
  private _onDestroy: Subject<void>;

  statisticsData$ = {};
  graphData: any = [];

  constructor(private statisticsService: StatisticsService) {
    this._onDestroy = new Subject<void>();
  }

  ngOnInit(): void {
    this.statisticsService.statisticsData$
    .pipe(takeUntil(this._onDestroy))
    .subscribe(data => {
      this.statisticsData$ = data;
      this.graphData.push(this.getStackedBarChart(data['pdbs_per_year'], 'Growth of PDB structures per year'));
      this.graphData.push(this.getStackedBarChart(data['interfaces_per_year'], 'Growth of interface structures per year'));
      this.graphData.push(this.getPieChart(data['organism_analysis'], 'Organism Analysis'));
      this.graphData.push(this.getBarChart(data['frequent_organisms'], 'Most Frequent 12 Organisms'));
      this.graphData.push(this.getScopeBarChart(data['dm_frequency'], 'Top 12 Domains', 'dm_desc', 'Domains', 290));
      this.graphData.push(this.getScopeBarChart(data['sf_frequency'], 'Top 12 Superfamilies', 'sf_desc', 'Superfamilies', 330));
      this.graphData.push(this.getScopeBarChart(data['cf_frequency'], 'Top 12 Folds', 'cf_desc', 'Folds', 310));
    });
  }

  getBarChart(data: any, title: string) {
    return {
      data: [
        {
          x: data['ORGANISM_NAME'],
          y: data['COUNTS'],
          name: '',
          type: 'bar'
        }
      ],
      layout: {
        autosize: true,
        title: title,
        xaxis: {
          title: {
            text: 'Organism Name'
          },
        },
        yaxis: {
          title: {
            text: 'Counts'
          }
        }
      }
    };
  }

  getScopeBarChart(data: any, title: string, X: any, xaxis_title?: string, left_margin?: number) {
    const formattedFrequency = data['frequency'].map((f: string) => parseInt(f));

    return {
      data: [
        {
          x: formattedFrequency,
          y: data[X],
          name: '',
          text: formattedFrequency.map((f: number) => `${(f / 1000).toFixed(1)}k`),
          textposition: 'outside',
          cliponaxis: false,
          type: 'bar',
          orientation: 'h',
          textangle: 0,
          marker: {
            color: formattedFrequency,
            colorscale: 'Portland',
            showscale: true,
            // type: 'heatmap',
          },
          textfont: {
            size: 12
          }
        }
      ],
      layout: {
        autosize: true,
        title: title,
        xaxis: {
          title: {
            text: 'Counts'
          },
        },
        yaxis: {
          title: {
            text: xaxis_title,
            // automargin: true,
            // title_standoff: 500,
            ticks: 'outside',
            tickcolor: 'white',
            ticklen: 500
          }
        },
        // coloraxis: {
        //   colorbar: {
        //     title: 'Count',
        //     tickvals: formattedFrequency, // To show specific tick values
        //     ticktext: formattedFrequency.map((f: number) => `${(f / 1000).toFixed(1)}k`) // Convert to '1.6k' format etc.
        //   }
        // },
        margin: { t: 30, r: 10, b: 40, l: left_margin }
      },
      config: {
        responsive: true,
        displayModeBar: true
      }
    };
  }

  getStackedBarChart(yearlyData: any, title: string) {
    return {
      data: [
        {
          x: yearlyData['Year'],
          y: yearlyData['Count'],
          name: 'Released Annually',
          type: 'bar'
        },
        {
          x: yearlyData['Year'],
          y: yearlyData['Cumulative'],
          name: 'Total Entries',
          type: 'bar'
        }
      ],
      layout: {
        autosize: true,
        barmode: 'stack',
        title: title,
        xaxis: {
          title: {
            text: 'Year'
          },
        },
        yaxis: {
          title: {
            text: 'Count'
          }
        }
      }
    };
  }

  getPieChart(data: any, title: string) {
    return {
      data: [
        {
          values: data[0]['values'],
          labels: data[0]['labels'].map((x: string) => x.replace(/(^\w|-\w|\s\w)/g, match => match.toUpperCase())),
          domain: { column: 0 },
          name: 'Intra-species vs. Inter-species',
          type: 'pie'
        },
        {
          values: data[1]['values'],
          labels: data[1]['labels'].map((x: string) => x.replace(/\bhs\b/gi, 'Homo Sapiens').replace(/(^\w|-\w|\s\w)/g, match => match.toUpperCase())),
          domain: { column: 1 },
          name: 'Homo Sapiens vs. Other',
          type: 'pie'
        }
      ],
      layout: {
        autosize: true,
        title: title,
        grid: {rows: 1, columns: 2}
      }
    };
  }

  ngOnDestroy(): void {
    this._onDestroy.next();
    this._onDestroy.complete();
  }
}
