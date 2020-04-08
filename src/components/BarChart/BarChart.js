import React from 'react'

class BarChart extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  componentDidMount(){
    // const temperatureData = [ 8, 5, 13, 9, 12 ]
    // d3.select(this.myRef.current)
    //   .selectAll("h2")
    //   .data(temperatureData)
    //   .enter()
    //     .append("h2")
    //     .text((datapoint) =>  datapoint + " degrees")
  }
  render(){
    console.log(this.refs);
    return (<div ref={this.myRef}></div>)
  }
}

export default BarChart
