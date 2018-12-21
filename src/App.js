import React, { Component } from 'react';
import './App.css';
import Header from "./Header"
import Footer from "./Footer";
import Main from "./Main";

class App extends Component {

    state = {
        articles: [],
        displaying_articles: [],
        currentIndex: 1
    };

    componentDidMount() {
        this.fetchData();
    };

    previusPage(index) {
        
    };

    nextPage(){

    };

    fetchData() {
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

        const {displaying_articles, articles, currentIndex} = this.state;

        const total_articles = articles.length;
        const articles_per_view = 6;
        const total_pages = Math.ceil(total_articles / articles_per_view);
        let current_page = 1;

        for (let x = 0; x < articles_per_view; x++ ) {
            if (articles[x] !== undefined){
                displaying_articles.push(articles[x])
            }
        }

        return (
            <div>
                <div className="main-container">
                    <Header/>
                    <Main articles={displaying_articles}/>
                    <div className="displaying-information">
                        <p>Displaying page <button className="previous" onClick={this.previusPage(current_page)}>&#8249;</button> {currentIndex} of {total_pages} <button className="next" onClick={this.nextPage(current_page)}>&#8250;</button></p>
                    </div>
                    <Footer/>
                </div>

            </div>
        );
    }
}

export default App;
