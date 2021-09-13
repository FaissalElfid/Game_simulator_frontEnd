import { ThemeProvider } from '@material-ui/core';

import GlobalStyles from './components/GlobalStyles';
import theme from './theme';
import Routes from './routes';

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
        <Routes />
    </ThemeProvider>
  );
};

export default App;