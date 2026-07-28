/**
 * faq.js — i18n content for FAQ page.
 * v3 (2026-07-28): 다이빙 모드/미니/App2→3 이전 문항 추가, 수심 60m, help@ 이메일, near me 5km, 인터넷 안내 개선.
 * 미출시 제품(Watch Dive) 제외. 스마트폰 호환 링크 URL은 확정 필요(https://guide.diveroid.com/smartphone-compatibility.html).
 */
window.PAGE_CONTENT = {
  en: {
    pageTitle: "FAQ",
    categories: [
      {
        name: "Product",
        items: [
          {
            q: "What is Universal Pro?",
            a: `<p>Universal Pro is an underwater smartphone housing for scuba divers and snorkelers. It's compatible with a wide range of smartphones and works with the DIVEROID app for underwater photography, video, and dive logging.</p>`,
          },
          {
            q: "What is the maximum depth rating?",
            a: `<p>Universal Pro is rated to <strong>60 meters (200 feet)</strong>. Do not exceed this depth — doing so may cause water damage and will void your warranty.</p>`,
          },
          {
            q: "Which smartphones are compatible?",
            a: `<p>Universal Pro supports smartphones from 5.4" to 6.9" screen size, including most current iPhone and Android models.<br /><br />
<strong>Compatible dimensions:</strong> Width 67–85mm, Height 135–165mm<br /><br />
Please check the <a href="https://guide.diveroid.com/smartphone-compatibility.html" target="_blank">smartphone compatibility list</a> for your specific model. We recommend a dry-land fit test before diving.</p>`,
          },
          {
            q: "How do I maintain the O-ring?",
            a: `<ul>
  <li>Inspect before every dive for cracks, dirt, or deformation</li>
  <li>Apply a thin layer of silicone-based O-ring grease before every use</li>
  <li>Replace every 6–12 months, or immediately if damaged</li>
  <li>Replacement O-rings are available at diveroid.com</li>
</ul>
<p>Proper O-ring maintenance is the most important step to prevent water damage.</p>`,
          },
          {
            q: "Can I use it for snorkeling and freediving?",
            a: `<p>Yes! Universal Pro works great for snorkeling, freediving, and scuba diving.</p>`,
          },
        ],
      },
      {
        name: "Dive Mode & Devices",
        items: [
          {
            q: "How do I start dive mode?",
            a: `<p>Attach your smartphone to the housing, make sure both <strong>Airplane mode</strong> and <strong>Bluetooth</strong> are turned on, then close the housing — <strong>dive mode starts automatically</strong>.</p>
<p>After dive mode starts, check that dive computer data (depth, diving time, NDL, etc.) appears. If it doesn't, <strong>do not open the housing</strong> — <strong>press and hold the Mini button</strong> and it will connect automatically. (The Mini must be registered in the app beforehand.)</p>`,
          },
          {
            q: "Can I use the housing without the Mini?",
            a: `<p>Yes, you can use the Universal Pro housing on its own. You can take photos and videos and save dive logs. Turn on Airplane mode, attach your smartphone, and close the housing — camera mode starts automatically.</p>
<p><strong>Note:</strong> Without the Mini, the dive computer function does not work. Always use a separate dive computer to dive safely.</p>`,
          },
          {
            q: "How do I register the Mini?",
            a: `<p>In the app: <strong>My Page</strong> (bottom right) → <strong>My Devices</strong> → <strong>Add devices</strong> → <strong>Start device registration</strong> → select <strong>Mini</strong> → press the Mini button. When the Mini's serial number (e.g., E5FAB0F8F0F2) appears on screen, tap <strong>Next</strong> to complete registration.</p>`,
          },
        ],
      },
      {
        name: "App",
        items: [
          {
            q: "How do I set up the DIVEROID app for the first time?",
            a: `<ol>
  <li>Download the DIVEROID app from the App Store (iOS) or Google Play (Android)</li>
  <li>Create an account or sign in</li>
  <li>Follow the in-app pairing guide to connect your device</li>
  <li>Test the camera and buttons before your first dive</li>
</ol>
<p>See the Tutorial section for step-by-step visual guidance.</p>`,
          },
          {
            q: "Does the app work underwater?",
            a: `<p>Yes! The app is designed to work underwater. Since touchscreens don't respond to touch underwater (normal for all smartphones), use the physical buttons on the Universal Pro housing to control the camera.</p>`,
          },
          {
            q: "The app is not responding. What should I do?",
            a: `<ol>
  <li>Force-close the app and reopen it</li>
  <li>Make sure you have the latest version installed</li>
  <li>Restart your phone</li>
  <li>If the problem persists, contact support</li>
</ol>`,
          },
          {
            q: "Do I need an internet connection to use the app?",
            a: `<p><strong>An internet connection is required for the initial setup and pairing.</strong> Once you enter dive mode, no internet connection is needed.</p>
<p>Core features like the camera and dive logging work underwater and offline. Internet is used to sync your dive logs to the cloud and to load dive site information and reviews. Your data syncs automatically once you're back online.</p>`,
          },
          {
            q: "Can I transfer my logs and media from App 2.0 to App 3.0?",
            a: `<p>Yes. In the app: <strong>My Page</strong> (bottom right) → <strong>Import from DIVEROID 2.0</strong>, then follow the on-screen guide.</p>
<p>Note: you must use the <strong>same account</strong> on both App 2.0 and App 3.0. Some corrupted media or logs may not transfer.</p>`,
          },
        ],
      },
      {
        name: "Dive Sites & Logs",
        items: [
          {
            q: "How do I find dive sites in the app?",
            a: `<p>Open the app to explore dive sites by region on the map or list. Each dive site shows key details such as depth range, marine life, photos, and reviews from other divers, so you can plan where to dive next.</p>`,
          },
          {
            q: "Can I see dive sites near me?",
            a: `<p>Yes. The app shows dive sites near your current location (within a 5km radius) so you can quickly find spots around you. Please allow location access for this feature to work.</p>`,
          },
          {
            q: "Can I read and write dive site reviews?",
            a: `<p>Yes. You can read reviews and tips left by other divers, and share your own experience after a dive. Reviews help the whole community choose better dive sites.</p>`,
          },
          {
            q: "How do I record and manage my dive logs?",
            a: `<p>You can log each dive with details like date, location, max depth, dive time, and water temperature. Logs are saved automatically to your device and synced to the cloud when you reconnect to the internet, so you can access them from any device after signing in.</p>`,
          },
        ],
      },
      {
        name: "Orders & Shipping",
        items: [
          {
            q: "Where do you ship to?",
            a: `<p>We ship worldwide. Domestic delivery in Korea takes 1–3 business days; international orders typically take 7–14 business days.</p>`,
          },
          {
            q: "Are there import duties or customs fees?",
            a: `<p>International customers are responsible for any applicable import duties, customs fees, and local taxes. These are not included in the product price. Please check your country's import regulations before ordering.</p>`,
          },
          {
            q: "My order hasn't arrived. What should I do?",
            a: `<ol>
  <li>Check the tracking number in your order confirmation email</li>
  <li>International orders may be held at customs — this is outside our control</li>
  <li>If there's been no tracking update for 14+ days, contact us at help@diveroid.com</li>
</ol>`,
          },
        ],
      },
      {
        name: "Warranty & After-Sales",
        items: [
          {
            q: "What is the warranty period?",
            a: `<p>Universal Pro comes with a <strong>2-year limited warranty</strong> from the date of purchase, covering manufacturing defects. See the full Warranty Policy in Terms of Use for details.</p>`,
          },
          {
            q: "Water got inside my housing. What do I do?",
            a: `<p><strong>Immediately after surfacing:</strong></p>
<ol>
  <li>Do NOT open the housing underwater</li>
  <li>Move to a dry area, then carefully open the housing</li>
  <li>Remove your phone and dry it thoroughly before powering on</li>
  <li>Do not use the housing again until the leak cause is identified</li>
  <li>Contact help@diveroid.com with photos</li>
</ol>
<br />Common causes:
<ul>
  <li>O-ring not properly seated or damaged</li>
  <li>Housing not fully locked before entering water</li>
  <li>Depth exceeded 60m</li>
</ul>`,
          },
          {
            q: "How do I contact customer support?",
            a: `<ul>
  <li>In-app: My Page → 1:1 Inquiry</li>
  <li>Email: help@diveroid.com</li>
  <li>Website: diveroid.com</li>
</ul>
<p>We respond within 2 business days.</p>`,
          },
        ],
      },
    ],
    cta: {
      text: "Can't find your answer?",
      button: "Ask Us Directly",
    },
  },

  ko: {
    pageTitle: "자주 묻는 질문",
    categories: [
      {
        name: "제품",
        items: [
          {
            q: "Universal Pro는 어떤 제품인가요?",
            a: `<p>Universal Pro는 스쿠버 다이버와 스노클러를 위한 스마트폰 수중 하우징입니다. 다양한 스마트폰과 호환되며, DIVEROID 앱과 연동하여 수중 촬영과 다이브 로그 기록을 지원합니다.</p>`,
          },
          {
            q: "최대 수심은 얼마인가요?",
            a: `<p>Universal Pro는 <strong>최대 60m(200피트)</strong>까지 사용 가능합니다. 이 수심을 초과하면 침수 및 보증 무효가 될 수 있습니다.</p>`,
          },
          {
            q: "어떤 스마트폰과 호환되나요?",
            a: `<p>화면 크기 5.4"~6.9"의 스마트폰을 지원하며, 대부분의 최신 아이폰 및 안드로이드 기종과 호환됩니다.<br /><br />
<strong>호환 사이즈:</strong> 가로 67~85mm, 세로 135~165mm<br /><br />
기종별 호환 여부는 <a href="https://guide.diveroid.com/smartphone-compatibility.html" target="_blank">스마트폰 호환 리스트</a>에서 확인하세요. 다이빙 전에 지상에서 먼저 장착 테스트를 권장합니다.</p>`,
          },
          {
            q: "O링은 어떻게 관리하나요?",
            a: `<ul>
  <li>매 다이빙 전 균열, 이물질, 변형 확인</li>
  <li>사용 전마다 실리콘 기반 O링 그리스를 얇게 도포</li>
  <li>6~12개월마다 또는 손상 시 즉시 교체</li>
  <li>교체용 O링은 diveroid.com에서 구매 가능</li>
</ul>
<p>O링 관리가 침수 방지의 가장 중요한 단계입니다.</p>`,
          },
          {
            q: "스노클링·프리다이빙에도 사용할 수 있나요?",
            a: `<p>네! Universal Pro는 스노클링, 프리다이빙, 스쿠버다이빙 모두 사용 가능합니다.</p>`,
          },
        ],
      },
      {
        name: "다이빙 모드 & 기기",
        items: [
          {
            q: "다이빙 모드 시작은 어떻게 하나요?",
            a: `<p>하우징에 스마트폰을 장착하고 <strong>비행기 모드</strong>와 <strong>블루투스</strong>가 모두 켜져 있는지 확인한 뒤 하우징을 닫으면 <strong>자동으로 다이빙 모드가 실행</strong>됩니다.</p>
<p>다이빙 모드 실행 후 다이빙 컴퓨터 데이터(수심, 다이빙 시간, NDL 등)가 표시되는지 확인해 주세요. 표시되지 않으면 <strong>하우징을 열지 마시고</strong> <strong>미니(Mini) 버튼을 꾹~ 길게</strong> 눌러 주세요. 자동으로 연결됩니다. (미니는 사전에 앱에 등록되어 있어야 합니다.)</p>`,
          },
          {
            q: "미니(Mini) 없이 하우징만 사용 가능한가요?",
            a: `<p>네, Universal Pro 하우징만으로도 사용 가능합니다. 사진·동영상 촬영과 로그북 저장이 가능합니다. 비행기 모드를 켠 뒤 스마트폰을 하우징에 장착하고 하우징을 닫으면 자동으로 촬영 모드가 실행됩니다.</p>
<p><strong>단, 하우징만 사용할 경우 다이빙 컴퓨터 기능이 작동하지 않으므로, 반드시 별도의 다이빙 컴퓨터를 사용하여 안전하게 다이빙을 진행해 주세요.</strong></p>`,
          },
          {
            q: "미니(Mini)는 어떻게 등록하나요?",
            a: `<p>앱 오른쪽 하단 <strong>My Page</strong> → <strong>My Devices</strong> → <strong>Add devices</strong> → <strong>Start device registration</strong> → 미니(Mini) 선택 → 미니 버튼을 누르고, 화면에 미니의 시리얼 번호(예: E5FAB0F8F0F2)가 표시되면 <strong>Next</strong> 버튼을 눌러 등록을 완료합니다.</p>`,
          },
        ],
      },
      {
        name: "앱",
        items: [
          {
            q: "DIVEROID 앱을 처음 설정하는 방법은?",
            a: `<ol>
  <li>App Store(iOS) 또는 Google Play(Android)에서 DIVEROID 앱 다운로드</li>
  <li>계정 생성 또는 로그인</li>
  <li>앱 내 페어링 가이드에 따라 기기 연결</li>
  <li>첫 다이빙 전 카메라와 버튼 동작 테스트</li>
</ol>
<p>단계별 가이드는 Tutorial 섹션을 참고하세요.</p>`,
          },
          {
            q: "수중에서 앱이 작동하나요?",
            a: `<p>네! 앱은 수중에서 작동하도록 설계되었습니다. 수중에서는 터치스크린이 반응하지 않지만(모든 스마트폰의 정상 동작), Universal Pro 하우징의 물리 버튼으로 카메라를 조작할 수 있습니다.</p>`,
          },
          {
            q: "앱이 응답하지 않아요.",
            a: `<ol>
  <li>앱 강제 종료 후 다시 실행</li>
  <li>최신 버전인지 확인</li>
  <li>스마트폰 재시작</li>
  <li>문제 지속 시 고객 지원에 문의</li>
</ol>`,
          },
          {
            q: "앱을 사용하려면 인터넷 연결이 필요한가요?",
            a: `<p><strong>첫 설정 및 연결 시에는 인터넷 연결이 반드시 필요합니다.</strong> 다이빙 모드 진입 후에는 별도의 인터넷 연결이 필요하지 않습니다.</p>
<p>카메라, 다이브 로그 기록 같은 핵심 기능은 수중·오프라인에서도 작동합니다. 인터넷 연결은 다이브 로그를 클라우드에 동기화하고, 다이브사이트 정보와 리뷰를 불러올 때 사용됩니다. 온라인 상태가 되면 데이터가 자동으로 동기화됩니다.</p>`,
          },
          {
            q: "기존 App 2.0에서 App 3.0으로 로그·미디어를 옮길 수 있나요?",
            a: `<p>네, 가능합니다. 앱 오른쪽 하단 <strong>My Page</strong> → <strong>Import from DIVEROID 2.0</strong> 메뉴를 눌러 안내에 따라 진행해 주세요.</p>
<p>단, App 2.0과 App 3.0의 사용 계정이 <strong>동일</strong>해야 합니다. 일부 손상된 미디어와 로그는 이전되지 않을 수 있으니 참고 부탁드립니다.</p>`,
          },
        ],
      },
      {
        name: "다이브사이트 & 로그",
        items: [
          {
            q: "앱에서 다이빙 포인트(다이브사이트)는 어떻게 찾나요?",
            a: `<p>앱을 열면 지도나 목록에서 지역별 다이브사이트를 탐색할 수 있습니다. 각 다이브사이트마다 수심 범위, 수중 생물, 사진, 다른 다이버들의 리뷰 등 정보를 제공해, 다음 다이빙 장소를 계획할 수 있습니다.</p>`,
          },
          {
            q: "내 근처 다이빙 포인트를 볼 수 있나요?",
            a: `<p>네. 앱에서 현재 위치 주변(반경 5km 이내)의 다이브사이트를 보여줘, 내 주변 다이빙 포인트를 빠르게 찾을 수 있습니다. 이 기능을 사용하려면 위치 접근을 허용해 주세요.</p>`,
          },
          {
            q: "다이브사이트 리뷰를 보고 쓸 수 있나요?",
            a: `<p>네. 다른 다이버들이 남긴 리뷰와 팁을 확인하고, 다이빙 후 직접 경험을 공유할 수 있습니다. 리뷰는 다이버 커뮤니티가 더 좋은 다이브사이트를 고르는 데 도움이 됩니다.</p>`,
          },
          {
            q: "다이브 로그는 어떻게 기록·관리하나요?",
            a: `<p>날짜, 위치, 최대 수심, 다이빙 시간, 수온 등 정보로 다이빙을 기록할 수 있습니다. 로그는 기기에 자동 저장되고, 인터넷 연결 시 클라우드에 동기화되어 로그인하면 어느 기기에서나 확인할 수 있습니다.</p>`,
          },
        ],
      },
      {
        name: "주문 및 배송",
        items: [
          {
            q: "어디까지 배송되나요?",
            a: `<p>전 세계 배송 가능합니다. 국내(한국)는 1~3 영업일, 해외는 보통 7~14 영업일 소요됩니다.</p>`,
          },
          {
            q: "관부가세가 있나요?",
            a: `<p>해외 주문 시 관부가세, 통관 수수료, 현지 세금은 구매자 부담입니다. 주문 전 해당 국가의 수입 규정을 확인해 주세요.</p>`,
          },
          {
            q: "주문한 제품이 아직 도착하지 않았어요.",
            a: `<ol>
  <li>주문 확인 이메일에서 운송장 번호 확인</li>
  <li>해외 주문은 통관 검사로 지연될 수 있음 (회사 통제 외)</li>
  <li>14일 이상 업데이트가 없으면 help@diveroid.com으로 문의</li>
</ol>`,
          },
        ],
      },
      {
        name: "보증 및 A/S",
        items: [
          {
            q: "보증 기간은 얼마인가요?",
            a: `<p>구매일로부터 <strong>2년 제한 보증</strong>이 적용됩니다. 제조 결함에 한해 보증됩니다. 자세한 내용은 이용약관 > 제품 보증 정책을 확인하세요.</p>`,
          },
          {
            q: "하우징에 물이 들어왔어요. 어떻게 해야 하나요?",
            a: `<p><strong>수면 직후 즉시:</strong></p>
<ol>
  <li>수중에서 하우징을 열지 마세요</li>
  <li>건조한 곳으로 이동 후 하우징을 열기</li>
  <li>스마트폰을 꺼내 완전히 건조 후 전원 켜기</li>
  <li>침수 원인 파악 전까지 재사용 금지</li>
  <li>사진과 함께 help@diveroid.com으로 문의</li>
</ol>
<br />주요 원인:
<ul>
  <li>O링이 제대로 장착되지 않았거나 손상된 경우</li>
  <li>입수 전 하우징 잠금 미확인</li>
  <li>60m 수심 초과</li>
</ul>`,
          },
          {
            q: "고객 지원은 어떻게 문의하나요?",
            a: `<ul>
  <li>앱 내: 마이 페이지 → 1:1 문의</li>
  <li>이메일: help@diveroid.com</li>
  <li>웹사이트: diveroid.com</li>
</ul>
<p>영업일 기준 2일 이내 답변드립니다.</p>`,
          },
        ],
      },
    ],
    cta: {
      text: "원하는 답변을 찾지 못하셨나요?",
      button: "1:1 문의하기",
    },
  },
};
