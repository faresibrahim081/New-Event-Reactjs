
import React from 'react'
import OverviewComponent from '../../../../design-system/components/OverView/Overview'
import overviewData from '../../../../design-system/components/OverView/OverviewData'
import { Div, OverviewWrapper } from './style'

function Overview() {
  return (
    <OverviewWrapper>
        <div className='container'>
            <Div>
                 {overviewData.map(item => {
                    return(
                        <OverviewComponent key={item.id} icon={item.icon} title={item.title} disc={item.desc} />
                    )
                })}
            </Div>
        </div>
    </OverviewWrapper>
  )
}

export default Overview