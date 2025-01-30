import Link from 'next/link';
import { ActionButtonList } from './ActionButtonList';
import ConnectButton from './ConnectButton';

export default function Navbar() {
    return (
        <div className="bg-nft_darkPurple py-4 gap-4 flex items-center">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-white text-2xl font-bold">
                    NFT Insights
                </Link>
                <div className="flex flex-row gap-2 items-center">
                    <Link href="/portfolio" className="text-white mx-4">Portfolio</Link>
                    <Link href="/collection" className="text-white mx-4">Collections</Link>
                    <Link href="/alerts" className="text-white mx-4">Alerts</Link>

                    {/* <ConnectButton /> */}
                    <ActionButtonList />

                </div>
            </div>
        </div>
    );
}