import { Dispatch } from 'redux';
import axios from 'axios';

export function getDetails(url: string, successAction: any, errorAction: any) {
    return async (dispatch: Dispatch) => {
        try {
            const response = await axios.get(url)
            const { data } = response;

            return dispatch(successAction(data))
        } catch (error) {
            const { message } = error;
            return dispatch(errorAction(message))
        }
    }
}