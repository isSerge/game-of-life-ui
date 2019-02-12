import React from 'react'
import Header from '../components/Header'
import renderer from 'react-test-renderer'

test('Header matches snapshot', () => {
    const title = 'Random title'
    const component = renderer.create(<Header title={title} />)
    let tree = component.toJSON()

    expect(tree).toMatchSnapshot()
})
