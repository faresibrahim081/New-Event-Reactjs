
import './App.css';
import Speakers from './design-system/components/CreativeSpeakers/Speakers';
import speakersData from './design-system/components/CreativeSpeakers/SpeakersData';

function App() {
  return (
    <div className="App">
    <div>
        {speakersData.map(item => {
          return(
            <Speakers key={item.id} alt={item.alt} name={item.name} img={item.img} job={item.job}/>
          )
        })}
      </div>
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
