import React from 'react';
// @ts-ignore
import CompteList from './components/CompteList.jsx';
// @ts-ignore
import CompteForm from './components/CompteForm.jsx';
const App: React.FC = () => {
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Gestion des Comptes</h1>
      <CompteForm />
      <CompteList />
    </div>
  );
};

export default App;
