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
                });
        }.bind(this)).catch(() => {
            alert("Could not fetch date from API!!");
        });
    };

    render() {

        const {articles } = this.state;
        return (
            <div>
                <div className="main-container">
                    <Header/>
                    <Main articles={this.state.articles}/>
                    <Footer/>
                </div>

            </div>
        );
    }
}

export default App;
