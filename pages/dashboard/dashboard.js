import React from 'react'
import DashBoardTemplate from '../../components/DashboardTemplate'
import MainTemplate from '../../components/mainTemplate'

const dashboard = () => {
  return (
    <div>
        <DashBoardTemplate main={<MainTemplate title="Dashboard" children={null} />} title='Dashboard' />
    </div>
  )
}

export default dashboard