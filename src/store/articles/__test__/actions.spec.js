import {GET_ARTICLES_REQUEST, getArticlesRequest} from "../actions";
// import {GET_ARTICLES_FAILURE} from "../actions";

describe('getArticlesReq', () => {
    it('should return obj with predefined type', function () {
        const expected = {
            type: GET_ARTICLES_REQUEST,
            // type: GET_ARTICLES_FAILURE,
        };

        const received = getArticlesRequest();

        expect(received).toEqual(expected); // объекты сравнивает не по ссылке, а преобразовывая в json
    });
});