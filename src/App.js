import { Route } from 'react-router';
import './App.css';
import { Header } from './components/header';
import { Articles } from './screens/articles';
import { data } from "./data"
import { News } from './screens/news';

function App() {
  return (
    <div className="App">
      <Header />
      <Route
        exact path="/articles"
        render={() => <Articles data={data} />}
      />
      <Route
        path="/articles/:idx"
        render={(props) => <News  {...{ ...props, data }} />}
      />
    </div>
  );
}

export default App;
