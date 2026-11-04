/**
 * 全屏首页 Hero · 马里奥式 3D 游戏风
 * 个人信息为占位符（虚线空位），等待用户填入真实资料。
 * 人物形象：public/images/hero-guy.png（AI 生成占位，可替换为真人照片抠图）
 */

const clouds = [
  { cls: 'cloud--1', face: true },
  { cls: 'cloud--2', face: false },
  { cls: 'cloud--3', face: true },
  { cls: 'cloud--4', face: false },
  { cls: 'cloud--5', face: false },
]

const blocks = [
  { cls: 'qblock--1', delay: '0s' },
  { cls: 'qblock--2', delay: '-1.4s' },
  { cls: 'qblock--3', delay: '-2.6s' },
]

const coins = [
  { cls: 'coin--1', delay: '0s' },
  { cls: 'coin--2', delay: '-0.9s' },
  { cls: 'coin--3', delay: '-1.8s' },
  { cls: 'coin--4', delay: '-0.4s' },
]

const stars = [
  { top: '12%', left: '8%' },
  { top: '22%', left: '38%' },
  { top: '9%', left: '58%' },
  { top: '30%', left: '72%' },
  { top: '16%', left: '88%' },
  { top: '44%', left: '16%' },
  { top: '58%', left: '46%' },
]

export default function Hero() {
  return (
    <section id="home" className="hero hero--game">
      {/* ===== 天空层 ===== */}
      <div className="hero__sky" />
      <div className="hero__sun" />
      {stars.map((s, i) => (
        <span className="star" key={i} style={{ top: s.top, left: s.left }}>
          ✦
        </span>
      ))}

      {/* ===== 云朵层 ===== */}
      {clouds.map((c, i) => (
        <div className={`cloud ${c.cls}`} key={i}>
          {c.face && (
            <div className="cloud__face">
              <i />
              <i />
              <b />
            </div>
          )}
        </div>
      ))}

      {/* ===== 漂浮道具层 ===== */}
      {blocks.map((b, i) => (
        <div className={`qblock ${b.cls}`} key={i} style={{ animationDelay: b.delay }}>
          ?
        </div>
      ))}
      {coins.map((c, i) => (
        <div className={`coin ${c.cls}`} key={i} style={{ animationDelay: c.delay }} />
      ))}

      {/* ===== 内容层 ===== */}
      <div className="container hero__stage">
        <div className="hero__text">
          <p className="hero__badge">
            <span className="hero__badge-dot" />
            PLAYER 1 · AIGC 短视频编导
          </p>
          <h1 className="hero__title">
            HI！我是
            <span className="hero__name-blank" title="待填写：你的姓名">
              你的姓名
            </span>
            <br />
            用 <em className="hero__title-pop">AI</em> 打通关的
            <br />
            短视频编导
          </h1>
          <p className="hero__intro">
            <span className="hero__intro-blank" title="待填写：一句话介绍自己">
              一句话介绍自己……（待填写）
            </span>
          </p>

          <div className="hero__actions">
            <a href="#works" className="game-btn game-btn--lg">
              ▶ 查看作品
            </a>
            <a href="#contact" className="game-btn game-btn--lg game-btn--white">
              开始合作
            </a>
          </div>

          <div className="hero__meta">
            <span className="hero__meta-item hero__meta--blank" title="待填写：所在城市">
              📍 城市
            </span>
            <span className="hero__meta-item hero__meta--blank" title="待填写：邮箱">
              ✉ 邮箱
            </span>
            <span className="hero__meta-item hero__meta--blank" title="待填写：微信号">
              💬 微信
            </span>
          </div>
        </div>

        {/* 右侧：人物站在砖块平台上 */}
        <div className="hero__char">
          <div className="hero__char-burst" />
          <img
            className="hero__char-img"
            src={`${import.meta.env.BASE_URL}images/hero-guy.png`}
            alt="人物形象（占位）"
            draggable="false"
          />
          <div className="platform">
            <div className="platform__grass" />
            <div className="platform__bricks" />
          </div>
          <div className="pipe">
            <div className="pipe__rim" />
            <div className="pipe__body" />
          </div>
          <div className="mushroom">
            <div className="mushroom__cap" />
            <div className="mushroom__stem" />
          </div>
        </div>
      </div>

      {/* ===== 底部云层过渡 ===== */}
      <div className="hero__cloudsea">
        {Array.from({ length: 14 }).map((_, i) => (
          <span key={i} />
        ))}
      </div>
    </section>
  )
}
