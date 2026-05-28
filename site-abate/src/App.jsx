import { useState } from 'react';
import './index.css';

export default function App() {
  const [loginAberto, setLoginAberto] = useState(false);
  const [adminLogado, setAdminLogado] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [pedidoEnviado, setPedidoEnviado] = useState(false);
  const [fotoPreview, setFotoPreview] = useState(null);
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    veiculo: '',
    descricao: '',
    fotos: []
  });

  const [pedidos, setPedidos] = useState([
    {
      id: '#VFV-1024',
      cliente: 'João Silva',
      telefone: '+351 912 345 678',
      veiculo: 'BMW Série 3',
      estado: 'Pendente',
      fotos: [
        { nome: 'bmw_frente.jpg', url: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=800&auto=format&fit=crop' },
        { nome: 'bmw_lateral.jpg', url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop' }
      ]
    },
    {
      id: '#VFV-1025',
      cliente: 'Ricardo Santos',
      telefone: '+351 934 222 111',
      veiculo: 'Renault Clio',
      estado: 'Aprovado',
      fotos: [
        { nome: 'clio_1.jpg', url: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=800&auto=format&fit=crop' },
        { nome: 'clio_2.jpg', url: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=800&auto=format&fit=crop' }
      ]
    },
    {
      id: '#VFV-1026',
      cliente: 'Carlos Ferreira',
      telefone: '+351 965 888 999',
      veiculo: 'Peugeot 208',
      estado: 'Em análise',
      fotos: [
        { nome: 'peugeot_1.jpg', url: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800&auto=format&fit=crop' }
      ]
    }
  ]);

  const handlePedido = () => {
    if (
      formData.nome &&
      formData.telefone &&
      formData.veiculo
    ) {
      setPedidoEnviado(true);

      const novoPedido = {
        id: `#VFV-${Math.floor(Math.random() * 9000 + 1000)}`,
        cliente: formData.nome,
        telefone: formData.telefone,
        veiculo: formData.veiculo,
        estado: 'Novo Pedido',
        fotos: formData.fotos.map((foto) => ({
          nome: foto.name,
          url: URL.createObjectURL(foto)
        }))
      };

      setPedidos([novoPedido, ...pedidos]);

      setFormData({
        nome: '',
        telefone: '',
        veiculo: '',
        descricao: '',
        fotos: []
      });

      setTimeout(() => {
        setPedidoEnviado(false);
      }, 4000);
    }
  };

  const atualizarEstadoPedido = (id, novoEstado) => {
    setPedidos(
      pedidos.map((pedido) =>
        pedido.id === id
          ? { ...pedido, estado: novoEstado }
          : pedido
      )
    );
  };

  const apagarPedido = (id) => {
    setPedidos(pedidos.filter((pedido) => pedido.id !== id));
  };

  const handleLogin = () => {
    if (email === 'admin@mgr.pt' && password === 'admin123') {
      setAdminLogado(true);
    }
  };
  const etapas = [
    {
      titulo: 'Receção do Veículo',
      descricao: 'Registo da entrada do veículo, verificação documental e identificação do proprietário.'
    },
    {
      titulo: 'Descontaminação',
      descricao: 'Remoção segura de óleos, baterias, combustíveis e outros resíduos perigosos.'
    },
    {
      titulo: 'Desmontagem',
      descricao: 'Separação de peças reutilizáveis e componentes recicláveis.'
    },
    {
      titulo: 'Reciclagem',
      descricao: 'Encaminhamento de materiais para reciclagem e reaproveitamento industrial.'
    }
  ];

const indicadores = [
  {
    titulo: '🇵🇹 Português',
    texto: 'Tratamos do processo de abate e pagamento imediato'
  },
  {
    titulo: '🇬🇧 English',
    texto: 'We handle the scrapping process and immediate payment'
  },
  {
    titulo: '🇫🇷 Français',
    texto: 'Nous gérons le processus de destruction et paiement immédiat'
  },
  {
    titulo: '🇪🇸 Español',
    texto: 'Gestionamos el proceso de baja y pago inmediato'
  }
];

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <header className="border-b border-emerald-200 bg-gradient-to-r from-emerald-50 via-cyan-50 to-white backdrop-blur sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">CGV</h1>
            <p className="text-sm text-slate-600">Centro de Gestão de Veículos em Fim de Vida</p>
          </div>

          <nav className="hidden md:flex gap-6 text-sm text-slate-700">
            <a href="#abate" className="hover:text-emerald-500 transition">Pedido de Abate</a>
            <a href="#sobre" className="hover:text-emerald-500 transition">Sobre</a>
            <a href="#processo" className="hover:text-emerald-500 transition">Processo</a>
            <a href="#indicadores" className="hover:text-emerald-500 transition">Indicadores</a>
            <a href="#contactos" className="hover:text-emerald-500 transition">Contactos</a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden">
       <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 via-cyan-100 to-white opacity-90" />

        <div className="relative max-w-7xl mx-auto px-6 py-12 lg:py-20 grid lg:grid-cols-[1fr_1.25fr] gap-12 items-center">
          <div>
           <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 backdrop-blur-sm px-5 py-3 text-sm font-semibold text-cyan-700 shadow-md mb-6">
  <div className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse"></div>
  Processo de Gestão de Veículos em Fim de Vida
</div>

            <h2 className="text-5xl lg:text-6xl font-black leading-tight mb-6">
              Centro de Gestão de Veículos em Fim de Vida
            </h2>

            <p className="text-lg text-slate-700 leading-relaxed mb-8 max-w-xl">
              O Centro de Gestão de Veículos em Fim de Vida oferece soluções integradas e sustentáveis para a gestão eficiente e responsável de veículos no final do seu ciclo de vida.
              Aposte numa mobilidade mais sustentável e reduza os custos na aquisição do seu novo carro elétrico.
              Soluções simples, segura e com acompanhamento profissional em todo o processo.
            </p>

            <div className="mb-10 rounded-3xl border border-emerald-200 bg-white p-6 shadow-xl">
            
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-400 mb-3 font-semibold">
                Ligue para solicitar avaliação
              </p>

              <a
                href="tel:+351961049508"
               className="block text-4xl lg:text-5xl font-black text-slate-800 hover:text-emerald-500 transition"
              >
                +351 961 049 508
              </a>

              <p className="mt-3 text-slate-700 text-sm">
                Atendimento rápido para recolha e marcação de veículos em fim de vida.
                Avaliação gratuita e sem compromisso!
              </p>
            </div>

          
          </div>
<div className="relative overflow-hidden rounded-[2rem] border border-emerald-100 bg-white shadow-2xl">
  <img
    src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1400&auto=format&fit=crop"
    alt="Veículo"
    className="h-full min-h-[620px] w-full object-cover"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
    <p className="mb-3 inline-flex rounded-full bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur">
      Processo rápido e seguro
    </p>

    <h4 className="text-4xl font-black leading-tight">
      Tratamos do processo de abate e documentação
    </h4>

    <p className="mt-4 max-w-lg text-white/90">
      Serviço profissional para veículos nacionais e estrangeiros.
      Pagamento imediato e acompanhamento completo.
    </p>
  </div>
</div>
        </div>
      </section>

      <section
  id="sobre"
  className="relative overflow-hidden py-24"
>
  <div className="absolute inset-0 bg-gradient-to-b from-cyan-50 via-white to-emerald-50 opacity-80" />
        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-4xl font-bold mb-6">Transforme a gestão ambiental da sua operação</h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              A plataforma EcoVFV permite gerir todas as etapas do processo de veículos em fim de vida, garantindo rastreabilidade, eficiência operacional e conformidade com as normas ambientais em vigor.
            </p>

            <div className="space-y-4">
              <div className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-md">
                <h4 className="font-semibold mb-2">Gestão documental</h4>
                <p className="text-sm text-slate-500">Arquivo digital de certificados, matrículas e comprovativos legais.</p>
              </div>

              <div className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-md">
                <h4 className="font-semibold mb-2">Rastreabilidade completa</h4>
                <p className="text-sm text-slate-500">Acompanhe o estado de cada veículo em tempo real.</p>
              </div>

              <div className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-md">
                <h4 className="font-semibold mb-2">Relatórios automáticos</h4>
                <p className="text-sm text-slate-500">Obtenha métricas ambientais e operacionais instantaneamente.</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-emerald-100 bg-gradient-to-br from-white to-emerald-50 p-10 shadow-2xl">
            <div className="space-y-6">
              <div>
                <p className="text-sm text-slate-500 mb-2">Estado do processo</p>
                <div className="h-3 rounded-full bg-slate-800 overflow-hidden">
                  <div className="h-full w-[78%] bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl hover:bg-emerald-50 border border-emerald-100 p-5">
                  <div className="text-2xl font-bold">1.248</div>
                  <p className="text-sm text-slate-500">Veículos ativos</p>
                </div>

                <div className="rounded-2xl hover:bg-emerald-50 border border-emerald-100 p-5">
                  <div className="text-2xl font-bold">312</div>
                  <p className="text-sm text-slate-500">Peças recuperadas</p>
                </div>
              </div>

              <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-6">
                <p className="text-emerald-300 font-medium mb-2">Sustentabilidade em foco</p>
                <p className="text-sm text-slate-600">
                  Reduza desperdícios e maximize o reaproveitamento de materiais com processos automatizados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="processo" className="bg-emerald-50 border-y border-emerald-100">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-14">
            <h3 className="text-4xl font-bold mb-4">Fluxo do Processo</h3>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Um sistema completo para controlar cada etapa do ciclo de tratamento dos veículos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {etapas.map((etapa, index) => (
              <div
                key={index}
                className="relative rounded-3xl border border-emerald-100 bg-white p-8 hover:border-emerald-300 transition shadow-lg"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400 text-xl font-bold">
                  0{index + 1}
                </div>

                <h4 className="text-xl font-semibold mb-3">{etapa.titulo}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{etapa.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="indicadores" className="max-w-[1700px] mx-auto px-8 py-24">
        <div className="w-full rounded-[2.5rem] border border-emerald-100 bg-gradient-to-r from-emerald-100/70 via-cyan-100/60 to-emerald-50 p-14 lg:p-20 shadow-2xl">
          <div className="grid lg:grid-cols-[0.9fr_1.4fr] gap-16 items-center">
            <div>
              <h3 className="text-4xl font-bold mb-6">Veiculos Estrangeiros</h3>
              <p className="text-slate-600 leading-relaxed">
                Oferecemos um processo simplificado para proprietários de veículos estrangeiros, sem complicações e pagamento imediato.
              </p>
            </div>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
  {indicadores.map((item, index) => (
    <div
      key={index}
      className="rounded-3xl border border-emerald-100 bg-white/95 p-7 shadow-xl hover:-translate-y-1 hover:shadow-2xl transition duration-300 min-h-[320px]"
    >
      <h4 className="text-lg font-black text-emerald-700 mb-1">
        {item.titulo}
      </h4>

      <p className="text-xs text-slate-500 mb-4">
        {index === 0 && 'Portugal'}
        {index === 1 && 'International Vehicles'}
        {index === 2 && 'Véhicules étrangers'}
        {index === 3 && 'Vehículos extranjeros'}
      </p>

      <p className="text-2xl font-black text-slate-900 leading-tight mb-5 max-w-[280px]">
        {item.texto}
      </p>

      <div className="space-y-2 text-sm text-slate-600">
        {index === 0 && (
          <>
            <p>✓ Processo rápido e simples</p>
            <p>✓ Tratamos da documentação</p>
            <p>✓ Pagamento imediato</p>
            <p>✓ Veículos nacionais e estrangeiros</p>
          </>
        )}

        {index === 1 && (
          <>
            <p>✓ Fast and simple process</p>
            <p>✓ We handle all paperwork</p>
            <p>✓ Immediate payment</p>
            <p>✓ National and foreign vehicles</p>
          </>
        )}

        {index === 2 && (
          <>
            <p>✓ Processus rapide et simple</p>
            <p>✓ Nous gérons toute la documentation</p>
            <p>✓ Paiement immédiat</p>
            <p>✓ Véhicules nationaux et étrangers</p>
          </>
        )}

        {index === 3 && (
          <>
            <p>✓ Proceso rápido y sencillo</p>
            <p>✓ Gestionamos toda la documentación</p>
            <p>✓ Pago inmediato</p>
            <p>✓ Vehículos nacionales y extranjeros</p>
          </>
        )}
      </div>
    </div>
  ))}
</div>
          </div>
        </div>
      </section>

      <section id="abate" className="hover:bg-emerald-50/60 border-y border-emerald-100">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300 mb-6">
              Pedido Online de Abate
            </div>

            <h3 className="text-4xl font-bold mb-6">
              Envie fotografias do veículo para abate
            </h3>

            <p className="text-slate-600 leading-relaxed mb-8">
              Os clientes podem preencher o formulário, enviar fotografias do carro e solicitar rapidamente a recolha ou o processo de abate.
            </p>

            <div className="space-y-4">
              <div className="rounded-2xl border border-emerald-100 bg-white p-5">
                <p className="text-sm text-slate-500 mb-2">✔ Upload de fotografias</p>
                <p className="text-sm text-slate-500 mb-2">✔ Pedido de recolha</p>
                <p className="text-sm text-slate-500 mb-2">✔ Contacto direto</p>
                <p className="text-sm text-slate-500">✔ Gestão pelo administrador</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-emerald-100 bg-white p-8 shadow-2xl">
            <h4 className="text-2xl font-bold mb-6">Formulário de Pedido</h4>

            <div className="space-y-5">
              <input
                value={formData.nome}
                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                type="text"
                placeholder="Nome completo"
                className="w-full rounded-2xl border border-emerald-200 bg-white px-5 py-4 text-slate-800 outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100 transition"
              />

              <input
                value={formData.telefone}
                onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                type="tel"
                placeholder="Número de telefone"
                className="w-full rounded-2xl border border-emerald-200 bg-white px-5 py-4 text-slate-800 outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100 transition"
              />

              <input
                value={formData.veiculo}
                onChange={(e) => setFormData({ ...formData, veiculo: e.target.value })}
                type="text"
                placeholder="Marca e modelo do veículo"
                className="w-full rounded-2xl border border-emerald-200 bg-white px-5 py-4 text-slate-800 outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100 transition"
              />

              <textarea
                value={formData.descricao}
                onChange={(e) => setFormData({ ...formData, descricao: e.target.value })}
                placeholder="Descreva o estado do veículo"
                rows={4}
                className="w-full rounded-2xl border border-emerald-200 bg-white px-5 py-4 text-slate-800 outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100 transition"
              />

              <div className="rounded-2xl border-2 border-dashed border-emerald-200 bg-emerald-50 p-8 text-center">
                <p className="text-slate-600 mb-3">Adicionar fotografias do veículo</p>
                <input
                  type="file"
                  multiple
                  onChange={(e) => setFormData({
                    ...formData,
                    fotos: Array.from(e.target.files || [])
                  })}
                  className="text-sm text-slate-500"
                />

                {formData.fotos.length > 0 && (
                  <p className="mt-4 text-emerald-300 text-sm">
                    {formData.fotos.length} fotografias selecionadas
                  </p>
                )}
              </div>

              <button
                onClick={handlePedido}
                className="w-full rounded-2xl bg-emerald-500 px-6 py-4 text-lg font-bold text-slate-950 hover:bg-emerald-400 transition"
              >
                Enviar Pedido
              </button>

              {pedidoEnviado && (
                <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-5 text-center">
                  <p className="text-emerald-300 font-semibold mb-1">
                    Pedido enviado com sucesso
                  </p>
                  <p className="text-sm text-slate-600">
                    A nossa equipa irá entrar em contacto brevemente.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      
      {fotoPreview && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-6"
          onClick={() => setFotoPreview(null)}
        >
          <div className="relative max-w-5xl w-full">
            <button
              onClick={() => setFotoPreview(null)}
              className="absolute -top-14 right-0 rounded-2xl bg-white text-slate-950 px-5 py-2 font-bold"
            >
              Fechar
            </button>

            <img
              src={fotoPreview}
              alt="Preview"
              className="w-full max-h-[85vh] object-contain rounded-3xl"
            />

            <a
              href={fotoPreview}
              download
              className="absolute bottom-6 right-6 rounded-2xl bg-emerald-500 px-6 py-3 font-bold text-slate-950"
            >
              Descarregar
            </a>
          </div>
        </div>
      )}

      <footer id="contactos" className="border-t border-emerald-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h4 className="text-2xl font-bold mb-2">CGVeículos</h4>
            <p className="text-slate-500 max-w-md">
              Soluções digitais para operadores de gestão de veículos em fim de vida e centros de reciclagem automóvel.
            </p>
          </div>

          <div className="md:text-right space-y-2 text-slate-600">
            <p>📧 pw1@sapo.pt</p>
            <p>📍 Charneca de Caparica, Portugal</p>
            <p>📞 +351 961 049 508</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
