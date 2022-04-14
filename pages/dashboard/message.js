import React from 'react'
import DashBoardTemplate from '../../components/DashboardTemplate'
import MainTemplate from '../../components/mainTemplate'

const message = () => {
  return (
    <div>
        <DashBoardTemplate main={<MainTemplate title="Message Board" children={null} />} title='Message Board' />
    </div>
  )
}

export default message