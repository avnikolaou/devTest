import React, { Component } from "react"
import PropTypes from "prop-types"

class Main extends Component {

    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    render() {

        const {articles} = this.props;

        return (
            <ul className="articles-grid">
                {articles.map(article => (
                    <div className="article">
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
        )
    }
}

export default Main