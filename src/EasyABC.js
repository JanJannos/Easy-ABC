/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import alphabets from './alphabets.json';

class EasyABC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alphabets: alphabets,
      currentPosition: 0
    };
  }

  render() {
    return (
      <div className='game'>
        <div className='option'>
          <div className='fields'>
            <div className='field-block'>
              {this.state.alphabets[this.state.currentPosition].letter}
            </div>
          </div>
          <div className='buttons'>
            <a href='#' className='button prev'>
              Previos
            </a>
            <a href='#' className='button sound'>
              Play Sound
            </a>
            <a href='#' className='button next'>
              Next
            </a>
          </div>
          <div className='fields'>
            <div className='field-block'>
              <div className='left-field'>
                <div className='placeholder-span'>Click Next to view Image</div>
                <img className="letter-image" 
                     src={this.state.alphabets[this.state.currentPosition].image}
                     alt={this.state.alphabets[this.state.currentPosition].word}/>
              </div>
              <div className='right-field'>
                <div className='placeholder-span'>Click Next to view Spelling</div>
                <div className="word">
                    {this.state.alphabets[this.state.currentPosition].word.toUpperCase()}
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
