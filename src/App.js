import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import { customTheme, Font } from './theme';
import { MyButton } from './components/Button';

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <Font />
      <div className="App">
        <MyButton color="primary">Button</MyButton>
        <MyButton color="danger">Button</MyButton>
      </div>
    </ThemeProvider>
  );
}

export default App;
