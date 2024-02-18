import {Component} from 'react'

import EmojiCard from '../EmojiCard'
import EachDate from '../EachDate'

import './index.css'

const emojisList = [
  {
    id: '380e6284-a454-11ec-b909-0242ac120002',
    emojiName: 'Very Happy',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/monthly-emojis/monthly-emojis-very-happy.png',
  },
  {
    id: '380e64f0-a454-11ec-b909-0242ac120002',
    emojiName: 'Happy',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/monthly-emojis/monthly-emojis-happy.png',
  },
  {
    id: '380e6626-a454-11ec-b909-0242ac120002',
    emojiName: 'Neutral',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/monthly-emojis/monthly-emojis-neutral.png',
  },
  {
    id: '380e6748-a454-11ec-b909-0242ac120002',
    emojiName: 'Sad',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/monthly-emojis/monthly-emojis-sad.png',
  },
  {
    id: '380e69c8-a454-11ec-b909-0242ac120002',
    emojiName: 'Very Sad',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/monthly-emojis/monthly-emojis-very-sad.png',
  },
]

const daysList = [
  {
    id: '3639dd44-a5d5-11ec-b909-0242ac120002',
    day: 'Sun',
  },
  {
    id: '3639e17c-a5d5-11ec-b909-0242ac120002',
    day: 'Mon',
  },
  {
    id: '3639e37a-a5d5-11ec-b909-0242ac120002',
    day: 'Tue',
  },
  {
    id: '3639e532-a5d5-11ec-b909-0242ac120002',
    day: 'Wed',
  },
  {
    id: '3639e8c0-a5d5-11ec-b909-0242ac120002',
    day: 'Thu',
  },
  {
    id: '3639ea32-a5d5-11ec-b909-0242ac120002',
    day: 'Fri',
  },
  {
    id: '3639eb90-a5d5-11ec-b909-0242ac120002',
    day: 'Sat',
  },
]

const initialDatesList = [
  {
    id: '380e6b12-a454-11ec-b909-0242ac120002',
    date: '01',
    emojiUrl: '',
    emojiName: '',
    day: 'Sun',
  },
  {
    id: '380e6cac-a454-11ec-b909-0242ac120002',
    date: '02',
    emojiUrl: '',
    emojiName: '',
    day: 'Mon',
  },
  {
    id: '380e6de2-a454-11ec-b909-0242ac120002',
    date: '03',
    emojiUrl: '',
    emojiName: '',
    day: 'Tue',
  },
  {
    id: '380e6efa-a454-11ec-b909-0242ac120002',
    date: '04',
    emojiUrl: '',
    emojiName: '',
    day: 'Wed',
  },
  {
    id: '380e7012-a454-11ec-b909-0242ac120002',
    date: '05',
    emojiUrl: '',
    emojiName: '',
    day: 'Thu',
  },
  {
    id: '380e712a-a454-11ec-b909-0242ac120002',
    date: '06',
    emojiUrl: '',
    emojiName: '',
    day: 'Fri',
  },
  {
    id: '380e7454-a454-11ec-b909-0242ac120002',
    date: '07',
    emojiUrl: '',
    emojiName: '',
    day: 'Sat',
  },
  {
    id: '380e7576-a454-11ec-b909-0242ac120002',
    date: '08',
    emojiUrl: '',
    emojiName: '',
    day: 'Sun',
  },
  {
    id: '380e768e-a454-11ec-b909-0242ac120002',
    date: '09',
    emojiUrl: '',
    emojiName: '',
    day: 'Mon',
  },
  {
    id: '380e77a6-a454-11ec-b909-0242ac120002',
    date: '10',
    emojiUrl: '',
    emojiName: '',
    day: 'Tue',
  },
  {
    id: '380e78b4-a454-11ec-b909-0242ac120002',
    date: '11',
    emojiUrl: '',
    emojiName: '',
    day: 'Wed',
  },
  {
    id: '380e79d6-a454-11ec-b909-0242ac120002',
    date: '12',
    emojiUrl: '',
    emojiName: '',
    day: 'Thu',
  },
  {
    id: '380e7aee-a454-11ec-b909-0242ac120002',
    date: '13',
    emojiUrl: '',
    emojiName: '',
    day: 'Fri',
  },
  {
    id: '380e7c06-a454-11ec-b909-0242ac120002',
    date: '14',
    emojiUrl: '',
    emojiName: '',
    day: 'Sat',
  },
  {
    id: '380e7ec2-a454-11ec-b909-0242ac120002',
    date: '15',
    emojiUrl: '',
    emojiName: '',
    day: 'Sun',
  },
  {
    id: '380e7fda-a454-11ec-b909-0242ac120002',
    date: '16',
    emojiUrl: '',
    emojiName: '',
    day: 'Mon',
  },
  {
    id: '380e80e8-a454-11ec-b909-0242ac120002',
    date: '17',
    emojiUrl: '',
    emojiName: '',
    day: 'Tue',
  },
  {
    id: '380e8282-a454-11ec-b909-0242ac120002',
    date: '18',
    emojiUrl: '',
    emojiName: '',
    day: 'Wed',
  },
  {
    id: '380e83e0-a454-11ec-b909-0242ac120002',
    date: '19',
    emojiUrl: '',
    emojiName: '',
    day: 'Thu',
  },
  {
    id: '380e8516-a454-11ec-b909-0242ac120002',
    date: '20',
    emojiUrl: '',
    emojiName: '',
    day: 'Fri',
  },
  {
    id: '380e8638-a454-11ec-b909-0242ac120002',
    date: '21',
    emojiUrl: '',
    emojiName: '',
    day: 'Sat',
  },
  {
    id: '380e88cc-a454-11ec-b909-0242ac120002',
    date: '22',
    emojiUrl: '',
    emojiName: '',
    day: 'Sun',
  },
  {
    id: '380e89f8-a454-11ec-b909-0242ac120002',
    date: '23',
    emojiUrl: '',
    emojiName: '',
    day: 'Mon',
  },
  {
    id: '380e8b1a-a454-11ec-b909-0242ac120002',
    date: '24',
    emojiUrl: '',
    emojiName: '',
    day: 'Tue',
  },
  {
    id: '380e8c32-a454-11ec-b909-0242ac120002',
    date: '25',
    emojiUrl: '',
    emojiName: '',
    day: 'Wed',
  },
  {
    id: '380e8d40-a454-11ec-b909-0242ac120002',
    date: '26',
    emojiUrl: '',
    emojiName: '',
    day: 'Thu',
  },
  {
    id: '380e8e4e-a454-11ec-b909-0242ac120002',
    date: '27',
    emojiUrl: '',
    emojiName: '',
    day: 'Fri',
  },
  {
    id: '380e8f70-a454-11ec-b909-0242ac120002',
    date: '28',
    emojiUrl: '',
    emojiName: '',
    day: 'Sat',
  },
  {
    id: '380e90e2-a454-11ec-b909-0242ac120002',
    date: '29',
    emojiUrl: '',
    emojiName: '',
    day: 'Sun',
  },
  {
    id: '380e94de-a454-11ec-b909-0242ac120002',
    date: '30',
    emojiUrl: '',
    emojiName: '',
    day: 'Mon',
  },
  {
    id: '380e96be-a454-11ec-b909-0242ac120002',
    date: '31',
    emojiUrl: '',
    emojiName: '',
    day: 'Tue',
  },
]

class Home extends Component {
  state = {
    activeEmojiName: emojisList[0].emojiName,
    activeEmojiUrl: emojisList[0].emojiUrl,
    emojiValue: emojisList[0].emojiName,
    dayValue: daysList[0].day,
    datesList: initialDatesList,
  }

  onchangeActiveEmojiNameUrl = (activeUrl, activeName) => {
    this.setState({activeEmojiName: activeName, activeEmojiUrl: activeUrl})
  }

  onChangeEmojiName = event => {
    this.setState({emojiValue: event.target.value})
  }

  onChangeDayName = event => {
    this.setState({dayValue: event.target.value})
  }

  onAddEmojiToDate = id => {
    const {datesList, activeEmojiUrl, activeEmojiName} = this.state
    const updatedDatesList = datesList.map(eachItem => {
      if (eachItem.id === id) {
        if (eachItem.emojiUrl === activeEmojiUrl) {
          return {
            ...eachItem,
            emojiName: '',
            emojiUrl: '',
          }
        }
        return {
          ...eachItem,
          emojiName: activeEmojiName,
          emojiUrl: activeEmojiUrl,
        }
      }
      return eachItem
    })
    this.setState({datesList: updatedDatesList})
  }

  calculateCount = () => {
    const {dayValue, emojiValue, datesList} = this.state
    let count = 0
    datesList.forEach(eachItem => {
      if (eachItem.emojiName === emojiValue && eachItem.day === dayValue) {
        count += 1
      }
    })
    return count
  }

  render() {
    const {emojiValue, dayValue, datesList, activeEmojiUrl} = this.state
    console.log(datesList)
    return (
      <div className="home-container">
        <h1 className="main-heading">Monthly Emojis</h1>
        <div className="sub-container">
          <div className="calender-container">
            <h1 className="sub-heading">January</h1>
            <ul className="day-name-container">
              {daysList.map(eachItem => (
                <li className="each-day-item">
                  <p>{eachItem.day}</p>
                </li>
              ))}
            </ul>
            <ul className="day-name-container date-name-container">
              {datesList.map(eachContent => (
                <EachDate
                  eachItem={eachContent}
                  key={eachContent.id}
                  onAddEmojiToDate={this.onAddEmojiToDate}
                />
              ))}
            </ul>
          </div>
          <div className="two-cards-container">
            <ul className="emojis-container">
              {emojisList.map(eachContent => (
                <EmojiCard
                  key={eachContent.id}
                  eachItem={eachContent}
                  emojiStyled={activeEmojiUrl === eachContent.emojiUrl}
                  onchangeActiveEmojiNameUrl={this.onchangeActiveEmojiNameUrl}
                />
              ))}
            </ul>
            <div className="emojis-container days-container">
              <div>
                <select
                  className="select-ele"
                  value={emojiValue}
                  onChange={this.onChangeEmojiName}
                >
                  {emojisList.map(eachContent => (
                    <option value={eachContent.emojiName}>
                      {eachContent.emojiName}
                    </option>
                  ))}
                </select>
                <select
                  className="select-ele"
                  value={dayValue}
                  onChange={this.onChangeDayName}
                >
                  {daysList.map(eachContent => (
                    <option value={eachContent.day}>{eachContent.day}</option>
                  ))}
                </select>
              </div>
              <h1 className="main-heading count-value">
                {this.calculateCount()}
              </h1>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
