import React from 'react'
import DashBoardTemplate from '../../components/DashboardTemplate'
import MainTemplate from '../../components/mainTemplate'

const billing = () => {
  return (
    <div>
        <DashBoardTemplate main={<MainTemplate title="Billing" children={null} />} title='Billing' />
    </div>
  )
}

export default billing
