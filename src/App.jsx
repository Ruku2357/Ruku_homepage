import React, { useState, useEffect } from 'react';
import { 
  Terminal, 
  Cpu, 
  LineChart, 
  Mail, 
  MapPin, 
  ChevronRight, 
  Menu, 
  X, 
  Rocket, 
  Layers, 
  Activity,
  ShieldCheck,
  Building2,
  Scale,
  History,
  Coffee,
  Zap
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const companyInfo = {
    name: "Ruku合同会社",
    nameEn: "Ruku LLC",
    number: "6190003004759",
    founded: "2024年7月29日",
    capital: "5,000,000円",
    address: "三重県四日市市あかつき台1丁目3番地20",
    representative: "東川 宗嗣",
    domain: "ruku2357.com",
    announcement: "官報に掲載する方法により行う",
    purposes: [
      "各種コンサルティング業務",
      "システムの企画、開発、運用、保守、販売",
      "各種アプリケーションソフトの企画、開発、制作",
      "インターネットによる広告業務及び番組配信",
      "不動産の売買、賃貸、開発、仲介及び管理業",
      "有価証券の取得、売却、保有及び運用"
    ]
  };

  return (
    <div className="min-h-screen bg-[#050505] text-slate-200 font-sans selection:bg-blue-500/30 overflow-x-hidden">
      {/* VISUAL TUNING 1: 構造化グリッド
          JAXAの薄膜構造から着想を得た、より細かく精密な背景グリッド
      */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `linear-gradient(#475569 0.5px, transparent 0.5px), linear-gradient(90deg, #475569 0.5px, transparent 0.5px)`,
            backgroundSize: '30px 30px',
            maskImage: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 60%)`,
            WebkitMaskImage: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 60%)`
          }}
        />
        {/* コーヒーのような深みのあるグラデーション */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0a0605] via-transparent to-transparent opacity-60"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-700 ${scrolled ? 'bg-black/80 backdrop-blur-2xl border-b border-white/5 py-4' : 'bg-transparent py-10'}`}>
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <div className="flex items-center space-x-5 group cursor-pointer">
            <div className="relative">
              <div className="w-12 h-12 bg-blue-600 rounded-2xl rotate-45 group-hover:rotate-[225deg] transition-transform duration-1000"></div>
              <span className="absolute inset-0 flex items-center justify-center font-black text-white text-xl">R</span>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-2xl font-black tracking-[0.3em] uppercase leading-none italic">Ruku</span>
              <span className="text-[9px] text-blue-500 font-mono tracking-[0.5em] mt-2 opacity-70">STRUCTURAL LOGIC</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-12 text-[10px] font-black tracking-[0.3em] uppercase">
            {['Vision', 'Expertise', 'Identity', 'Legal'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-blue-400 transition-colors relative group">
                {item}
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <a href={`mailto:contact@${companyInfo.domain}`} className="flex items-center space-x-2 px-8 py-3 bg-white text-black rounded-full hover:bg-blue-600 hover:text-white transition-all duration-500">
              <Zap size={14} className="fill-current" />
              <span>Inquire</span>
            </a>
          </div>

          <button className="md:hidden p-2 text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-black/98 backdrop-blur-3xl pt-32 px-10 md:hidden">
          <div className="flex flex-col space-y-12 text-6xl font-black tracking-tighter">
            {['Vision', 'Expertise', 'Identity', 'Legal'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="flex items-center justify-between group">
                <span className="group-hover:translate-x-4 transition-transform italic">{item}</span>
                <ChevronRight size={48} className="text-blue-500" />
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section id="vision" className="relative min-h-screen flex flex-col justify-center items-center px-8 pt-32">
        <div className="relative z-10 w-full max-w-7xl">
          <div className="flex flex-col items-start mb-24">
            <div className="inline-flex items-center space-x-4 px-6 py-3 rounded-full bg-blue-500/10 border border-blue-500/20 mb-12">
              <Coffee className="w-4 h-4 text-blue-500" />
              <span className="text-[10px] font-black tracking-[0.5em] text-blue-400 uppercase">Architecture of Intelligence</span>
            </div>
            
            <h1 className="text-7xl md:text-[13rem] font-black tracking-[-0.06em] text-left leading-[0.82] mb-24">
              STRUCTURING<br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white via-white/60 to-transparent">THE LOGIC</span>
            </h1>

            {/* VISUAL TUNING 2: 01-03 Section (Porsche Instrument Panel Style) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 w-full">
              {[
                { num: "01", label: "ABSTRACT", text: "事象の境界を定義し、ビジネスの本質的な「構造」を設計する" },
                { num: "02", label: "IMPLEMENT", text: "Pythonを基軸に、極限まで冗長性を排除したシステムを構築する" },
                { num: "03", label: "VERIFY", text: "論理の整合性をデータで追跡し、持続的な価値を証明する" }
              ].map((item, idx) => (
                <div key={idx} className="group relative pt-16 border-t border-white/5 hover:border-blue-500/40 transition-all duration-700">
                  <div className="absolute top-0 left-0 w-8 h-[1px] bg-blue-500"></div>
                  <span className="absolute top-6 left-0 text-6xl font-black text-blue-500/10 group-hover:text-blue-500/30 transition-colors font-mono tracking-tighter italic">{item.num}</span>
                  <h3 className="text-2xl font-black tracking-widest mb-6 group-hover:translate-x-2 transition-transform">{item.label}</h3>
                  <p className="text-xl text-slate-500 leading-relaxed font-medium group-hover:text-slate-300 transition-colors">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-64 relative px-8 bg-[#030303]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-32 text-left">
            <h2 className="text-[11px] font-black text-blue-500 tracking-[0.8em] uppercase mb-8">Capability Matrix</h2>
            <p className="text-6xl md:text-8xl font-black tracking-tighter">実装領域</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 auto-rows-[320px]">
            {/* Bento Cell 1: System Dev */}
            <div className="md:col-span-8 md:row-span-2 group relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-[#0c0c0e] to-black border border-white/5 p-16 flex flex-col justify-between text-left hover:border-blue-500/20 transition-all duration-700">
              <div className="relative z-10">
                <Terminal className="w-20 h-20 text-blue-600 mb-12 opacity-50 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-6xl font-black mb-10 tracking-tight">Systems<br />Engineering</h3>
                <p className="text-slate-500 max-w-lg text-2xl leading-relaxed group-hover:text-slate-400 transition-colors">
                  業務自動化、金融データ解析、新規事業のMVP開発。Pythonを用いた高精度なスクリプトから、堅牢なバックエンドまでを論理的に構築
                </p>
              </div>
              <div className="absolute top-0 right-0 w-2/3 h-full bg-[radial-gradient(circle_at_top_right,#1e293b_0%,transparent_70%)] opacity-30"></div>
              <div className="absolute bottom-12 right-12">
                <Activity className="w-8 h-8 text-blue-500 animate-pulse" />
              </div>
            </div>

            {/* Bento Cell 2: Consulting */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-[3rem] bg-white/[0.01] border border-white/5 p-12 flex flex-col justify-between hover:bg-white/[0.03] transition-all duration-700 text-left">
              <div>
                <Layers className="w-12 h-12 text-blue-400 mb-8" />
                <h3 className="text-3xl font-black tracking-tight">Strategy</h3>
              </div>
              <p className="text-xl text-slate-500 leading-relaxed">大企業での新規事業立案経験に基づき、技術と経営の交差点を最適化</p>
            </div>

            {/* Bento Cell 3: Asset Analysis */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-[3rem] bg-white/[0.01] border border-white/5 p-12 flex flex-col justify-between hover:bg-white/[0.03] transition-all duration-700 text-left text-indigo-400/80">
              <div>
                <LineChart className="w-12 h-12 mb-8" />
                <h3 className="text-3xl font-black tracking-tight text-white">Analysis</h3>
              </div>
              <p className="text-xl text-slate-500 leading-relaxed">有価証券や不動産市場を「構造」として捉え、データによる多角的な評価を提供</p>
            </div>
          </div>
        </div>
      </section>

      {/* Identity Section (JAXA Context) */}
      <section id="identity" className="py-64 bg-black overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-40 items-center">
            <div className="text-left">
              <h2 className="text-[11px] font-black text-blue-500 tracking-[0.8em] uppercase mb-12">Origin</h2>
              <p className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-20 italic text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
                宇宙の精密さ、<br />ビジネスの速度。
              </p>
              <div className="space-y-24">
                <div className="relative pl-12 border-l-4 border-blue-600/20">
                  <h4 className="font-black text-3xl mb-6">Structural Engineering</h4>
                  <p className="text-slate-500 text-xl leading-relaxed italic">
                    JAXAでの宇宙太陽光発電・薄膜構造物研究。極限環境における「最小構成での最大強度」が、現在のシステム設計の思想的背景（Why）です
                  </p>
                </div>
                <div className="relative pl-12 border-l-4 border-blue-600/20">
                  <h4 className="font-black text-3xl mb-6">Business Strategy</h4>
                  <p className="text-slate-500 text-xl leading-relaxed">
                    国内最大手メーカーでの環境・金融・ITを横断した新規事業開発。複雑なステークホルダー間の構造を解き明かし、実装へと導きます
                  </p>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="aspect-square bg-blue-600/5 rounded-full blur-[150px] absolute inset-0 animate-pulse"></div>
              <div className="relative aspect-square border border-white/5 rounded-[5rem] bg-[#050505]/80 backdrop-blur-3xl p-20 flex flex-col justify-center items-center">
                 <Rocket size={200} className="text-white opacity-5 mb-12 group-hover:scale-110 group-hover:opacity-20 transition-all duration-1000" />
                 <div className="space-y-2">
                    <div className="w-32 h-1 bg-blue-600/30"></div>
                    <div className="w-48 h-1 bg-blue-600/10 translate-x-4"></div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Section */}
      <section id="legal" className="py-64 px-8 bg-[#020202]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 text-left">
            <div className="lg:col-span-4">
              <h2 className="text-[11px] font-black text-blue-500 tracking-[0.8em] uppercase mb-10">Legal Foundation</h2>
              <p className="text-7xl font-black mb-12 tracking-tighter">実態証明</p>
              <div className="space-y-8">
                <div className="flex items-center space-x-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                  <ShieldCheck size={24} className="text-blue-500" />
                  <span className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">Verified Entity</span>
                </div>
                <div className="flex items-center space-x-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                  <Scale size={24} className="text-blue-500" />
                  <span className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">Compliance Standard</span>
                </div>
                <p className="text-[10px] text-slate-600 italic font-mono mt-12 tracking-widest">
                  DOCUMENTED AT 2026.03.20 16:05 (JST)
                </p>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
                {[
                  { label: "商号", value: companyInfo.name, sub: companyInfo.nameEn },
                  { label: "法人番号 / 会社法人等番号", value: companyInfo.number, sub: "1900-03-004759" },
                  { label: "本店所在地", value: companyInfo.address, icon: <MapPin size={18} className="text-blue-500" /> },
                  { label: "代表社員", value: companyInfo.representative },
                  { label: "設立年月日", value: companyInfo.founded },
                  { label: "資本金の額", value: companyInfo.capital },
                  { label: "公告をする方法", value: companyInfo.announcement }
                ].map((item, i) => (
                  <div key={i} className="border-b border-white/5 pb-10 group">
                    <p className="text-[11px] text-blue-500 font-black tracking-[0.4em] uppercase mb-4 opacity-60 group-hover:opacity-100 transition-opacity">{item.label}</p>
                    <p className="text-2xl font-bold tracking-tight text-white flex items-center group-hover:translate-x-2 transition-transform">
                      {item.icon && <span className="mr-3">{item.icon}</span>}
                      {item.value}
                    </p>
                    {item.sub && <p className="text-xs text-slate-600 mt-2 font-mono tracking-widest uppercase">{item.sub}</p>}
                  </div>
                ))}
                
                <div className="md:col-span-2 pt-12">
                  <p className="text-[11px] text-blue-500 font-black tracking-[0.4em] uppercase mb-8 flex items-center">
                    <Building2 size={18} className="mr-3" /> 事業目的の構造
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {companyInfo.purposes.map((purpose, idx) => (
                      <div key={idx} className="flex items-start space-x-4 group">
                        <span className="text-blue-500 font-mono text-xs mt-1 opacity-40 group-hover:opacity-100 transition-opacity">{(idx + 1).toString().padStart(2, '0')}</span>
                        <span className="text-lg text-slate-500 leading-relaxed group-hover:text-slate-300 transition-colors">{purpose}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-64 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col items-center mb-40">
            <h2 className="text-7xl md:text-[12rem] font-black tracking-[-0.08em] mb-16 text-center leading-none">
              READY TO<br />
              <span className="text-blue-600 italic">DEPLOY?</span>
            </h2>
            <p className="text-slate-500 text-center max-w-2xl text-2xl mb-24 leading-relaxed font-medium">
              論理的な課題解決と、構造的な価値創造が必要な時、<br />
              Rukuが貴方の思考のパートナーとして伴走します
            </p>
            <a 
              href={`mailto:contact@${companyInfo.domain}`} 
              className="group flex items-center space-x-8 px-16 py-8 bg-white text-black rounded-full font-black text-2xl hover:bg-blue-600 hover:text-white transition-all duration-700 hover:scale-105"
            >
              <span>Initialize Discussion</span>
              <ChevronRight size={32} className="group-hover:translate-x-4 transition-transform duration-500" />
            </a>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-24 border-t border-white/5 space-y-12 md:space-y-0 text-[11px] font-black tracking-[0.6em] text-slate-700 uppercase">
            <div className="flex items-center space-x-16">
              <span>© 2024 {companyInfo.nameEn}</span>
              <span>EST. QUADRIUM</span>
            </div>
            <div className="flex items-center space-x-16">
              <a href="#" className="hover:text-white transition-colors">Privacy Protocol</a>
              <a href="#" className="hover:text-white transition-colors">Compliance</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;