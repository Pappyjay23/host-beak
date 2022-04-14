import React from 'react'
import DashBoardTemplate from '../../components/DashboardTemplate'
import MainTemplate from '../../components/mainTemplate'

const docs = () => {
  return (
    <div>
        <DashBoardTemplate main={<MainTemplate title="Upload Docs" children={null} />} title='Upload Docs' />
    </div>
  )
}

export default docs