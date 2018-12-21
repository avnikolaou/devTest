import React, { Component } from "react"
import PropTypes from "prop-types"

class Main extends Component {

    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    previusPage(index) {

    };

    nextPage() {

    };


    render() {

        const { articles } = this.props;

        return (
            <div>
                <ul className="articles-grid">
                    {articles.map(article => (
                        <div key={article.id} className="article">
                            <div className="article-image">

                            </div>

                            <div className="article-title">
                                {article.name}
                            </div>

                            <div className="article-decription">
                                {article.description}
                            </div>

                            <div className="article-category">
                                {article.category}
                            </div>
                        </div>
                    ))}
                </ul>

            </div>
        )
    }
}

export default Main