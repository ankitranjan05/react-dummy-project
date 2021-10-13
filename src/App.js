import { Route, Switch } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetupsPage";
import NewMeetupPage from "./pages/NewMeetupPage";
import FavoritesPage from "./pages/FavoritesPages";
import Layout from "./components/layout/Layout";
function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetupsPage />
        </Route>
        <Route path="/newmeetup" exact>
          <NewMeetupPage />
        </Route>
        <Route path="/favorites" exact>
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
