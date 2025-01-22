'use client'

import { solanaWeb3JsAdapter, projectId, networks } from '@/config'
import { createAppKit } from '@reown/appkit/react'
import React, { createContext, useContext, ReactNode } from 'react'

// Set up metadata
const metadata = {
    name: 'next-reown-appkit',
    description: 'next-reown-appkit',
    url: 'https://github.com/0xonerb/next-reown-appkit-ssr',
    icons: ['https://avatars.githubusercontent.com/u/179229932']
}

// Create the modal instance
const modal = createAppKit({
    adapters: [solanaWeb3JsAdapter],
    projectId,
    networks,
    metadata,
    themeMode: 'light',
    features: {
        analytics: true
    },
    themeVariables: {
        '--w3m-accent': '#000000',
    }
})

// Create a context to provide the modal instance
const AppKitContext = createContext(modal)

// Custom hook to access the modal in components
export const useAppKitModal = () => {
    return useContext(AppKitContext)
}

// Context provider component
export function AppKitProvider({ children }: { children: ReactNode }) {
    return (
        <AppKitContext.Provider value={modal}>
            {children}
        </AppKitContext.Provider>
    )
}
