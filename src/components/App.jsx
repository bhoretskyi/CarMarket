import { Layout } from "./Layout/Layout";
const SectionTest = () => {
  return (
    <div><h1>hello react</h1></div>
  )
}
export const App = () => {
  return (
    <Layout Propy={SectionTest}></Layout>
    
  );
};
