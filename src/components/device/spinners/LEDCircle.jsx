import React from 'react'

const animation = status => (
  status === 'Running' ? 'lds-spin' : 'lds-frozen'
)

const LEDCircle = ({ status }) => (

  <div className='lds-css ng-scope'>
    <div id='full-size-centered' className={`${animation(status)} led-${status}`}>
      <div>
        <div>
        </div>
      </div>
      <div>
        <div>
        </div>
      </div>
      <div>
        <div>
        </div>
      </div>
      <div>
        <div>
        </div>
      </div>
      <div>
        <div>
        </div>
      </div>
      <div>
        <div>
        </div>
      </div>
      <div>
        <div>
        </div>
      </div>
      <div>
        <div>
        </div>
      </div>
    </div>
  </div>
)

export default LEDCircle
