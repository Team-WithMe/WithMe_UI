import type { Context } from 'react'
import { createContext } from 'react'

export interface GridContextState {
	gutter?: [number, number]
}

const GridContext: Context<GridContextState> = createContext({})

export default GridContext
