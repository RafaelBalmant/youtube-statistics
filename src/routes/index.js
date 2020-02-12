import { welcome, channel } from './Constants';
import Welcome from '../components/pages/welcome'
import Channel from '../components/pages/channel'

export const pages = [
  {
    path: welcome,
    component: Welcome
  },
  {
    path: channel,
    component: Channel
  }
];