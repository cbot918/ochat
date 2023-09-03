import './App.css'
import { BrowserRouter as Router, Route, Link, Routes, useParams} from 'react-router-dom';
import PropTypes from 'prop-types';
Chat.propTypes = {
  name: PropTypes.string.isRequired,
};


function Chat(){
  const {name} = useParams()
  return <div>{name}</div>
}

function App() {
  const rooms = ["A群","綿羊程式群(261)","B群","C群","D群","E群","f群"]
  const lastMsg = ["a","@Ray 自己也沒在睡覺阿","b","c","d","e","f"]
  return (
    <Router>    
      <div className="container">
        <div className="room_container">
          <div className="header">
            <div>Chats</div>
          </div>{}
          <div className="search"></div>
          <div className="rooms">
            {
              rooms.map((val,index) => {
                const str = `/chat/${val}`
                return (  
                  <Link className="room" key={val} to={str}>
                    <div className="pic"></div>
                    <div className="text">
                      <span className="name">{val}</span>
                      <span className="lastMsg">{lastMsg[index]}</span>
                    </div>
                  </Link>
                )
              }
              
              )
            }
          </div>
        </div>
        <div className="chat_container">
        <div className="header">
            <div>Chats</div>
        </div>
          <Routes>
            <Route path="/chat/:name" element={<Chat/>} />
          </Routes>
        </div>
        
      </div>
      </Router>
  )
}

export default App
