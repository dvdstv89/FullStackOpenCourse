const Header = ({ course }) => {
  return <h1>{course}</h1>;
};

const Part = ({ part }) => {
  return (
    <p>     
      {part.name}  {part.exercises}
    </p>
  );
};

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(part => 
          <Part key={part.id} part={part} />
        )}     
    </div>
  );
};

const Total =({ parts }) => {  
  const total = parts.reduce((sum, part) => sum + part.exercises, 0);
  return <p><strong>Total of {total} exercises</strong></p>;
};

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />      
      <Total parts={course.parts} />
    </div>
  );
}

const Courses = ({ courses }) => {
  return (
    courses.map(course => 
          <Course key={course.id} course={course} />
        )
  );
}

export default Courses