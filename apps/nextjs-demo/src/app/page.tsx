import { MyCard, MyComponent } from '@ui/react/ssr';

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.tailwind file.
   */
  return (
    <MyCard className="mt-4">
      <h1 slot="title">
        <span> Hello there, </span> Welcome nextjs-demo 👋
      </h1>
      <MyComponent first="Stencil" middle="React" last="SSR" />
    </MyCard>
  );
}
