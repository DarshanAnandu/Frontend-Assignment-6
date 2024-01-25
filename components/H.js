// pages/index.js
"use client"
import Dropdown from './Drop';

const Home = () => {
  const useCases = ['Sales Outreach', 'Product Marketing', 'Content Marketing', 'Learning & Development'];

  return (
    <div>
      <h1>Your Next.js App</h1>
      <Dropdown title="Use Cases" items={useCases} />
    </div>
  );
};

export default Home;
