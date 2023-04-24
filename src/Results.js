import Result from './Result'

export default function Results(props) {
  return (
    <div className="main">
      <span className="nresults">
        {props.results.length} Result{props.results.length != 1 ? 's' : ''}
      </span>

      {props.results.map((element, i) => (
        <Result element={element} key={i} />
      ))}
    </div>
  )
}
