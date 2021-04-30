import ClickCounter from './ClickCounter';
import Counter from './Counter';
import HoverCounter from './HoverCounter';
import User from './User';

function App() {
  return (
    <div className='App'>
      {/* <ClickCounter /> */}
      {/* <HoverCounter /> */}
      {/* <Counter
        render={(count, incrementCount) => (
          <ClickCounter count={count} incrementCount={incrementCount} />
        )}
      /> */}
      {/* <Counter
        render={(count, incrementCount) => (
          <HoverCounter count={count} incrementCount={incrementCount} />
        )}
      /> */}
      <Counter>
        {(count, incrementCount) => (
          <ClickCounter count={count} incrementCount={incrementCount} />
        )}
      </Counter>
      <Counter>
        {(count, incrementCount) => (
          <HoverCounter count={count} incrementCount={incrementCount} />
        )}
      </Counter>
      <User render={(isLoggedIn) => (isLoggedIn ? 'Darshan' : 'Guest')} />
    </div>
  );
}

export default App;
