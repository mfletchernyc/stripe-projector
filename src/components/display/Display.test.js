import React from 'react'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'

import store from '../../app/store'
import Display from './Display'

const wrapper = mount(
  <Provider store={store}>
    <Display />
  </Provider>
)

console.log(wrapper.debug())

it('needs to read from the store', () => {
  // ...to compare with elements in the wrapper.
})
