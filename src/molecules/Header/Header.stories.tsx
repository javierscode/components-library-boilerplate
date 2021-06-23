import React from 'react'
import { Story, Meta } from '@storybook/react'

import Header, { HeaderProps } from './Header'

const config: Meta = {
  title: 'Molecules/Header',
  component: Header,
}

export default config

const Template: Story<HeaderProps> = (args) => <Header {...args} />

export const LoggedIn = Template.bind({})
LoggedIn.args = {
  user: {},
}

export const LoggedOut = Template.bind({})
LoggedOut.args = {}
