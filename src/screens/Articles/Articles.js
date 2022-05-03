import {apiUrl} from "../../utils/constants";
import {useState} from "react";

export const Articles = () => {
    const [articles, setArticles] = useState([]);
    const sendRequest = async () => {
        try {
            const response = await fetch(apiUrl);
            console.log('response', response);

            const result = await response.json();
            console.log('result', result);
            setArticles(result);
        } catch (e) {
            console.log(e)}
    };

    return (
        <>
            <div className="articles">
                <h3>Articles</h3>
                <button onClick={sendRequest}>Get</button>
                <ul>
                    {articles.map((article) => (
                        <li key={article.id}>{article.title}</li>
                    ))}
                </ul>
            </div>
        </>
    );
};