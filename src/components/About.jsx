import { profile } from '../data.js'

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about__card">
          {/* 左侧：人物区 */}
          <div className="about__person">
            <div className="about__avatar-wrap">
              <div className="about__avatar-ring" />
              {/* 替换 public/avatar.jpg 即可换成真实头像 */}
              <div className="about__avatar">
                <span>{profile.name.slice(0, 1)}</span>
              </div>
            </div>
            <h3 className="about__name">{profile.name}</h3>
            <p className="about__role text-gradient">{profile.role}</p>
            <ul className="about__contacts">
              <li>
                <span className="about__contact-label">邮箱</span>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </li>
              <li>
                <span className="about__contact-label">微信</span>
                <span>{profile.wechat}</span>
              </li>
              <li>
                <span className="about__contact-label">坐标</span>
                <span>{profile.location}</span>
              </li>
            </ul>
          </div>

          {/* 右侧：介绍 + 数据 */}
          <div className="about__body">
            <p className="section__eyebrow">ABOUT ME</p>
            <h2 className="section__title">
              一个把 <em className="text-gradient">AI 工具链</em>
              <br />
              玩成制片厂的编导
            </h2>
            <p className="about__intro">{profile.intro}</p>

            <div className="about__stats">
              {profile.stats.map((s) => (
                <div className="stat" key={s.label}>
                  <div className="stat__value text-gradient">{s.value}</div>
                  <div className="stat__label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
