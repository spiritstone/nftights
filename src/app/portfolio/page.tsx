'use client'

import { useEffect, useState } from 'react';
import { Chart, ArcElement, LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend } from 'chart.js';
import { Pie, Line } from 'react-chartjs-2';
import axios from 'axios';

Chart.register(ArcElement, LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend);

export default function Portfolio() {
    const [portfolioData, setPortfolioData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        async function fetchPortfolioData() {
            try {
                // Replace with your actual bitsCrunch API call for portfolio data
                const response = await axios.get('/api/portfolio');
                setPortfolioData(response.data);
            } catch (error) {
                console.error('Error fetching portfolio data:', error);
            } finally {
                setLoading(false);
            }
        }
        fetchPortfolioData();
    }, []);

    if (loading) return <div className="text-center text-lg">Loading portfolio data...</div>;

    // Sample data (replace with API data)
    const pieData = {
        labels: portfolioData?.assets.map((asset: any) => asset.name) || [],
        datasets: [
            {
                data: portfolioData?.assets.map((asset: any) => asset.value) || [],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
            },
        ],
    };

    const lineData = {
        labels: portfolioData?.history.map((entry: any) => entry.date) || [],
        datasets: [
            {
                label: 'Portfolio Value Over Time',
                data: portfolioData?.history.map((entry: any) => entry.value) || [],
                fill: false,
                borderColor: '#4CAF50',
                tension: 0.1,
            },
        ],
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="text-3xl font-bold text-center mb-8">Welcome to NFT Investment Insights</div>
            <p className="text-lg text-center mb-6">
                Track your NFT investments, analyze collections, and stay ahead of market trends.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Pie Chart */}
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-xl font-semibold text-center mb-4">Portfolio Distribution</h2>
                    <Pie data={pieData} />
                </div>

                {/* Line Chart */}
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-xl font-semibold text-center mb-4">Portfolio Value Over Time</h2>
                    <Line data={lineData} />
                </div>
            </div>
        </div>
    );
}
