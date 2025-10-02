import Card from './components/Card';
import Header from './components/header';
import './index.css';

function App() {
 
  return (
    <>
    <div className='min-h-screen bg-gray-100:'>
      <Header />
      <main className='p-6 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        <Card title={"React"} description="Uma biblioteca para interfaces modernas."/>
        <Card title="tailwind" description="Um framework CSS utilitário poderoso" />
        <Card title="Checkpoint" description="Sua primeira atividade prática com React + Tailwind" />
      </main>
    </div>
    </>
  );
}

export default App
