/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import alphabets from './alphabets.json';
import classNames from 'classnames';

class EasyABC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alphabets: alphabets,
      currentPosition: 0,
      currentTick: 0
    };

    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
  }

  prev() {
    if (this.state.currentPosition > 0) {
      this.setState({ currentPosition: this.state.currentPosition - 1 });
    } else {
      this.setState({ currentPosition: this.state.alphabets.length - 1 });
    }
  }

  next() {
    if (this.state.currentPosition === this.state.alphabets.length - 1) {
      if (this.state.currentTick < 2) {
        this.setState({ currentTick: this.state.currentTick + 1 });
      } else {
        this.setState({ currentPosition: 0, currentTick: 0 });
      }
    } else {
      if (this.state.currentTick < 2) {
        this.setState({ currentTick: this.state.currentTick + 1 });
      } else {
        this.setState({
          currentPosition: this.state.currentPosition + 1,
          currentTick: 0
        });
      }
    }
  }

  render() {
    let showImage = this.state.currentTick !== 0 ? true : false;
    let showWord = this.state.currentTick === 2 ? true : false;
    console.log(this.state.currentTick, showImage);
    return (
      <div className='game'>
        <div className='option'>
          <div className='fields'>
            <div className='field-block'>
              {this.state.alphabets[this.state.currentPosition].letter}
            </div>
          </div>
          <div className='buttons'>
            <a onClick={this.prev} className='button prev'>
              Previous
            </a>
            <a className='button sound'>Play Sound</a>
            <a onClick={this.next} className='button next'>
              Next
            </a>
          </div>
          <div className='fields'>
            <div className='field-block'>
              <div className='left-field'>
                <div
                  className={classNames('placeholder-span', {
                    hide: showImage
                  })}
                >
                  Click Next to view Image
                </div>
                <img
                  className={classNames('letter-image', { hide: !showImage })}
                  src={this.state.alphabets[this.state.currentPosition].image}
                  alt={this.state.alphabets[this.state.currentPosition].word}
                />
              </div>
              <div className='right-field'>
                <div
                  className={classNames('placeholder-span', { hide: showWord })}
                >
                  Click Next to view Spelling
                </div>
                <div className={classNames('word', { hide: !showWord })}>
                  {this.state.alphabets[
                    this.state.currentPosition
                  ].word.toUpperCase()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EasyABC;
