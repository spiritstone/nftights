interface NFTCardInterface {
    id: string;
    name: string;
    imageUrl: string;
    collection?: string;
    price: number; // assuming price is in SOL or another currency
    floorPrice: number;
}

interface NFTCardProps {
    nft: NFTCardInterface;
}

export default function NFTCard({ nft }: NFTCardProps) {
    return (
        <div className="border rounded-lg shadow-lg p-4">
            <img src={nft.imageUrl} alt={nft.name} className="w-full h-48 object-cover rounded-md" />
            <h3 className="text-lg font-semibold mt-2">{nft.name}</h3>
            {nft.collection && (<p className="text-gray-600">{nft.collection}</p>
            )}
            <p className="text-gray-800 font-bold">Price: {nft.price} SOL</p>
            <p className="text-gray-800 font-bold">Floor Price: {nft.floorPrice} SOL</p>

        </div>
    );
}