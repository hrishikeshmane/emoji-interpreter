import React, {useState} from 'react'
import ReactDOM from 'react-dom'

import './styles.css'

const emojiDictionary = {
  '😊': 'Smiling',
  '😳': 'disbelief',
  '😔': 'sad',
  '🤫': 'Shushing Face',
  '😉': 'Winking Face',
  '🥵': 'Hot Face',
  '🔥': 'Fire',
  '✔️': 'Check Mark',
  '🍔': 'Hamburger',
  '🥡': 'takeout box',
  '❤️': 'love',
  '🎃': 'Halloween',
  '🏀': 'Basketball',
}

const emojis = Object.keys(emojiDictionary)

function App() {
  const [emoji, setEmoji] = useState('') /** concept 2 is useState */
  const [meaning, setMeaning] = useState('translation will appear here..')

  function changeHandler(event) {
    const inputEmoji = event.target.value
    setEmoji(inputEmoji)

    if (inputEmoji in emojiDictionary) {
      setMeaning(emojiDictionary[inputEmoji])
    } else {
      setMeaning('failure to recognise this emoji')
    }
  }

  function emojiClickHandler(inputEmoji) {
    setMeaning(emojiDictionary[inputEmoji])
  }

  return (
    <div className="App">
      <h1>Inside Out</h1>
      <input
        onChange={changeHandler}
        value={emoji}
        placeholder={'Search your emoji'}
        style={{
          padding: '1em',
          minWidth: '80%',
        }}
      />
      <h2> {emoji} </h2>
      <h3> {meaning} </h3>
      {emojis.map((emoji, index) => (
        <span
          key={index}
          onClick={() => emojiClickHandler(emoji)}
          style={{fontSize: '2rem', padding: '0.5rem', cursor: 'pointer'}}
        >
          {' '}
          {emoji}{' '}
        </span>
      ))}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
