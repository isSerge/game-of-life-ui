import React from 'react'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'
import App from '../components/App'

let container

beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
})

afterEach(() => {
    document.body.removeChild(container)
    container = null
})

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
})

it('should render "WebSocket server connection is missing" if there are no cells', () => {
    act(() => {
        ReactDOM.render(<App />, container)
    })
    const div = container.querySelectorAll('div')[1]
    expect(div.textContent).toBe('WebSocket server connection is missing')
})

it('should render title', () => {
    act(() => {
        ReactDOM.render(<App />, container)
    })
    const div = container.querySelector('h1')
    expect(div.textContent).toBe('Game of life')
})
