import React from 'react'
import DashBoardTemplate from '../../components/DashboardTemplate'
import MainTemplate from '../../components/mainTemplate'

const products = () => {
  return (
    <div>
        <DashBoardTemplate main={<MainTemplate title="Products & Services" children={null} />} title='Products & Services' />
    </div>
  )
}

export default products