import {
  HiOutlineHashtag,
  HiOutlineHome,
  HiOutlinePhotograph,
  HiOutlineUserGroup,
} from 'react-icons/hi';

export const genres = [
  { title: '流行', value: 'POP' },
  { title: '嘻哈', value: 'HIP_HOP_RAP' },
  { title: '舞曲', value: 'DANCE' },
  { title: '电子', value: 'ELECTRONIC' },
  { title: '灵魂', value: 'SOUL_RNB' },
  { title: '另类', value: 'ALTERNATIVE' },
  { title: '摇滚', value: 'ROCK' },
  { title: '拉丁', value: 'LATIN' },
  { title: '电影', value: 'FILM_TV' },
  { title: '乡村', value: 'COUNTRY' },
  { title: '全球', value: 'WORLDWIDE' },
  { title: '雷鬼', value: 'REGGAE_DANCE_HALL' },
  { title: '电子舞曲', value: 'HOUSE' },
  { title: '韩流', value: 'K_POP' },
];

export const links = [
  { name: '发现', to: '/', icon: HiOutlineHome },
  { name: '附近', to: '/around-you', icon: HiOutlinePhotograph },
  { name: '热门歌手', to: '/top-artists', icon: HiOutlineUserGroup },
  { name: '热门榜单', to: '/top-charts', icon: HiOutlineHashtag },
];
