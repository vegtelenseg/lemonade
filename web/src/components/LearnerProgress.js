function LearnerProgress({progress}) {
  const modules = [
    {
      id: 1,
      name: 'My Goals',
      lessons: [
        {
          id: 1,
          name: 'Being an Entrepreneur',
        },
        {
          id: 2,
          name: 'Spend, Save, Share',
        },
        {
          id: 3,
          name: 'My Calendar',
        },
      ],
    },
    {
      id: 2,
      name: 'My Plan',
      lessons: [
        {
          id: 1,
          name: 'Business Plan',
        },
        {
          id: 2,
          name: 'My Team',
        },
        {
          id: 3,
          name: 'Finding My Location',
        },
        {
          id: 4,
          name: 'The Customer',
        },
        {
          id: 5,
          name: 'Customer Service',
        },
      ],
    },
    {
      id: 3,
      name: 'My Stand',
      lessons: [
        {
          id: 1,
          name: 'Getting an Investor',
        },
        {
          id: 2,
          name: 'Supply Shopping',
        },
        {
          id: 3,
          name: 'Making It Happen',
        },
        {
          id: 4,
          name: 'Lemonade Day is Here!',
        },
      ],
    },
  ]
  return (
    <>
      <h2>Progress</h2>
      {modules.map((module) => (
        <ModuleProgress key={module.id} module={module} progress={[]} />
      ))}
    </>
  )
}

function ModuleProgress({module, progress}) {
  return (
    <>
      <h3>{module.name}</h3>
      <ul>
        {module.lessons.map((lesson) => (
          <LessonProgress
            key={lesson.id}
            lesson={lesson}
            progress={Math.random()}
          />
        ))}
      </ul>
    </>
  )
}

function LessonProgress({lesson, progress}) {
  return (
    <li>
      <div>{lesson.name}</div>
      <progress value={progress} />
    </li>
  )
}

export default LearnerProgress
