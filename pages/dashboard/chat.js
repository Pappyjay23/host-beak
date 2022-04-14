import React from 'react'
import DashBoardTemplate from '../../components/DashboardTemplate'
import MainTemplate from '../../components/mainTemplate'

const chat = () => {
  return (
    <div>
        <DashBoardTemplate main={<MainTemplate title="Chat" children={null} />} title='Chat' />
    </div>
  )
}

export default chat