import React from 'react'
import DashBoardTemplate from '../../components/DashboardTemplate'
import MainTemplate from '../../components/mainTemplate'

const banking = () => {
  return (
    <div>
        <DashBoardTemplate main={<MainTemplate title="Banking" children={null} />} title='Banking' />
    </div>
  )
}

export default banking