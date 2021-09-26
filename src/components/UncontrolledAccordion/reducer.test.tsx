import {reducer, StateType, TOGGLE_COLLAPSED} from "./reducer";

test('collapsed should be true', () => {

    //data
    const state: StateType = {
        collapsed: false
    }

    //action
    const newStateReducer = reducer(state, {type: TOGGLE_COLLAPSED})

    //expection
    expect(newStateReducer.collapsed).toBe(true)
})

test('collapsed should be false', () => {

    //data
    const state: StateType = {
        collapsed: true
    }

    //action
    const newStateReducer = reducer(state, {type: TOGGLE_COLLAPSED})

    //expection
    expect(newStateReducer.collapsed).toBe(false)
})

test('reducer should throw error because action type is incorrect', () => {

    //data
    const state: StateType = {
        collapsed: true
    }

    //expection
    expect(() => {
        reducer(state, {type: 'FAKE'})
    }).toThrowError()
})

