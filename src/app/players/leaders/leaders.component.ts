import { Component, ElementRef, TemplateRef, ViewChild } from '@angular/core';

import * as d3 from 'd3';

@Component({
    selector: 'ns-players-leaders',
    template: `
    
        <h1>Leaders</h1>
        
        <div class=".chart" #chart></div>
    
    `
})
export class LeadersComponent {

    @ViewChild('chart')
    chart: ElementRef;


    ngAfterViewInit() {
        let margin = { top: 10, right: 20, bottom: 60, left: 30 };
        let width = 400 - margin.left - margin.right;
        let height = 565 - margin.top - margin.bottom;

        let svg = d3.select(this.chart.nativeElement)
            .append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            // .call(responsivefy)
            .append('g')
            .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');

        let data = [
            {score: 63, subject: 'Mathematics'},
            {score: 82, subject: 'Geography'},
            {score: 74, subject: 'Spelling'},
            {score: 97, subject: 'Reading'},
            {score: 52, subject: 'Science'},
            {score: 74, subject: 'Chemistry'},
            {score: 97, subject: 'Physics'},
            {score: 52, subject: 'ASL'}
        ];

        let yScale = d3.scaleLinear()
            .domain([0, 100])
            .range([height, 0]);
        let yAxis = d3.axisLeft(yScale);
        svg.call(yAxis);

        let xScale = d3.scaleBand()
            .padding(0.2)
            .domain(data.map(d => d.subject))
            .range([0, width]);

        let xAxis = d3.axisBottom(xScale)
            .ticks(5)
            .tickSize(10)
            .tickPadding(5);
        svg
            .append('g')
            .attr('transform', `translate(0, ${height})`)
            .call(xAxis)
            .selectAll('text')
            .style('text-anchor', 'end')
            .attr('transform', 'rotate(-45)');

        svg.selectAll('rect')
            .data(data)
            .enter()
            .append('rect')
            .attr('x', d => xScale(d.subject))
            .attr('y', d => yScale(d.score))
            .attr('width', d => xScale.bandwidth())
            .attr('height', d => height - yScale(d.score));

        // function responsivefy(svg) {
        //     // get container + svg aspect ratio
        //     let container = d3.select(svg.node().parentNode),
        //         width = parseInt(svg.style("width")),
        //         height = parseInt(svg.style("height")),
        //         aspect = width / height;
        //
        //     // add viewBox and preserveAspectRatio properties,
        //     // and call resize so that svg resizes on inital page load
        //     svg.attr("viewBox", "0 0 " + width + " " + height)
        //         .attr("preserveAspectRatio", "xMinYMid")
        //         .call(resize);
        //
        //     // to register multiple listeners for same event type,
        //     // you need to add namespace, i.e., 'click.foo'
        //     // necessary if you call invoke this function for multiple svgs
        //     // api docs: https://github.com/mbostock/d3/wiki/Selections#on
        //     d3.select(window).on("resize." + container.attr("id"), resize);
        //
        //     // get width of container and resize svg to fit it
        //     function resize() {
        //         let targetWidth = parseInt(container.style("width"));
        //         svg.attr("width", targetWidth);
        //         svg.attr("height", Math.round(targetWidth / aspect));
        //     }
        // }
    }

}
