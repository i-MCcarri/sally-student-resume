import React from 'react';
// import renderer from 'react-test-renderer';
import Accordion from './Accordion';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

const sectionsProp = [
    {
      title: 'Section 1',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      title: 'Section 2',
      content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
    },
    {
      title: 'Section 3',
      content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
    },
  ];

describe('<Accordion />', () => {
    
    it('renders empty section in UI; as expected', () => {
        
        const wrapper = shallow(<Accordion />);
    
        expect(toJson(wrapper)).toMatchSnapshot();
        // Check whether it matches the previous snapshot 
    });
    
    it('renders no active sections in the UI; as expected', () => {
    
        const wrapper = shallow(<Accordion sections={sectionsProp}/>);
        
        expect(toJson(wrapper)).toMatchSnapshot(); 
        // Check whether it matches the previous snapshot
    });

    it('renders the clicked section as active in UI; as expected', () => {
        
        const wrapper = shallow(<Accordion sections={sectionsProp}/>);
        
        expect(toJson(wrapper)).toMatchSnapshot(); 
        // Check whether it matches the previous snapshot
    });

    it('renders one active section on UI; as expected', () => {
        
        const wrapper = shallow(<Accordion sections={sectionsProp}/>);

        expect(toJson(wrapper)).toMatchSnapshot();
        // Check whether it matches the previous snapshot 
    });
});