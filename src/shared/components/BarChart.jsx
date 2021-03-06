import React from 'react';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
);
export default function BarChart({ data, options }) {
    return (
        <Bar data={ data }
            options={ options } />
    );
}
