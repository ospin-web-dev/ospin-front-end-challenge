import React from 'react'
import { Container, Sidebar, Menu, Icon, Image, Divider } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'

import logoIcon from 'images/logoIcon.png'


class OspinSidebar extends React.Component {

  getCurrentTabFromUrl() {
    const { location: { pathname } } = this.props
    const activeTab = pathname.substr(1)
    return activeTab || ''
  }

  changeMenuTabHandler = tab => {
    const { history } = this.props
    history.push(`/${tab}`)
  }

  render() {
    const activeTab = this.getCurrentTabFromUrl()

    return (
      <Container>
        <Sidebar as={Menu} visible vertical className='medium with-margin-r'>

          <Divider hidden />
          <Image src={logoIcon} centered />
          <Divider hidden />

          <Menu.Item
            active={activeTab === 'devices'}
            onClick={() => this.changeMenuTabHandler('devices')}
            as='a'
          >
            <Icon name='hdd' />
            Devices
          </Menu.Item>

          <Menu.Item
            active={activeTab === 'profile'}
            onClick={() => this.changeMenuTabHandler('profile')}
            as='a'
          >
            <Icon name='user' />
            Profile
          </Menu.Item>

          <Menu.Item
            active={activeTab === 'notifications'}
            onClick={() => this.changeMenuTabHandler('notifications')}
            as='a'
          >
            <Icon name='bell' color='red' />
            Notifications
          </Menu.Item>

          <Menu.Item
            active={activeTab === 'changelog'}
            onClick={() => this.changeMenuTabHandler('changelog')}
            as='a'
          >
            <Icon name='question circle' color='red' />
            Changelog
          </Menu.Item>

          <Menu.Item disabled as='a'>
            <Icon name='log out' />
            Logout
          </Menu.Item>

        </Sidebar>
      </Container>
    )
  }
}

export default withRouter(OspinSidebar)
