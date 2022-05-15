import { articlesReducer } from "../reducer";
import {FETCH_STATUSES} from "../../../utils/constants";
import {getArticlesRequest} from "../actions";

describe('articles reducer', () => {
    it('should set error to null if called with request action', function () {
        const result = articlesReducer({
            data: [],
            status: FETCH_STATUSES.IDLE,
            error: "some error",
        }, getArticlesRequest()
    );
    expect(result.error).toBeNull();
    });
});