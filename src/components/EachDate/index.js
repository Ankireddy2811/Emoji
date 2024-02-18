import './index.css'

const EachDate = props => {
  const {eachItem, onAddEmojiToDate} = props

  const onDateButtonClicked = () => {
    onAddEmojiToDate(eachItem.id)
  }

  return (
    <li className="each-date-item">
      <button
        type="button"
        className="each-date-button"
        onClick={onDateButtonClicked}
      >
        <p>{eachItem.date}</p>
        {eachItem.emojiUrl !== '' ? (
          <img
            src={eachItem.emojiUrl}
            alt={eachItem.emojiName}
            className="add-emoji"
          />
        ) : (
          ''
        )}
      </button>
    </li>
  )
}

export default EachDate
