import {apiUrl} from "../../utils/constants";

export const GET_ARTICLES_REQUEST = "ARTICLES::GET_ARTICLES_REQUEST";
export const GET_ARTICLES_SUCCESS = "ARTICLES::GET_ARTICLES_SUCCESS";
export const GET_ARTICLES_FAILURE = "ARTICLES::GET_ARTICLES_FAILURE";

export const getArticlesRequest = () => ({
    type: GET_ARTICLES_REQUEST,
});

export const getArticlesSuccess = (data) => ({
    type: GET_ARTICLES_SUCCESS,
    payload: data,
});

export const getArticlesFailure = (error) => ({
    type: GET_ARTICLES_FAILURE,
    payload: error,
});

export const getArticles = () => async (dispatch) => {
    try {
        dispatch(getArticlesRequest());

        const response = await fetch(apiUrl);
        // try fetch with params from https://gbcdn.mrgcdn.ru/uploads/asset/3839580/attachment/091d1578a175eac2013778fc532b0b0f.pdf
        // const response = await fetch(apiUrl, {
        //     method: 'GET',
        //     _limit: 5, // parameter don't work https://api.spaceflightnewsapi.net/v3/documentation#/Article/get_articles
        //     mode: 'cors',
        //     cache: 'no-cache',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // });

        if (!response.ok) {
            throw new Error(`Response failed with status ${response.status}`);
        }
        // console.log('response', response);

        const result = await response.json();
        dispatch(getArticlesSuccess(result));
    } catch (e) {
        // console.log(e);
        dispatch(getArticlesFailure(e.message));
    }
};