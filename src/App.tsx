import React from 'react';
import {faker} from '@faker-js/faker';
import RestartButton from './components/RestartButton';
import Results from './components/Results';
import UserTypings from './components/UserTypings';
import useEngine from './hooks/useEngine';


const words = faker.random.words(33);


function App() {
  const {state, words, timeLeft} =useEngine();
  return (
    <>
    <CountdownTimer timeLeft={timeLeft}/>
    <div className='relative max-w-xl mt-3 text-3xl leading-relaxed break-all'>
      <UserTypings className = 'absolute inset-0' userInput = {'text'} />
      <GeneratedWords words = {words}/>
    </div>
    <RestartButton
    className={"mx-auto mt-10 mb-10 text-slate-500"}
    onRestart = {() => null}
    />
    <Results
    className="mt-10"
    errors = {10}
    accuracyPercentage = {100}
    total={200}
    />
    </> 
  );
};


const GeneratedWords = ({words}:{words:string})=>{
  return <div className = "text-slate-500 ">{words}</div>;
};

const CountdownTimer = ({timeLeft}: {timeLeft: number}) => 
{
return <h2 className = "text-primary-400 font-medium text-center text-3xl mb-10">Time: {timeLeft}</h2>
};



export default App;

