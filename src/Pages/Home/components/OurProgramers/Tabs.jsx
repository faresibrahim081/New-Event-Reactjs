
import React, { useState } from 'react'
import { tab1, tab2, tab3 } from '../../../../design-system/components/our-programers/ProgrammersData';
import OurProgramers from '../../../../design-system/components/our-programers/OurProgramers';
import { Line, TabsLink, Wrapper } from './Style'
import theme from '../../../../design-system/Config';

export default function Tabs() {
  const [tab, setTab] = useState("tab1");
  const switchTab = (tab) => {
    setTab(tab)
  }
  return (
    <>
       <Wrapper>
        <TabsLink 
        style={{color : tab === "tab1" ? theme.primary : "" ,
        borderBottom: tab === "tab1" ? `2px solid ${theme.primary}` : "",
        }} 
        onClick={()=> switchTab("tab1")}>first day</TabsLink>
        <TabsLink 
        style={{color : tab === "tab2" ? theme.primary : "" ,
        borderBottom: tab === "tab2" ? `2px solid ${theme.primary}` : "",
        }} 
        onClick={()=> switchTab("tab2")}>second day</TabsLink>
        <TabsLink 
        style={{color : tab === "tab3" ? theme.primary : "" , 
        borderBottom: tab === "tab3" ? `2px solid ${theme.primary}` : "",
        }} 
        onClick={()=> switchTab("tab3")}>third day</TabsLink>
       </Wrapper> 
       <Line />
      {tab === "tab2" ?
      tab2.map((item) => {
        return(
          <OurProgramers key={item.id} alt={item.alt} name={item.name} img={item.img} job={item.job} time={item.time} roomNum={item.roomNum} desc={item.desc} />
        )
      })
    : tab === "tab3" ? 
      tab3.map((item) => {
          return(
            <OurProgramers key={item.id} alt={item.alt} name={item.name} img={item.img} job={item.job} time={item.time} roomNum={item.roomNum} desc={item.desc} />
          )
        })
    : tab1.map((item) => {
        return(
          <OurProgramers key={item.id} alt={item.alt} name={item.name} img={item.img} job={item.job} time={item.time} roomNum={item.roomNum} desc={item.desc} />
        )
      })
      }
    </>
  )     
}
