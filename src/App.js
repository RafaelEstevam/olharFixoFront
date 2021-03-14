

import react, {useState, useEffect} from 'react';
import {Router} from 'react-router-dom';
import { CircularProgress } from '@material-ui/core/'
import {GetLocalConfig, GetTheme, GetDefaultTheme, JsonToStringSetLocal} from './services/theme';
import { useSnackbar } from 'notistack';
import { Messages } from './services/messages';

import Routes from './routes';
import history from './services/history';
import API from './services/api';

import GlobalStyle from './styles/global';

function App() {

  const { enqueueSnackbar } = useSnackbar();

  const [loaded, setLoaded] = useState(true);
  const [domain] = useState(window.location.origin);
  const [defaultTheme, setDefaultTheme] = useState(false);
  const [themeStyles, setThemeStyles] = useState(false);

  useEffect(() => {

    const data = {domain: domain}

    if(!GetLocalConfig()){
      API.post('/config/get', data ).then((response) => {

        localStorage.setItem("logo", response.data.logo);
        localStorage.setItem("config", response.data.second_color);
        setLoaded(false);

      }).catch((err) => {
        setLoaded(false);
        JsonToStringSetLocal();
        setDefaultTheme(true);
        enqueueSnackbar(Messages.error.not_config_erro, {variant: 'error'});
      })
    }else{
      setLoaded(false);
    }
  }, [])

  return (loaded) ? <CircularProgress />
  : <Router history={history}>
      <Routes />
      {(!loaded && !defaultTheme) && <GlobalStyle theme={GetTheme.getThemeJson()} />}
      {(!loaded && defaultTheme) && <GlobalStyle theme={GetDefaultTheme()} />}
    </Router>
    
}

export default App;
