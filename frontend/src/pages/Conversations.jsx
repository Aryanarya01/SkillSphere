import React from 'react'
import { useState } from 'react'

const Conversations = () => {
    const [conversations, setConversations] = useState([]);
    
  return (
    <div className='w-80 bg-white border-r h-full overflow-y-auto'>
        <div className='p-5 border-b'>
            <h2 className='text-2xl font-bold'>Chats</h2>
        </div>

        {/* users */}
        <div >

        </div>
    </div>
  )
}

export default Conversations