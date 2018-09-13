import {
    ADD_SPARE_REQUEST,
    ADD_SPARE_SUCCESS,
    ADD_SPARE_ERROR,
    DELETE_SPARE_REQUEST,
    DELETE_SPARE_SUCCESS,
    CLEAR_ERROR
} from '../constants'

export function addSpare(text, className) {
    return dispatch => {

        setTimeout(() => {
            dispatch({ type: ADD_SPARE_REQUEST })
            if(className === 'roof') {
                document.querySelector(`.${className}`).childNodes[1].attributes['fill'].nodeValue = '#7C7E8F'
                dispatch({
                    type: ADD_SPARE_ERROR,
                    payload: 'Имитация ошибки.'
                })
            } else {
                dispatch({
                    type: ADD_SPARE_SUCCESS,
                    payload: {
                        text: text,
                        className: className
                    }
                })
            }
        }, 1000)
    }
}

export function deleteSpare(id) {
    return dispatch => {
        setTimeout(() => {
            dispatch({type: DELETE_SPARE_REQUEST})
            document.querySelector(`.${id}`).childNodes[1].attributes['fill'].nodeValue = '#7C7E8F'
            dispatch({
                type: DELETE_SPARE_SUCCESS,
                payload: id
            })
        }, 1000)
    }
}

export function clearError() {
    return dispatch => {
        dispatch({ type: CLEAR_ERROR })
    }
}