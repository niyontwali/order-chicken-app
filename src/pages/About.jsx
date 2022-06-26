import { Button } from "react-bootstrap";

const About = () => {
  return (
    <>
      <div className="mx-auto text-center" style={{maxWidth: 600, marginTop: "25vh"}}>
        <h1>Chicken Order App</h1>
        <p className="mt-4">This was developed as I was practicing how to use the Context API with react hooks. For more project please visit my github repo by clicking the button below</p>
        <a href="https://github.com/niyontwali">
          <Button className="mt-4" variant="primary">Find more projects</Button>
        </a>
      </div>
      <br />
    </>
  );
};

export default About;
