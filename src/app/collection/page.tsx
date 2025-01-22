'use client'

import { useEffect, useState } from 'react';

interface NFT {
    id: string;
    name: string;
    image_url: string;
    price: number;
    volume: number;
    sales: number;
}

export default function Collection() {
    const [nfts, setNfts] = useState<NFT[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchNFTs = async () => {
            try {
                const response = await fetch('/api/nft-collections');
                if (!response.ok) throw new Error('Failed to fetch NFT data');

                const data = await response.json();
                setNfts(data.collections);
            } catch (err) {
                setError('Error fetching NFT collections.');
            } finally {
                setLoading(false);
            }
        };

        fetchNFTs();
    }, []);

    if (loading) {
        return <div className="text-center text-2xl font-semibold mt-10">Loading...</div>;
    }

    if (error) {
        return <div className="text-center text-red-500 font-semibold mt-10">{error}</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="text-3xl font-bold text-center mb-8">Top NFT Collections</div>
            <p className="text-lg text-center mb-6">
                Explore trending NFT collections and analyze their market performance.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {nfts.map((nft) => (
                    <div key={nft.id} className="bg-white shadow-md rounded-lg p-4">
                        <img
                            src={nft.image_url}
                            alt={nft.name}
                            className="w-full h-60 object-cover rounded-lg mb-4"
                        />
                        <h3 className="text-xl font-bold">{nft.name}</h3>
                        <p className="text-gray-600">Price: ${nft.price.toLocaleString()}</p>
                        <p className="text-gray-600">Volume: ${nft.volume.toLocaleString()}</p>
                        <p className="text-gray-600">Sales: {nft.sales.toLocaleString()}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
