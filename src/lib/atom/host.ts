import { atom } from 'recoil'

import { HostGoalDataType, HostSkillsDataType } from '@typings/host'

export const HostGoalState = atom<HostGoalDataType>({
	key: 'HostGoalState',
	default: 'project'
})

export const HostSkillsState = atom<Array<HostSkillsDataType>>({
	key: 'HostSkillsState',
	default: []
})

export const HostNameState = atom<string>({
	key: 'HostNameState',
	default: ''
})

export const HostDescriptionState = atom<string>({
	key: 'HostDescriptionState',
	default: ''
})
