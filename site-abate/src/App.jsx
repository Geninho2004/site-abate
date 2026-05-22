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
    { valor: '98%', legenda: 'Taxa de reaproveitamento' },
    { valor: '24h', legenda: 'Tempo médio de registo' },
    { valor: '+3.000', legenda: 'Veículos processados' },
    { valor: '100%', legenda: 'Conformidade ambiental' }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-slate-800 bg-slate-950/90 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">CGV</h1>
            <p className="text-sm text-slate-400">Centro de Gestão de Veículos em Fim de Vida</p>
          </div>

          <nav className="hidden md:flex gap-6 text-sm text-slate-300">
            <a href="#abate" className="hover:text-white transition">Pedido de Abate</a>
            <a href="#sobre" className="hover:text-white transition">Sobre</a>
            <a href="#processo" className="hover:text-white transition">Processo</a>
            <a href="#indicadores" className="hover:text-white transition">Indicadores</a>
            <a href="#contactos" className="hover:text-white transition">Contactos</a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-cyan-500/10 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300 mb-6">
              Processo de Gestão de Veículos em Fim de Vida
            </div>

            <h2 className="text-5xl lg:text-6xl font-black leading-tight mb-6">
              Centro de Gestão de veículos em fim de vida
            </h2>

            <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-xl">
              Centralize todo o processo de receção, descontaminação, desmontagem e reciclagem de veículos com uma plataforma moderna, segura e totalmente orientada para a conformidade ambiental.
            </p>

            <div className="mb-10 rounded-3xl border-2 border-emerald-400 bg-emerald-500/10 p-6 shadow-2xl shadow-emerald-500/20">
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-300 mb-3 font-semibold">
                Ligue já para marcar
              </p>

              <a
                href="tel:+351961049508"
                className="block text-4xl lg:text-5xl font-black text-white hover:text-emerald-300 transition"
              >
                +351 961 049 508
              </a>

              <p className="mt-3 text-slate-300 text-sm">
                Atendimento rápido para recolha e marcação de veículos em fim de vida.
                Avaliação gratuita e sem compromisso.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="rounded-2xl bg-emerald-500 px-6 py-3 font-semibold text-slate-950 hover:bg-emerald-400 transition shadow-lg shadow-emerald-500/20">
                Solicitar Demonstração
              </button>

              <button className="rounded-2xl border border-slate-700 px-6 py-3 font-semibold hover:bg-slate-900 transition">
                Saber Mais
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {indicadores.map((item, index) => (
              <div
                key={index}
                className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 backdrop-blur shadow-2xl"
              >
                <div className="text-4xl font-black text-emerald-400 mb-2">{item.valor}</div>
                <p className="text-slate-300">{item.legenda}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="sobre" className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-4xl font-bold mb-6">Transforme a gestão ambiental da sua operação</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              A plataforma EcoVFV permite gerir todas as etapas do processo de veículos em fim de vida, garantindo rastreabilidade, eficiência operacional e conformidade com as normas ambientais em vigor.
            </p>

            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
                <h4 className="font-semibold mb-2">Gestão documental</h4>
                <p className="text-sm text-slate-400">Arquivo digital de certificados, matrículas e comprovativos legais.</p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
                <h4 className="font-semibold mb-2">Rastreabilidade completa</h4>
                <p className="text-sm text-slate-400">Acompanhe o estado de cada veículo em tempo real.</p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
                <h4 className="font-semibold mb-2">Relatórios automáticos</h4>
                <p className="text-sm text-slate-400">Obtenha métricas ambientais e operacionais instantaneamente.</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-10 shadow-2xl">
            <div className="space-y-6">
              <div>
                <p className="text-sm text-slate-400 mb-2">Estado do processo</p>
                <div className="h-3 rounded-full bg-slate-800 overflow-hidden">
                  <div className="h-full w-[78%] bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-slate-900 border border-slate-800 p-5">
                  <div className="text-2xl font-bold">1.248</div>
                  <p className="text-sm text-slate-400">Veículos ativos</p>
                </div>

                <div className="rounded-2xl bg-slate-900 border border-slate-800 p-5">
                  <div className="text-2xl font-bold">312</div>
                  <p className="text-sm text-slate-400">Peças recuperadas</p>
                </div>
              </div>

              <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-6">
                <p className="text-emerald-300 font-medium mb-2">Sustentabilidade em foco</p>
                <p className="text-sm text-slate-300">
                  Reduza desperdícios e maximize o reaproveitamento de materiais com processos automatizados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="processo" className="bg-slate-900/60 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-14">
            <h3 className="text-4xl font-bold mb-4">Fluxo do Processo</h3>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Um sistema completo para controlar cada etapa do ciclo de tratamento dos veículos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {etapas.map((etapa, index) => (
              <div
                key={index}
                className="relative rounded-3xl border border-slate-800 bg-slate-950 p-8 hover:border-emerald-400/40 transition"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400 text-xl font-bold">
                  0{index + 1}
                </div>

                <h4 className="text-xl font-semibold mb-3">{etapa.titulo}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{etapa.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="indicadores" className="max-w-7xl mx-auto px-6 py-20">
        <div className="rounded-[2rem] border border-slate-800 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 p-10 lg:p-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-4xl font-bold mb-6">Indicadores e conformidade ambiental</h3>
              <p className="text-slate-300 leading-relaxed">
                Monitorize KPIs operacionais, emissões evitadas, materiais reciclados e desempenho ambiental através de dashboards intuitivos.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-5">
              {indicadores.map((item, index) => (
                <div key={index} className="rounded-2xl bg-slate-950/80 border border-slate-800 p-6">
                  <div className="text-3xl font-black text-cyan-300 mb-2">{item.valor}</div>
                  <div className="text-sm text-slate-400">{item.legenda}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="abate" className="bg-slate-900/60 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300 mb-6">
              Pedido Online de Abate
            </div>

            <h3 className="text-4xl font-bold mb-6">
              Envie fotografias do veículo para abate
            </h3>

            <p className="text-slate-300 leading-relaxed mb-8">
              Os clientes podem preencher o formulário, enviar fotografias do carro e solicitar rapidamente a recolha ou o processo de abate.
            </p>

            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
                <p className="text-sm text-slate-400 mb-2">✔ Upload de fotografias</p>
                <p className="text-sm text-slate-400 mb-2">✔ Pedido de recolha</p>
                <p className="text-sm text-slate-400 mb-2">✔ Contacto direto</p>
                <p className="text-sm text-slate-400">✔ Gestão pelo administrador</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-800 bg-slate-950 p-8 shadow-2xl">
            <h4 className="text-2xl font-bold mb-6">Formulário de Pedido</h4>

            <div className="space-y-5">
              <input
                value={formData.nome}
                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                type="text"
                placeholder="Nome completo"
                className="w-full rounded-2xl border border-slate-700 bg-slate-900 px-5 py-4 outline-none focus:border-emerald-400"
              />

              <input
                value={formData.telefone}
                onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                type="tel"
                placeholder="Número de telefone"
                className="w-full rounded-2xl border border-slate-700 bg-slate-900 px-5 py-4 outline-none focus:border-emerald-400"
              />

              <input
                value={formData.veiculo}
                onChange={(e) => setFormData({ ...formData, veiculo: e.target.value })}
                type="text"
                placeholder="Marca e modelo do veículo"
                className="w-full rounded-2xl border border-slate-700 bg-slate-900 px-5 py-4 outline-none focus:border-emerald-400"
              />

              <textarea
                value={formData.descricao}
                onChange={(e) => setFormData({ ...formData, descricao: e.target.value })}
                placeholder="Descreva o estado do veículo"
                rows={4}
                className="w-full rounded-2xl border border-slate-700 bg-slate-900 px-5 py-4 outline-none focus:border-emerald-400"
              />

              <div className="rounded-2xl border-2 border-dashed border-slate-700 bg-slate-900/50 p-8 text-center">
                <p className="text-slate-300 mb-3">Adicionar fotografias do veículo</p>
                <input
                  type="file"
                  multiple
                  onChange={(e) => setFormData({
                    ...formData,
                    fotos: Array.from(e.target.files || [])
                  })}
                  className="text-sm text-slate-400"
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
                  <p className="text-sm text-slate-300">
                    A nossa equipa irá entrar em contacto brevemente.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        {!adminLogado ? (
          <div className="max-w-xl mx-auto rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-10 shadow-2xl">
            <div className="text-center mb-8">
              <h3 className="text-4xl font-bold mb-4">Entrar</h3>
              <p className="text-slate-400">
                Aceda à sua conta para consultar pedidos e gerir veículos.
              </p>
            </div>

            <div className="space-y-5">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-2xl border border-slate-700 bg-slate-900 px-5 py-4 outline-none focus:border-emerald-400"
              />

              <input
                type="password"
                placeholder="Palavra-passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-2xl border border-slate-700 bg-slate-900 px-5 py-4 outline-none focus:border-emerald-400"
              />

              <button
                onClick={handleLogin}
                className="w-full rounded-2xl bg-emerald-500 px-6 py-4 font-bold text-slate-950 hover:bg-emerald-400 transition"
              >
                Entrar
              </button>
            </div>
          </div>
        ) : (
          <div className="rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-10 lg:p-14 shadow-2xl">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-10">
              <div>
                <p className="text-emerald-300 text-sm uppercase tracking-[0.3em] mb-3">
                  Painel Administrativo
                </p>

                <h3 className="text-4xl font-bold mb-2">
                  Gestão de Pedidos
                </h3>

                <p className="text-slate-400">
                  Consulte pedidos enviados pelos clientes e visualize fotografias dos veículos.
                </p>
              </div>

              <button
                onClick={() => setAdminLogado(false)}
                className="rounded-2xl border border-slate-700 px-6 py-3 font-semibold hover:bg-slate-900 transition"
              >
                Terminar Sessão
              </button>
            </div>

            <div className="grid gap-6">
              {pedidos.map((pedido, index) => (
                <div
                  key={index}
                  className="rounded-3xl border border-slate-800 bg-slate-950 p-8"
                >
                  <div className="grid lg:grid-cols-4 gap-6 items-start">
                    <div>
                      <p className="text-sm text-slate-500 mb-2">Pedido</p>
                      <h4 className="text-xl font-bold">{pedido.id}</h4>
                    </div>

                    <div>
                      <p className="text-sm text-slate-500 mb-2">Cliente</p>
                      <p className="font-semibold">{pedido.cliente}</p>
                      <p className="text-sm text-slate-400">{pedido.telefone}</p>
                    </div>

                    <div>
                      <p className="text-sm text-slate-500 mb-2">Veículo</p>
                      <p className="font-semibold">{pedido.veiculo}</p>

                      <div className="mt-5 rounded-2xl border border-slate-800 bg-slate-900/50 p-4">
                        <p className="text-sm text-slate-400 mb-4 font-medium">
                          Atualizar estado do pedido
                        </p>

                        <div className="flex flex-wrap gap-2">
                        <button
                          onClick={() => atualizarEstadoPedido(pedido.id, 'Em análise')}
                          className="rounded-xl border border-yellow-500/30 bg-yellow-500/10 px-3 py-2 text-xs text-yellow-300 hover:bg-yellow-500/20 transition"
                        >
                          Em análise
                        </button>

                        <button
                          onClick={() => atualizarEstadoPedido(pedido.id, 'Completo')}
                          className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-xs text-emerald-300 hover:bg-emerald-500/20 transition"
                        >
                          Completo
                        </button>

                        <button
                          onClick={() => atualizarEstadoPedido(pedido.id, 'Cancelado')}
                          className="rounded-xl border border-red-500/30 bg-red-500/10 px-3 py-2 text-xs text-red-300 hover:bg-red-500/20 transition"
                        >
                          Cancelado
                        </button>
                        </div>
                      </div>

                      <div className="mt-5 inline-flex rounded-2xl bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-300 border border-emerald-500/20">
                        {pedido.estado}
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <p className="text-sm font-medium text-slate-300">Fotografias do Veículo</p>

                        <div className="rounded-full bg-slate-900 border border-slate-700 px-3 py-1 text-xs text-slate-400">
                          {pedido.fotos.length} imagens
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        {pedido.fotos.slice(0, 4).map((foto, i) => (
                          <div
                            key={i}
                            onClick={() => setFotoPreview(foto.url)}
                            className="group relative aspect-square overflow-hidden rounded-2xl border border-slate-700 cursor-pointer"
                          >
                            <img
                              src={foto.url}
                              alt={foto.nome}
                              loading="lazy"
                              onError={(e) => {
                                e.currentTarget.src = 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?q=80&w=800&auto=format&fit=crop';
                              }}
                              className="h-full w-full object-cover group-hover:scale-105 transition duration-300"
                            />

                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-xs font-semibold">
                              Ver Foto
                            </div>
                          </div>
                        ))}
                      </div>

                      <p className="mt-3 text-sm text-slate-400">
                        {pedido.fotos.length} fotografias armazenadas
                      </p>

                      <button
                        onClick={() => apagarPedido(pedido.id)}
                        className="mt-4 w-full rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 font-semibold text-red-300 hover:bg-red-500/20 transition"
                      >
                        Apagar Pedido
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-8">
              <h4 className="text-2xl font-bold mb-4">
                Armazenamento de Fotografias
              </h4>

              <p className="text-slate-300 leading-relaxed mb-6">
                O sistema encontra-se preparado para integração com armazenamento cloud seguro para fotografias dos veículos.
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="rounded-2xl bg-slate-950 border border-slate-800 p-5">
                  ☁ Firebase Storage
                </div>

                <div className="rounded-2xl bg-slate-950 border border-slate-800 p-5">
                  🗂 Supabase Storage
                </div>

                <div className="rounded-2xl bg-slate-950 border border-slate-800 p-5">
                  🔒 Armazenamento Seguro
                </div>
              </div>
            </div>
          </div>
        )}
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

      <footer id="contactos" className="border-t border-slate-800 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h4 className="text-2xl font-bold mb-2">EcoVFV</h4>
            <p className="text-slate-400 max-w-md">
              Soluções digitais para operadores de gestão de veículos em fim de vida e centros de reciclagem automóvel.
            </p>
          </div>

          <div className="md:text-right space-y-2 text-slate-300">
            <p>📧 contacto@ecovfv.pt</p>
            <p>📍 Lisboa, Portugal</p>
            <p>📞 +351 210 000 000</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
