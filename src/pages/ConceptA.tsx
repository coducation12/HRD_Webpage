import { Database, Network, ArrowRight, Phone, Layers, Gift } from 'lucide-react';
import { usePageTracking, trackEvent } from '../utils/analytics';
import { Link } from 'react-router-dom';

const ConceptA = () => {
  usePageTracking('Concept A - Neon Cyberpunk Refined');

  const handleApplyClick = () => {
    trackEvent('apply_button_click', { concept: 'A', location: 'hero' });
    window.open('https://forms.google.com/', '_blank');
  };

  return (
    <div className="theme-a" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navigation */}
      <nav style={{ padding: '1.5rem 0', borderBottom: '1px solid rgba(14, 165, 233, 0.2)', backgroundColor: 'rgba(2, 6, 23, 0.8)', backdropFilter: 'blur(10px)', position: 'sticky', top: 0, zIndex: 100 }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="tech-font" style={{ fontSize: '1.25rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <Link to="/" className="neon-text" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Network size={24} /> HRD_SYS.INIT
            </Link>
          </div>
          <button className="btn btn-primary" onClick={handleApplyClick} style={{ fontSize: '0.875rem' }}>수강신청 접수</button>
        </div>
      </nav>

      {/* Hero Section with BG Image */}
      <section className="section text-center animate-fade-in grid-bg" style={{ 
        padding: '2rem 0 6rem',
        backgroundImage: 'linear-gradient(rgba(2, 6, 23, 0.85), rgba(2, 6, 23, 0.95)), url("/smart_factory_promo_1784788744287.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginBottom: '4rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <img src="/jeonnam_transparent.png" alt="전남광주 마크" style={{ height: '100px', objectFit: 'contain' }} />
              <span style={{ fontSize: '3.5rem', color: '#fff', fontWeight: '900', letterSpacing: '-0.05em', textShadow: '2px 2px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 3px 3px 0 #000' }}>전남광주</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <img src="/gwangyang_transparent.png" alt="광양시 마크" style={{ height: '100px', objectFit: 'contain' }} />
              <span style={{ fontSize: '3.5rem', color: '#fff', fontWeight: '900', letterSpacing: '-0.05em', textShadow: '2px 2px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 3px 3px 0 #000' }}>광양시</span>
            </div>
          </div>

          <div className="neon-border" style={{ display: 'inline-block', padding: '0.5rem 1.5rem', marginBottom: '2rem', fontSize: '0.875rem', fontWeight: 600 }}>
            &gt; K-디지털 트레이닝 국비지원 과정
          </div>
          <h1 className="title-lg" style={{ fontWeight: 800, lineHeight: 1.2, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
            대기업 실무진 멘토링 기반<br />
            <span className="neon-text tech-font" style={{ fontWeight: 900 }}>AI 스마트팩토리 & 데이터 전문가</span>
          </h1>
          <p className="text-lg" style={{ color: '#94a3b8', maxWidth: '700px', margin: '0 auto 3rem', lineHeight: 1.6 }}>
            포스코 현업 멘토와 함께하는 100% 무상 국비지원 부트캠프.<br/>가장 압도적인 커리어 포트폴리오를 설계하세요.
          </p>
          <div className="neon-border flex-responsive" style={{ padding: '2rem 4rem', marginBottom: '3rem', background: 'rgba(2,6,23,0.7)', gap: '4rem', justifyContent: 'center' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.125rem', color: '#94a3b8', marginBottom: '0.5rem' }}>진행 기간</div>
              <div className="neon-text title-md" style={{ fontWeight: 900 }}>26.08.03 - 11.13</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.125rem', color: '#94a3b8', marginBottom: '0.5rem' }}>일일 학습 시간</div>
              <div className="neon-text title-md" style={{ fontWeight: 900 }}>09:00 - 16:00 <span style={{ fontSize: '1.25rem' }}>(70일)</span></div>
            </div>
          </div>
          <br/>
          <button className="btn btn-primary" style={{ padding: '1.25rem 3rem', fontSize: '1.125rem' }} onClick={handleApplyClick}>
            수강신청 시작하기 <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* Priority 1: Financial Benefits */}
      <section className="section container">
        <div className="text-center mb-8">
          <Gift className="neon-text" size={40} style={{ margin: '0 auto 1rem' }}/>
          <h2 className="tech-font title-md" style={{ color: '#f8fafc', marginBottom: '1rem' }}>수강 혜택</h2>
          <p className="text-lg" style={{ color: '#94a3b8' }}>훈련생에게 제공되는 압도적인 전액 지원 혜택</p>
        </div>
        
        <div className="flex-responsive" style={{ alignItems: 'center', gap: '3rem' }}>
          <div style={{ flex: 1 }}>
            <img src="/students_studying_1784788777759.png" alt="Students Studying" style={{ width: '100%', borderRadius: '12px', filter: 'brightness(0.85) contrast(1.1)', border: '1px solid rgba(14, 165, 233, 0.4)', boxShadow: '0 0 20px rgba(14, 165, 233, 0.2)' }} />
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="neon-border" style={{ padding: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <div style={{ color: '#94a3b8', fontSize: '1.125rem' }}>교육비 및 교재비</div>
                <div style={{ color: '#64748b', fontSize: '0.875rem' }}>전액 국비 지원</div>
              </div>
              <div className="neon-text" style={{ fontSize: '2.25rem', fontWeight: 800, whiteSpace: 'nowrap' }}>전액 무료</div>
            </div>
            <div className="neon-border" style={{ padding: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <div style={{ color: '#94a3b8', fontSize: '1.125rem' }}>훈련 참여 수당</div>
                <div style={{ color: '#64748b', fontSize: '0.875rem' }}>일 9,200원 * 70일 산정</div>
              </div>
              <div className="neon-text" style={{ fontSize: '2.25rem', fontWeight: 800, whiteSpace: 'nowrap' }}>644,000 원</div>
            </div>
            <div className="neon-border" style={{ padding: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <div style={{ color: '#94a3b8', fontSize: '1.125rem' }}>교육 훈련 장려금</div>
                <div style={{ color: '#64748b', fontSize: '0.875rem' }}>월 50만원 * 3개월 산정</div>
              </div>
              <div className="neon-text" style={{ fontSize: '2.25rem', fontWeight: 800, whiteSpace: 'nowrap' }}>1,500,000 원</div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro & AX Info */}
      <section className="section" style={{ backgroundColor: 'rgba(15, 23, 42, 0.5)' }}>
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="tech-font title-md" style={{ color: '#f8fafc', marginBottom: '1rem' }}>핵심 교육 트랙</h2>
            <p className="text-lg" style={{ color: '#94a3b8' }}>AI 기반 지능화 공정을 위한 2가지 전문 트랙</p>
          </div>

          <div className="grid grid-cols-2" style={{ gap: '3rem' }}>
            <div className="neon-border" style={{ padding: '3rem' }}>
              <img src="/smart_factory_ai_1784785742542.png" alt="Smart Factory" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px', marginBottom: '2rem', opacity: 0.8 }} />
              <Layers className="neon-text" size={32} style={{ marginBottom: '1rem' }}/>
              <h3 className="tech-font" style={{ fontSize: '1.75rem', color: '#f8fafc', marginBottom: '1rem' }}>[TR-01] SMART FACTORY</h3>
              <p style={{ color: '#94a3b8', fontSize: '1.125rem', lineHeight: 1.6 }}>
                자동화 설비 및 생산기술 분야 취업을 목표로 하거나, 현장 제어 시스템에 관심 있는 분들을 위한 트랙입니다.
              </p>
            </div>
            <div className="neon-border" style={{ padding: '3rem' }}>
              <img src="/ai_data_analysis_1784788766808.png" alt="AI Data" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px', marginBottom: '2rem', opacity: 0.8 }} />
              <Database className="neon-text" size={32} style={{ marginBottom: '1rem' }}/>
              <h3 className="tech-font" style={{ fontSize: '1.75rem', color: '#f8fafc', marginBottom: '1rem' }}>[TR-02] AI + DATA 실무</h3>
              <p style={{ color: '#94a3b8', fontSize: '1.125rem', lineHeight: 1.6 }}>
                데이터 분석 및 AI 모델링 직무 취업을 목표로 하며, 데이터 기반 공정 문제 해결에 관심 있는 분들을 위한 트랙입니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Grid */}
      <section className="section container">
        <h2 className="tech-font text-center" style={{ fontSize: '2.5rem', color: '#f8fafc', marginBottom: '3rem' }}>상세 커리큘럼</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {/* Track 1 */}
          <div className="neon-border" style={{ padding: '3rem' }}>
            <h3 className="tech-font neon-text" style={{ fontSize: '1.5rem', marginBottom: '2rem', borderBottom: '1px solid rgba(14, 165, 233, 0.3)', paddingBottom: '1rem' }}>TR-01: SMART FACTORY</h3>
            <div className="grid grid-cols-3" style={{ gap: '2rem' }}>
              <div>
                <img src="/smart_factory_promo_1784788744287.png" alt="Phase 1" style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '8px', marginBottom: '1.5rem', opacity: 0.8 }} />
                <div className="tech-font" style={{ color: '#0ea5e9', fontSize: '2.5rem', fontWeight: 800, opacity: 0.5, marginBottom: '1rem' }}>01</div>
                <h4 style={{ fontSize: '1.25rem', color: '#f8fafc', marginBottom: '1rem' }}>자동화 설비 이해</h4>
                <p style={{ color: '#94a3b8', lineHeight: 1.6 }}>PLC 기초/제어, 센서 구조 파악 및 관련 자격증 취득</p>
              </div>
              <div>
                <img src="/ai_data_analysis_1784788766808.png" alt="Phase 2" style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '8px', marginBottom: '1.5rem', opacity: 0.8 }} />
                <div className="tech-font" style={{ color: '#0ea5e9', fontSize: '2.5rem', fontWeight: 800, opacity: 0.5, marginBottom: '1rem' }}>02</div>
                <h4 style={{ fontSize: '1.25rem', color: '#f8fafc', marginBottom: '1rem' }}>데이터 수집·분석</h4>
                <p style={{ color: '#94a3b8', lineHeight: 1.6 }}>IoT 센서 데이터 수집 및 장비 상태 실시간 모니터링</p>
              </div>
              <div>
                <img src="/smart_factory_ai_1784785742542.png" alt="Phase 3" style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '8px', marginBottom: '1.5rem', opacity: 0.8 }} />
                <div className="tech-font" style={{ color: '#0ea5e9', fontSize: '2.5rem', fontWeight: 800, opacity: 0.5, marginBottom: '1rem' }}>03</div>
                <h4 style={{ fontSize: '1.25rem', color: '#f8fafc', marginBottom: '1rem' }}>스마트 공정 구현</h4>
                <p style={{ color: '#94a3b8', lineHeight: 1.6 }}>디지털 트윈 구축, MES 시스템 조작 및 팀 프로젝트</p>
              </div>
            </div>
          </div>
          
          {/* Track 2 */}
          <div className="neon-border" style={{ padding: '3rem' }}>
            <h3 className="tech-font neon-text" style={{ fontSize: '1.5rem', marginBottom: '2rem', borderBottom: '1px solid rgba(14, 165, 233, 0.3)', paddingBottom: '1rem' }}>TR-02: AI + DATA</h3>
            <div className="grid grid-cols-3" style={{ gap: '2rem' }}>
              <div>
                <img src="/ai_data_analysis_1784788766808.png" alt="Phase 1" style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '8px', marginBottom: '1.5rem', opacity: 0.8 }} />
                <div className="tech-font" style={{ color: '#0ea5e9', fontSize: '2.5rem', fontWeight: 800, opacity: 0.5, marginBottom: '1rem' }}>01</div>
                <h4 style={{ fontSize: '1.25rem', color: '#f8fafc', marginBottom: '1rem' }}>데이터 분석 기초</h4>
                <p style={{ color: '#94a3b8', lineHeight: 1.6 }}>데이터 구조 파악, SQL 활용 및 Python 시각화 실습</p>
              </div>
              <div>
                <img src="/tech_mentoring_1784788795886.png" alt="Phase 2" style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '8px', marginBottom: '1.5rem', opacity: 0.8 }} />
                <div className="tech-font" style={{ color: '#0ea5e9', fontSize: '2.5rem', fontWeight: 800, opacity: 0.5, marginBottom: '1rem' }}>02</div>
                <h4 style={{ fontSize: '1.25rem', color: '#f8fafc', marginBottom: '1rem' }}>AI 모델 개발</h4>
                <p style={{ color: '#94a3b8', lineHeight: 1.6 }}>머신러닝 알고리즘, 회귀/분류 모델 및 딥러닝 구축</p>
              </div>
              <div>
                <img src="/smart_factory_ai_1784785742542.png" alt="Phase 3" style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '8px', marginBottom: '1.5rem', opacity: 0.8 }} />
                <div className="tech-font" style={{ color: '#0ea5e9', fontSize: '2.5rem', fontWeight: 800, opacity: 0.5, marginBottom: '1rem' }}>03</div>
                <h4 style={{ fontSize: '1.25rem', color: '#f8fafc', marginBottom: '1rem' }}>제조 AI 프로젝트</h4>
                <p style={{ color: '#94a3b8', lineHeight: 1.6 }}>제조 공정 실데이터 분석 및 AI 문제 해결 프로젝트</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target & CTA */}
      <section className="section container text-center" style={{ paddingBottom: '8rem' }}>
        <h2 className="tech-font title-md" style={{ color: '#f8fafc', marginBottom: '3rem' }}>지원 안내 및 접수</h2>
        <div className="neon-border" style={{ display: 'inline-block', maxWidth: '800px', width: '100%', padding: '0' }}>
          
          <img src="/success_career_1784788805974.png" alt="Career Success" style={{ width: '100%', height: '250px', objectFit: 'cover', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', filter: 'brightness(0.8) contrast(1.1)' }} />

          <div style={{ padding: '3rem' }}>
            <div className="grid grid-cols-2" style={{ gap: '3rem', marginBottom: '3rem', textAlign: 'left' }}>
              <div>
                <h4 style={{ color: '#0ea5e9', fontSize: '1.125rem', marginBottom: '1rem' }}>&gt; 승인 대상 (우선 선발)</h4>
                <ul style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: 1.6, paddingLeft: '1.5rem' }}>
                  <li>만 19세 이상 구직자 및 청년</li>
                  <li>광양만권 (광양/여수/순천) 거주자</li>
                </ul>
              </div>
              <div>
                <h4 style={{ color: '#ef4444', fontSize: '1.125rem', marginBottom: '1rem' }}>&gt; 거부 대상 (제한)</h4>
                <ul style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: 1.6, paddingLeft: '1.5rem' }}>
                  <li>고용보험 가입 재직자</li>
                  <li>재학생 (졸업예정자 제외 불가)</li>
                </ul>
              </div>
            </div>
            
            <div style={{ borderTop: '1px solid rgba(14, 165, 233, 0.2)', paddingTop: '3rem' }}>
              <div className="tech-font neon-text" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', fontSize: '2rem', marginBottom: '2rem' }}>
                <Phone size={32}/> 061-763-7114
              </div>
              <button className="btn btn-primary" style={{ padding: '1.25rem 4rem', fontSize: '1.25rem', fontWeight: 800 }} onClick={handleApplyClick}>
                수강신청 바로가기
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConceptA;
