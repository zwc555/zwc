import { useEffect, useRef } from 'react'

// 悬停这些元素时，钻石剑切换为「小手」
const INTERACTIVE_SELECTOR = [
  'a',
  'button',
  '[role="button"]',
  'input',
  'select',
  'textarea',
  'label',
  'summary',
  '.work-card',
  '.work-card__play',
  '.hero__name-blank',
  '.hero__intro-blank',
  '.hero__meta--blank',
].join(',')

/**
 * 游戏风自定义鼠标：
 * - 默认：钻石剑（剑尖即点击热点）+ 移动流光拖尾
 * - 悬停可点击元素：切换为卡通小手（指尖对准热点），按下时有抓取反馈
 * - 鼠标移出窗口自动隐藏；仅作用于本站页面；触屏设备自动禁用
 */
export default function GameCursor() {
  const canvasRef = useRef(null)
  const swordRef = useRef(null)
  const handRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const sword = swordRef.current
    const hand = handRef.current
    const ctx = canvas.getContext('2d')

    let w = 0
    let h = 0
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    window.addEventListener('resize', resize)

    const points = []
    const LIFE = 420 // 拖尾存活时长 ms
    let visible = false
    let mode = 'sword' // 'sword' | 'hand'
    let pressing = false

    const apply = (x, y) => {
      const img = mode === 'hand' ? hand : sword
      const scale = pressing ? 0.85 : 1
      img.style.transform = `translate3d(${x - 2}px, ${y - 2}px, 0) scale(${scale})`
    }

    const setMode = (next, x, y) => {
      if (mode === next) return
      mode = next
      sword.style.opacity = next === 'sword' && visible ? '1' : '0'
      hand.style.opacity = next === 'hand' && visible ? '1' : '0'
      apply(x, y)
    }

    const onMove = (e) => {
      const x = e.clientX
      const y = e.clientY
      if (!visible) {
        visible = true
        ;(mode === 'hand' ? hand : sword).style.opacity = '1'
      }
      const interactive =
        e.target instanceof Element && e.target.closest(INTERACTIVE_SELECTOR)
      setMode(interactive ? 'hand' : 'sword', x, y)
      apply(x, y)
      points.push({ x, y, t: performance.now() })
      if (points.length > 80) points.shift()
    }

    const onDown = (e) => {
      pressing = true
      apply(e.clientX, e.clientY)
    }

    const onUp = (e) => {
      pressing = false
      apply(e.clientX, e.clientY)
    }

    const onLeave = () => {
      visible = false
      sword.style.opacity = '0'
      hand.style.opacity = '0'
      points.length = 0
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mousedown', onDown, { passive: true })
    window.addEventListener('mouseup', onUp, { passive: true })
    document.addEventListener('mouseleave', onLeave)

    let raf
    const draw = (now) => {
      while (points.length && now - points[0].t > LIFE) points.shift()
      ctx.clearRect(0, 0, w, h)

      if (points.length > 1) {
        ctx.globalCompositeOperation = 'lighter'
        ctx.lineCap = 'round'
        ctx.lineJoin = 'round'

        for (let i = 1; i < points.length; i++) {
          const p = points[i - 1]
          const q = points[i]
          const alpha = Math.max(0, 1 - (now - q.t) / LIFE)

          // 外层青色辉光（细而淡）
          ctx.shadowColor = 'rgba(110, 240, 225, 0.55)'
          ctx.shadowBlur = 9 * alpha
          ctx.strokeStyle = `rgba(110, 240, 225, ${alpha * 0.22})`
          ctx.lineWidth = 7 * alpha + 1
          ctx.beginPath()
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(q.x, q.y)
          ctx.stroke()

          // 内层白色亮芯
          ctx.shadowBlur = 0
          ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.55})`
          ctx.lineWidth = 1.6 * alpha + 0.3
          ctx.beginPath()
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(q.x, q.y)
          ctx.stroke()
        }

        ctx.shadowBlur = 0
        ctx.globalCompositeOperation = 'source-over'
      }
      raf = requestAnimationFrame(draw)
    }
    raf = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      document.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <>
      <canvas ref={canvasRef} className="game-cursor__trail" aria-hidden="true" />
      <img
        ref={swordRef}
        className="game-cursor__img game-cursor__sword"
        src={`${import.meta.env.BASE_URL}images/sword-cursor.png`}
        alt=""
        draggable="false"
        aria-hidden="true"
      />
      <img
        ref={handRef}
        className="game-cursor__img game-cursor__hand"
        src={`${import.meta.env.BASE_URL}images/hand-cursor.svg`}
        alt=""
        draggable="false"
        aria-hidden="true"
      />
    </>
  )
}
