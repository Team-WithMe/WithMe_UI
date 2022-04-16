import memberIcon from '@assets/images/member.png'
import membersIcon from '@assets/images/members.png'
import likeIcon from '@assets/images/like.png'

export const navMenus = [
	{ id: 1, name: '팀 찾기', to: '/list' },
	{ id: 2, name: '커뮤니티', to: '/community' }
]

export const itsInfoDatas = [
	{
		id: 1,
		name: 'member',
		img: memberIcon,
		data: 10000,
		description: '누적 스터디 맴버 수'
	},
	{
		id: 2,
		name: 'members',
		img: membersIcon,
		data: 10000,
		description: '누적 스터디 개설 수'
	},
	{
		id: 3,
		name: 'liker',
		img: likeIcon,
		data: 4.5,
		description: '스터디 평균 만족도'
	}
]
