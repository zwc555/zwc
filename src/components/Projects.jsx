import { projects } from '../data.js'

/**
 * 精选项目：大卡片 + 视频封面。
 * 将视频放入 public/videos/work-1.mp4 等路径后，
 * 卡片会自动以悬停播放的形式展示（当前为动态渐变占位封面）。
 */
export default function Projects() {
  return (
    <section id="works" className="section works">
      <div className="container">
        <header className="section__head">
          <p className="section__eyebrow">SELECTED WORKS</p>
          <h2 className="section__title">
            精选 <em className="text-gradient">作品</em>
          </h2>
          <p className="section__sub">每一支片子，都是一次「创意 × AI」的实验与验证</p>
        </header>

        <div className="works__list">
          {projects.map((p, i) => (
            <article className={`work-card work-card--${p.theme}`} key={p.id}>
              {/* 封面区 */}
              <div className="work-card__cover">
                <div className="work-card__cover-bg" />
                <div className="work-card__cover-noise" />
                <button className="work-card__play" aria-label={`播放 ${p.title}`}>
                  <span>▶</span>
                </button>
                <span className="work-card__duration">{p.duration}</span>
                <span className="work-card__index">0{i + 1}</span>
              </div>

              {/* 信息区 */}
              <div className="work-card__body">
                <div className="work-card__tags">
                  {p.tags.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="work-card__title">{p.title}</h3>
                <p className="work-card__client">{p.client}</p>
                <p className="work-card__desc">{p.desc}</p>
                <span className="work-card__more">
                  查看案例详情 <i>→</i>
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
