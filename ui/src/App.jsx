import './App.css'

function App() {
  const rooms = ["A群","綿羊程式群(261)","B群","C群","D群","E群","f群"]
  const lastMsg = ["a","@Ray 自己也沒在睡覺阿","b","c","d","e","f"]
  return (
      <div className="container">
        <div className="room_container">
          <div className="header">
            <div>Chats</div>
            
          </div>
          <div className="search"></div>
          <div className="rooms">
            {
              rooms.map((val,index) => (
                <div className="room" key={val}>
                  <div className="pic"></div>
                  <div className="text">
                    <span className="name">{val}</span>
                    <span className="lastMsg">{lastMsg[index]}</span>
                  </div>
                  
                </div>
              ))
            }
          </div>
        </div>
        <div className="chat_container">
        <div className="header">
            <div>Chats</div>
        </div>
        
          { rooms[1]}
        </div>
      </div>
      
  )
}

export default App
