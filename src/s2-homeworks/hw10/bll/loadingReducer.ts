const initState = {
    isLoading: false,
}

export const loadingReducer = (state = initState, action: LoadingActionType) => { // fix any
    switch (action.type) {
        // пишет студент  // need to fix

        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})
