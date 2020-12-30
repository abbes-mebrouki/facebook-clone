import CovidPng from '../../imgs/covid-info.png'
import PagesPng from '../../imgs/pages.png'
import FriendsPng from '../../imgs/friends.png'
import GroupsPng from '../../imgs/groups.png'
import MarketplacePng from '../../imgs/marketplace.png'
import VideosPng from '../../imgs/videos.png'
import {BiChevronDown as MoreIcon} from 'react-icons/bi'


const LeftSidebarData = [
  {
    id: 1,
    label: 'COVID-19 Information Center',
    icon: CovidPng,
    subLabel: null
  },
  {
    id: 2,
    label: 'Pages',
    icon: PagesPng,
    subLabel: '9+ new'
  },
  {
    id: 3,
    label: 'Friends',
    icon: FriendsPng,
    subLabel: null
  },
  {
    id: 4,
    label: 'Groups',
    icon: GroupsPng,
    subLabel: null
  },
  {
    id: 5,
    label: 'Marketplace',
    icon: MarketplacePng,
    subLabel: null
  },
  {
    id: 6,
    label: 'Videos',
    icon: VideosPng,
    subLabel: '9+ new videos'
  },
  {
    id: 7,
    label: 'See More',
    icon: <MoreIcon />,
    moreItem: true
  },
]

export default LeftSidebarData