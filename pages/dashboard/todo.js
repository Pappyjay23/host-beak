import React from 'react'
import DashBoardTemplate from '../../components/DashboardTemplate'
import MainTemplate from '../../components/mainTemplate'

const todo = () => {
  return (
    <div>
        <DashBoardTemplate main={<MainTemplate title="To-do" children={null} />} title='To-do' />
    </div>
  )
}

export default todo