import { ChartSpecPage } from './newChartSpecPage';

const VIEW_PORT = { start: new Date(2000), end: new Date(2001, 0, 0), yMin: 0, yMax: 100 };

export const describeYRange = (newChartSpecPage: ChartSpecPage) => {
  describe('viewPort', () => {
    it('sets the provided viewport', async () => {
      const { chart } = await newChartSpecPage({ viewPort: VIEW_PORT });

      const baseChart = chart.querySelector('monitor-webgl-base-chart') as HTMLMonitorWebglBaseChartElement;

      expect(baseChart.viewPort.yMin).toBe(VIEW_PORT.yMin);
      expect(baseChart.viewPort.yMax).toBe(VIEW_PORT.yMax);
    });

    it.skip('ensures chart displays all y annotations when no y range provided in viewport', async () => {
      const LARGE_Y = 9999;
      const SMALL_Y = -9999;

      const { chart } = await newChartSpecPage({
        viewPort: {
          ...VIEW_PORT,
          yMin: undefined,
          yMax: undefined,
        },
        annotations: {
          y: [{ value: LARGE_Y, color: 'red' }, { value: SMALL_Y, color: 'red' }],
        },
      });

      const baseChart = chart.querySelector('monitor-webgl-base-chart') as HTMLMonitorWebglBaseChartElement;

      expect(baseChart.viewPort.yMin).toBeLessThanOrEqual(SMALL_Y);
      expect(baseChart.viewPort.yMax).toBeGreaterThanOrEqual(LARGE_Y);
    });

    it('ignores annotations when viewport y range provided', async () => {
      const LARGE_Y = 9999;
      const SMALL_Y = -9999;

      const { chart } = await newChartSpecPage({
        viewPort: VIEW_PORT,
        annotations: {
          y: [{ value: LARGE_Y, color: 'red' }, { value: SMALL_Y, color: 'red' }],
        },
      });

      const baseChart = chart.querySelector('monitor-webgl-base-chart') as HTMLMonitorWebglBaseChartElement;

      expect(baseChart.viewPort.yMin).toBe(VIEW_PORT.yMin);
      expect(baseChart.viewPort.yMax).toBe(VIEW_PORT.yMax);
    });
  });
};
