import React, {Component} from 'react';

class HelloWorld extends React.Component { 
    state = {
        who: 'World'
    }
    handleClick (e) {
        this.setState ({
            who: e
        });
    }

    render() {
        return (
            <div className='HelloWorld'>
                <p>Hello, {this.state.who}<br/>
                <button onClick={() => this.handleClick('World')}>World</button><br/>
                <button onClick={() => this.handleClick('Friend')}>Friend</button><br/>
                <button onClick={() => this.handleClick('React')}>React</button><br/>
                </p>
            </div>
        );
    }
}

export default HelloWorld;
