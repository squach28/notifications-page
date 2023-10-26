import { useState } from 'react'
import Notification from './components/Notification'
import notificationsFromJson from './assets/notifications.json'

function App() {
  const [notifications, setNotifications] = useState(notificationsFromJson)
  const numOfNotifications = notifications.filter(notification => !notification.read).length

  const markAllAsRead = () => {
    const markedNotifications = notifications.map(notification => {
      if(!notification.read) {
        notification.read = true
      }
      return notification
    })
    setNotifications(markedNotifications)
  }



  return (
    notifications.length > 0 ? 
    <div className="flex flex-col p-3 md:w-[50%] md:m-auto">
      <header className="flex justify-between items-center mb-4">
        <div className="flex gap-2 items-center text-xl">
          <h1 className="font-bold">Notifications</h1>
          <p className="bg-blue text-white px-4 py-1 rounded-md">{numOfNotifications}</p>
        </div>
        <p className="text-gray-blue hover:cursor-pointer hover:text-blue" onClick={markAllAsRead}>Mark all as read</p>
      </header>

      <div className="flex flex-col gap-1">
        {notifications.map(notification => <Notification key={notification.id} {...notification} />)}
      </div>
    </div>
    :
    null
  )
}

export default App
