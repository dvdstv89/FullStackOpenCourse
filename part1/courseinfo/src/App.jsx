const Header = ({ course }) => {
  return <h1>{course}</h1>;
};

const Part = ({ part }) => {
  return (
    <p>
      <strong>Part:</strong> {part.name} <strong>Number of exercises:</strong> {part.exercises}
    </p>
  );
};

const Content = ({ parts }) => {
  return (
    <div>
      <Part part={parts[0]}/>
      <Part part={parts[1]}/>
      <Part part={parts[2]}/>
    </div>
  );
};

const Total =({ parts }) => {
  let total = 0;
  parts.forEach(part => {
        total += part.exercises;
  });
  return <p><strong>Total exercises:</strong> {total}</p>;
};

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />      
      <Total parts={parts} />
    </div>
  );
};

export default App