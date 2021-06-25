import { newSpecPage } from '@stencil/core/testing';
import { Components } from '../../../../components.d';
import { CustomHTMLElement } from '../../../../utils/types';
import { update } from '../../common/tests/merge';
import { MonitorStatusTimelineOverlayRow } from './monitor-status-timeline-overlay-row';
import { MonitorDataStreamName } from '../../../monitor-data-stream-name/monitor-data-stream-name';

const rowSpecPage = async (propOverrides: Partial<Components.MonitorStatusTimelineOverlayRow> = {}) => {
  const page = await newSpecPage({
    components: [MonitorStatusTimelineOverlayRow, MonitorDataStreamName],
    html: '<div></div>',
    supportsShadowDom: false,
  });
  const row = page.doc.createElement('monitor-status-timeline-overlay-row') as CustomHTMLElement<
    Components.MonitorStatusTimelineOverlayRow
  >;

  const props: Components.MonitorStatusTimelineOverlayRow = {
    label: 'some-label',
    onNameChange: () => {},
    isEditing: false,
    ...propOverrides,
  };

  update(row, props);
  page.body.appendChild(row);

  await page.waitForChanges();

  return { page, row };
};

it('renders a row', async () => {
  const label = 'my cool label';
  const { row } = await rowSpecPage({ label });

  expect(row.innerHTML).toContain(label);
});

it('renders a numerical point, and appropriately rounds', async () => {
  const value = 123.12345;
  const { row } = await rowSpecPage({ value });

  expect(row.innerHTML).toContain(Math.round(value));
  expect(row.innerHTML).not.toContain(value);
});

it('renders a string value', async () => {
  const value = 'some string value';

  const { row } = await rowSpecPage({ value });

  expect(row.innerHTML).toContain(value);
});

it('renders the unit when a value is present', async () => {
  const unit = 'my unit';
  const { row } = await rowSpecPage({ value: 'some-string', unit });

  expect(row.innerHTML).toContain(unit);
});

it('does not render the unit when a point is not present', async () => {
  const unit = 'my unit';
  const { row } = await rowSpecPage({ value: undefined, unit });

  expect(row.innerHTML).not.toContain(unit);
});
