import React from 'react'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';
  
import { Doughnut } from 'react-chartjs-2';

export default function DonutChart() {

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend,
        Filler
    );

    const data = {
        labels: ['Cash', 'Payment', 'Expenses'],
        datasets: [
          {
            label: 'Current ledger total ₱',
            data: [2000, 870, 1200],
            backgroundColor: [
              'rgba(238, 140, 33, 1)',
              'rgba(238, 140, 33, .7)',
              'rgba(238, 140, 33, 0.4)',
            ],
            borderColor: [
              'rgba(238, 140, 33, 1)',
              'rgba(238, 140, 33, 0.7)',
              'rgba(238, 140, 33, 0.4)',
            ],
            borderWidth: 1,
          },
        ],
      };

    return (
        <Doughnut data={data} />
    )
}
