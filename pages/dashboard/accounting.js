import React from 'react'
import DashBoardTemplate from '../../components/DashboardTemplate'
import MainTemplate from '../../components/mainTemplate'

const accounting = () => {
  return (
    <div>
        <DashBoardTemplate main={<MainTemplate title="Accounting" children={null} />} title='Accounting' />
    </div>
  )
}

export default accounting