/* @refresh reload */
import { render } from 'solid-js/web'

import { Routes } from '@/routes/routes'

async function enableMocking() {
    if (process.env.NODE_ENV === 'development') {
        const { worker } = await import('./mocks/browser')
        return worker.start()
    }

    return
}

await enableMocking()
render(() => <Routes />, document.querySelector('#root')!)
