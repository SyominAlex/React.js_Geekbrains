import {apiUrl} from "../../utils/constants";
import {useState} from "react";
import {CircularProgress} from "@mui/material";

export const Articles = () => {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const sendRequest = async () => {
        try {
            setLoading(true);
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`Response failed with status ${response.status}`);
            }
            console.log('response', response);

            const result = await response.json();
            console.log('result', result);
            setArticles(result);
        } catch (e) {
            console.log(e);
            setError(e.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="articles">
                <h3>Articles</h3>
                <button onClick={sendRequest}>Get</button>
                {loading && <CircularProgress />}
                {error && <h4>{error}</h4>}
                <ul>
                    {articles.map((article) => (
                        <li key={article.id}>{article.title}</li>
                    ))}
                </ul>
            </div>
        </>
    );
};