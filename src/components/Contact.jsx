import { profile } from '../data.js'

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact__bg">
        <span className="blob blob--1" />
        <span className="blob blob--2" />
      </div>

      <div className="container contact__inner">
        <p className="section__eyebrow">LET'S CREATE</p>
        <h2 className="contact__title">
          下一个 <em className="text-gradient">爆款</em>
          <br />
          从一次对话开始
        </h2>
        <p className="contact__sub">
          无论是一支品牌概念片，还是一整套 AI 内容工作流，
          都欢迎来聊聊你的想法。
        </p>

        <div className="contact__actions">
          <a className="btn btn--gradient btn--lg" href={`mailto:${profile.email}`}>
            ✉ 发送邮件
          </a>
          <div className="contact__wechat">
            <span className="contact__wechat-label">微信</span>
            <span className="contact__wechat-id">{profile.wechat}</span>
          </div>
        </div>

        <div className="contact__meta">
          <span>{profile.email}</span>
          <span className="contact__meta-dot" />
          <span>{profile.location}</span>
          <span className="contact__meta-dot" />
          <span>48h 内回复</span>
        </div>
      </div>

      <footer className="footer">
        <div className="container footer__inner">
          <span className="footer__logo">✦ PLAYER ONE</span>
          <span className="footer__copy">© 2026 AIGC 短视频编导 · 个人作品集</span>
        </div>
      </footer>
    </section>
  )
}
