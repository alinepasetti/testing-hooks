import './styles.css';
import { PostsProvider } from '../../contexts/PostsProvider';
import { Posts } from '../../components/Posts';
import { CounterProvider } from '../../contexts/CounterProvider';
import { Counter } from '../../components/Counter';

const App = () => {
  return (
    <CounterProvider>
      <PostsProvider>
        <h1>oi</h1>
        <Counter />
        <Posts />
      </PostsProvider>
    </CounterProvider>
  );
};

export default App;
