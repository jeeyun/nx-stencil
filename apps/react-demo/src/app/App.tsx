import { MyComponent } from '@ui/react';

export function App() {
  return (
    <div>
      <h1>
        <span>Hello there,</span> Welcome react-demo 👋
        <MyComponent first="Stencil" middle="Component" last="React wrapper" />
      </h1>
    </div>
  );
}

export default App;
