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
    ArcElement
} from 'chart.js';
  
import { Line } from 'react-chartjs-2';

export default function LineChart({data = []}) {

        ChartJS.register(
            CategoryScale,
            LinearScale,
            PointElement,
            LineElement,
            Title,
            Tooltip,
            Legend,
            Filler,
            ArcElement
        );

    const generateMonthsArray = () => {
        const months = [];
        const currentDate = new Date();
      
        for (let i = 0; i < 12; i++) {
          const month = new Date(currentDate.getFullYear(), i, 1);
          const monthName = month.toLocaleString('default', { month: 'short' });
          months.push(monthName);
        }
      
        return months;
    };

    const labels = generateMonthsArray()

    const dataContent = {
        labels,
        datasets: [
          {
            label: '₱ Total Sales',
            data: data,
            borderColor: 'rgba(238, 140, 33, 1)',
            backgroundColor: 'rgba(238, 140, 33, 0.1)',
            pointBackgroundColor: 'rgba(238, 140, 33, 1)',
            pointBorderColor: 'rgba(238, 140, 33, 1)',
            pointRadius: 6,
            pointHoverRadius: 8,
            pointStyle: 'rectRounded',
            fill: true
          },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            filler: {
                propagate: true,
            },
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Monthly total sales overview.',
            },
        },
        scales: {
            x: {
                type: 'category',
                bounds: 'ticks', // Boundaries for the X axis
            },
            y: {
                beginAtZero: true,
                min: 0, // Minimum value for the Y axis
                max: Math.max(...data) + ( Math.max(...data) * .20), // Maximum value for the Y axis
                bounds: 'ticks', // Boundaries for the Y axis
            },
        },
    };

    return (
        <Line options={options} data={dataContent} />
    )
}
