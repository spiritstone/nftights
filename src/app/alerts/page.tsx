'use client'

import { useState } from 'react';

interface Alert {
    id: number;
    name: string;
    currentPrice: number;
    targetPrice: number;
}

export default function Alerts() {
    const [alerts, setAlerts] = useState<Alert[]>([]);
    const [nftName, setNftName] = useState('');
    const [currentPrice, setCurrentPrice] = useState('');
    const [targetPrice, setTargetPrice] = useState('');

    const handleAddAlert = () => {
        if (!nftName || !currentPrice || !targetPrice) return;

        const newAlert: Alert = {
            id: alerts.length + 1,
            name: nftName,
            currentPrice: parseFloat(currentPrice),
            targetPrice: parseFloat(targetPrice),
        };

        setAlerts([...alerts, newAlert]);
        setNftName('');
        setCurrentPrice('');
        setTargetPrice('');
    };

    const handleRemoveAlert = (id: number) => {
        setAlerts(alerts.filter(alert => alert.id !== id));
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="text-3xl font-bold text-center mb-8">Set Your NFT Price Alerts</div>
            <p className="text-lg text-center mb-6">
                Stay updated with real-time NFT price changes and never miss an opportunity.
            </p>

            <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6 text-Black">
                <h2 className="text-xl font-semibold mb-4">Add New Alert</h2>
                <input
                    type="text"
                    placeholder="NFT Name"
                    value={nftName}
                    onChange={(e) => setNftName(e.target.value)}
                    className="w-full border rounded-lg px-4 py-2 mb-3"
                />
                <input
                    type="number"
                    placeholder="Current Price"
                    value={currentPrice}
                    onChange={(e) => setCurrentPrice(e.target.value)}
                    className="w-full border rounded-lg px-4 py-2 mb-3"
                />
                <input
                    type="number"
                    placeholder="Target Price"
                    value={targetPrice}
                    onChange={(e) => setTargetPrice(e.target.value)}
                    className="w-full border rounded-lg px-4 py-2 mb-4"
                />
                <button
                    onClick={handleAddAlert}
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
                >
                    Add Alert
                </button>
            </div>

            <div className="mt-8">
                <h2 className="text-2xl font-semibold text-center mb-4">Your Alerts</h2>
                {alerts.length === 0 ? (
                    <p className="text-center text-gray-500">No alerts set yet.</p>
                ) : (
                    <ul className="max-w-lg mx-auto space-y-4">
                        {alerts.map(alert => (
                            <li key={alert.id} className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow">
                                <div>
                                    <h3 className="text-lg font-semibold">{alert.name}</h3>
                                    <p className="text-sm text-gray-600">
                                        Current: ${alert.currentPrice.toFixed(2)} | Target: ${alert.targetPrice.toFixed(2)}
                                    </p>
                                </div>
                                <button
                                    onClick={() => handleRemoveAlert(alert.id)}
                                    className="text-red-500 hover:text-red-700 font-semibold"
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
