import React from 'react'
import NavBar from '../components/NavBar'
import Topic from '../components/Topic';

const topics = [
  {
    name: "React Intro",
    description: "React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage the state of their applications efficiently."
  },
  {
    name: "Components",
    description: "Components are the building blocks of a React application. They can be functional or class-based and can accept props to customize their behavior."
  },
  {
    name: "Props",
    description: "Props (short for properties) are a way to pass data from a parent component to a child component in React."
  },
  {
    name: "State",
    description: "State is a built-in object in React that allows components to manage and track changes in their data over time."
  },
  {
    name: "Lifecycle Methods",
    description: "Lifecycle methods are special methods in React components that allow developers to hook into different stages of a component's lifecycle, such as mounting, updating, and unmounting."
  }
];

const HomePage = () => {
  return (
    <>
      <NavBar />
      
      <section className='p-5 grid gap-3'>
        <h1 className='text-lg font-bold'>React Topics</h1>

        {topics.map((topic, i) => (
          <Topic key={i} topic={{...topic, index: i}} />
        ))}
      </section>
    </>
  )
}

export default HomePage