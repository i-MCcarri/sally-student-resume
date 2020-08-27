import React, {Component} from 'react';

export default class Accordion extends Component {
    static defaultProps = {
        sections : []
    };

    state = {
        active: null
    };

    toggleActive = (buttonIndex) => {
        this.setState({active: buttonIndex});
    };

    //  Hint: You can manage which section is 
    //  currently active or opened by keeping track 
    //  of the index of the last clicked button in 
    //  state.

    renderItem(section, buttonIndex, active) {
        return (
            <li className='sectionTitle' key={buttonIndex}>
            <button type='button' onClick = {() => this.toggleActive(buttonIndex)}>{section.title}</button>
        {(active === buttonIndex) && <p className='content'>{section.content}</p>}
            </li> 
        )
    }

    render() {
        return (
            <div>
                <ul className='listTab'>
                   {this.props.sections.map((sectionOfArr, indexOfSectionsArr)=>this.renderItem(sectionOfArr,indexOfSectionsArr, this.state.active))} 
                </ul>
            </div>
        );
    };


}

