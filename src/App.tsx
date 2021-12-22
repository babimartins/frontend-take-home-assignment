import { Theme } from './styles/Theme';
import MainPage from './features/MainPage';

const App = (): JSX.Element => {
  return (
    <Theme>
      <MainPage />
    </Theme>
  );
};

export default App;
