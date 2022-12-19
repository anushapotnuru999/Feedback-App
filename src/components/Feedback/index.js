// Write your React code here.

import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isFeedback: true}

  onLove = () => {
    this.setState({isFeedback: false})
  }

  render() {
    const {isFeedback} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources

    return (
      <div className="bg-container">
        {isFeedback && (
          <div className="card1">
            <h1 className="heading">
              How satisfied are you with our customer support performance?
            </h1>
            <ul className="emoji-container">
              {emojis.map(eachEmoji => (
                <li key={eachEmoji.id} className="inside-cont">
                  <button
                    onClick={this.onLove}
                    className="button"
                    type="button"
                  >
                    <img
                      className="emoji-size"
                      src={eachEmoji.imageUrl}
                      alt={eachEmoji.name}
                    />
                  </button>
                  <p className="paragraph">{eachEmoji.name}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {!isFeedback && (
          <div className="card2">
            <img className="love-emoji" alt="love emoji" src={loveEmojiUrl} />
            <h1 className="heading2">Thank you!</h1>
            <p className="paragraph2">
              We will use your feedback to serve better, thank you.
            </p>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback
