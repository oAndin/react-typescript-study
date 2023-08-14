
import { useState } from 'react';
type Names = {
  title: string,
}
const Topic = (props: Names) => {

  const [votes, setVotes] = useState(0);

  const inscreaseCount = () => {
    setVotes(votes + 1);
  }
  return (
    <>
      <div>{props.title} ({votes}) <button onClick={inscreaseCount}>+1</button></div>
    </>
  )
}

const App = () => {

  return (
    <>
      <h1>Votação</h1>
      <Topic title="PHP" />
      <Topic title="Java" />
      <Topic title="JavaScript" />
      <Topic title="C#" />
      <Topic title="C" />
      <Topic title="Ruby" />
      <Topic title="Python" />
    </>
  )
}
export default App;
