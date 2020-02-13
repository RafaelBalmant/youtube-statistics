import { welcome, channel } from './Constants';
import Welcome from '../components/pages/Welcome'
import Channel from '../components/pages/Channel'

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