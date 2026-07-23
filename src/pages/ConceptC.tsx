import { ArrowRight, CheckCircle, BrainCircuit, Phone } from 'lucide-react';
import { usePageTracking, trackEvent } from '../utils/analytics';
import { Link } from 'react-router-dom';

const ConceptC = () => {
  usePageTracking('Concept C - Glassmorphic AI Images');

  const handleApplyClick = () => {
    trackEvent('apply_button_click', { concept: 'C', location: 'hero' });
    window.open('https://forms.google.com/', '_blank');
  };

  return (
    <div className="theme-c" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Background Image Layer */}
      <div style={{ 
        position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', 
        backgroundImage: 'url("/ai_data_analysis_1784788766808.png")', 
        backgroundSize: 'cover', backgroundPosition: 'center', 
        opacity: 0.15, mixBlendMode: 'screen', zIndex: 0, pointerEvents: 'none' 
      }}></div>

      {/* Navigation */}
      <nav style={{ padding: '1.5rem 0', position: 'sticky', top: 0, zIndex: 100 }}>
        <div className="container glass-panel" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <Link to="/" className="gradient-text" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <BrainCircuit size={28}/> HRD_GLASSAI
            </Link>
          </div>
          <button className="btn btn-primary" style={{ padding: '0.5rem 1.5rem', border: 'none' }} onClick={handleApplyClick}>지원하기</button>
        </div>
      </nav>

      {/* Content Container */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Hero Section */}
        <section className="section container text-center animate-fade-in" style={{ padding: '2rem 0 6rem' }}>
          
          {/* Main Hero Logos */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginBottom: '4rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <img src="/jeonnam_transparent.png" alt="전남광주" style={{ width: '90px', height: '90px', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.3)' }} />
              <span style={{ fontSize: '3.5rem', color: '#fff', fontWeight: '900', letterSpacing: '-0.05em', textShadow: '2px 2px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 3px 3px 0 #000' }}>전남광주</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <img src="/gwangyang_transparent.png" alt="광양시" style={{ width: '90px', height: '90px', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.3)' }} />
              <span style={{ fontSize: '3.5rem', color: '#fff', fontWeight: '900', letterSpacing: '-0.05em', textShadow: '2px 2px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 3px 3px 0 #000' }}>광양시</span>
            </div>
          </div>

          <div className="glass-panel" style={{ display: 'inline-block', padding: '0.5rem 1.5rem', marginBottom: '2rem', fontSize: '0.875rem', fontWeight: 700, borderRadius: '9999px', background: 'rgba(236, 72, 153, 0.15)' }}>
            <span className="gradient-text">K-디지털 트레이닝 국비지원 과정</span>
          </div>
          <h1 className="title-lg" style={{ fontWeight: 800, lineHeight: 1.2, marginBottom: '2rem', letterSpacing: '-0.02em' }}>
            미래를 투영하는 실무 교육<br />
            <span className="gradient-text" style={{ fontWeight: 900 }}>AI 스마트팩토리 & 데이터 전문가</span>
          </h1>
          <p className="text-lg" style={{ color: '#cbd5e1', maxWidth: '700px', margin: '0 auto 3rem', lineHeight: 1.6 }}>
            대기업 포스코 현업 멘토링과 100% 무상 국비지원을 통해<br/> 가장 압도적인 커리어 포트폴리오를 설계하세요.
          </p>
          
          <div className="glass-panel flex-responsive" style={{ display: 'inline-flex', padding: '2rem 4rem', gap: '4rem', marginBottom: '3rem', justifyContent: 'center' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.125rem', color: '#94a3b8', marginBottom: '0.5rem', fontWeight: 600 }}>진행 기간</div>
              <div className="title-md" style={{ fontWeight: 800, color: '#fff' }}>26.08.03 - 11.13</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.125rem', color: '#94a3b8', marginBottom: '0.5rem', fontWeight: 600 }}>일일 학습 시간</div>
              <div className="title-md" style={{ fontWeight: 800, color: '#fff' }}>09:00 - 16:00 <span style={{ fontSize: '1.25rem' }}>(70일)</span></div>
            </div>
          </div>
          <br/>
          <button className="btn btn-primary" style={{ padding: '1.25rem 3.5rem', fontSize: '1.125rem', border: 'none' }} onClick={handleApplyClick}>
            지금 지원하기 <ArrowRight size={20} style={{ marginLeft: '0.5rem' }}/>
          </button>
        </section>

        {/* Priority 1: Support Benefits */}
        <section className="section container">
          <div className="glass-panel flex-responsive" style={{ padding: '4rem', borderRadius: '32px', alignItems: 'center' }}>
            <div style={{ flex: 1 }}>
              <img src="/success_career_1784788805974.png" alt="Success Career" style={{ width: '100%', borderRadius: '24px', filter: 'contrast(1.1) brightness(0.8)', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }} />
            </div>
            <div style={{ flex: 1, textAlign: 'left' }}>
              <h2 className="title-md" style={{ fontWeight: 800, marginBottom: '2rem', color: '#fff' }}>비교 불가한 수강 혜택</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div>
                  <div style={{ fontSize: '1.25rem', color: '#a78bfa', marginBottom: '0.5rem' }}>교육비/교재비</div>
                  <div style={{ fontSize: '2rem', fontWeight: 800, color: '#fff' }}>전액 무료</div>
                </div>
                <div>
                  <div style={{ fontSize: '1.25rem', color: '#a78bfa', marginBottom: '0.5rem' }}>참여 수당 지원 (70일 환산)</div>
                  <div style={{ fontSize: '2rem', fontWeight: 800, color: '#fff' }}>최대 644,000 원</div>
                </div>
                <div>
                  <div style={{ fontSize: '1.25rem', color: '#a78bfa', marginBottom: '0.5rem' }}>훈련 장려금 (3개월 환산)</div>
                  <div style={{ fontSize: '2rem', fontWeight: 800, color: '#fff' }}>최대 1,500,000 원</div>
                </div>
              </div>
              <div style={{ display: 'inline-block', marginTop: '2rem', padding: '1rem 3rem', background: 'rgba(236, 72, 153, 0.2)', borderRadius: '9999px', fontSize: '1.5rem', fontWeight: 700, border: '1px solid rgba(236, 72, 153, 0.5)' }}>
                합계 최대 210만원 지원!
              </div>
            </div>
          </div>
        </section>

        {/* Intro & Courses (Grid Panels) */}
        <section className="section container">
          <div className="grid grid-cols-2" style={{ gap: '3rem' }}>
            {/* AX Card */}
            <div className="glass-panel" style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <img src="/tech_mentoring_1784788795886.png" alt="Tech Mentoring" style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
              <div style={{ padding: '3rem' }}>
                <h2 className="gradient-text" style={{ fontSize: '1.75rem', fontWeight: 900, marginBottom: '1rem' }}>AX (AI TRANSFORMATION)</h2>
                <p style={{ color: '#cbd5e1', fontSize: '1.125rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  AI와 데이터를 활용해 생산 과정을 혁신하는 하이테크 역량. 기업이 원하는 절대적 무기를 확보하세요.
                </p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: '#f8fafc' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}><CheckCircle size={20} color="#a78bfa"/> 100% 실무 중심 멘토링</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}><CheckCircle size={20} color="#a78bfa"/> 제조·철강 산업 취업 연계 지원</li>
                </ul>
              </div>
            </div>
            
            {/* Course Choice Card */}
            <div className="glass-panel" style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <img src="/smart_factory_promo_1784788744287.png" alt="Smart Factory Promo" style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
              <div style={{ padding: '3rem' }}>
                <h2 className="gradient-text" style={{ fontSize: '1.75rem', fontWeight: 900, marginBottom: '1.5rem' }}>핵심 교육 트랙</h2>
                
                <div style={{ marginBottom: '1.5rem', padding: '1.5rem', background: 'rgba(139, 92, 246, 0.1)', borderRadius: '16px', border: '1px solid rgba(139, 92, 246, 0.3)' }}>
                  <h3 style={{ color: '#a78bfa', fontSize: '1.25rem', marginBottom: '0.5rem', fontWeight: 700 }}>[TR-01] 스마트팩토리 과정</h3>
                  <p style={{ color: '#cbd5e1' }}>설비, 제어, 생산기술 분야 취업 준비생 추천</p>
                </div>
                
                <div style={{ padding: '1.5rem', background: 'rgba(236, 72, 153, 0.1)', borderRadius: '16px', border: '1px solid rgba(236, 72, 153, 0.3)' }}>
                  <h3 style={{ color: '#f472b6', fontSize: '1.25rem', marginBottom: '0.5rem', fontWeight: 700 }}>[TR-02] AI+데이터 실무 과정</h3>
                  <p style={{ color: '#cbd5e1' }}>데이터 분석 및 공정 AI 모델링 관심자 추천</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Curriculum */}
        <section className="section container">
          <h2 className="text-center title-md" style={{ fontWeight: 800, marginBottom: '3rem' }}>상세 커리큘럼</h2>
          
          <div className="glass-panel" style={{ padding: '3.5rem', marginBottom: '3rem', position: 'relative', overflow: 'hidden' }}>
            <h3 className="gradient-text" style={{ fontSize: '1.75rem', marginBottom: '2rem' }}>TR-01. SMART FACTORY</h3>
            <div className="grid grid-cols-3" style={{ gap: '2rem', position: 'relative', zIndex: 1 }}>
              <div style={{ padding: '2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '16px' }}>
                <img src="/smart_factory_promo_1784788744287.png" alt="Phase 1" style={{ width: '100%', height: '140px', objectFit: 'cover', borderRadius: '8px', marginBottom: '1.5rem', opacity: 0.9 }} />
                <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#fff', fontWeight: 700 }}>1. 자동화 설비 이해</h4>
                <p style={{ color: '#cbd5e1', fontSize: '1rem', lineHeight: 1.6 }}>PLC 제어, 센서/장비 구조 파악</p>
              </div>
              <div style={{ padding: '2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '16px' }}>
                <img src="/ai_data_analysis_1784788766808.png" alt="Phase 2" style={{ width: '100%', height: '140px', objectFit: 'cover', borderRadius: '8px', marginBottom: '1.5rem', opacity: 0.9 }} />
                <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#fff', fontWeight: 700 }}>2. 데이터 수집·분석</h4>
                <p style={{ color: '#cbd5e1', fontSize: '1rem', lineHeight: 1.6 }}>IoT 기반 실시간 상태 모니터링</p>
              </div>
              <div style={{ padding: '2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '16px' }}>
                <img src="/smart_factory_ai_1784785742542.png" alt="Phase 3" style={{ width: '100%', height: '140px', objectFit: 'cover', borderRadius: '8px', marginBottom: '1.5rem', opacity: 0.9 }} />
                <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#fff', fontWeight: 700 }}>3. 스마트 공정 구현</h4>
                <p style={{ color: '#cbd5e1', fontSize: '1rem', lineHeight: 1.6 }}>디지털 트윈 구축, MES 시스템</p>
              </div>
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '3.5rem', position: 'relative', overflow: 'hidden' }}>
            <h3 className="gradient-text" style={{ fontSize: '1.75rem', marginBottom: '2rem' }}>TR-02. AI + DATA</h3>
            <div className="grid grid-cols-3" style={{ gap: '2rem', position: 'relative', zIndex: 1 }}>
              <div style={{ padding: '2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '16px' }}>
                <img src="/ai_data_analysis_1784788766808.png" alt="Phase 1" style={{ width: '100%', height: '140px', objectFit: 'cover', borderRadius: '8px', marginBottom: '1.5rem', opacity: 0.9 }} />
                <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#fff', fontWeight: 700 }}>1. 데이터 분석 기초</h4>
                <p style={{ color: '#cbd5e1', fontSize: '1rem', lineHeight: 1.6 }}>SQL, Python 활용 시각화</p>
              </div>
              <div style={{ padding: '2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '16px' }}>
                <img src="/tech_mentoring_1784788795886.png" alt="Phase 2" style={{ width: '100%', height: '140px', objectFit: 'cover', borderRadius: '8px', marginBottom: '1.5rem', opacity: 0.9 }} />
                <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#fff', fontWeight: 700 }}>2. AI 모델 개발</h4>
                <p style={{ color: '#cbd5e1', fontSize: '1rem', lineHeight: 1.6 }}>머신러닝 및 딥러닝 알고리즘</p>
              </div>
              <div style={{ padding: '2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '16px' }}>
                <img src="/smart_factory_ai_1784785742542.png" alt="Phase 3" style={{ width: '100%', height: '140px', objectFit: 'cover', borderRadius: '8px', marginBottom: '1.5rem', opacity: 0.9 }} />
                <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#fff', fontWeight: 700 }}>3. 제조 AI 프로젝트</h4>
                <p style={{ color: '#cbd5e1', fontSize: '1rem', lineHeight: 1.6 }}>실데이터 활용 문제 해결 실습</p>
              </div>
            </div>
          </div>
        </section>

        {/* Target & CTA */}
        <section className="section container text-center" style={{ paddingBottom: '8rem' }}>
          <h2 className="title-md" style={{ fontWeight: 800, marginBottom: '3rem' }}>지원 안내 및 접수</h2>
          <div className="glass-panel" style={{ display: 'inline-block', maxWidth: '800px', width: '100%', padding: '4rem' }}>
            <div className="grid grid-cols-2" style={{ textAlign: 'left', marginBottom: '3rem' }}>
              <div>
                <h4 style={{ color: '#a78bfa', fontSize: '1.25rem', marginBottom: '1rem', fontWeight: 700 }}>교육 대상자</h4>
                <ul style={{ color: '#cbd5e1', fontSize: '1rem', lineHeight: 1.8, paddingLeft: '1.25rem' }}>
                  <li>만 19세 이상 구직자 누구나 (청년 우선)</li>
                  <li>광양만권 (광양/여수/순천) 거주자 우선</li>
                </ul>
              </div>
              <div>
                <h4 style={{ color: '#f472b6', fontSize: '1.25rem', marginBottom: '1rem', fontWeight: 700 }}>참여 제한 대상</h4>
                <ul style={{ color: '#cbd5e1', fontSize: '1rem', lineHeight: 1.8, paddingLeft: '1.25rem' }}>
                  <li>현재 재직자 (고용보험 가입자)</li>
                  <li>재학생 (단, 졸업예정자는 지원 가능)</li>
                </ul>
              </div>
            </div>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '3rem' }}>
              <div className="gradient-text" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', fontSize: '2.5rem', fontWeight: 900, marginBottom: '2rem' }}>
                <Phone size={36}/> 061-763-7114
              </div>
              <button className="btn btn-primary" style={{ padding: '1.25rem 4rem', fontSize: '1.25rem', border: 'none', width: '100%' }} onClick={handleApplyClick}>
                구글폼 신청 접수 <ArrowRight size={20} style={{ marginLeft: '0.5rem' }}/>
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ConceptC;
