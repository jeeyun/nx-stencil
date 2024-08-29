import { MyComponent } from '@ui/react/ssr';

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.tailwind file.
   */
  return (
    <div className="container">
      <h1>
        <span> Hello there, </span> Welcome nextjs-demo 👋
        <MyComponent first="Stencil" middle="React" last="SSR" />
      </h1>
    </div>
  );
}
