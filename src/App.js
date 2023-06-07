import React from 'react';
import Graph from './components/Graph';
import Table from './components/Table';
import ScoreCard from './components/ScoreCard';
import { FaGithub } from 'react-icons/fa';
import './App.css';
const App = () => {
  const data = [
    ['John', 15],
    ['Jane', 25],
    ['Bob', 20],
    ['Alice', 30],
  ];
  return (
    <div>
      <a className="github-link" href="https://github.com/grgauravweb" target="_blank" rel="noopener noreferrer">
      <FaGithub className='githubicon' />
      </a>
      <h1>DataVinci Private Limited</h1>
      <h2>Dashboard</h2>
      <ScoreCard title="Example Score" score={99} />
      <ScoreCard title="Example Score2" score={85} />
      <Graph data={data} />
      <Table data={data} />
    </div>
  );
};

export default App;
