import React, { useState, useEffect } from 'react';
import './index.css';

// Translation Dictionary
const translations = {
  English: {
    squads: "📊 Squads",
    emotions: "🧠 Emotions",
    predict: "🎯 Predictions",
    social: "🎙️ Social",
    live: "LIVE",
    ai_high: "🤖 AI Auto-Highlights",
    scanning: "Scanning Live Feed...",
    csk_sq: "🟡 CSK Playing XII",
    srh_sq: "🟠 SRH Playing XII",
    fan_ex: "Global Fan Excitement",
    danger_alert: "Danger Player Alert!",
    danger_desc: "has entered the final third 4 times in the last 5 mins. High threat level!",
    next_event: "🚨 Next Wicket / Event",
    next_q: "What will happen in the next 5 minutes?",
    wicket: "Wicket 🏏",
    boundary: "Boundary 🏏",
    q2_title: "🚨 Next Six Hitter",
    q2_q: "Who will hit the next six?",
    q2_opt1: "Shivam Dube 💥",
    q2_opt2: "Ravindra Jadeja ⚔️",
    q3_title: "🚨 Over Prediction",
    q3_q: "Runs in the 18th over?",
    q3_opt1: "Under 10 Runs 🔻",
    q3_opt2: "Over 10 Runs 🔺",
    poll_success: "Incredible Prediction! +250 XP Awarded!",
    poll_completed: "No more live predictions! Check back later.",
    pom: "⭐ Player of the Match",
    vote_mvp: "Vote for your MVP!",
    exp_room: "🎙️ Expert Stats Analysis Room",
    exp_desc: "Listen to pro commentators breaking down the pressure index live.",
    join_audio: "🎧 Join Audio Room",
    roast_room: "🔥 Fan Roast Room",
    roast_desc: "Pure trash talk. Defend your team on the mic. Enter at your own risk.",
    enter_roast: "🎤 Enter Roast",
    college: "🎓 College",
    city: "🏙️ City",
    edit_prof: "Edit Fan Profile",
    update_id: "Update your LiveArena identity",
    save_prof: "💾 Save Profile",
    disp_name: "Display Name",
    email: "Email Address",
    phone: "Phone Number",
    select_player: "Select Player...",
    bat: "BAT",
    bowl: "BOWL",
    ar: "AR",
    wk: "WK",
    impact: "IMPACT",
    yet_bat: "Yet to bat",
    batting: "Batting",
    bowling: "Bowling",
    impact_player: "Impact Player",
    xp_gained: "XP GAINED!",
    lvl: "LVL",
    mode_prem: "🛡️ Premium Mode",
    mode_genz: "🔥 Gen Z Mode",
    mode_meme: "🤡 Meme Mode",
    mode_roast: "🌶️ Roast Mode",
    ai_six: "AI: SIX 🏏",
    ai_wic: "AI: WICKET 💥",
    ai_cel: "AI: CELEB 📸",
    ai_highl: "AI: HIGHLIGHT 🔥",
    six_desc: "Massive 98m Six by MS Dhoni!",
    wic_desc: "Stunning Catch at Slip",
    cel_desc: "Drake spotted in VIP Box",
    high_desc: "Crazy Dribble Skill",
    leaders: "🏆 Leaders"
  },
  Hindi: {
    squads: "📊 स्क्वाड (दल)",
    emotions: "🧠 भावनाएँ",
    predict: "🎯 भविष्यवाणी",
    social: "🎙️ सोशल",
    live: "लाइव",
    ai_high: "🤖 AI ऑटो-हाइलाइट्स",
    scanning: "लाइव फीड स्कैन कर रहा है...",
    csk_sq: "🟡 CSK प्लेइंग XII",
    srh_sq: "🟠 SRH प्लेइंग XII",
    fan_ex: "ग्लोबल फैन उत्साह",
    danger_alert: "खतरनाक खिलाड़ी अलर्ट!",
    danger_desc: "पिछले 5 मिनट में आक्रामक हो गया है। उच्च खतरा स्तर!",
    next_event: "🚨 अगला विकेट / घटना",
    next_q: "अगले 5 मिनट में क्या होगा?",
    wicket: "विकेट 🏏",
    boundary: "बाउंड्री 🏏",
    q2_title: "🚨 अगला छक्का",
    q2_q: "अगला छक्का कौन मारेगा?",
    q2_opt1: "शिवम दुबे 💥",
    q2_opt2: "रविंद्र जडेजा ⚔️",
    q3_title: "🚨 ओवर की भविष्यवाणी",
    q3_q: "18वें ओवर में कितने रन बनेंगे?",
    q3_opt1: "10 से कम 🔻",
    q3_opt2: "10 से ज़्यादा 🔺",
    poll_success: "गजब की भविष्यवाणी! +250 XP मिले!",
    poll_completed: "अभी और भविष्यवाणी नहीं है! बाद में आएं।",
    pom: "⭐ प्लेयर ऑफ द मैच",
    vote_mvp: "अपने MVP के लिए वोट करें!",
    exp_room: "🎙️ विशेषज्ञ आँकड़े कक्ष",
    exp_desc: "पेशेवर कमेंटेटरों को लाइव आंकड़े विश्लेषण करते सुनें।",
    join_audio: "🎧 ऑडियो रूम से जुड़ें",
    roast_room: "🔥 फैन रोस्ट रूम",
    roast_desc: "खुलकर अपनी भड़ास निकालें और अपनी टीम का बचाव करें।",
    enter_roast: "🎤 रोस्ट में जाएं",
    college: "🎓 कॉलेज",
    city: "🏙️ शहर",
    edit_prof: "प्रोफाइल एडिट करें",
    update_id: "अपनी पहचान अपडेट करें",
    save_prof: "💾 सेव करें",
    disp_name: "नाम",
    email: "ईमेल पता",
    phone: "फ़ोन नंबर",
    select_player: "खिलाड़ी चुनें...",
    bat: "बल्लेबाज़",
    bowl: "गेंदबाज़",
    ar: "ऑल-राउंडर",
    wk: "विकेटकीपर",
    impact: "इम्पैक्ट",
    yet_bat: "बल्लेबाजी बाकी",
    batting: "बल्लेबाजी",
    bowling: "गेंदबाजी",
    impact_player: "इम्पैक्ट खिलाड़ी",
    xp_gained: "XP मिले!",
    lvl: "लेवल",
    mode_prem: "🛡️ प्रीमियम मोड",
    mode_genz: "🔥 जेन ज़ेड मोड",
    mode_meme: "🤡 मीम मोड",
    mode_roast: "🌶️ रोस्ट मोड",
    ai_six: "AI: छक्का 🏏",
    ai_wic: "AI: विकेट 💥",
    ai_cel: "AI: सेलेब 📸",
    ai_highl: "AI: हाईलाइट 🔥",
    six_desc: "एमएस धोनी का विशाल 98 मीटर छक्का!",
    wic_desc: "स्लिप पर शानदार कैच",
    cel_desc: "VIP बॉक्स में ड्रेक दिखे",
    high_desc: "कमाल का ड्रिबल स्किल",
    leaders: "🏆 लीडर्स"
  },
  Bhojpuri: {
    squads: "📊 खिलाड़ी",
    emotions: "🧠 मिजाज",
    predict: "🎯 भविष्यवाणी",
    social: "🎙️ बातचीत",
    live: "लाइव",
    ai_high: "🤖 AI के झलक",
    scanning: "मैच स्कैन हो रहल बा...",
    csk_sq: "🟡 CSK खेलत XII",
    srh_sq: "🟠 SRH खेलत XII",
    fan_ex: "फैन्स के जोश",
    danger_alert: "खतरनाक खिलाड़ी अलर्ट!",
    danger_desc: "पछिला 5 मिनट से खतरनाक लाग रहल बा। बहुते खतरा बा!",
    next_event: "🚨 अगिला विकेट / घटना",
    next_q: "अगिला 5 मिनट में का होई?",
    wicket: "विकेट 🏏",
    boundary: "चौका-छक्का 🏏",
    q2_title: "🚨 अगिला छक्का",
    q2_q: "अगिला छक्का के मारी?",
    q2_opt1: "शिवम दुबे 💥",
    q2_opt2: "रविंद्र जडेजा ⚔️",
    q3_title: "🚨 ओवर के भविष्यवाणी",
    q3_q: "18वा ओवर में केतना रन बनी?",
    q3_opt1: "10 से कम 🔻",
    q3_opt2: "10 से जादा 🔺",
    poll_success: "का बात बा! सही जवाब! +250 XP मिलल!",
    poll_completed: "अभी अउर भविष्यवाणी नईखे! तनी देर में आईं।",
    pom: "⭐ मैच के हीरो",
    vote_mvp: "अपन MVP के चुनीं!",
    exp_room: "🎙️ एक्सपर्ट विश्लेषण रूम",
    exp_desc: "कमेंटेटर लोगन के बढ़िया से मैच के हाल बतावत सुनीं।",
    join_audio: "🎧 ऑडियो रूम से जुड़ीं",
    roast_room: "🔥 फैन भड़ास रूम",
    roast_desc: "अपन टीम के बचाव करीं आ जम के भड़ास निकालीं।",
    enter_roast: "🎤 रोस्ट में घुसीं",
    college: "🎓 कॉलेज",
    city: "🏙️ शहर",
    edit_prof: "प्रोफाइल बदलीं",
    update_id: "अपन पहचान अपडेट करीं",
    save_prof: "💾 सेव करीं",
    disp_name: "नाम",
    email: "ईमेल आईडी",
    phone: "फ़ोन नंबर",
    select_player: "खिलाड़ी चुनीं...",
    bat: "बैट्समैन",
    bowl: "बॉलर",
    ar: "ऑल-राउंडर",
    wk: "विकेटकीपर",
    impact: "इम्पैक्ट",
    yet_bat: "बैटिंग बाकी बा",
    batting: "बैटिंग कर रहल बा",
    bowling: "बॉलिंग कर रहल बा",
    impact_player: "इम्पैक्ट खिलाड़ी",
    xp_gained: "XP मिलल!",
    lvl: "लेवल",
    mode_prem: "🛡️ प्रीमियम मोड",
    mode_genz: "🔥 जेन ज़ेड मोड",
    mode_meme: "🤡 मीम मोड",
    mode_roast: "🌶️ रोस्ट मोड",
    ai_six: "AI: छक्का 🏏",
    ai_wic: "AI: विकेट 💥",
    ai_cel: "AI: स्टार 📸",
    ai_highl: "AI: मेन झलक 🔥",
    six_desc: "धोनी के लम्बा 98 मीटर छक्का!",
    wic_desc: "स्लिप में गजब कैच",
    cel_desc: "VIP बॉक्स में सेलिब्रिटी",
    high_desc: "खतरनाक खेल स्किल",
    leaders: "🏆 लीडर्स"
  },
  Maithili: {
    squads: "📊 दल",
    emotions: "🧠 भावना",
    predict: "🎯 भविष्यवाणी",
    social: "🎙️ सामाजिक",
    live: "लाइव",
    ai_high: "🤖 AI मुख्य झलक",
    scanning: "लाइव स्कैन भ रहल अछि...",
    csk_sq: "🟡 CSK खेलय वाला XII",
    srh_sq: "🟠 SRH खेलय वाला XII",
    fan_ex: "प्रशंसकक उत्साह",
    danger_alert: "खतरनाक खिलाड़ी अलर्ट!",
    danger_desc: "विगत 5 मिनट स आक्रामक अछि। बड्ड खतरा अछि!",
    next_event: "🚨 अगला विकेट / घटना",
    next_q: "अगुल्का 5 मिनट मे की हेतय?",
    wicket: "विकेट 🏏",
    boundary: "बाउंड्री 🏏",
    q2_title: "🚨 अगला छक्का",
    q2_q: "अगला छक्का के मारत?",
    q2_opt1: "शिवम दुबे 💥",
    q2_opt2: "रविंद्र जडेजा ⚔️",
    q3_title: "🚨 ओवर भविष्यवाणी",
    q3_q: "18म ओवर मे कतेक रन बनत?",
    q3_opt1: "10 स कम 🔻",
    q3_opt2: "10 स बेसी 🔺",
    poll_success: "अद्भुत भविष्यवाणी! +250 XP भेटल!",
    poll_completed: "आब कोनो भविष्यवाणी नै अछि! बाद मे देखू।",
    pom: "⭐ मैच के हीरो",
    vote_mvp: "अपन MVP के लेल वोट करू!",
    exp_room: "🎙️ विशेषज्ञ विश्लेषण कक्ष",
    exp_desc: "विशेषज्ञक बात सुनू जे मैचक विश्लेषण करैत छैथ।",
    join_audio: "🎧 ऑडियो कक्ष मे जुड़ू",
    roast_room: "🔥 प्रशंसक रोस्ट कक्ष",
    roast_desc: "अपन टीमक बचाव करू आ खुब गपशप करू।",
    enter_roast: "🎤 रोस्ट मे प्रवेश करू",
    college: "🎓 कॉलेज",
    city: "🏙️ शहर",
    edit_prof: "प्रोफाइल बदलू",
    update_id: "अपन पहचान अद्यतन करू",
    save_prof: "💾 सुरक्षित करू",
    disp_name: "नाम",
    email: "ईमेल",
    phone: "फ़ोन नंबर",
    select_player: "खिलाड़ी चुनू...",
    bat: "बल्लेबाज़",
    bowl: "गेंदबाज़",
    ar: "ऑल-राउंडर",
    wk: "विकेटकीपर",
    impact: "इम्पैक्ट",
    yet_bat: "बल्लेबाजी बाकी",
    batting: "बल्लेबाजी भ रहल अछि",
    bowling: "गेंदबाजी भ रहल अछि",
    impact_player: "इम्पैक्ट खिलाड़ी",
    xp_gained: "XP भेटल!",
    lvl: "लेवल",
    mode_prem: "🛡️ प्रीमियम मोड",
    mode_genz: "🔥 जेन ज़ेड मोड",
    mode_meme: "🤡 मीम मोड",
    mode_roast: "🌶️ रोस्ट मोड",
    ai_six: "AI: छक्का 🏏",
    ai_wic: "AI: विकेट 💥",
    ai_cel: "AI: सेलेब 📸",
    ai_highl: "AI: हाईलाइट 🔥",
    six_desc: "धोनीक पैघ 98 मीटर छक्का!",
    wic_desc: "स्लिप मे अद्भुत कैच",
    cel_desc: "VIP बॉक्स मे ड्रेक",
    high_desc: "कमालक स्किल",
    leaders: "🏆 लीडर्स"
  }
};

// Custom Confetti Component
const Confetti = ({ trigger }) => {
  const [pieces, setPieces] = useState([]);
  
  useEffect(() => {
    if (trigger) {
      const newPieces = Array.from({ length: 50 }).map((_, i) => ({
        id: Date.now() + i,
        left: `${Math.random() * 100}vw`,
        animationDelay: `${Math.random() * 0.5}s`,
        backgroundColor: ['#facc15', '#f97316', '#3b82f6', '#10b981', '#ec4899'][Math.floor(Math.random() * 5)]
      }));
      setPieces(newPieces);
      const timer = setTimeout(() => setPieces([]), 3500);
      return () => clearTimeout(timer);
    }
  }, [trigger]);

  if (!pieces.length) return null;
  return (
    <div className="confetti-container">
      {pieces.map(p => (
        <div key={p.id} className="confetti" style={{ left: p.left, animationDelay: p.animationDelay, backgroundColor: p.backgroundColor }}></div>
      ))}
    </div>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState('squads');
  const [language, setLanguage] = useState('English');
  const [uiMode, setUiMode] = useState('Default');
  const [theme, setTheme] = useState('dark'); 
  
  const [fanScore, setFanScore] = useState(0);
  
  // Dynamic Poll Queue State
  const [currentPollIndex, setCurrentPollIndex] = useState(0);
  const [pollStatus, setPollStatus] = useState('active'); // active, answered, completed
  const [selectedOpt, setSelectedOpt] = useState(null);
  
  const [momentum, setMomentum] = useState(65);
  const [fanMood, setFanMood] = useState(85); 
  
  const [activeLeaderboard, setActiveLeaderboard] = useState('College');
  const [activeSquad, setActiveSquad] = useState('csk');
  
  const [celebrate, setCelebrate] = useState(0); 
  const [showXpAnim, setShowXpAnim] = useState(null);

  const [showProfile, setShowProfile] = useState(false);
  const [userData, setUserData] = useState({
    name: 'Fan',
    email: '',
    phone: '',
    dp: 'https://i.pravatar.cc/150?u=you'
  });

  const t = (key) => translations[language]?.[key] || translations['English'][key];

  useEffect(() => {
    const savedData = localStorage.getItem('arena_user_profile');
    if (savedData) {
      setUserData(JSON.parse(savedData));
    }
    const savedScore = localStorage.getItem('arena_fan_score');
    if (savedScore) {
      setFanScore(parseInt(savedScore));
    }
  }, []);

  const handleProfileSave = () => {
    localStorage.setItem('arena_user_profile', JSON.stringify(userData));
    setShowProfile(false);
  };

  const handleDpChange = () => {
    const newDpUrl = prompt("Enter Image URL for new DP:", userData.dp);
    if (newDpUrl) {
      setUserData({ ...userData, dp: newDpUrl });
    }
  };

  useEffect(() => {
    document.body.className = '';
    if (theme !== 'dark') document.body.classList.add(`theme-${theme}`);
    if (uiMode === 'Gen Z') document.body.classList.add('mode-gen-z');
    else if (uiMode === 'Meme') document.body.classList.add('mode-meme');
    else if (uiMode === 'Roast') document.body.classList.add('mode-roast');
  }, [uiMode, theme]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMomentum(prev => Math.max(20, Math.min(80, prev + (Math.random() * 10 - 5))));
      setFanMood(prev => Math.max(40, Math.min(100, prev + (Math.random() * 10 - 3))));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const addXP = (amount) => {
    setFanScore(prev => {
      const newScore = prev + amount;
      localStorage.setItem('arena_fan_score', newScore);
      return newScore;
    });
    setShowXpAnim(amount);
    setCelebrate(prev => prev + 1);
    setTimeout(() => setShowXpAnim(null), 1500);
  };

  const currentLevel = Math.floor(fanScore / 400) + 1;
  const progressPercent = ((fanScore % 400) / 400) * 100;

  const themesList = ['dark', 'light', 'midnight', 'forest', 'sunset'];
  const themeEmojis = { dark: '🌙', light: '☀️', midnight: '🌌', forest: '🌲', sunset: '🌇' };
  
  const toggleTheme = () => {
    setTheme(prev => {
      const nextIndex = (themesList.indexOf(prev) + 1) % themesList.length;
      return themesList[nextIndex];
    });
  };

  // The sequential polls data
  const polls = [
    { titleKey: 'next_event', qKey: 'next_q', opt1Key: 'wicket', opt2Key: 'boundary' },
    { titleKey: 'q2_title', qKey: 'q2_q', opt1Key: 'q2_opt1', opt2Key: 'q2_opt2' },
    { titleKey: 'q3_title', qKey: 'q3_q', opt1Key: 'q3_opt1', opt2Key: 'q3_opt2' }
  ];

  const handlePollVote = (option) => {
    if (pollStatus !== 'active') return;
    setSelectedOpt(option);
    setPollStatus('answered');
    addXP(250); 
    
    // Auto transition to the next question after 2.5 seconds
    setTimeout(() => {
      if (currentPollIndex + 1 < polls.length) {
        setCurrentPollIndex(prev => prev + 1);
        setPollStatus('active');
        setSelectedOpt(null);
      } else {
        setPollStatus('completed');
      }
    }, 2500);
  };

  const autoClips = [
    { id: 1, type: 'Six', titleKey: 'six_desc', tagKey: 'ai_six', img: 'https://images.unsplash.com/photo-1518605368461-1ee7c155d00b?w=400&q=80' },
    { id: 2, type: 'Wicket', titleKey: 'wic_desc', tagKey: 'ai_wic', img: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=400&q=80' },
    { id: 3, type: 'Celeb', titleKey: 'cel_desc', tagKey: 'ai_cel', img: 'https://images.unsplash.com/photo-1540039155732-d674140ffb0b?w=400&q=80' },
    { id: 4, type: 'Short', titleKey: 'high_desc', tagKey: 'ai_highl', img: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=400&q=80' },
  ];

  const leaderboards = {
    College: [
      { name: 'Alex M.', sub: 'Amity University', score: 3450, img: 'https://i.pravatar.cc/150?u=1' },
      { name: 'Rohan K.', sub: 'Amity University', score: 1210, img: 'https://i.pravatar.cc/150?u=2' },
      { name: 'Priya S.', sub: 'IIT Delhi', score: 980, img: 'https://i.pravatar.cc/150?u=3' },
    ],
    City: [
      { name: 'Vikram', sub: 'Mumbai', score: 8450, img: 'https://i.pravatar.cc/150?u=4' },
      { name: 'Sarah', sub: 'Delhi', score: 1120, img: 'https://i.pravatar.cc/150?u=5' },
    ]
  };

  const getSortedLeaderboard = () => {
    const list = [...(leaderboards[activeLeaderboard] || [])];
    list.push({
      name: `${userData.name} (You)`,
      sub: activeLeaderboard === 'College' ? 'Amity University' : 'Your City',
      score: fanScore,
      img: userData.dp,
      isCurrentUser: true
    });
    return list.sort((a, b) => b.score - a.score);
  };

  const squads = {
    csk: [
      { id: 1, name: 'Ruturaj Gaikwad', roleKey: 'bat', icon: '🏏', stats: '45 (28)', sub: 'c Markram b Cummins', active: false },
      { id: 2, name: 'Rachin Ravindra', roleKey: 'bat', icon: '🏏', stats: '12 (8)', sub: 'b Bhuvneshwar', active: false },
      { id: 3, name: 'Ajinkya Rahane', roleKey: 'bat', icon: '🏏', stats: '34 (22)', sub: 'c Klaasen b Natarajan', active: false },
      { id: 4, name: 'Shivam Dube', roleKey: 'ar', icon: '⚔️', stats: '42* (20)', subKey: 'batting', active: true },
      { id: 5, name: 'Daryl Mitchell', roleKey: 'bat', icon: '🏏', stats: '22 (12)', sub: 'lbw b Markande', active: false },
      { id: 6, name: 'Ravindra Jadeja', roleKey: 'ar', icon: '⚔️', stats: '15* (8)', subKey: 'batting', active: true },
      { id: 7, name: 'MS Dhoni', roleKey: 'wk', icon: '🧤', subKey: 'yet_bat', active: false },
      { id: 8, name: 'Deepak Chahar', roleKey: 'bowl', icon: '🔴', subKey: 'yet_bat', active: false },
      { id: 9, name: 'Tushar Deshpande', roleKey: 'bowl', icon: '🔴', subKey: 'yet_bat', active: false },
      { id: 10, name: 'M Pathirana', roleKey: 'bowl', icon: '🔴', subKey: 'yet_bat', active: false },
      { id: 11, name: 'M Rahman', roleKey: 'bowl', icon: '🔴', subKey: 'yet_bat', active: false },
      { id: 12, name: 'Shardul Thakur', roleKey: 'impact', icon: '⚡', stats: '-', subKey: 'impact_player', active: false }
    ],
    srh: [
      { id: 1, name: 'Travis Head', roleKey: 'bat', icon: '🏏', stats: '-', subKey: 'yet_bat', active: false },
      { id: 2, name: 'Abhishek Sharma', roleKey: 'ar', icon: '⚔️', stats: '0/15 (1)', sub: 'Econ: 15.00', active: false },
      { id: 3, name: 'Aiden Markram', roleKey: 'bat', icon: '🏏', stats: '-', subKey: 'yet_bat', active: false },
      { id: 4, name: 'Heinrich Klaasen', roleKey: 'wk', icon: '🧤', stats: '-', subKey: 'yet_bat', active: false },
      { id: 5, name: 'Nitish K Reddy', roleKey: 'ar', icon: '⚔️', stats: '-', subKey: 'yet_bat', active: false },
      { id: 6, name: 'Abdul Samad', roleKey: 'bat', icon: '🏏', stats: '-', subKey: 'yet_bat', active: false },
      { id: 7, name: 'Shahbaz Ahmed', roleKey: 'ar', icon: '⚔️', stats: '0/22 (2)', sub: 'Econ: 11.00', active: false },
      { id: 8, name: 'Pat Cummins', roleKey: 'bowl', icon: '🔴', stats: '1/24 (3.4)', subKey: 'bowling', active: true },
      { id: 9, name: 'Bhuvneshwar Kumar', roleKey: 'bowl', icon: '🔴', stats: '1/32 (4)', sub: 'Econ: 8.00', active: false },
      { id: 10, name: 'Mayank Markande', roleKey: 'bowl', icon: '🔴', stats: '1/38 (4)', sub: 'Econ: 9.50', active: false },
      { id: 11, name: 'T Natarajan', roleKey: 'bowl', icon: '🔴', stats: '1/35 (3)', sub: 'Econ: 11.66', active: false },
      { id: 12, name: 'Jaydev Unadkat', roleKey: 'impact', icon: '⚡', stats: '0/12 (1)', subKey: 'impact_player', active: false }
    ]
  };

  return (
    <>
      <Confetti trigger={celebrate} />
      {showXpAnim && <div className="xp-popup-anim">+{showXpAnim} {t('xp_gained')}</div>}
      
      {showProfile && (
        <div className="modal-overlay" onClick={() => setShowProfile(false)}>
          <div className="profile-modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowProfile(false)}>×</button>
            <div className="profile-header">
              <div className="profile-dp-wrapper" onClick={handleDpChange} title="Click to edit DP">
                <img src={userData.dp} alt="Profile DP" className="profile-dp" />
                <div className="dp-edit-badge">✏️</div>
              </div>
              <div className="modal-title">{t('edit_prof')}</div>
              <div className="modal-subtitle">{t('update_id')}</div>
            </div>

            <div className="form-group">
              <label className="form-label">{t('disp_name')}</label>
              <input type="text" className="form-input" value={userData.name} onChange={(e) => setUserData({...userData, name: e.target.value})} />
            </div>

            <div className="form-group">
              <label className="form-label">{t('email')}</label>
              <input type="email" className="form-input" value={userData.email} onChange={(e) => setUserData({...userData, email: e.target.value})} />
            </div>

            <div className="form-group">
              <label className="form-label">{t('phone')}</label>
              <input type="tel" className="form-input" value={userData.phone} onChange={(e) => setUserData({...userData, phone: e.target.value})} />
            </div>
            <button className="btn-save" onClick={handleProfileSave}>{t('save_prof')}</button>
          </div>
        </div>
      )}
      
      <div className="app-wrapper">
        <header className="top-nav">
          <div className="brand">
            <div className="brand-icon">⚡</div>
            <div className="brand-name">LiveArena</div>
          </div>
          
          <div className="controls-group">
            <button className="theme-toggle" onClick={toggleTheme} title="Change Base Theme">
              {themeEmojis[theme]}
            </button>

            <select className="dropdown-select" value={language} onChange={(e) => setLanguage(e.target.value)}>
              <option value="English">🇬🇧 English</option>
              <option value="Hindi">🇮🇳 Hindi</option>
              <option value="Bhojpuri">🧡 Bhojpuri</option>
              <option value="Maithili">💜 Maithili</option>
            </select>

            <select className="dropdown-select" value={uiMode} onChange={(e) => setUiMode(e.target.value)}>
              <option value="Default">{t('mode_prem')}</option>
              <option value="Gen Z">{t('mode_genz')}</option>
              <option value="Meme">{t('mode_meme')}</option>
              <option value="Roast">{t('mode_roast')}</option>
            </select>

            <div className="user-profile" onClick={() => setShowProfile(true)} style={{cursor: 'pointer'}}>
              <div className="level-badge">
                <span className="level-text" style={{fontSize: '12px', textAlign: 'right'}}>{userData.name}</span>
                <span className="level-text">{t('lvl')} {currentLevel}</span>
                <div className="xp-bar-container"><div className="xp-bar-fill" style={{width: `${progressPercent}%`}}></div></div>
              </div>
              <div className="avatar"><img src={userData.dp} alt="You" /></div>
            </div>
          </div>
        </header>

        <main className="main-grid">
          <div className="stream-wrapper">
            <div className="video-container">
              <img src="https://images.unsplash.com/photo-1518605368461-1ee7c155d00b?w=1600&q=80" alt="Live Match" className="video-feed" />
              <div className="stream-overlay">
                <div className="match-info-pill">
                  <div className="live-indicator"><div className="live-dot"></div> {t('live')}</div>
                  <div className="score-display">
                    <span className="team-home">CSK</span> 178/4 <span style={{fontSize: '20px', color: 'var(--text-tertiary)', alignSelf: 'flex-end', marginBottom: '4px'}}>(17.4)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="ai-highlights-hub">
              <div className="section-header">
                <span>{t('ai_high')}</span>
                <span className="ai-badge">{t('scanning')}</span>
              </div>
              <div className="clips-row">
                {autoClips.map(clip => (
                  <div key={clip.id} className="clip-card" style={{ backgroundImage: `url(${clip.img})` }}>
                    <div className="clip-tag">{t(clip.tagKey)}</div>
                    <div className="clip-overlay">{t(clip.titleKey)}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="sidebar-container glass-panel">
            <div className="tabs-nav">
              <button className={`tab-btn ${activeTab === 'squads' ? 'active' : ''}`} onClick={() => setActiveTab('squads')}>{t('squads')}</button>
              <button className={`tab-btn ${activeTab === 'emotions' ? 'active' : ''}`} onClick={() => setActiveTab('emotions')}>{t('emotions')}</button>
              <button className={`tab-btn ${activeTab === 'predict' ? 'active' : ''}`} onClick={() => setActiveTab('predict')}>{t('predict')}</button>
              <button className={`tab-btn ${activeTab === 'social' ? 'active' : ''}`} onClick={() => setActiveTab('social')}>{t('social')}</button>
              <button className={`tab-btn ${activeTab === 'leaderboard' ? 'active' : ''}`} onClick={() => setActiveTab('leaderboard')}>{t('leaders')}</button>
            </div>

            <div className="tab-content">
              {activeTab === 'squads' && (
                <>
                  <div className="squad-toggle">
                    <button className={`sq-btn csk ${activeSquad === 'csk' ? 'active' : ''}`} onClick={() => setActiveSquad('csk')}>
                      {t('csk_sq')}
                    </button>
                    <button className={`sq-btn srh ${activeSquad === 'srh' ? 'active' : ''}`} onClick={() => setActiveSquad('srh')}>
                      {t('srh_sq')}
                    </button>
                  </div>
                  
                  <div className="player-list">
                    {squads[activeSquad].map(player => (
                      <div key={player.id} className={`player-card ${player.active ? 'active-player' : ''}`}>
                        <div className="p-info">
                          <div className="p-avatar">{player.icon}</div>
                          <div>
                            <div className="p-name">{player.name}</div>
                            <div className="p-role"><span className="role-icon">{t(player.roleKey)}</span></div>
                          </div>
                        </div>
                        <div className="p-stats">
                          <div className="p-stat-main">{player.stats}</div>
                          <div className="p-stat-sub">{player.subKey ? t(player.subKey) : player.sub}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {activeTab === 'emotions' && (
                <>
                  <div className="emotion-card">
                    <div className="emotion-title"><span>{t('fan_ex')}</span> <span>{Math.round(fanMood)}%</span></div>
                    <div className="mood-meter">
                      <span className="mood-emoji">{fanMood > 75 ? '🔥' : fanMood > 50 ? '👀' : '😴'}</span>
                      <div className="mood-bar-bg"><div className="mood-bar-fill" style={{width: `${fanMood}%`}}></div></div>
                    </div>
                  </div>

                  <div className="danger-player">
                    <div className="danger-icon">⚠️</div>
                    <div className="danger-info">
                      <h4>{t('danger_alert')}</h4>
                      <p><strong>Heinrich Klaasen</strong> {t('danger_desc')}</p>
                    </div>
                  </div>
                </>
              )}

              {activeTab === 'predict' && (
                <>
                  <div className="pred-card">
                    {pollStatus === 'completed' ? (
                      <div style={{textAlign: 'center', padding: '20px 0'}}>
                        <div style={{fontSize: '40px', marginBottom: '10px'}}>🏁</div>
                        <h3 style={{color: 'var(--text-primary)'}}>{t('poll_completed')}</h3>
                      </div>
                    ) : (
                      <>
                        <div className="pred-tag">{t(polls[currentPollIndex].titleKey)}</div>
                        <div className="pred-question">{t(polls[currentPollIndex].qKey)}</div>
                        <div className="pred-grid">
                          <button className={`pred-btn ${selectedOpt === '1' ? 'selected' : ''}`} onClick={() => handlePollVote('1')}>
                            <span>{t(polls[currentPollIndex].opt1Key)}</span>
                          </button>
                          <button className={`pred-btn ${selectedOpt === '2' ? 'selected' : ''}`} onClick={() => handlePollVote('2')}>
                            <span>{t(polls[currentPollIndex].opt2Key)}</span>
                          </button>
                        </div>
                        {pollStatus === 'answered' && <div style={{marginTop: '15px', color: 'var(--accent-neon)', fontWeight: 'bold', textAlign: 'center'}}>{t('poll_success')}</div>}
                      </>
                    )}
                  </div>
                  
                  <div className="pred-card" style={{opacity: 0.9}}>
                    <div className="pred-tag" style={{color: 'var(--accent-primary)'}}>{t('pom')}</div>
                    <div className="pred-question">{t('vote_mvp')}</div>
                    <select style={{width: '100%', padding: '12px', background: 'var(--input-bg)', color: 'var(--text-primary)', border: '1px solid var(--border-light)', borderRadius: '12px', fontWeight: 'bold'}}>
                      <option>{t('select_player')}</option>
                      <option>Ruturaj Gaikwad</option>
                      <option>MS Dhoni</option>
                      <option>Pat Cummins</option>
                    </select>
                  </div>
                </>
              )}

              {activeTab === 'social' && (
                 <>
                   <div className="social-room">
                     <div className="room-title">{t('exp_room')}</div>
                     <div className="room-desc">{t('exp_desc')}</div>
                     <div className="avatar-stack">
                       <img src="https://i.pravatar.cc/150?u=20" alt="Exp1" />
                       <img src="https://i.pravatar.cc/150?u=21" alt="Exp2" />
                       <img src="https://i.pravatar.cc/150?u=22" alt="Exp3" />
                     </div>
                     <button className="room-btn">{t('join_audio')}</button>
                   </div>

                   <div className="social-room" style={{borderColor: 'rgba(239, 68, 68, 0.4)', background: 'rgba(239, 68, 68, 0.05)'}}>
                     <div className="room-title" style={{color: 'var(--accent-danger)'}}>{t('roast_room')}</div>
                     <div className="room-desc">{t('roast_desc')}</div>
                     <button className="room-btn" style={{background: 'var(--accent-danger)'}}>{t('enter_roast')}</button>
                   </div>
                 </>
              )}

              {activeTab === 'leaderboard' && (
                <>
                  <div className="lb-switcher">
                    <button className={`lb-btn ${activeLeaderboard === 'College' ? 'active' : ''}`} onClick={() => setActiveLeaderboard('College')}>{t('college')}</button>
                    <button className={`lb-btn ${activeLeaderboard === 'City' ? 'active' : ''}`} onClick={() => setActiveLeaderboard('City')}>{t('city')}</button>
                  </div>
                  
                  <div className="lb-list">
                    {getSortedLeaderboard().map((user, idx) => (
                      <div key={idx} className={`lb-item ${idx === 0 ? 'rank-1' : ''}`} style={user.isCurrentUser ? {border: '2px solid var(--accent-neon)', background: 'rgba(22, 163, 74, 0.1)', transform: 'scale(1.02)'} : {}}>
                        <div className={`lb-rank ${idx === 0 ? 'top' : ''}`}>#{idx+1}</div>
                        <img src={user.img} className="lb-avatar" alt="Avatar" />
                        <div className="lb-details">
                          <div className="lb-name" style={user.isCurrentUser ? {color: 'var(--accent-neon)', fontWeight: '900'} : {}}>{user.name}</div>
                          <div className="lb-sub">{user.sub}</div>
                        </div>
                        <div className="lb-score">{user.score} XP</div>
                      </div>
                    ))}
                  </div>
                </>
              )}

            </div>
          </div>
        </main>
      </div>
    </>
  );
}
