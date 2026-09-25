import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowUpRight, MoveUpRight, Play, Plus, Sparkles } from 'lucide-react'
import './styles.css'
import './reference.css'
import './visual-map.css'

const A = '/assets/'

const projects = [
  { no: '01', title: '出逃计划', type: 'AI imaging / 视觉导演', year: '2025', image: `${A}project-escape.png`, tone: 'violet' },
  { no: '02', title: '安阳书生', type: 'AI 中式克苏鲁短剧', year: '2025', image: `${A}project-anyang.png`, tone: 'amber' },
  { no: '03', title: '聊斋之幻赌', type: 'AI 仿真人剧 / 世界观设计', year: '2025', image: `${A}project-liaozhai.png`, tone: 'cyan' },
  { no: '04', title: '中华寻龙记', type: 'AIGC 文旅 IP 动画', year: '2024', image: `${A}project-dragon.png`, tone: 'blue' },
  { no: '05', title: 'MOOC 大会开场视频', type: '品牌活动 / 影像创作', year: '2024', image: `${A}project-mooc.png`, tone: 'ice' },
  { no: '06', title: '格萨尔王', type: 'AIGC 影视项目 / 视觉开发', year: '2024', image: `${A}project-gesar.png`, tone: 'red' },
]

const strengths = [
  ['01', 'AI 视觉导演', '从世界观、风格探索到镜头落地，建立可执行的 AIGC 视觉流程。'],
  ['02', '底层创作逻辑', '理解模型、提示词与视觉语言之间的关系，让创意不止停留在灵感层。'],
  ['03', '商业化落地', '服务优酷、阿里云、蚂蚁、京东、华帝等品牌，把实验性视觉转化为有效传播。'],
  ['04', '全流程共创', '覆盖脚本、分镜、生成、剪辑与交付，适合复杂的跨团队项目协作。'],
]

const workModules = [
  {
    no: '01', title: '视觉作品', tag: 'VISUAL WORKS', tone: 'visual',
    description: '以视觉风格、镜头语言与空间氛围为核心，探索 AI 影像的表现边界。',
    projects: [{ no: '01', title: '出逃计划', type: 'AI imaging / 视觉案例与效果', year: '2025', image: `${A}work-overview/escape-01.png`, tone: 'violet', visuals: Array.from({length: 6}, (_, i) => `${A}work-overview/escape-0${i + 1}.png`) }],
  },
  {
    no: '02', title: 'AI 影视作品', tag: 'AI FILM / SERIES', tone: 'film',
    description: '从角色设定、镜头语言到画面效果，完整呈现 AI 影视的视觉开发过程。',
    projects: [{ no: '02', title: 'MV 数字人《多拉》', type: 'AI 视觉 / 镜头语言与角色效果', year: '2025', image: `${A}work-overview/digital-01.png`, tone: 'film', visuals: Array.from({length: 6}, (_, i) => `${A}work-overview/digital-0${i + 1}.png`) }],
  },
]

const visualCase = '/assets/visual-cases/'
const visualSets = {
  commercial: [`${visualCase}visual-01.png`, `${visualCase}visual-02.png`, `${visualCase}visual-04.png`, `${visualCase}visual-05.png`, `${visualCase}visual-09.jpg`],
  atmospheric: [`${visualCase}visual-06.jpg`, `${visualCase}visual-07.jpg`, `${visualCase}visual-08.jpg`, `${visualCase}visual-09.jpg`, `${visualCase}visual-01.png`],
  red: [`${visualCase}visual-02.png`, `${visualCase}visual-04.png`, `${visualCase}visual-05.png`, `${visualCase}visual-01.png`, `${visualCase}visual-06.jpg`],
  film: [`${visualCase}visual-08.jpg`, `${visualCase}visual-07.jpg`, `${visualCase}visual-06.jpg`, `${visualCase}visual-09.jpg`, `${visualCase}visual-03.png`],
}
const firstVideoVisuals = [
  `${visualCase}718/01-city-race.png`, `${visualCase}718/02-alien.png`, `${visualCase}718/03-driver.png`, `${visualCase}718/04-showroom.png`,
  `${visualCase}718/05-stage.png`, `${visualCase}718/06-desert.png`, `${visualCase}718/07-reaction.png`, `${visualCase}718/08-helmet.png`,
  `${visualCase}718/09-presenter.png`, `${visualCase}718/10-dancers.png`, `${visualCase}718/11-group.png`, `${visualCase}718/12-workshop.png`,
]
const sixteenVisuals = [
  `${visualCase}816/01-floating-home.png`, `${visualCase}816/02-city-hearts.png`, `${visualCase}816/03-sofa-climb.png`,
  `${visualCase}816/04-sofa-party.png`, `${visualCase}816/05-home-building.png`, `${visualCase}816/06-beach-world.png`,
  `${visualCase}816/07-mattress-city.png`, `${visualCase}816/08-title-card.png`,
]
const jd101Visuals = [
  `${visualCase}jd101/01-city-object.png`, `${visualCase}jd101/02-street.png`, `${visualCase}jd101/03-sculpture.png`,
  `${visualCase}jd101/04-red-home.png`, `${visualCase}jd101/05-coming-soon.png`, `${visualCase}jd101/06-city-stage.png`,
  `${visualCase}jd101/07-home-title.png`, `${visualCase}jd101/08-interior.png`, `${visualCase}jd101/09-floating-objects.png`,
]
const youkuK8Visuals = [
  `${visualCase}youku-k8/01-book-world.png`, `${visualCase}youku-k8/02-harbin.png`, `${visualCase}youku-k8/03-taizhou.png`,
  `${visualCase}youku-k8/04-ducks.png`, `${visualCase}youku-k8/05-fairies.png`, `${visualCase}youku-k8/06-film-road.png`,
  `${visualCase}youku-k8/07-chili.png`, `${visualCase}youku-k8/08-film-frame.png`, `${visualCase}youku-k8/09-cloud-boat.png`,
]
const collageVisuals = [
  `${visualCase}collage/01-smile.png`, `${visualCase}collage/02-wild-mountain.png`, `${visualCase}collage/03-balloon-eyes.png`,
  `${visualCase}collage/04-desert-eye.png`, `${visualCase}collage/05-desert-figures.png`, `${visualCase}collage/06-bird-balloon.png`,
  `${visualCase}collage/07-money.png`,
]
const moocVisuals = [
  `${visualCase}mooc/01-data-ring.png`, `${visualCase}mooc/02-flow-cubes.png`, `${visualCase}mooc/03-theory-practice.png`,
  `${visualCase}mooc/04-secret-flow.png`, `${visualCase}mooc/05-light-road.png`, `${visualCase}mooc/06-secret-flow-title.png`,
]

const videoWorks = [
  { no: '01', title: '718 车手节广告', tag: 'COMMERCIAL FILM', type: '品牌广告 / 动态视觉 / 节奏剪辑', year: '2025', video: `${A}videos/718-riders-festival.mp4`, accent: 'orange', intro: '以速度与机械感构建品牌节日氛围，把产品卖点转化为具有冲击力的视觉节奏。', visuals: firstVideoVisuals, backdrop: `${visualCase}first-page-bg.png` },
  { no: '02', title: '816 狂欢节', tag: 'BRAND CAMPAIGN', type: '商业广告 / 活动视觉 / 视觉包装', year: '2025', video: `${A}videos/816-carnival.mp4`, accent: 'cyan', intro: '围绕狂欢、参与和年轻化传播，完成从创意概念到动态画面交付的完整链路。', visuals: sixteenVisuals },
  { no: '03', title: '京东 101 广告', tag: 'COMMERCIAL FILM', type: '品牌广告 / AI 视觉 / 成片交付', year: '2025', video: `${A}videos/jd-101-ad.mp4`, accent: 'red', intro: '将商业信息、产品表达与影像叙事融合，形成可直接传播的品牌广告成片。', visuals: jd101Visuals },
  { no: '04', title: '慕课开场大会', tag: 'EVENT OPENING', type: '品牌活动 / 开场视觉 / AIGC 影像', year: '2024', video: `${A}videos/mooc-opening-aigc.mp4`, accent: 'violet', intro: '用 AIGC 影像建立大会开场的世界观与情绪曲线，让现场信息被更有记忆点地看见。', visuals: moocVisuals },
  { no: '05', title: '拼贴动画演示', tag: 'VISUAL EXPERIMENT', type: '视觉实验 / 拼贴动画 / 动效设计', year: '2024', video: `${A}videos/collage-animation.mp4`, accent: 'yellow', intro: '探索平面素材、拼贴结构与运动节奏的关系，形成可延展的视觉动效语言。', visuals: collageVisuals },
  { no: '06', title: '优酷 K8 第二期', tag: 'BRAND CONTENT', type: '品牌内容 / 视觉包装 / 动态设计', year: '2024', video: `${A}videos/youku-k8-02.mp4`, accent: 'blue', intro: '从内容主题出发，搭建统一的动态识别系统，完成品牌内容的视觉包装与交付。', visuals: youkuK8Visuals },
]

function Header() {
  return <header className="site-header">
    <a className="logo" href="#top" aria-label="回到首页"><span className="logo-mark">D</span><span>DANIEL<span className="logo-dot">.</span>AI</span></a>
    <nav className="main-nav" aria-label="主导航">
      <a href="#about">About</a><a href="#work">Selected work</a><a href="#contact">Contact</a>
    </nav>
    <a className="header-cta" href="mailto:daniel@example.com">Let’s talk <ArrowUpRight size={15}/></a>
  </header>
}

function Hero() {
  return <section className="hero" id="top">
    <div className="hero-media" aria-hidden="true">
      <video className="hero-video" autoPlay muted loop playsInline preload="auto">
        <source src="/assets/hero-showreel.mp4" type="video/mp4" />
      </video>
      <div className="hero-orb orb-one"/><div className="hero-orb orb-two"/><div className="hero-orb orb-three"/>
      <div className="hero-grain"/>
      <div className="hero-media-caption"><Play size={12} fill="currentColor"/> SHOWREEL / VISUAL LOOP <span>00:42</span></div>
    </div>
    <Header />
    <aside className="hero-sidecopy">
      <div className="side-label">DANIEL<span className="logo-dot">.</span>AI</div>
      <div className="side-kicker">PERSONAL PORTFOLIO</div>
      <p>去看你想看到的<br/>去成为你能成为的</p>
      <div className="side-title">个人作品集</div>
      <div className="side-year">2025—2026</div>
    </aside>
    <div className="hero-topics"><span>视觉设计</span><i/> <span>AI 视觉</span><i/> <span>品牌设计</span><i/> <span>影像创作</span></div>
    <div className="hero-content content-width">
      <div className="eyebrow"><span className="live-dot"/> AIGC DIRECTOR · VISUAL STORYTELLER</div>
      <h1>AI<br/><em>导演</em><span className="title-period">。</span></h1>
      <div className="hero-bottom">
        <p>我是 Daniel。<br/>把创意变成可交付的影像与视觉系统。</p>
        <a className="round-link" href="#work" aria-label="查看精选项目"><MoveUpRight size={20}/></a>
      </div>
    </div>
    <div className="hero-scroll">SCROLL TO EXPLORE <span>↓</span></div>
  </section>
}

function About() {
  const [portraitFlipped, setPortraitFlipped] = useState(false)
  return <section className="about section" id="about">
    <div className="content-width">
      <div className="section-intro"><span className="section-kicker">01 / ABOUT</span><span className="section-rule"/><span className="muted">Profile &amp; perspective</span></div>
      <div className="about-grid">
        <button className={`portrait-frame ${portraitFlipped ? 'is-flipped' : ''}`} type="button" onClick={() => setPortraitFlipped((flipped) => !flipped)} aria-label={portraitFlipped ? '翻回 Daniel 头像' : '翻转查看另一张头像'}><span className="portrait-flipper"><span className="portrait-face portrait-front"><img src={`${A}danny-avatar.jpg`} alt="Daniel的个人头像"/><span className="portrait-tag">DANIEL / 视觉创作者</span></span><span className="portrait-face portrait-back"><img src={`${A}about/avatar-flip.jpg`} alt="翻转后的角色头像"/><span className="portrait-tag">CLICK TO FLIP / 视觉角色</span></span></span></button>
        <div className="about-copy">
          <h2>在技术与想象力之间，<br/><span>找到新的视觉语法。</span></h2>
          <p className="lead">资深 AIGC 视觉导演｜美术视觉总监｜AI 底层创作专家｜特聘授课讲师｜人肉 Agent 工具八爪鱼。</p>
          <p>资深 AIGC 实战授课导师，曾于广电总局研修学院为一线教育品牌授课，担任南京软件谷、辽宁文旅夜校特聘 AIGC 讲师，参与腾讯观复、启幕计划专项 AIGC 制片人实训。精通 AI 技术、视觉创作与项目落地全流程，熟练使用 100+ AIGC 工具，掌握千余种 AI 视觉风格，并熟知 skill 的底层架构。</p>
          <p>全球 13 国跨国 AIGC 院线电影《海上女王郑一嫂》导演 / 视觉美术，作品亮相威尼斯、新加坡河流电影节；《安阳书生》入选字节跳动 2025 原动力大会优秀案例，担任《中华寻龙记》《格萨尔王》AIGC 项目导演。完成新加坡历史博物馆《黑石号传奇》盛唐丝路 AI 复原，以及《逃到月球上》《聊斋·幻赌》《阿尔法》等在研 AIGC 影视项目。</p>
          <p className="business-highlight"><strong>商业视觉导演 / AI 创意顾问</strong><br/>服务优酷、阿里云、蚂蚁、京东、华帝等品牌，主导品牌广告、活动开场与 AI 视觉内容创作，让创意从概念走向传播。</p>
          <p className="teaching"><span>可授课方向</span> AIGC 影视全流程 · AI 创作的视觉底层逻辑 · 100+ AI 工具实操 · AI 创作提示词语法逻辑 · AIGC 项目实战 · 商业视觉落地 · AI 创作的剪辑全流程</p>
          <div className="contact-line"><a href="mailto:daniel@example.com">daniel@example.com <ArrowUpRight size={14}/></a><span>中国 · 南京 / 全球合作</span></div>
          <div className="creative-principles" aria-label="创作方法">
            <div><span>01</span><strong>先找创意</strong><small>从问题与叙事出发</small></div>
            <div><span>02</span><strong>再建视觉</strong><small>把风格变成可执行系统</small></div>
            <div><span>03</span><strong>最后交付</strong><small>让作品真正进入传播现场</small></div>
          </div>
        </div>
      </div>
      <div className="stats"><div><strong>13</strong><span>COUNTRIES / 跨国电影项目</span></div><div><strong>100<span>+</span></strong><span>AI TOOLS / 工具实操</span></div><div><strong>10w<span>+</span></strong><span>REACH / 单项目传播量</span></div><div><strong>∞</strong><span>IMAGINATION / 持续探索</span></div></div>
    </div>
  </section>
}

function Work() {
  const [lightbox, setLightbox] = useState(null)
  const [activeVideo, setActiveVideo] = useState(null)
  return <section className="work section" id="work">
    <div className="content-width">
      <div className="section-intro"><span className="section-kicker">03 / SELECTED WORK</span><span className="section-rule"/><span className="muted">Commercial cases · Film · Visual experiments</span></div>
      <div className="work-head"><h2>From idea<br/><i>to impact.</i></h2><p>从创意概念到视觉语言，再到真实交付。<br/>按商业广告、AI 影视与视觉作品整理。</p></div>
      <div className="video-work-pages">{videoWorks.map((project) => <article className={`video-work-page accent-${project.accent}${project.backdrop ? ' has-visual-backdrop' : ''}`} style={project.backdrop ? {'--page-visual': `url(${project.backdrop})`} : undefined} key={project.title}><div className="video-page-top"><span className="module-number">{project.no}</span><span className="module-tag">{project.tag}</span><span className="video-page-count">06 / 06</span></div><div className="video-page-body"><div className="video-page-copy"><span className="section-kicker">商业交付案例 · 视觉案例与效果</span><h3>{project.title}</h3><p className="video-type">{project.type}</p><p className="video-intro">{project.intro}</p><div className="video-meta"><span>{project.year}</span><span>AI DIRECTOR / DANIEL</span></div></div><div className="visual-direction-strip" aria-label={`${project.title} 视觉方向`}><div className="visual-direction-track">{[...project.visuals, ...project.visuals].map((src, index) => <button className="visual-direction-card" key={`${src}-${index}`} onClick={() => setLightbox({src, title: project.title, index: (index % project.visuals.length) + 1})} aria-label={`放大查看 ${project.title} 视觉方向 ${(index % project.visuals.length) + 1}`}><img src={src} alt={`${project.title} 视觉方向 ${(index % project.visuals.length) + 1}`}/><span>{index % 3 === 0 ? '视觉方向' : index % 3 === 1 ? '画面效果' : '镜头语言'}</span><b>{String((index % project.visuals.length) + 1).padStart(2, '0')}</b></button>)}</div></div><div className="video-stage"><video src={project.video} muted loop playsInline preload="metadata"/><div className="video-stage-shade"/><button className="video-play" onClick={() => setActiveVideo(project)} aria-label={`播放 ${project.title}`}><Play size={28} fill="currentColor"/><span>PLAY FILM</span></button><span className="video-stage-label">MOTION CASE / {project.no}</span></div></div></article>)}</div>
      {lightbox && <div className="work-lightbox" role="dialog" aria-modal="true" aria-label={`${lightbox.title} 图片预览`} onClick={() => setLightbox(null)}><button className="lightbox-close" onClick={() => setLightbox(null)} aria-label="关闭图片预览">×</button><div className="lightbox-content" onClick={(event) => event.stopPropagation()}><img src={lightbox.src} alt={`${lightbox.title} 放大预览`}/><span>{lightbox.title} / {String(lightbox.index).padStart(2, '0')}</span></div></div>}
      {activeVideo && <div className="video-lightbox" role="dialog" aria-modal="true" aria-label={`${activeVideo.title} 视频播放`} onClick={() => setActiveVideo(null)}><button className="lightbox-close" onClick={() => setActiveVideo(null)} aria-label="关闭视频">×</button><div className="video-lightbox-content" onClick={(event) => event.stopPropagation()}><video src={activeVideo.video} controls autoPlay playsInline/><div><strong>{activeVideo.title}</strong><span>{activeVideo.type}</span></div></div></div>}
    </div>
  </section>
}

function Strengths() {
  const [mapActive, setMapActive] = useState(false)
  return <section className="strengths section" id="capabilities"><div className="content-width"><div className="section-intro"><span className="section-kicker">02 / DIRECTOR SYSTEM</span><span className="section-rule"/><span className="muted">My skill map</span></div><div className="capability-heading"><div><h2>MY SKILL<br/><span>能力图谱。</span></h2><p>以创意为核心，连接视觉、策划、逻辑、执行与团队协作。</p></div><span className="capability-code">DIRECTOR / SKILL MAP</span></div><div className={`skill-map ${mapActive ? 'is-active' : ''}`} onPointerDown={(event) => { event.currentTarget.setPointerCapture(event.pointerId); setMapActive(true) }} aria-label="拖动查看导演能力图谱"><div className="skill-stars"/><div className="skill-orbit orbit-a"/><div className="skill-orbit orbit-b"/><div className="skill-orbit orbit-c"/><div className="skill-core"><Sparkles size={20}/><strong>AI<br/><em>导演</em></strong><small>CREATIVE CORE</small></div><div className="skill-node skill-visual"><i/><span>VISUAL</span><b>视觉执行</b><small>粒子 / 视觉表现 / 演绎设计</small></div><div className="skill-node skill-logic"><i/><span>LOGIC</span><b>产品逻辑</b><small>功能架构 / 用户路径</small></div><div className="skill-node skill-plan"><i/><span>PLANNING</span><b>策划思维</b><small>叙事逻辑 / 体验流程</small></div><div className="skill-node skill-create"><i/><span>CREATIVITY</span><b>视觉创意</b><small>品牌 / UI / 空间视觉</small></div><div className="skill-node skill-execute"><i/><span>IMPLEMENTATION</span><b>执行制作</b><small>版本优化 / 资源统筹</small></div><div className="skill-node skill-synergy"><i/><span>SYNERGY</span><b>团队协同</b><small>多方沟通 / 交付节奏</small></div><div className="skill-hint">DRAG TO REVEAL / 拖动展开能力</div></div><div className="capability-footer"><span>CONCEPT</span><span>VISUAL LANGUAGE</span><span>PRODUCTION</span><span>DELIVERY</span></div></div></section>
}

function Contact() {
  return <section className="contact section" id="contact" onPointerMove={(event) => { const rect = event.currentTarget.getBoundingClientRect(); event.currentTarget.style.setProperty('--contact-x', `${((event.clientX - rect.left) / rect.width) * 100}%`); event.currentTarget.style.setProperty('--contact-y', `${((event.clientY - rect.top) / rect.height) * 100}%`) }}><div className="contact-bg"><div className="contact-orb"/></div><div className="content-width contact-inner"><div className="section-intro"><span className="section-kicker">04 / CONTACT</span><span className="section-rule"/><span className="muted">Let’s make something impossible</span></div><div className="contact-main"><span className="contact-label">Have a brief in mind?</span><a className="contact-email" href="mailto:daniel@example.com">Let’s talk<span className="contact-arrow"><ArrowUpRight size={34}/></span></a><p>商业视觉 / AIGC 影视 / 品牌内容 / 工作坊</p></div><div className="contact-footer"><span>© 2025 DANIEL.AI</span><span>Based in China · Working worldwide</span><a href="#top">Back to top ↑</a></div></div></section>
}

function App() { return <><Hero/><About/><Strengths/><Work/><Contact/></> }

createRoot(document.getElementById('root')).render(<App />)
