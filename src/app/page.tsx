import NFTCard from "@/components/NFTCard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-3xl font-bold text-center mb-8">Welcome to NFT Investment Insights, NFTights</div>
      <p className="text-lg text-center mb-6">
        Track your NFT investments, analyze collections, and stay ahead of market trends.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Example NFT Cards */}
        <NFTCard
          nft={{
            id: '1',
            name: 'Cool NFT #1',
            imageUrl: '/images/nft1.png',
            price: 2.5,
            floorPrice: 2.0,
          }}
        />
        <NFTCard
          nft={{
            id: '2',
            name: 'Cool NFT #2',
            imageUrl: '/images/nft2.png',
            price: 3.0,
            floorPrice: 2.8,
          }}
        />
      </div>
    </div>
  );
}
