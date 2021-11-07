// import './App.css';


import Statistics from './components/Statistics/Statistics';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Section from './components/Section/Section';



function App() {  

  
  return (<div className="app">
    <Section title="Please leave feadback">
      <FeedbackOptions/>
    </Section>
    <Statistics />
  </div>
  );
    
  
};

export default App;
