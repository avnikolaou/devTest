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
                console.log("My data: ", data);
                data.sources.map((article => {

                }));
        }.bind(this)).catch(() => {
            alert("Could not fetch date from API!!");
        });
        console.log("My articles" , this.state.articles);
    };

    render() {
        return (
            <div>
                <Header/>
                <Main/>
                <Footer/>
            </div>
        );
    }
}

export default App;
