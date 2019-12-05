import React from 'react'
import { Loader } from 'semantic-ui-react'

import Main from 'components/main/Main'

class App extends React.Component {

  state = { authenticated: false }

  componentDidMount() {
    setTimeout(() => this.setState({ authenticated: true }), 300)
  }

  render() {
    const { authenticated } = this.state

    return (
      authenticated ? <Main /> : <Loader active size='big' />
    )
  }
}

export default App
