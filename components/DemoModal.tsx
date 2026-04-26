'use client'

import { useRouter } from 'next/navigation'

export default function DemoModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  const router = useRouter()

  const launchDemo = (demo: string) => {
    if (demo === 'piper') {
      // Launch piper simulator in fullscreen window
      const piperWindow = window.open('', 'piper_simulator', 'width=1400,height=900,toolbar=no,menubar=no,location=no')
      if (piperWindow) {
        piperWindow.document.write(`
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>PIPER AM Simulator — N.E.R.V.E</title>
            <style>
              body { margin: 0; padding: 0; overflow: hidden; background: #0a0a0c; }
              iframe { width: 100%; height: 100vh; border: none; }
            </style>
          </head>
          <body>
            <iframe src="/piper_sim.html" title="PIPER AM Simulator"></iframe>
          </body>
          </html>
        `)
        piperWindow.document.close()
      }
      onClose()
    } else if (demo === 'neurosim') {
      const alert_msg = 'NeuroSim coming soon'
      console.log(alert_msg)
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div
      className="modal-bg"
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,.7)',
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: isOpen ? 1 : 0,
        pointerEvents: isOpen ? 'all' : 'none',
        transition: 'opacity .25s',
        backdropFilter: 'blur(4px)',
      }}
      onClick={onClose}
    >
      <div
        className="modal"
        style={{
          background: 'var(--bg2)',
          border: '1px solid var(--border)',
          borderRadius: '12px',
          padding: '32px',
          width: 'min(480px, 92vw)',
          animation: 'fadeUp .3s ease',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h3 style={{ fontFamily: 'Bebas Neue', fontSize: '32px', letterSpacing: '.08em', color: 'var(--text)', marginBottom: '8px' }}>
          SELECT DEMO
        </h3>
        <p style={{ fontSize: '13px', color: 'var(--text3)', lineHeight: 1.6, marginBottom: '20px' }}>
          Choose a simulation to launch in your browser.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '20px' }}>
          <button
            onClick={() => launchDemo('piper')}
            className="demo-opt"
            style={{
              border: '1px solid var(--border)',
              background: 'var(--bg3)',
              borderRadius: '6px',
              padding: '16px',
              cursor: 'pointer',
              transition: 'border-color .2s, background .2s',
              textAlign: 'left',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent)'
              e.currentTarget.style.background = 'var(--tag-bg)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border)'
              e.currentTarget.style.background = 'var(--bg3)'
            }}
          >
            <div style={{ fontFamily: 'JetBrains Mono', fontSize: '11px', fontWeight: 700, color: 'var(--text)', letterSpacing: '.08em', marginBottom: '4px' }}>
              PIPER AM
            </div>
            <div style={{ fontSize: '11px', color: 'var(--text3)', lineHeight: 1.4 }}>
              6-DOF robotic arm with CCD-IK solver, URDF FK, and real-time
              terminal control.
            </div>
          </button>
          <button
            onClick={() => launchDemo('neurosim')}
            className="demo-opt"
            style={{
              border: '1px solid var(--border)',
              background: 'var(--bg3)',
              borderRadius: '6px',
              padding: '16px',
              cursor: 'pointer',
              transition: 'border-color .2s, background .2s',
              textAlign: 'left',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent)'
              e.currentTarget.style.background = 'var(--tag-bg)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border)'
              e.currentTarget.style.background = 'var(--bg3)'
            }}
          >
            <div style={{ fontFamily: 'JetBrains Mono', fontSize: '11px', fontWeight: 700, color: 'var(--text)', letterSpacing: '.08em', marginBottom: '4px' }}>
              NEUROSIM
            </div>
            <div style={{ fontSize: '11px', color: 'var(--text3)', lineHeight: 1.4 }}>
              Muscle fiber & motor unit simulation with FES modeling. — Coming
              soon
            </div>
          </button>
        </div>

        <button
          onClick={onClose}
          className="modal-close"
          style={{
            background: 'none',
            border: '1px solid var(--border)',
            borderRadius: '3px',
            padding: '6px 14px',
            fontFamily: 'JetBrains Mono',
            fontSize: '10px',
            color: 'var(--text3)',
            cursor: 'pointer',
            transition: 'border-color .2s, color .2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'var(--text)'
            e.currentTarget.style.color = 'var(--text)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'var(--border)'
            e.currentTarget.style.color = 'var(--text3)'
          }}
        >
          CLOSE
        </button>
      </div>
    </div>
  )
}
