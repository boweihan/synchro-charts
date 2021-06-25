import { Component, h, State } from '@stencil/core';
import { SECOND_IN_MS } from '../../../../utils/time';
import { DataPoint, ViewPort } from '../../../../utils/dataTypes';
import { DataType } from '../../../../utils/dataConstants';

// viewport boundaries
const Y_MIN = 0;
const Y_MAX = 5000;
const X_MIN = new Date(1998, 0, 0);
const X_MAX = new Date(2000, 0, 1);

// test data point dead center of the viewport
const TEST_DATA_POINT: DataPoint<number> = {
  x: (X_MIN.getTime() + X_MAX.getTime()) / 2,
  y: (Y_MIN + Y_MAX) / 2,
};

const urlParams = new URLSearchParams(window.location.search);
const dataPerRoundParam = urlParams.get('dataPerRound');
const roundFrequencyParam = urlParams.get('roundFrequency');
const viewportSpeedParam = urlParams.get('viewPortSpeed');

const DATA_SIZE_BATCH = dataPerRoundParam ? Number.parseInt(dataPerRoundParam, 10) : 1;
const DATA_FREQUENCY_MS = roundFrequencyParam ? Number.parseInt(roundFrequencyParam, 10) : SECOND_IN_MS;
const VIEWPORT_SPEED = viewportSpeedParam ? Number.parseInt(viewportSpeedParam, 10) : 0;

const createData = (point: DataPoint<number>): DataPoint<number>[] =>
  new Array(DATA_SIZE_BATCH).fill(0).map((_, i) => ({
    x: point.x,
    y: point.y + i,
  }));

@Component({
  tag: 'monitor-line-chart-stream-data',
})
export class MonitorLineChartStreamData {
  @State() dataPoints: DataPoint<number>[] = [TEST_DATA_POINT];
  @State() viewPort: ViewPort = { start: X_MIN, end: X_MAX, yMin: Y_MIN, yMax: Y_MAX };
  private dataLoop: number;
  private viewPortShifter: number | undefined;

  viewPortLoop = () =>
    window.requestAnimationFrame(() => {
      this.viewPort = {
        ...this.viewPort,
        start: new Date(this.viewPort.start.getTime() + VIEWPORT_SPEED),
        end: new Date(this.viewPort.end.getTime() + VIEWPORT_SPEED),
      };
      this.viewPortShifter = this.viewPortLoop();
    });

  componentWillLoad() {
    if (VIEWPORT_SPEED > 0) {
      this.viewPortShifter = this.viewPortLoop();
    }

    this.dataLoop = window.setInterval(() => {
      this.dataPoints = [
        ...this.dataPoints,
        ...createData({
          x: (this.dataPoints[this.dataPoints.length - 1].x + X_MAX.getTime()) / 2,
          y: TEST_DATA_POINT.y,
        }),
      ];
    }, DATA_FREQUENCY_MS);
  }

  disconnectedCallback() {
    clearInterval(this.dataLoop);
    if (this.viewPortShifter != null) {
      window.cancelAnimationFrame(this.viewPortShifter);
    }
  }

  render() {
    return (
      <div id="chart-container" style={{ border: '1px solid lightgray', height: '500px', width: '500px' }}>
        <monitor-line-chart
          widgetId="widget-id"
          dataStreams={[
            {
              id: 'test',
              color: 'black',
              name: 'test stream',
              data: this.dataPoints,
              resolution: 0,
              dataType: DataType.NUMBER,
            },
          ]}
          size={{
            height: 500,
            width: 500,
          }}
          viewPort={this.viewPort}
        />
        <monitor-webgl-context />
      </div>
    );
  }
}
