import React, { Component } from "react"
import PropTypes from "prop-types"

class Main extends Component {

    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    render() {

        const {article} = this.props;
        return (
            <li>
                <div className="article">
                    <div className="article-image">

                    </div>

                    <div className="article-title">

                    </div>

                    <div className="article-decripiton">

                    </div>

                    <div className="article-cateogory">{article.category}</div>
                </div>
            </li>
        )
    }
}

export default Main