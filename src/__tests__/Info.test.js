import React from 'react'
import Info from '../components/Info'
import renderer from 'react-test-renderer'

test('Info matches snapshot', () => {
    const props = {
        color: '#fff',
        generation: 5,
    }
    const component = renderer.create(<Info {...props} />)
    let tree = component.toJSON()

    expect(tree).toMatchSnapshot()
})
