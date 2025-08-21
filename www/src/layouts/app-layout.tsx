import type { Component, ParentProps } from 'solid-js'

import { Navigation } from '@/components/navigation/navigation'

export const AppLayout: Component<ParentProps> = (properties) => {
    return (
        <>
            <header>
                <Navigation />
            </header>
            <main>{properties.children}</main>
            <footer />
        </>
    )
}
