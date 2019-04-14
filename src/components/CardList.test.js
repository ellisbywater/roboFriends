import React from 'react'
import { shallow } from 'enzyme'
import CardList from './CardList'

it('expect to render to CardList component', () => {
    const mockRobots = [
        {
            id: 1,
            name: 'John Smith',
            email: 'smith@example.com'
        },
        {
            id: 2,
            name: 'Jana Ray',
            email: 'ray@example.com'
        }
    ]
    expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
})