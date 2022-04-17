import { ReactComponent as MemberIcon } from '@assets/svg/member.svg'
import { ReactComponent as MembersIcon } from '@assets/svg/members.svg'
import { ReactComponent as LikeIcon } from '@assets/svg/like.svg'

export const navMenus = [
	{ id: 1, name: '팀 찾기', to: '/list' },
	{ id: 2, name: '커뮤니티', to: '/community' }
]

export const itsInfoDatas = [
	{
		id: 1,
		name: 'member',
		svg: MemberIcon,
		data: 10000,
		description: '누적 스터디 맴버 수'
	},
	{
		id: 2,
		name: 'members',
		svg: MembersIcon,
		data: 10000,
		description: '누적 스터디 개설 수'
	},
	{
		id: 3,
		name: 'liker',
		svg: LikeIcon,
		data: 4.5,
		description: '스터디 평균 만족도'
	}
]
