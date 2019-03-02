export default {
    namespace: 'counter',
    state: {
        "v": 100
    },
    reducers: {
        add(state, {type, payload}) {
            return {
                ...state,
                "v": state.v + payload.number
            }
        },
        minus(state, {type, payload}) {
            return {
                ...state,
                "v": state.v - payload.number
            }
        }
    }
}