import * as d3 from 'd3';

const timeSeriesWithDate = (node, data = []) => {
  const width = 960;
  const height = 500;
  const margin = 5;
  const padding = 5;
  const adj = 30;
  // we are appending SVG first
  const svg = d3.select(node).append('svg')
    .attr('preserveAspectRatio', 'xMinYMin meet')
    .attr('viewBox', `-${
      adj} -${
      adj} ${
      width + adj * 3} ${
      height + adj * 3}`)
    .style('padding', padding)
    .style('margin', margin)
    .classed('svg-content', true);

  // ----------------------------DATA-------------------------------//
  const timeConv = d3.timeParse('%Y-%m-%d');

  const newData = data.historical.map(d => ({
    date: timeConv(d.date),
    close: d.close,
  }));
  // ----------------------------SCALES-----------------------------//
  const xScale = d3.scaleTime().range([0, width]);
  const yScale = d3.scaleLinear().rangeRound([height, 0]);

  xScale.domain(d3.extent(data.historical, d => timeConv(d.date)));
  yScale.domain([0, d3.max(data.historical, d => d.close)]);


  // -----------------------------AXES------------------------------//
  const yaxis = d3.axisLeft()
    .ticks(data.lenght)
    .scale(yScale);

  const xaxis = d3.axisBottom()
    .tickFormat(d3.timeFormat('%b %Y'))
    .scale(xScale);

  // ----------------------------LINES------------------------------//
  const line = d3.line()
    .x(d => xScale(d.date))
    .y(d => yScale(d.close));
    // -------------------------2. DRAWING----------------------------//

  // -----------------------------AXES------------------------------//
  svg.append('g')
    .attr('class', 'axis')
    .attr('transform', `translate(0,${height})`)
    .call(xaxis);

  svg.append('g')
    .attr('class', 'axis')
    .call(yaxis)
    .append('text')
    .attr('transform', 'rotate(-90)')
    .attr('dy', '.75em')
    .attr('y', 6)
    .style('text-anchor', 'end')
    .text('Price $');

  // ----------------------------LINES------------------------------//
  const lines = svg.selectAll('lines')
    .data([newData])
    .enter()
    .append('g');

  lines.append('path')
    .attr('class', 'line')
    .attr('d', d => line(d));
};

export default timeSeriesWithDate;
