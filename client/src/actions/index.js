import {CREATE_STREAM, EDIT_STREAM, FETCH_STREAM, FETCH_STREAMS, SIGN_IN, SIGN_OUT} from "./types";
import streams from "../apis/streams";

export const signIn = (userId)  => {
    return {
        type: SIGN_IN
    };
};
export const signOut = ()  => {
    return {
        type: SIGN_OUT
    };
};

export const createStream = (formValues) => {
    return async (dispatch) => {
        const response = await streams.post('/streams', formValues);
        dispatch({ type: CREATE_STREAM, payload: response.data});
    }
};

export const fetchStreams = () => {
    return async (dispatch) => {
        const response = await streams.get('/streams');
        dispatch({ type: FETCH_STREAMS, payload: response.data});
    }
};

export const fetchStream = (id) => {
    return async (dispatch) => {
        const response = await streams.get(`/streams/${id}`);
        dispatch({ type: FETCH_STREAM, payload: response.data});
    }
};

export const editStream = (id, formValues) => {
    return async (dispatch) => {
        const response = await streams.put(`/streams/${id}`, formValues);
        dispatch({ type: EDIT_STREAM, payload: response.data});
    }
};

export const deleteStream = (id) => async dispatch => {
    await streams.put(`/streams/${id}`);
    dispatch({type: EDIT_STREAM, payload: id});
};
