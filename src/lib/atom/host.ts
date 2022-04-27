import { atom } from 'recoil'

import { HostGoalDataType, HostSkillsDataType } from '@typings/host'

export const nextStepValidState = atom<boolean>({
	key: 'nextStepValidState',
	default: false
})

export const hostGoalState = atom<HostGoalDataType>({
	key: 'hostGoalState',
	default: 'project'
})

export const hostSkillsState = atom<Array<HostSkillsDataType>>({
	key: 'hostSkillsState',
	default: []
})

export const hostNameState = atom<string>({
	key: 'hostNameState',
	default: ''
})

export const hostDescriptionState = atom<string>({
	key: 'hostDescriptionState',
	default: ''
})
