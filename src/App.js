import React, { Component } from 'react';
import './App.css';
import Header from "./Header"
import Footer from "./Footer";
import Main from "./Main";

class App extends Component {

    state = {
        articles: []
    };

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        fetch("https://newsapi.org/v1/sources")
            .then((response) => {
                return response.json();
            }).then(function(data) {
                this.setState({
                    articles: data.sources
                })
        }.bind(this)).catch(() => {
            alert("Could not fetch date from API!!");
        });
    };

    render() {

        const {articles } = this.state;
        return (
            <div>
                <Header/>
                <div className="main-content">
                    <ol>
                        {this.state.articles.map(article => (
                            <p>{article.name}</p>
                        ))}
                    </ol>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default App;
