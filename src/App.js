
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">

    <BrowserRouter> 
      <Routes>
      <Route path="/" element={ <Home/> } />
      </Routes>
    </BrowserRouter>
      



      {/* <div style={{display: "flex", gap: "1rem"}}>
        {ourSponsors.map(item => {
          return(
            <OurSponsors key={item.id} src={item.src} alt={item.alt} />
          )
        })}
      </div> */}
      {/* <div>
        { ProgrammersData.map(item => {
          return(
            <OurProgramers key={item.id} alt={item.alt} name={item.name} img={item.img} job={item.job} time={item.time} roomNum={item.roomNum} desc={item.desc} />
          )
        })}
      </div> */}
    
    {/* <div>
        {speakersData.map(item => {
          return(
            <Speakers key={item.id} alt={item.alt} name={item.name} img={item.img} job={item.job}/>
          )
        })}
      </div> */}
      {/* <Container>
        {overviewData.map(item => {
          return(
            <Overview key={item.id} icon={item.icon} title={item.title} disc={item.desc}/>
          )
        })}
      </Container> */}
    </div>
  );
}

export default App;
