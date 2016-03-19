import { combineReducers } from 'redux'
import todos from './todos'
import visibilityfilter from './visibilityFilter'

const todoApp = combineReducers({
    todos,
    visibilityFilter
})

export default todoApp
