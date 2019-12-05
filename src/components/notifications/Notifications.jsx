import React from 'react'
import { withRouter } from 'react-router-dom'
import { Container, Segment, Image } from 'semantic-ui-react'

import bio_box_futurism from 'images/bio_box_futurism.jpg'

const Notifications = () => (
  <Container>
    <Segment>
      <Image src={bio_box_futurism} size='large' centered style={{ padding: '20px' }} />
    </Segment>
  </Container>
)

export default withRouter(Notifications)
