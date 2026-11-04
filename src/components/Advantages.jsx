import { advantages } from '../data.js'

export default function Advantages() {
  return (
    <section id="advantages" className="section adv">
      <div className="container">
        <header className="section__head">
          <p className="section__eyebrow">WHY ME</p>
          <h2 className="section__title">
            为什么选择 <em className="text-gradient">与我合作</em>
          </h2>
          <p className="section__sub">不只是会用 AI 工具，而是懂得用 AI 讲好一个故事</p>
        </header>

        <div className="adv__grid">
          {advantages.map((a) => (
            <div className="adv-card" key={a.title}>
              <div className="adv-card__icon">{a.icon}</div>
              <h3 className="adv-card__title">{a.title}</h3>
              <p className="adv-card__desc">{a.desc}</p>
              <span className="adv-card__glow" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
