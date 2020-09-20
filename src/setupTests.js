// jest-dom adds custom jest matchers for asserting on DOM nodes.
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect'

import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })
