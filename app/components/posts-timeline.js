import Component from '@ember/component';
import {
  select
} from "d3-selection";
import {
  scalePoint,
  scaleSqrt
} from 'd3-scale';
import {
  axisLeft,
  axisBottom,
} from 'd3-axis';
import 'd3-transition';
import {
  observer
} from '@ember/object';
export default Component.extend({
  data: null,
  didInsertElement() {
    this._super(...arguments);
    let id = this.elementId;
    let data = this.data;
    let labelsX = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23"
    ];
    let labelsY = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let margin = {
      top: 20,
      right: 30,
      bottom: 30,
      left: 120
    };
    let width = 900 - margin.left - margin.right;
    let height = 350 - margin.top - margin.bottom;

    let yScale = scalePoint().padding(0.5);
    let xScale = this.xScale = scalePoint().padding(0.3);

    yScale
      .range([0, height])
      .domain(labelsY);

    xScale
      .range([0, width])
      .domain(labelsX);

    let yAxis = axisLeft()
      .scale(yScale);

    let xAxis = axisBottom()
      .scale(xScale);

    let svg = this.svg = select(`#${id}`).append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', 'translate(' + [margin.left, margin.top] + ')');

    svg.append("g")
      .attr('class', 'y-axis')
      .call(yAxis);

    svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .attr('class', 'x-axis')
      .call(xAxis);

    yScale.domain(data.map(function (d) {
      return d.label;
    }));

    yAxis.scale(yScale);
    svg.datum(data);

    let rows = svg.selectAll("g.site")
      .data(
        function (d) {
          return d;
        },
        function (d) {
          return d.label;
        }
      );

    rows.attr("class", "site")
      .attr("transform", function (d) {
        return "translate(0," + yScale(d.label) + ")";
      });

    rows.enter().append("g")
      .attr("class", "site")
      .attr("transform", function (d) {
        return "translate(0," + yScale(d.label) + ")";
      });
    this.updateChart();
  },

  dataChanged: observer('data.@each.values', function () {
    this.updateChart();
  }),

  updateChart() {
    let svg = this.svg;
    let data = this.data;
    let radius = scaleSqrt();
    let transition = svg.transition().duration(500);
    let xScale = this.xScale;
    let allvalues = data.reduce( (accumulator, currentvalue) => accumulator.concat(currentvalue.values), []);
    allvalues.sort();
    let max = allvalues[allvalues.length - 1];


    radius
      .range([0, 15])
      .domain([0, max]);

    svg.datum(data);

    let rows = svg.selectAll("g.site");
    let circles = rows.selectAll("circle")
      .data(
        function (d) {
          return d.values;
        },
        function (d, i) {
          return i;
        }
      );

    circles.exit()
      .transition(transition)
      .attr('r', 0)
      .style("fill", "rgba(255,255,255,0)")
      .remove();

    circles
      .attr("cy", 0)
      .attr("cx", function (d, i) {
        return xScale(i);
      })
      .transition(transition)
      .attr("r", function (d) {
        return radius(d);
      });

    circles.enter().append("circle")
      .attr("cy", 0)
      .attr("cx", function (d, i) {
        return xScale(i);
      })
      .transition(transition)
      .attr("r", function (d) {
        return radius(d);
      });

    let tooltip = rows.selectAll('.tool-tip')
      .data(
        function (d) {
          return d.values;
        },
        function (d, i) {
          return i;
        }
      );

    tooltip.enter().append('g')
      .attr('class', 'tool-tip')
      .on('mouseover', function () {
        select(this).select("text").transition().duration(100).style('opacity', 1);
      })
      .on('mouseout', function () {
        select(this).select("text").transition().style('opacity', 0);
      });

    tooltip = rows.selectAll('.tool-tip');
    tooltip.append('text')
      .style('text-anchor', 'middle')
      .style('fill', '#ffffff')
      .style('opacity', 0);

    tooltip
      .attr('transform', function (d, i) {
        return "translate(" + xScale(i) + ",0)";
      })
      .select('text')
      .text(function (d) {
        return d;
      })
      .attr('y', 4)
      .attr('x', 0);

    tooltip.exit().remove();
  }
});
