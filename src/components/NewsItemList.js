import React, { Component } from 'react';
import HN from '../utils/HN';

class NewsItemList extends Component {
  state = {
    news: []
  };

  getNews = () => {
    HN.search().then(items => {
      items.map(item => {
        return fetch(
          `https://hacker-news.firebaseio.com/v0/item/${item}.json?print=pretty`
        )
          .then(res => res.json())
          .then(newsItem => {
            this.setState(prevState => ({
              news: [...prevState.news, newsItem]
            }));
          });
      });
    });
  };

  render() {
    const newState = [...this.state.news];
    newState.sort((a, b) => b.score - a.score);

    return (
      <div className="news-list">
        <h1 style={{ textAlign: 'center' }}>Top News From Hacker News</h1>
        <button onClick={this.getNews}>Get them</button>
        <ul>
          {newState.map(newsItem => {
            return (
              <li>
                <a
                  key={newsItem.id}
                  rel="noopener noreferrer"
                  target="_blank"
                  href={newsItem.url}
                >
                  <p className="list-title">{newsItem.title}</p>
                  <p className="list-attr">
                    <span>
                      {newsItem.score} points by {newsItem.by}
                    </span>
                    |<span>{newsItem.descendants} comments</span>
                  </p>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default NewsItemList;
