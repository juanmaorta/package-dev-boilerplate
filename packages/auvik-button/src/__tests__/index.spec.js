/* global expect, describe, it */
import React from 'react'
import { shallow } from 'enzyme'

import MyComponent from '../index'

describe('MyComponent snapshots', () => {
  const props = {
    label: 'click me'
  }

  it('should match for MyComponent component', () => {
    const wrapper = shallow(
      <MyComponent {...props} />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
