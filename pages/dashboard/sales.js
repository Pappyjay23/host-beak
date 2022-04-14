import React from 'react'
import DashBoardTemplate from '../../components/DashboardTemplate'
import MainTemplate from '../../components/mainTemplate'

const sales = () => {
  return (
    <div>
        <DashBoardTemplate main={<MainTemplate title="Sales" children={null} />} title='Sales' />
    </div>
  )
}

export default sales