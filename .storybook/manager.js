// .storybook/manager.js

import { addons } from '@storybook/addons'
import { themes } from '@storybook/theming'

addons.setConfig({
  theme: {
    ...themes.normal,
    appContentBg: '#f5f5f5'
  }
})
