import logo from './logo.svg';
import './App.css';

function App() {
  const [description, setDescription] = useState('クリック前の表示');
  return (
   <div>
    ゼロから始めるReact入門
    <List title="取り扱い言語一覧" />
   </div>
  );
}

export default App;
