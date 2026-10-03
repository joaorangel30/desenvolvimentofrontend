function Article({ titulo, autor, data, conteudo }) {
  return (
    <article className="article">
      <h2>{titulo}</h2>
      <p className="meta">Por {autor} em {data}</p>
      {conteudo.map((paragrafo, index) => (
        <p key={index}>{paragrafo}</p>
      ))}
    </article>
  )
}

export default Article