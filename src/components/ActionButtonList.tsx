'use client'
import { useDisconnect, useAppKit, useAppKitNetwork, createAppKit, useAppKitAccount } from '@reown/appkit/react'
import { networks } from '@/config'
import { useAppKitModal } from '@/context';
import { truncateAddress } from '@/util/truncAddr';

export const ActionButtonList = () => {

    const { disconnect } = useDisconnect();
    const modal = useAppKitModal();
    const { open } = useAppKit();
    const { address, isConnected } = useAppKitAccount();

    const { switchNetwork } = useAppKitNetwork();

    const handleDisconnect = async () => {
        try {
            await disconnect();
        } catch (error) {
            console.error("Failed to disconnect:", error);
        }
    }


    return (
        <div className="flex flex-row gap-2 px-3 py-1 bg-purple-500 text-white font-bold rounded-full w-full">
            {/* <button className="" onClick={() => open()}>Open</button> */}
            {isConnected ? (<>
                <div>{truncateAddress(address!)}</div>
                <button className="font-thin" onClick={handleDisconnect}>Disconnect</button>
                <button className="font-thin" onClick={() => switchNetwork(networks[1])}>Switch</button></>) :
                (
                    <>            <button className="" onClick={() => open()}>Open</button>

                    </>
                )}

        </div>
    )
}