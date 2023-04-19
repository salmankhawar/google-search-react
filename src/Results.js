import Result from './Result'

export default function Results(props) {
  return (
    <div className="main">
      <span className="nresults">
        {props.data.length} Result{props.data.length != 1 ? 's' : ''}
      </span>

      {props.data.map((element, i) => (
        <Result element={element} key={i} />
      ))}
    </div>
  )
}
