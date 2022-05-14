import {GET_ARTICLES_REQUEST, getArticlesRequest, getArticles, getArticlesSuccess} from "../actions";
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

// async - не "чистая функция", зависит от того, как выполнился fetch, используются моки, шпионы и стабы
// mock - сторонний объект, который полностью имитирует поведение объекта в той части, которая нас интересует (библиотека jest-fetch-mock вместо настоящего fetch использует mock)
// fetch возвращает промис, резолвится в объект response, который имеет метод json, который возвращает промис и резолвится в json
/* Эта настройка говорит, что не нужно после запуска каждого теста сбрасывать моки:
"jest": {
"resetMocks": false
} */

describe('getArticles', () => {
    it('dispatches getArticleRequest', () => {
        const mockDispatch = jest.fn();
        getArticles()(mockDispatch);

        expect(mockDispatch).toHaveBeenCalledWith(getArticlesRequest());
    });

    it('dispatches getArticleSuccess with fetch result', async () => {
        const data = [{name: 'test'}];
        fetch.mockResponse(JSON.stringify(data));
        const mockDispatch = jest.fn();

        await getArticles()(mockDispatch);
        expect(mockDispatch).toHaveBeenLastCalledWith(getArticlesSuccess(data));
    });
})
