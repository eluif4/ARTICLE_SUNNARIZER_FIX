const PORT = 8000;
const express = require('express');
const axios = require('axios');
const app = express();

const NEWS_API_KEY = 'a68babf024b34d22919d9121d3192ff9'; // Replace with your News API key

app.get('/top-headlines', async (req, res) => {
    try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${NEWS_API_KEY}`);
        const articles = response.data.articles.map(article => {
            return {
                title: article.title,
                author: article.author,
                link: article.url
            }
        });
        res.send(articles);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving top headlines from News API');
    }
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
