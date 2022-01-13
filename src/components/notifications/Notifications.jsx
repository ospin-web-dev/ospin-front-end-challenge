import React from 'react'
import { withRouter } from 'react-router-dom'
import { Container, Segment, Image } from 'semantic-ui-react'

import BioBoxFuturism from 'images/bio_box_futurism.jpg'

const Notifications = () => (
  <Container>
    <Segment>
      <Image src={BioBoxFuturism} size='large' centered style={{ padding: '20px' }} />
    </Segment>
  </Container>
)

export default withRouter(Notifications)
