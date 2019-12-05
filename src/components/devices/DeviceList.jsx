import React from 'react'
import { Grid, Card } from 'semantic-ui-react'

import DeviceWidget from 'components/device/DeviceWidget'

const renderDeviceWidget = device => (
  <DeviceWidget
    key={device.id}
    device={device}
  />
)

const DeviceList = ({ devices }) => (
  <Grid>
    <div>
      <Card.Group>
        { devices.map(renderDeviceWidget) }
      </Card.Group>
    </div>
  </Grid>
)

export default DeviceList
