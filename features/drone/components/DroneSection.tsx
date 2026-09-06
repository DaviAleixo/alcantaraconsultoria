import Image from 'next/image'
import { droneDeliverables, droneMetrics } from '../data/drone.data'

export function DroneSection() {
  return (
    <section className="drone-section" id="aerolevantamento">
      {/* BACKGROUND TOPOGRAPHY LINES */}
      <div className="drone-bg-topo" aria-hidden="true" />

      <div className="shell">
        {/* TOP ROW: INTRO + METRICS (LEFT) & HERO DRONE HUD (RIGHT) */}
        <div className="drone-top-grid">
          {/* LEFT COLUMN */}
          <div className="drone-top-left">
            <div className="drone-eyebrow-wrap">
              <span className="drone-eyebrow-dash">—</span>
              <span className="drone-eyebrow">TECNOLOGIA APLICADA</span>
            </div>

            <h2 className="drone-headline">
              AEROLEVANTAMENTO<br />
              COM DRONES (VANT) PARA<br />
              MINERAÇÃO E INFRAESTRUTURA.
            </h2>

            <p className="drone-intro-text">
              O uso de aeronaves remotamente pilotadas revolucionou a topografia e a gestão de minas. Com alta precisão geométrica e softwares dedicados de processamento fotogramétrico, entregamos dados confiáveis com produção diária excepcional, menores custos e zero exposição humana em áreas críticas.
            </p>

            {/* 4-METRIC STAT BAR */}
            <div className="drone-metrics-bar">
              {droneMetrics.map((metric) => {
                const Icon = metric.icon
                return (
                  <div key={metric.id} className="drone-metric-col">
                    <div className="drone-metric-icon">
                      <Icon size={16} />
                    </div>
                    <span className="drone-metric-tag">{metric.tag}</span>
                    <strong className="drone-metric-val">{metric.value}</strong>
                    <span className="drone-metric-desc">{metric.description}</span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* RIGHT COLUMN: HERO DRONE IMAGE WITH TELEMETRY HUD */}
          <div className="drone-hero-wrap">
            <div className="drone-hero-card">
              <Image
                src="/images/fotodrone.png"
                alt="Aerolevantamento com Drone VANT em Cava de Mineração"
                width={700}
                height={460}
                className="drone-hero-image"
                priority
              />

              {/* TELEMETRY HUD OVERLAY */}
              <div className="drone-hud-overlay" aria-hidden="true">
                {/* TOP LEFT COORDINATES */}
                <div className="hud-coords">
                  <span>20°05&apos;15&quot;S</span>
                  <span>43°48&apos;20&quot;W</span>
                </div>

                {/* TOP RIGHT TELEMETRY */}
                <div className="hud-telemetry">
                  <div className="hud-metric">
                    <small>ALT</small>
                    <span>120m</span>
                  </div>
                  <div className="hud-metric">
                    <small>SPD</small>
                    <span>45km/h</span>
                  </div>
                  <div className="hud-status">
                    <span className="hud-dot" />
                    <span>RTK FIX</span>
                  </div>
                </div>

                {/* TARGET RETICLE CENTER */}
                <div className="hud-reticle">
                  <div className="hud-crosshair" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM ROW: 4 DELIVERABLE CARDS (ORTOFOTO, MDT, MDS, CURVAS) */}
        <div className="drone-deliverables-grid">
          {droneDeliverables.map((item) => {
            const Icon = item.icon
            return (
              <article key={item.id} className="drone-deliv-card">
                {/* CARD HEADER */}
                <div className="drone-deliv-header">
                  <div className="drone-deliv-icon-title">
                    <div className="drone-deliv-icon">
                      <Icon size={18} />
                    </div>
                    <h3 className="drone-deliv-title">{item.title}</h3>
                  </div>
                  <span className="drone-deliv-number">{item.number}</span>
                </div>

                {/* CARD DESCRIPTION */}
                <p className="drone-deliv-desc">{item.description}</p>

                {/* CARD IMAGE PREVIEW WITH HUD CORNERS */}
                <div className="drone-deliv-img-frame">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={320}
                    height={180}
                    className="drone-deliv-img"
                  />
                  <div className="deliv-corner top-left" aria-hidden="true" />
                  <div className="deliv-corner top-right" aria-hidden="true" />
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
