import { ReactComponent as MemberIcon } from '@assets/svg/member.svg'
import { ReactComponent as MembersIcon } from '@assets/svg/members.svg'
import { ReactComponent as LikeIcon } from '@assets/svg/like.svg'

//* common
export const navMenus = [
	{ id: 1, name: '팀 찾기', to: '/list' },
	{ id: 2, name: '커뮤니티', to: '/community' }
]

//* main page
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

//* host page
export const checkModalData = {
	title: '팀 만들기 취소',
	description: `팀 만들기를 취소 하시겠습니까?
지금까지의 내용들은 복구 할 수 없습니다.
	`
}

export const hostTitle = [
	'팀 목적 정하기',
	'기술 선택하기',
	'팀이름 정하기',
	'팀 설명 입력하기',
	'팀을 성공적으로 만들었습니다!'
]

export const hostLink = [
	{ prev: 'openModal', next: '/host/skils' },
	{ prev: '/host/goal', next: '/host/name' },
	{ prev: '/host/skils', next: '/host/description' },
	{ prev: '/host/name', next: '/host/success' },
	{ prev: '/host/description', next: 'openModal' }
]
