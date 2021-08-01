import { render, screen } from '@testing-library/react';
import { configure, shallow } from 'enzyme';
import { Link } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import Landing from '../src/components/landing/Landing'
import App from './App';

configure({ adapter: new Adapter() });

describe('<Nav />', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallow(<Landing />)
    })

    it('should render a button', () => {
        expect(wrapper.find('button')).toHaveLength(1);
    });
    it('should render a <Link>', () => {
        expect(wrapper.find(Link)).toHaveLength(1);

    });
    it('The Link must change the path to "/ videogames"', () => {
        expect(wrapper.find(Link).prop('to')).toEqual('/videogames');
    });
    })
