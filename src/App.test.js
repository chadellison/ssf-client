import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});


describe('#handleAddSpaceForm', () => {
    it('Clicking add space pops up form', () => {
        const div = document.createElement('div');
        const app = shallow(<App />, div)

        app.instance().handleAddSpaceForm()
        expect(app.state().displaySpaceForm).toBe(true)
    })


})
