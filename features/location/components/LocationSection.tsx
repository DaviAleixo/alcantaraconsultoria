import { ArrowUpRight } from 'lucide-react'
import { siteConfig } from '@/config/site'

export function LocationSection() {
  return (
    <section className="section location" id="localizacao">
      <div className="shell location-grid">
        <div>
          <p className="eyebrow">Localização Estratégica</p>
          <h2>Presença em Minas Gerais com atendimento em todo o território nacional.</h2>
          <p>
            Nossa sede está localizada em Conselheiro Lafaiete — MG, no coração de uma das principais províncias minerais do Brasil,
            com facilidade de acesso a operações em todo o estado e no país.
          </p>
          <div className="location-details">
            <strong>{siteConfig.name}</strong>
            <span>{siteConfig.address.street}</span>
            <span>{siteConfig.address.city} — {siteConfig.address.state} | CEP {siteConfig.address.zip}</span>
            <a
              className="text-link"
              href="https://goo.gl/maps/cCtmcokLU5qdnzyG7"
              target="_blank"
              rel="noopener noreferrer"
            >
              Abrir no Google Maps <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        <div className="map-frame">
          <iframe
            title="Mapa de localização da Alcântara Consultoria em Conselheiro Lafaiete"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-43.810%2C-20.680%2C-43.760%2C-20.640&amp;layer=mapnik&amp;marker=-20.6617%2C-43.7850"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="map-label">
            <span className="map-pin" /> Conselheiro Lafaiete, MG
          </div>
        </div>
      </div>
    </section>
  )
}
