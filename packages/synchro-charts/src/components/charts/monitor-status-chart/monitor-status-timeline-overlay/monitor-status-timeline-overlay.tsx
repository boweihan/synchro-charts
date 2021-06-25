import { Component, Event, EventEmitter, h, Prop, State } from '@stencil/core';
import { DataStream, SizeConfig } from '../../../../utils/dataTypes';
import { WidgetConfigurationUpdate, Threshold } from '../../common/types';
import { breachedThreshold } from '../../common/annotations/breachedThreshold';
import { closestPoint } from '../../monitor-webgl-base-chart/activePoints';
import { NameValue, updateName } from '../../../monitor-data-stream-name/helper';
import { getDataPoints } from '../../../../utils/getDataPoints';

import { DATA_ALIGNMENT, StatusIcon } from '../../common/constants';

const SMUDGE_WIDTH_PX = 1; // We slice off a tiny bit of width to prevent some pixels showing under antialiasing

@Component({
  tag: 'monitor-status-timeline-overlay',
  styleUrl: 'monitor-status-timeline-overlay.css',
  shadow: false,
})
export class MonitorStatusTimelineOverlay {
  @Prop() size!: SizeConfig;
  @Prop() dataStreams!: DataStream[];
  @Prop() thresholds!: Threshold[];
  @Prop() date!: Date;
  @Prop() widgetId!: string;
  @Prop() isEditing!: boolean;

  /** Widget data stream names */
  @State() names: NameValue[] = [];

  @Event()
  widgetUpdated: EventEmitter<WidgetConfigurationUpdate>;

  /**
   * On Widget Updated - Persist `DataStreamInfo`
   *
   * Emits an event which persists the current `NameValue[]` state into the
   * data stream info.
   */
  onWidgetUpdated() {
    const { widgetId, dataStreams } = this;
    // Construct the config update with the new names specified.
    const configUpdate: WidgetConfigurationUpdate = {
      widgetId,
      dataStreams: dataStreams.map(info => {
        const nameValue = this.names.find(({ id: nameId }) => info.id === nameId);
        const name = nameValue != null ? nameValue.name : info.name;
        return {
          id: info.id,
          name,
        };
      }),
    };
    this.widgetUpdated.emit(configUpdate);
  }

  onChangeLabel = ({ streamId, name }: { streamId: string; name: string }): void => {
    this.names = updateName(this.names, name, streamId);
    this.onWidgetUpdated();
  };

  render() {
    const { width, height, marginLeft, marginRight, marginTop, marginBottom } = this.size;
    return (
      <div
        class="overlay-container"
        style={{
          width: `${width - marginRight - marginLeft - SMUDGE_WIDTH_PX}px`,
          height: `${height - marginTop - marginBottom}px`,
          left: `${marginLeft}px`,
          top: `${marginTop}px`,
        }}
      >
        {this.dataStreams.map(dataStream => {
          const point = closestPoint(getDataPoints(dataStream, dataStream.resolution), this.date, DATA_ALIGNMENT.LEFT);
          const value = point ? point.y : undefined;

          const threshold = breachedThreshold({
            value,
            date: this.date,
            dataStreams: this.dataStreams,
            dataStream,
            thresholds: this.thresholds,
          });

          const { error } = dataStream;
          const displayedValue = error == null ? value : error;
          const displayedUnit = error == null ? dataStream.unit : undefined;
          const valueColor = error == null && threshold != null ? threshold.color : undefined;
          return (
            <monitor-status-timeline-overlay-row
              key={dataStream.id}
              label={dataStream.name}
              detailedLabel={dataStream.detailedName}
              value={displayedValue}
              unit={displayedUnit}
              isEditing={this.isEditing}
              valueColor={valueColor}
              icon={error == null ? threshold && threshold.icon : StatusIcon.ERROR}
              onNameChange={(name: string) => this.onChangeLabel({ streamId: dataStream.id, name })}
            />
          );
        })}
      </div>
    );
  }
}
