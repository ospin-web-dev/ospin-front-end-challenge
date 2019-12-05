/* eslint react/jsx-one-expression-per-line: "off" */
import React, { useState, useEffect } from 'react'
import { Card, Image, Container } from 'semantic-ui-react'

import bioreactorOnlineImage from 'images/bioreactor_online_cropped.png'
import bioreactorOfflineImage from 'images/bioreactor_offline_cropped.png'

import DurationDisplay from 'components/misc/DurationDisplay'
import LEDCircle from 'components/device/spinners/LEDCircle'
import DeviceHeader from 'components/device/DeviceHeader'
import {
  getDisplayDay,
  getDisplayTime,
} from 'utils/time'

const processMetaDataStyle = {
  width: '50%',
  margin: '0px',
  padding: '0px',
  boxShadow: '2px 0px 0px #eee',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
}

const notRunningStyle = {
  justifyContent: 'center',
  alignItems: 'center',
  height: '57px',
  display: 'flex',
}

const DEFAULT_DISPLAY = { image: bioreactorOfflineImage, statusText: 'Offline', textColor: 'status-grey' }

const displayMap = {
  online: {
    idle: { image: bioreactorOnlineImage, statusText: 'Online', textColor: 'status-green' },
    running: { image: bioreactorOnlineImage, statusText: 'Running', textColor: 'status-blue' },
    paused: { image: bioreactorOnlineImage, statusText: 'Paused', textColor: 'status-orange' },
  },
  offline: {
    idle: { image: bioreactorOfflineImage, statusText: 'Offline', textColor: 'status-grey' },
    running: { image: bioreactorOfflineImage, statusText: 'Offline', textColor: 'status-grey' },
    paused: { image: bioreactorOfflineImage, statusText: 'Offline', textColor: 'status-grey' },
  },
}

const renderRunning = ({ startedAtDay, startedAtTime, startedBy, name, duration }) => (
  <Card.Description>
    <Card.Content extra className='meta ui internally celled grid'>
      <div style={processMetaDataStyle}>
        <strong>{name}</strong>
        <br />
        started by <strong>{startedBy}</strong>
        <br />
        on <strong>{startedAtDay}</strong>at <strong>{startedAtTime}</strong>
      </div>
      <DurationDisplay ms={duration} />
    </Card.Content>
  </Card.Description>
)

const renderNotRunning = connectionState => (
  <Card.Description>
    <div className='meta' style={notRunningStyle}>
      <span style={{ fontSize: '15pt' }}>
        {connectionState === 'online' ? 'ready for process' : 'ready to connect'}
      </span>
    </div>
  </Card.Description>
)

const continuouslyUpdateRunningData = setRunningData => {
  const fakeStartTime = Date.now() - (Math.random() * 60000 * 300)
  const fakeStartDay = new Date(fakeStartTime)

  setRunningData({
    startedAt: fakeStartTime,
    startedBy: Math.round(Math.random()) ? 'Karl der Große' : 'Katharina die Große',
    duration: Date.now() - fakeStartTime,
    startedAtDay: getDisplayDay(fakeStartDay),
    startedAtTime: getDisplayTime(fakeStartDay),
  })

  return setInterval(() => {
    setRunningData(prevRunningData => ({
      ...prevRunningData,
      duration: (Date.now() - fakeStartTime),
    }))
  }, 15000)
}

const DeviceWidget = ({ device }) => {
  const {
    connectionState,
    name,
    state,
    type,
  } = device

  const { image, statusText, textColor } = displayMap[connectionState][state] || DEFAULT_DISPLAY

  const [runningData, setRunningData] = useState(null)

  const isActive = (statusText === 'Running' || statusText === 'Paused')

  useEffect(() => {
    if (isActive) {
      const interval = continuouslyUpdateRunningData(setRunningData)
      return () => clearInterval(interval)
    }
  }, [isActive])

  return (
    <Card style={{ marginLeft: '10px' }}>

      <Card.Content>
        <Card.Header>
          <Image floated='left' size='tiny' src={image} />
          <DeviceHeader
            name={name}
            fontSize='1em'
            hover
          />
        </Card.Header>
        <Card.Meta>{type}</Card.Meta>
        {runningData ? renderRunning(runningData) : renderNotRunning(connectionState)}
      </Card.Content>

      <Card.Content extra className='center aligned'>
        <div className='position-relative'>
          <Container
            id='device-widget-status-text'
            className={`${textColor} position-absolute center-vertical`}
          >
            {statusText}
          </Container>
          <LEDCircle status={statusText} />
        </div>
      </Card.Content>

    </Card>
  )
}

export default DeviceWidget
