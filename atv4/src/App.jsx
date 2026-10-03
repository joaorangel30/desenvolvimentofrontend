import Header from './components/Header'
import Navigation from './components/Navigation'
import Article from './components/Article'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

function App() {
  const post = {
    titulo: 'Introdução ao React',
    autor: 'Seu Nome',
    data: '03/10/2026',
    conteudo: [
      'React é uma biblioteca JavaScript para construir interfaces a partir de componentes reutilizáveis.',
      'Com JSX, descrevemos a interface de forma declarativa, e com props passamos dados de um componente pai para os filhos.',
    ],
  }

  return (
    <div className="container">
      <Header />
      <Navigation />
      <main className="conteudo">
        <Article
          titulo={post.titulo}
          autor={post.autor}
          data={post.data}
          conteudo={post.conteudo}
        />
        <Sidebar />
      </main>
      <Footer />
    </div>
  )
}

export default App