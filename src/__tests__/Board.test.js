import React from 'react'
import Board from '../components/Board'
import renderer from 'react-test-renderer'

test('Board matches snapshot', () => {
    const props = {
        cells: [
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
        ],
        handleCellClick: jest.fn(),
    }
    const component = renderer.create(<Board {...props} />)
    let tree = component.toJSON()

    expect(tree).toMatchSnapshot()
})
