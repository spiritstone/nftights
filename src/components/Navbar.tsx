import Link from 'next/link';
import { ActionButtonList } from './ActionButtonList';
import ConnectButton from './ConnectButton';

export default function Navbar() {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-white text-2xl font-bold">
                    NFT Insights
                </Link>
                <div className="flex flex-row gap-2">
                    <Link href="/portfolio" className="text-white mx-4">Portfolio</Link>
                    <Link href="/collection" className="text-white mx-4">Collections</Link>
                    <Link href="/alerts" className="text-white mx-4">Alerts</Link>

                    {/* <ConnectButton /> */}
                    <ActionButtonList />

                </div>
            </div>
        </nav>
    );
}