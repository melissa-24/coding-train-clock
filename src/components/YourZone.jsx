import React from 'react'


class YourZone extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          time: new Date().toLocaleString()
        };
      }
      componentDidMount() {
        this.intervalID = setInterval(
          () => this.tick(),
          1000
        );
      }
      componentWillUnmount() {
        clearInterval(this.intervalID);
      }
      tick() {
        this.setState({
          time: new Date().toLocaleString()
        });
      }

    render() {
        return (
            <>
                <h2>Your Time</h2>
                <p className="clock">
                    {this.state.time}
                </p>
            </>
        )
    }
}

export default YourZone