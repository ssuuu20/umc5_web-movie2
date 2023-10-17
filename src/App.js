import Movie from './components/Movie/Movie'
import { dummy } from "./movieDummy";
import * as A from './components/Movie/Movie.style';

function App() {
  return (
      <A.App_container>
        {
          dummy.results.map((item) => {
            return (
              <Movie 
                title={item.title}
                poster_path={item.poster_path}
                vote_average={item.vote_average}
                overview={item.overview}
              />
            )
          })
        }
      </A.App_container>
  );
}

export default App;