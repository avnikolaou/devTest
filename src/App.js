import React, { Component } from 'react';
import './App.css';
import Header from "./Header"
import Footer from "./Footer";
import Main from "./Main";
import { PropTypes } from "prop-types"

class App extends Component {

    state = {
        articles: []
    };

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=82489bc81afb4a4eb82faa9bb8592d9c")
            .then((response) => {
                return response.json();
            }).then(function(data) {
            data.forEach((article) => {
                this.props.articles = article;
            })
        }.bind(this)).catch(() => {
            alert("Could not fetch date from API!!");
        });
        console.log("My articles" , this.state.articles);
    };

    render() {
        return (
            <div>
                <Header/>
                {/*<Main/>*/}
                <Footer/>
            </div>
        );
    }
}

export default App;
