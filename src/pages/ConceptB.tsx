import { ArrowRight, CheckSquare, Zap, Target, Phone } from 'lucide-react';
import { usePageTracking, trackEvent } from '../utils/analytics';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ConceptB = () => {
  usePageTracking('Concept B - Neo Brutalism Images');
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleApplyClick = () => {
    trackEvent('apply_button_click', { concept: 'B', location: 'slide_' + currentSlide });
    window.open('https://forms.google.com/', '_blank');
  };

  useEffect(() => {
    const container = document.getElementById('snap-container');
    if (!container) return;
    
    const handleScroll = () => {
      const slideHeight = window.innerHeight;
      const scrollY = container.scrollTop;
      const slideIndex = Math.round(scrollY / slideHeight);
      setCurrentSlide(slideIndex);
    };
    
    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSlide = (index: number) => {
    const container = document.getElementById('snap-container');
    if (container) {
      container.scrollTo({ top: window.innerHeight * index, behavior: 'smooth' });
    }
  };

  return (
    <div id="snap-container" className="theme-b-container">
      {/* Fixed Navigation - Brutalist Style */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, padding: '1rem', zIndex: 100 }}>
        <div className="container brutal-box" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 'clamp(0.5rem, 2vw, 1rem) clamp(1rem, 4vw, 2rem)' }}>
          <div style={{ fontSize: 'clamp(1.2rem, 4vw, 1.75rem)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.05em', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#000' }}>
              <Zap size={32} fill="#fcd34d" /> HRD BOOTCAMP
            </Link>
          </div>
          <button className="brutal-btn" onClick={handleApplyClick} style={{ padding: 'clamp(0.5rem, 2vw, 0.75rem) clamp(1rem, 3vw, 2rem)', fontSize: 'clamp(0.875rem, 2.5vw, 1.125rem)' }}>지금 지원하기</button>
        </div>
      </nav>

      {/* Slide Navigation Dots */}
      <div style={{ position: 'fixed', right: '2rem', top: '50%', transform: 'translateY(-50%)', display: 'flex', flexDirection: 'column', gap: '1rem', zIndex: 50 }}>
        {[0,1,2,3,4].map(idx => (
          <div key={idx} onClick={() => scrollToSlide(idx)} style={{ 
            width: '16px', height: '16px', borderRadius: '50%', 
            background: currentSlide === idx ? '#000' : '#fff', 
            border: '3px solid #000',
            transition: 'all 0.2s',
            transform: currentSlide === idx ? 'scale(1.2)' : 'scale(1)',
            cursor: 'pointer'
          }} />
        ))}
      </div>

      {/* Slide 1: Hero (Yellow) */}
      <section className="snap-section brutal-bg-yellow text-center" style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.15, backgroundImage: 'url("/smart_factory_promo_1784788744287.png")', backgroundSize: 'cover', backgroundPosition: 'center', mixBlendMode: 'multiply' }}></div>
        <div className="container animate-fade-in" style={{ paddingTop: '2rem', position: 'relative', zIndex: 1 }}>
          
          {/* Main Hero Logos */}
          <div className="logo-container">
            <div className="logo-group">
              <img src="/jeonnam_transparent.png" alt="전남광주" className="logo-img" />
              <span className="logo-text" style={{ color: '#fff', textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 3px 3px 0 #000' }}>전남광주</span>
            </div>
            <div className="logo-group">
              <img src="/gwangyang_transparent.png" alt="광양시" className="logo-img" />
              <span className="logo-text" style={{ color: '#fff', textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 3px 3px 0 #000' }}>광양시</span>
            </div>
          </div>

          <div className="brutal-box" style={{ display: 'inline-block', padding: '0.5rem 2rem', marginBottom: '3rem', fontSize: '1.25rem', fontWeight: 800, transform: 'rotate(-2deg)' }}>
            🔥 K-Digital Training 국비지원 부트캠프
          </div>
          <h1 className="brutal-text title-xl" style={{ fontWeight: 900, lineHeight: 1.1, marginBottom: '2rem', letterSpacing: '-0.03em', wordBreak: 'keep-all' }}>
            실무가 곧 스펙이 되는<br />
            스마트팩토리 & AI 클래스
          </h1>
          <div className="brutal-box flex-responsive" style={{ display: 'inline-flex', padding: '2rem 4rem', gap: '4rem', marginBottom: '3rem', background: '#fff', transform: 'rotate(1deg)', justifyContent: 'center' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.125rem', fontWeight: 900, marginBottom: '0.5rem' }}>진행 기간</div>
              <div className="title-md brutal-text" style={{ fontWeight: 900 }}>26.08.03 - 11.13</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.125rem', fontWeight: 900, marginBottom: '0.5rem' }}>일일 학습 시간</div>
              <div className="title-md brutal-text" style={{ fontWeight: 900 }}>09:00 - 16:00 <span style={{ fontSize: '1.25rem' }}>(70일)</span></div>
            </div>
          </div>
          <p style={{ fontSize: '1.5rem', fontWeight: 700, maxWidth: '800px', margin: '0 auto 4rem', lineHeight: 1.6, background: '#fff', padding: '1rem', border: '3px solid #000', boxShadow: '4px 4px 0 #000' }}>
            포스코 실무진의 현장 멘토링! 기초부터 취업까지,<br/>뻔한 포트폴리오를 부수고 진짜 실무 능력을 키워라!
          </p>
        </div>
      </section>

      {/* Slide 2: Benefits (Mint) */}
      <section className="snap-section brutal-bg-mint">
        <div className="container flex-responsive" style={{ alignItems: 'center' }}>
          <div style={{ flex: 1 }}>
            <h2 className="brutal-text title-lg" style={{ fontWeight: 900, marginBottom: '1rem', textTransform: 'uppercase', lineHeight: 1.1 }}>최대<br/>2,100,000 원</h2>
            <p style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '3rem' }}>돈 받으면서 스펙 쌓는 압도적인 수강 혜택</p>
            <div className="brutal-box" style={{ padding: '2rem', marginBottom: '1.5rem', transform: 'rotate(-1deg)' }}>
              <div style={{ fontSize: '1.25rem', fontWeight: 900, color: '#ef4444' }}>✓ 교육비 및 교재비 100% 무료</div>
            </div>
            <div className="brutal-box" style={{ padding: '2rem', marginBottom: '1.5rem', transform: 'rotate(1deg)' }}>
              <div style={{ fontSize: '1.25rem', fontWeight: 900 }}>✓ 훈련 참여 수당 최대 644,000원</div>
            </div>
            <div className="brutal-box" style={{ padding: '2rem', transform: 'rotate(-0.5deg)' }}>
              <div style={{ fontSize: '1.25rem', fontWeight: 900, color: '#3b82f6' }}>✓ 교육 훈련 장려금 최대 1,500,000원</div>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <img src="/students_studying_1784788777759.png" alt="Students" className="brutal-box" style={{ width: '100%', height: '600px', objectFit: 'cover', filter: 'contrast(1.2) grayscale(0.2)' }} />
          </div>
        </div>
      </section>

      {/* Slide 3: Courses (Pink) */}
      <section className="snap-section brutal-bg-pink">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="brutal-text title-lg" style={{ fontWeight: 900, marginBottom: '1rem' }}>핵심 트랙 선택</h2>
            <p className="text-lg" style={{ fontWeight: 800 }}>취업의 문을 부수는 핵심 AX 역량. 당신의 트랙을 선택하세요.</p>
          </div>

          <div className="grid grid-cols-2" style={{ gap: '3rem' }}>
            <div className="brutal-box" style={{ backgroundColor: '#bfdbfe', transform: 'rotate(-1deg)', display: 'flex', flexDirection: 'column' }}>
              <img src="/smart_factory_ai_1784785742542.png" alt="Smart Factory" style={{ width: '100%', height: '250px', objectFit: 'cover', borderBottom: '4px solid #000' }} />
              <div style={{ padding: '3rem' }}>
                <Target size={48} style={{ marginBottom: '1rem' }}/>
                <h3 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '1rem' }}>트랙 1. 스마트팩토리</h3>
                <p style={{ fontSize: '1.25rem', fontWeight: 700, lineHeight: 1.6 }}>
                  자동화 설비 및 생산기술 분야 뽀개기.<br/>공장 설비 및 현장 제어 시스템 전문 트랙!
                </p>
              </div>
            </div>
            
            <div className="brutal-box" style={{ backgroundColor: '#fbcfe8', transform: 'rotate(1deg)', display: 'flex', flexDirection: 'column' }}>
              <img src="/ai_data_analysis_1784788766808.png" alt="AI Data" style={{ width: '100%', height: '250px', objectFit: 'cover', borderBottom: '4px solid #000' }} />
              <div style={{ padding: '3rem' }}>
                <Target size={48} style={{ marginBottom: '1rem' }}/>
                <h3 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '1rem' }}>트랙 2. AI + DATA 실무</h3>
                <p style={{ fontSize: '1.25rem', fontWeight: 700, lineHeight: 1.6 }}>
                  데이터 분석 및 AI 모델링 직무 뽀개기.<br/>데이터 기반 공정 문제 해결 프로그래밍!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 4: Curriculum (Lavender) */}
      <section className="snap-section brutal-bg-lavender">
        <div className="container flex-responsive" style={{ alignItems: 'center' }}>
          <div style={{ flex: '1' }}>
            <img src="/tech_mentoring_1784788795886.png" alt="Mentoring" className="brutal-box" style={{ width: '100%', height: 'clamp(300px, 50vh, 700px)', objectFit: 'cover', transform: 'rotate(-2deg)' }} />
          </div>
          <div style={{ flex: '1.5' }}>
            <h2 className="brutal-text" style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '1rem' }}>3단계 레벨업 커리큘럼</h2>
            <p style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '3rem' }}>비전공자도 마스터하는 미친 커리큘럼</p>
            
            <div className="brutal-box brutal-bg-white" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '1rem', color: '#3b82f6' }}>TR-01 스마트팩토리 🚀</h3>
              <p style={{ fontSize: '1.25rem', fontWeight: 700 }}>1. 자동화 설비 이해 (PLC 기초)<br/>2. 데이터 수집·분석 (IoT 센서)<br/>3. 스마트 공정 구현 (MES 프로젝트)</p>
            </div>
            
            <div className="brutal-box brutal-bg-white" style={{ padding: '2.5rem' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '1rem', color: '#ec4899' }}>TR-02 AI + DATA 🚀</h3>
              <p style={{ fontSize: '1.25rem', fontWeight: 700 }}>1. 데이터 분석 기초 (Python, SQL)<br/>2. AI 모델 개발 (딥러닝)<br/>3. 공정 AI 프로젝트 (실데이터 활용)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 5: Apply (White) */}
      <section className="snap-section brutal-bg-white text-center">
        <div className="container">
          <h2 className="brutal-text title-lg" style={{ fontWeight: 900, marginBottom: '4rem' }}>지원 안내 및 접수</h2>
          
          <div className="grid grid-cols-2" style={{ gap: '3rem', maxWidth: '1000px', margin: '0 auto 4rem', textAlign: 'left' }}>
            <div className="brutal-box" style={{ padding: 'clamp(1.5rem, 4vw, 3rem)', backgroundColor: '#fcd34d' }}>
              <h4 style={{ fontSize: 'clamp(1.25rem, 4vw, 1.75rem)', marginBottom: '1.5rem', fontWeight: 900, display: 'flex', alignItems: 'center', gap: '1rem' }}><CheckSquare size={32}/> 지원 자격 (우선 선발)</h4>
              <ul style={{ fontSize: 'clamp(1rem, 3vw, 1.25rem)', fontWeight: 700, lineHeight: 1.8, paddingLeft: '1.5rem' }}>
                <li>만 19세 이상 구직자 누구나 (청년)</li>
                <li>광양/여수/순천 등 광양만권 거주자</li>
              </ul>
            </div>
            <div className="brutal-box" style={{ padding: 'clamp(1.5rem, 4vw, 3rem)', backgroundColor: '#f9a8d4' }}>
              <h4 style={{ fontSize: 'clamp(1.25rem, 4vw, 1.75rem)', marginBottom: '1.5rem', fontWeight: 900, display: 'flex', alignItems: 'center', gap: '1rem' }}><CheckSquare size={32}/> 지원 제한 대상</h4>
              <ul style={{ fontSize: 'clamp(1rem, 3vw, 1.25rem)', fontWeight: 700, lineHeight: 1.8, paddingLeft: '1.5rem' }}>
                <li>고용보험 가입 중인 재직자</li>
                <li>재학생 (졸업예정자는 무관)</li>
                <li>연매출 1.5억 이상 사업자</li>
              </ul>
            </div>
          </div>
          
          <div className="brutal-box" style={{ padding: 'clamp(2rem, 5vw, 4rem)', display: 'inline-block', minWidth: '80%', maxWidth: '100%', transform: 'rotate(1deg)' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', fontSize: 'clamp(2rem, 8vw, 4rem)', fontWeight: 900, marginBottom: '2rem', whiteSpace: 'nowrap' }}>
              <Phone size={40}/> 061-763-7114
            </div>
            <p style={{ fontSize: 'clamp(1rem, 3vw, 1.5rem)', fontWeight: 800, marginBottom: '3rem' }}>[ 전화 및 카카오톡 예비 신청 ] ➔ [ 인터뷰 ] ➔ [ 최종 합격 ]</p>
            <button className="brutal-btn" style={{ padding: 'clamp(1rem, 3vw, 2rem) clamp(1.5rem, 5vw, 5rem)', fontSize: 'clamp(1.25rem, 4vw, 2rem)', display: 'inline-flex', alignItems: 'center', gap: '1rem', background: '#3b82f6', color: '#fff', width: '100%', maxWidth: '400px', justifyContent: 'center' }} onClick={handleApplyClick}>
              수강신청 폭격하기 <ArrowRight size={32} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConceptB;
