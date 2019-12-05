/* eslint react/jsx-one-expression-per-line: "off" */
import React from 'react'

import { getDisplayableDaysHoursMinutes } from 'utils/time'

const bigTimeStyle = {
  display: 'flex',
  justifyContent: 'space-evenly',
  flexDirection: 'column',
  alignItems: 'center',
  fontSize: '30px',
  width: '50%',
  margin: '0px',
  padding: '0px',
  color: '#aaa',
}

const littleTimeStyle = {
  fontSize: '18px',
  color: '#bbb',
  padding: '0 0 3px 0',
}

const littleDigitStyle = {
  fontSize: '15px',
  margin: '0 2px 0 0',
}

const renderDays = days => {
  const unit = days === 1 ? 'day' : 'days'
  return `${days} ${unit}`
}

const renderHoursAndMinutes = (hours, minutes) => (
  <span>
    { `${hours}` }<span style={littleDigitStyle}>h</span>{ `${minutes}` }<span style={littleDigitStyle}>m</span>
  </span>
)

const DurationDisplay = ({ ms, customStyles }) => {
  const { days, hours, minutes } = getDisplayableDaysHoursMinutes(ms)

  return (
    <div className='center aligned' style={{ ...bigTimeStyle, ...customStyles }}>
      <span style={littleTimeStyle}>
        { days ? renderDays(days) : null }
      </span>
      { renderHoursAndMinutes(hours, minutes) }
    </div>
  )
}

export default DurationDisplay
