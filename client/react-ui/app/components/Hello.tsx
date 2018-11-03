import * as React from 'react';

interface IProps {
    compiler: string,
    framework: string,
    bundler: string
}

export class Hello extends React.Component<{}> {
    state = {text: 'string'};

    componentDidMount() {
        console.log('Component did mount', this.state);
        /*fetch('/api/test/')
            .then(res => 
            {
                this.setState({text: res});
                console.log(this.setState);
            });*/
    }

    render() {
        return <h1>{this.state.text}</h1>
    }
}