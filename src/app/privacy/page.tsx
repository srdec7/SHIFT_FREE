import React from 'react';

export default function PrivacyPolicy() {
  return (
    <>
      <style>{`
        :root {
            --bg: #050505;
            --card-bg: #0a0a0a;
            --gold: #A89070;
            --text-main: #e0e0e0;
            --text-dim: #888888;
        }
        body {
            background-color: var(--bg);
            color: var(--text-main);
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            line-height: 1.7;
            margin: 0;
            padding: 40px 20px;
            display: flex;
            justify-content: center;
        }
        .container {
            max-width: 800px;
            width: 100%;
            background: var(--card-bg);
            padding: 50px;
            border-radius: 24px;
            border: 1px solid rgba(168, 144, 112, 0.15);
            box-shadow: 0 20px 60px rgba(0,0,0,0.8);
        }
        h1 {
            font-family: 'Playfair Display', serif;
            color: var(--gold);
            font-size: 2.2rem;
            margin-bottom: 10px;
            letter-spacing: -0.02em;
            font-weight: 400;
        }
        .subtitle {
            color: var(--text-dim);
            font-size: 0.9rem;
            margin-bottom: 40px;
            border-bottom: 1px solid rgba(255,255,255,0.08);
            padding-bottom: 20px;
            text-transform: uppercase;
            letter-spacing: 0.1em;
        }
        h2 {
            font-family: 'Playfair Display', serif;
            color: var(--gold);
            font-size: 1.4rem;
            margin-top: 40px;
            margin-bottom: 15px;
            font-weight: 400;
        }
        p, li {
            font-size: 0.95rem;
            color: var(--text-main);
            font-weight: 300;
        }
        a {
            color: var(--gold);
            text-decoration: none;
        }
        ul {
            padding-left: 20px;
        }
        .footer {
            margin-top: 60px;
            padding-top: 30px;
            border-top: 1px solid rgba(255,255,255,0.08);
            color: var(--text-dim);
            font-size: 0.85rem;
            text-align: center;
            font-weight: 300;
            letter-spacing: 0.05em;
        }
        .divider {
            margin: 60px 0;
            border: 0;
            height: 1px;
            background: linear-gradient(90deg, transparent, rgba(168, 144, 112, 0.3), transparent);
        }
        @media (max-width: 600px) {
            .container { padding: 30px 20px; border-radius: 16px; }
            h1 { font-size: 1.8rem; }
            body { padding: 20px 10px; }
        }
      `}</style>

      <div className="container">
        {/* English Version */}
        <div>
            <h1>Privacy Policy</h1>
            <div className="subtitle">Last Updated: May 2026</div>
            
            <p>Welcome to <strong>SHIFT</strong>. We respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you use our mobile application.</p>
            
            <h2>1. Data We Collect</h2>
            <p>SHIFT is designed to respect your privacy. We do not require you to create an account to use the basic features of the app.</p>
            <ul>
                <li><strong>Local Storage:</strong> Your 30-day progress, daily missions, and journal entries are stored completely locally on your device.</li>
                <li><strong>No Server Transmission:</strong> The app does not transmit your personal data to our servers.</li>
            </ul>

            <h2>2. Third-Party Services</h2>
            <p>Our app may use third-party services (such as Google AdSense for optional rewarded content). These services may collect information used to identify you in accordance with their own strict privacy policies.</p>

            <h2>3. Data Security</h2>
            <p>Since your personal entries are saved locally on your device, the security of this data relies entirely on your device's security measures (e.g., Face ID, Touch ID, or passcode). We do not have access to your local data and cannot read your entries.</p>

            <h2>4. Changes to This Policy</h2>
            <p>We may update our Privacy Policy from time to time. We will notify you of any changes by updating the "Last Updated" date at the top of this page.</p>

            <h2>5. Contact Us</h2>
            <p>If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at <strong>srdec7@gmail.com</strong>.</p>
        </div>

        <hr className="divider" />

        {/* Korean Version */}
        <div>
            <h1>개인정보처리방침</h1>
            <div className="subtitle">최종 업데이트: 2026년 5월</div>
            
            <p><strong>SHIFT</strong> (이하 "본 앱")를 이용해 주셔서 감사합니다. 본 앱은 사용자의 개인정보를 가장 중요하게 생각하며, 이를 보호하기 위해 최선을 다하고 있습니다.</p>
            
            <h2>1. 수집하는 데이터</h2>
            <p>본 앱은 기본적으로 회원가입이나 로그인을 요구하지 않습니다.</p>
            <ul>
                <li><strong>로컬 저장:</strong> 사용자의 30일 진행 상황 및 매일 기록한 내용은 전적으로 사용자의 기기 내부(Local Storage)에만 안전하게 저장됩니다.</li>
                <li><strong>서버 전송 없음:</strong> 사용자의 기록이나 개인정보는 당사의 서버로 전송되지 않습니다.</li>
            </ul>

            <h2>2. 제3자 서비스</h2>
            <p>본 앱은 리워드 콘텐츠 제공 등을 위해 구글 애드센스(Google AdSense)와 같은 제3자 서비스를 사용할 수 있습니다. 해당 서비스들은 자체적인 엄격한 개인정보처리방침에 따라 광고 식별자 등의 데이터를 수집할 수 있습니다.</p>

            <h2>3. 데이터 보안</h2>
            <p>사용자의 데이터는 기기에 로컬로 저장되므로, 기기 자체의 보안(비밀번호, Face ID, 생체 인식 등)에 의해 완벽하게 보호됩니다. 당사는 사용자의 로컬 데이터에 접근할 권한이나 방법이 없습니다.</p>

            <h2>4. 본 방침의 변경</h2>
            <p>당사는 본 개인정보처리방침을 수시로 업데이트할 수 있습니다. 변경 사항이 있을 경우 이 페이지의 상단 날짜를 수정하여 공지할 것입니다.</p>

            <h2>5. 문의처</h2>
            <p>본 개인정보처리방침에 대한 질문이나 건의 사항이 있으시다면 언제든지 <strong>srdec7@gmail.com</strong> 으로 연락 주시기 바랍니다.</p>
        </div>

        <div className="footer">
            &copy; 2026 SHIFT. All rights reserved.
        </div>
      </div>
    </>
  );
}
