export default function Timeline ({ userName }) {
  return (
    <>
      <h1>Timeline of {userName}</h1>
      <p>timeline</p>
    </>
  )
}

Timeline.getInitialProps = () => {
  return fetch('http://localhost:3000/api/hello')
    .then(res => res.json());
}
