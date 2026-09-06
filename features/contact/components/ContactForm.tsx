'use client'

import React, { useState } from 'react'
import { ArrowRight, CheckCircle2, Send, Sparkles } from 'lucide-react'
import type { ContactFormData } from '../types/contact.types'
import { buildWhatsAppUrl } from '@/lib/utils'

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    nome: '',
    empresa: '',
    telefone: '',
    email: '',
    cidade: '',
    servico: 'Mineração e Processos ANM',
    mensagem: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const successWhatsappUrl = buildWhatsAppUrl(
    `Olá! Meu nome é ${formData.nome || 'Cliente'}${
      formData.empresa ? ` da empresa ${formData.empresa}` : ''
    }. Acabei de preencher a solicitação pelo site referente ao serviço de ${formData.servico}.`
  )

  return (
    <div className="contact-form-card">
      {/* FORM CARD HEADER */}
      <div className="contact-form-top">
        <div className="contact-form-badge">
          <Sparkles size={13} />
          <span>Atendimento Técnico Especializado</span>
        </div>
        <h3 className="contact-form-title">Solicite uma Proposta Técnica</h3>
        <p className="contact-form-subtitle">
          Preencha o formulário abaixo e nossos engenheiros entrarão em contato em até 24 horas.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="contact-form-body">
        {submitted ? (
          <div className="contact-form-success">
            <div className="success-icon-wrap">
              <CheckCircle2 size={40} />
            </div>
            <h4>Solicitação Enviada com Sucesso!</h4>
            <p>
              Recebemos seus dados e nossa equipe técnica já está analisando sua solicitação. Se preferir um atendimento imediato, clique no botão abaixo:
            </p>
            <a
              href={successWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp-success"
            >
              Falar no WhatsApp Agora <ArrowRight size={16} />
            </a>
          </div>
        ) : (
          <>
            <div className="form-grid-2">
              <div className="form-field">
                <label htmlFor="contact-nome">Nome Completo *</label>
                <input
                  id="contact-nome"
                  required
                  placeholder="Ex: João da Silva"
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                />
              </div>

              <div className="form-field">
                <label htmlFor="contact-empresa">Empresa / Empreendimento</label>
                <input
                  id="contact-empresa"
                  placeholder="Nome da mineradora ou empresa"
                  value={formData.empresa}
                  onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                />
              </div>
            </div>

            <div className="form-grid-2">
              <div className="form-field">
                <label htmlFor="contact-telefone">Telefone / WhatsApp *</label>
                <input
                  id="contact-telefone"
                  required
                  placeholder="(00) 00000-0000"
                  value={formData.telefone}
                  onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                />
              </div>

              <div className="form-field">
                <label htmlFor="contact-email">E-mail Profissional *</label>
                <input
                  id="contact-email"
                  required
                  type="email"
                  placeholder="seuemail@empresa.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="form-grid-2">
              <div className="form-field">
                <label htmlFor="contact-cidade">Cidade / UF</label>
                <input
                  id="contact-cidade"
                  placeholder="Ex: Belo Horizonte / MG"
                  value={formData.cidade}
                  onChange={(e) => setFormData({ ...formData, cidade: e.target.value })}
                />
              </div>

              <div className="form-field">
                <label htmlFor="contact-servico">Serviço de Interesse</label>
                <div className="select-wrap">
                  <select
                    id="contact-servico"
                    value={formData.servico}
                    onChange={(e) => setFormData({ ...formData, servico: e.target.value })}
                  >
                    <option>Mineração e Processos ANM</option>
                    <option>Planejamento e Supervisão de Lavra</option>
                    <option>Licenciamento Ambiental (LP, LI, LO)</option>
                    <option>Outorga de Recursos Hídricos</option>
                    <option>Aerolevantamento com Drone (VANT)</option>
                    <option>Responsabilidade Técnica e Gestão</option>
                    <option>Outros Estudos Técnicos</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="contact-mensagem">Como podemos apoiar seu projeto?</label>
              <textarea
                id="contact-mensagem"
                rows={3}
                placeholder="Descreva brevemente a sua demanda, prazos ou particularidades da sua área mineral..."
                value={formData.mensagem}
                onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
              />
            </div>

            <div className="form-consent">
              <label className="checkbox-label">
                <input type="checkbox" required />
                <span>
                  Concordo com o tratamento dos dados para retorno técnico da Alcântara Consultoria.
                </span>
              </label>
            </div>

            <button type="submit" className="btn-contact-submit">
              <span>ENVIAR SOLICITAÇÃO TÉCNICA</span>
              <Send size={16} />
            </button>
          </>
        )}
      </form>
    </div>
  )
}
