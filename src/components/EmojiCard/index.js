import './index.css'

const EmojiCard = props => {
  const {eachItem, onchangeActiveEmojiNameUrl, emojiStyled} = props

  const stylesAdd = emojiStyled ? 'add-style-to-emoji' : ''

  const onEmojiClicked = () => {
    // console.log(eachItem)
    onchangeActiveEmojiNameUrl(eachItem.emojiUrl, eachItem.emojiName)
  }

  return (
    <li className="each-emoji-item">
      <button
        type="button"
        className="each-emoji-button"
        onClick={onEmojiClicked}
      >
        <p className="each-emoji-name">{eachItem.emojiName}</p>
        <img
          src={eachItem.emojiUrl}
          alt={eachItem.emojiName}
          className={`each-emoji-image ${stylesAdd}`}
        />
      </button>
    </li>
  )
}

export default EmojiCard
