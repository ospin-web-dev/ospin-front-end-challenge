import React from 'react'
import { Label } from 'semantic-ui-react'
import injectSheet from 'react-jss'

const styles = {
  parent: {
    display: 'flex',
    width: props => (props.fluid ? '100%' : undefined),
    opacity: '1',
    justifyContent: 'space-between',
  },
}

const DeviceHeader = ({ name, classes }) => (
  <div className={classes.parent}>
    <Label basic style={{ fontSize: '11pt', padding: '0 8px 0 0', border: '0' }}>
      {name}
    </Label>
  </div>
)

export default injectSheet(styles)(DeviceHeader)
