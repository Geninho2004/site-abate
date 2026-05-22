import { useState } from "react";
import "./style.css";

export default function App() {
  const [adminLogado, setAdminLogado] = useState(false);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    veiculo: "",
    descricao: "",
    fotos: [],
  });

  const [previewFotos, setPreviewFotos] = useState([]);

  const [pedidos, setPedidos] = useState([
    {
      id: 1,
      nome: "João Silva",
      telefone: "+351 912 345 678",
      veiculo: "BMW Série 3",
      descricao: "Veículo sem motor",
      estado: "Pendente",
      fotos: [],
    },
  ]);

  const handleLogin = () => {
    if (
      loginData.email === "admin@ecovfv.pt" &&
      loginData.password === "123456"
    ) {
      setAdminLogado(true);
    } else {
      alert("Credenciais inválidas");
    }
  };

  const handleFotos = (e) => {
    const files = Array.from(e.target.files);

    setFormData({
      ...formData,
      fotos: files,
    });

    const previews = files.map((file) => URL.createObjectURL(file));

    setPreviewFotos(previews);
  };

  const enviarPedido = () => {
    if (!formData.nome || !formData.telefone || !formData.veiculo) {
      alert("Preenche os campos obrigatórios");
      return;
    }

    const novoPedido = {
      id: Date.now(),
      ...formData,
      estado: "Pendente",
      fotos: previewFotos,
    };

    setPedidos([...pedidos, novoPedido]);

    alert("Pedido enviado com sucesso");

    setFormData({
      nome: "",
      telefone: "",
      veiculo: "",
      descricao: "",
      fotos: [],
    });

    setPreviewFotos([]);
  };

  const alterarEstado = (id, estado) => {
    setPedidos(
      pedidos.map((pedido) =>
        pedido.id === id ? { ...pedido, estado } : pedido
      )
    );
  };

  const apagarPedido = (id) => {
    setPedidos(pedidos.filter((pedido) => pedido.id !== id));
  };

  return (
    <div className="site">
      <header className="hero">
        <h1>Gestão de Veículos em Fim de Vida</h1>

        <p className="subtitulo">
          Plataforma profissional para abate automóvel
        </p>

        <a className="telefone" href="tel:+351910000000">
          +351 910 000 000
        </a>
      </header>

      {!adminLogado && (
        <section className="formulario">
          <h2>Pedido de Abate</h2>

          <input
            type="text"
            placeholder="Nome"
            value={formData.nome}
            onChange={(e) =>
              setFormData({ ...formData, nome: e.target.value })
            }
          />

          <input
            type="text"
            placeholder="Telefone"
            value={formData.telefone}
            onChange={(e) =>
              setFormData({ ...formData, telefone: e.target.value })
            }
          />

          <input
            type="text"
            placeholder="Veículo"
            value={formData.veiculo}
            onChange={(e) =>
              setFormData({ ...formData, veiculo: e.target.value })
            }
          />

          <textarea
            placeholder="Descrição"
            value={formData.descricao}
            onChange={(e) =>
              setFormData({ ...formData, descricao: e.target.value })
            }
          />

          <input type="file" multiple onChange={handleFotos} />

          <div className="preview-grid">
            {previewFotos.map((foto, index) => (
              <img key={index} src={foto} alt="" className="preview" />
            ))}
          </div>

          <button onClick={enviarPedido}>Enviar Pedido</button>

          <div className="login-box">
            <h3>Login Administrador</h3>

            <input
              type="email"
              placeholder="Email"
              value={loginData.email}
              onChange={(e) =>
                setLoginData({
                  ...loginData,
                  email: e.target.value,
                })
              }
            />

            <input
              type="password"
              placeholder="Password"
              value={loginData.password}
              onChange={(e) =>
                setLoginData({
                  ...loginData,
                  password: e.target.value,
                })
              }
            />

            <button onClick={handleLogin}>Entrar</button>
          </div>
        </section>
      )}

      {adminLogado && (
        <section className="admin">
          <h2>Painel Administrativo</h2>

          {pedidos.map((pedido) => (
            <div key={pedido.id} className="pedido">
              <div className="pedido-topo">
                <div>
                  <h3>{pedido.nome}</h3>

                  <p>{pedido.telefone}</p>

                  <p>{pedido.veiculo}</p>

                  <p>{pedido.descricao}</p>
                </div>

                <div className="estado-box">
                  <select
                    value={pedido.estado}
                    onChange={(e) =>
                      alterarEstado(pedido.id, e.target.value)
                    }
                  >
                    <option>Pendente</option>
                    <option>Em análise</option>
                    <option>Completo</option>
                  </select>

                  <button onClick={() => apagarPedido(pedido.id)}>
                    Apagar
                  </button>
                </div>
              </div>

              <div className="preview-grid">
                {pedido.fotos.map((foto, index) => (
                  <a href={foto} target="_blank" key={index}>
                    <img src={foto} alt="" className="preview" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}