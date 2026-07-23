
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ConceptA from './pages/ConceptA';
import ConceptB from './pages/ConceptB';
import ConceptC from './pages/ConceptC';

const Home = () => (
  <div className="container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
    <h1 className="mb-4 title-md">HRD 교육 랜딩 페이지 샘플</h1>
    <p className="mb-8 text-muted text-base">아래 3가지 컨셉 중 하나를 선택하여 확인해보세요.</p>
    <div className="grid grid-cols-3" style={{ gap: '2rem', width: '100%', maxWidth: '800px' }}>
      <Link to="/concept-a" className="glass-panel" style={{ textDecoration: 'none', color: 'inherit', textAlign: 'center', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' }}>
        <h2 style={{ color: '#0f172a', marginBottom: '0.5rem' }}>Concept A</h2>
        <p style={{ color: '#475569' }}>Professional & Trust</p>
      </Link>
      <Link to="/concept-b" className="glass-panel" style={{ textDecoration: 'none', color: 'inherit', textAlign: 'center', backgroundColor: '#0a0a0a', border: '1px solid #333' }}>
        <h2 style={{ color: '#fff', marginBottom: '0.5rem' }}>Concept B</h2>
        <p style={{ color: '#a3a3a3' }}>Dynamic & Future</p>
      </Link>
      <Link to="/concept-c" className="glass-panel" style={{ textDecoration: 'none', color: 'inherit', textAlign: 'center', backgroundColor: '#ecfdf5', border: '1px solid #a7f3d0' }}>
        <h2 style={{ color: '#065f46', marginBottom: '0.5rem' }}>Concept C</h2>
        <p style={{ color: '#047857' }}>Clean & Accessible</p>
      </Link>
    </div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/concept-a" element={<ConceptA />} />
        <Route path="/concept-b" element={<ConceptB />} />
        <Route path="/concept-c" element={<ConceptC />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
