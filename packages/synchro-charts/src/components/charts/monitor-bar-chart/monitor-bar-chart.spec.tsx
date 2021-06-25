/* eslint-disable import/first */
jest.mock('../../monitor-size-provider/renderChild');
jest.mock('../../monitor-webgl-context/webglContext');

import 'webgl-mock-threejs';
import { newChartSpecPage } from '../../../testing/chartDescriptions/newChartSpecPage';
import { describeChart } from '../../../testing/chartDescriptions/describeChart';

const barChart = newChartSpecPage('monitor-bar-chart');

describe('monitor-bar-chart', () => {
  describeChart(barChart);
});
