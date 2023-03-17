import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import { customTheme, Font } from './theme';
import { MyButton } from './components/Button';
import { MyCheckbox } from './components/checkbox';
import * as FeatherIcon from 'react-feather';

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <Font />
      <div className="App">
        <div className="Spaced-div">
          <MyButton color="primary" endIcon={<FeatherIcon.ChevronDown size={24} />}>Primary</MyButton>
          <MyButton color="secondary" startIcon={<FeatherIcon.Award size={24} />}>Secondary</MyButton>
          <MyButton color="danger">Danger</MyButton>
          <MyButton color="danger" disabled>Disabled</MyButton>
          <MyButton color="danger" loading variant="contained">Loading</MyButton>
        </div>
        <div className="Spaced-div">
          <MyButton color="primary" endIcon={<FeatherIcon.ChevronDown size={24} />} small>Primary</MyButton>
          <MyButton color="secondary" startIcon={<FeatherIcon.Award size={24} />} small>Secondary</MyButton>
          <MyButton color="danger" small>Danger</MyButton>
          <MyButton color="danger" disabled small>Disabled</MyButton>
          <MyButton color="danger" loading variant="contained" small>Loading</MyButton>
        </div>
        <div className="spaced-div">
          <MyCheckbox/>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
