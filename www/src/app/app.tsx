import type { Component, ParentProps } from 'solid-js'

export const App: Component<ParentProps> = (properties) => {
    return properties.children
}
