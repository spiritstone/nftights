'use client'
// import { useAppKit } from '@reown/appkit/react'

// export default function ConnectButton() {
//     // 4. Use modal hook
//     const { open } = useAppKit()

//     return (
//         <>
//             <button onClick={() => open()}>Open Connect Modal</button>
//             <button onClick={() => open({ view: 'Networks' })}>Open Network Modal</button>
//         </>
//     )
// }

import { useAppKitModal } from '@/context/index'
import { useAppKitAccount } from '@reown/appkit/react';
export default function ConnectButton() {
    const modal = useAppKitModal();
    const { address, isConnected } = useAppKitAccount();
    return (
        <div className="flex gap-1 flex-col">
            {isConnected ? (<button className="text-wrap px-3 py-1 bg-white text-nft_darkPurple font-bold rounded-full">{address}</button>) : (<button onClick={() => modal.open()} className="px-3 py-1 bg-purple-500 text-white font-bold rounded-full w-full">Connect Wallet</button>)}
            {isConnected && (<button onClick={() => modal.open({ view: 'Networks' })}
                className="text-white font-semibold">Choose Network</button>)}
        </div>
    )
}
