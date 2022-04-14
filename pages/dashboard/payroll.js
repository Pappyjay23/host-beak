import React from 'react'
import DashBoardTemplate from '../../components/DashboardTemplate'
import MainTemplate from '../../components/mainTemplate'

const payroll = () => {
  return (
    <div>
        <DashBoardTemplate main={<MainTemplate title="Payroll" children={null} />} title='Payroll' />
    </div>
  )
}

export default payroll