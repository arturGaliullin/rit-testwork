import {
    ADD_SPARE_REQUEST,
    ADD_SPARE_SUCCESS,
    ADD_SPARE_ERROR,
    DELETE_SPARE_REQUEST,
    DELETE_SPARE_SUCCESS,
    CLEAR_ERROR
} from '../constants'

const defaultProps = {
    spares: [],
    error: '',
    loading: false
}

export default (state = defaultProps, action = {}) => {
    switch (action.type) {
        case ADD_SPARE_REQUEST: {
        return {
            ...state,
            loading: true
        }
    }

        case ADD_SPARE_SUCCESS: {
            return {
                ...state,
                loading: false,
                spares: [...state.spares, { id: action.payload.className,  text: action.payload.text,}]
            }
        }

        case ADD_SPARE_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }

        case DELETE_SPARE_REQUEST: {
            return {
                ...state,
                loading: true
            }
        }

        case DELETE_SPARE_SUCCESS: {
            return {
                ...state,
                loading: false,
                spares: state.spares.filter(spare => spare.id !== action.payload)
            }
        }

        case CLEAR_ERROR: {
            return {
                ...state,
                error: ''
            }
        }

        default: {
            return state
        }
    }
}