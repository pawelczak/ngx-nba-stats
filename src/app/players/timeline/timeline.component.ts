import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';

import * as d3 from 'd3';

@Component({
    selector: 'ns-timeline',
    styles: [`
        .bar {
            fill: steelblue;
        }

        .bar:hover {
            fill: brown;
        }

        .axis--x path {
            display: none;
        }
    `],
    template: `

        <svg #timeline width='960' height='500'></svg>
    
    `,
    encapsulation: ViewEncapsulation.None
})
export class TimelineComponent {

    @ViewChild('timeline')
    timeline: ElementRef;

    data = [{
        letter: 'A',
        frequency: 0.5
    }, {
        letter: 'B',
        frequency: 0.6
    }, {
        letter: 'C',
        frequency: 0.45
    }];

    ngAfterViewInit() {

        let svg = d3.select('svg'),
            margin = {top: 20, right: 20, bottom: 30, left: 40},
            width = +svg.attr('width') - margin.left - margin.right,
            height = +svg.attr('height') - margin.top - margin.bottom;

        let xScale = d3.scaleBand().rangeRound([0, width]).padding(0.1),
            yScale = d3.scaleLinear().rangeRound([height, 0]);

        let g = svg
                .append('g')
                .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');


        let data = this.data;

        xScale
            .domain(data.map((d: any) => { return d.letter; }));

        yScale
            .domain([0, d3.max(data, (d: any) => { return d.frequency; })]);

        g.append('g')
            .attr('class', 'axis axis--x')
            .attr('transform', 'translate(0,' + height + ')')
            .call(d3.axisBottom(xScale).ticks(5).tickSize(10));

        g.append('g')
            .attr('class', 'axis axis--y')
            .call(d3.axisLeft(yScale).ticks(10, '%'))
            .append('text')
            .attr('transform', 'rotate(-90)')
            .attr('y', 6)
            .attr('dy', '0.71em')
            .attr('text-anchor', 'end')
            .text('Frequency');

        g.selectAll('.bar')
            .data(data)
            .enter().append('rect')
            .attr('class', 'bar')
            .attr('x', (d: any) => { return xScale(d.letter); })
            .attr('y', (d: any) => { return yScale(d.frequency); })
            .attr('width', d => xScale.bandwidth())
            .attr('height', (d: any) => { return height - yScale(d.frequency); });
    }

}
