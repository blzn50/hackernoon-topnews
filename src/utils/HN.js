const api = `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`;

const HN = {
  search() {
    return fetch(api)
      .then(res => res.json())
      .then(news => {
        return news;
      });
  }
};

export default HN;
