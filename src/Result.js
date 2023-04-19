export default function Result({ element }) {
  return (
    <div className="results">
      <span>{element.url}</span>
      <a href={element.url} target="_blank">
        <h3>{element.title}</h3>
      </a>
      <p>{element.description}</p>
      <ul>
        {element.links.map((link, x) => (
          <li key={x}>
            <a href={link.url} target="_blank">
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
