import React from 'react'
import Buttons from '../components/Buttons'
import renderer from 'react-test-renderer'

test('Buttons matches snapshot', () => {
    const props = {
        startTicks: jest.fn(),
        nextTick: jest.fn(),
        pauseTicks: jest.fn(),
        refreshTicks: jest.fn(),
    }
    const component = renderer.create(<Buttons {...props} />)
    let tree = component.toJSON()

    expect(tree).toMatchSnapshot()
})
