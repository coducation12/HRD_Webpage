import { useEffect } from 'react';

// Google Analytics 4 (GA4) 트래킹 연동 유틸리티
// 실제 운영 시 'G-XXXXXXXXXX'를 발급받은 측정 ID로 변경해야 합니다.

export const initGA = (measurementId: string) => {
  if (typeof window === 'undefined') return;
  
  // 이미 로드된 경우 방지
  if (document.getElementById('ga-script')) return;

  const script = document.createElement('script');
  script.id = 'ga-script';
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  script.async = true;
  document.head.appendChild(script);

  const inlineScript = document.createElement('script');
  inlineScript.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${measurementId}');
  `;
  document.head.appendChild(inlineScript);
};

export const trackEvent = (eventName: string, params: object = {}) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, params);
  }
};

export const usePageTracking = (pageName: string) => {
  useEffect(() => {
    initGA('G-DEMO123456'); // 데모 ID
    trackEvent('page_view', { page_title: pageName });
  }, [pageName]);
};
