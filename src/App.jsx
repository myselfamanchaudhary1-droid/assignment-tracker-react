import React, { useEffect, useState } from 'react'
import AssignmentForm from './components/AssignmentForm'
import AssignmentList from './components/AssignmentList'
import MarksSummary from './components/MarksSummary'
import Quote from './components/Quote'
import AssignmentDetails from './components/AssignmentDetails'
import { Route, Routes } from 'react-router-dom'

const App = () => {

  // get assignments from local storage
  const [assignments, setAssignments] = useState(() => {
    const stored = localStorage.getItem("assignments");
    return stored ? JSON.parse(stored) : [];
  });


  // set asignments to local storage
  useEffect(() => {
    localStorage.setItem("assignments",
      JSON.stringify(assignments));
  }, [assignments])


  // receive information from Form
  const handleAddAssignment = (newAssignment) => {
    setAssignments((prev) => [...prev, newAssignment]);
  };


  // delete an assignment
  const delAssignment = (id) => {
    setAssignments((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  // assignment completed
  const assignmentCompleted = (id) => {
    setAssignments((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed }
          : item
      )
    );
  };





  // Quote Api call
  const [quote, setQuote] = useState(null);

  const fetchQuote = () => {
    fetch("https://dummyjson.com/quotes/random")
      .then((response) => response.json())
      .then((data) => {
        setQuote({
          text: data.quote,
          author: data.author,
        });
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchQuote();
  }, []);




  return (
    <Routes>
      <Route path='/' element={
        <div className=' flex h-screen bg-white items-center justify-center'>
          <div className='w-[90vw] rounded-2xl h-[90vh] flex flex-col'>

            {/* main heading */}
            <h1 className='w-full flex items-center justify-center bg-[#1e3a8a] text-white py-4 font-semibold '>Smart Study Planner</h1>

            {/* content box */}
            <div className=' flex flex-col bg-[#f8fafc] border border-[#e5e7eb] shadow-2xl shadow-[#9ba9b9] w-full h-auto md:flex-row'>

              {/* add assignments and assignments list*/}
              <div className=' h-full w-full border-blue-950 basis-7/12 flex flex-col'>
                <AssignmentForm onAddAssignment={handleAddAssignment} />

                <AssignmentList assignments={assignments} onDelete={delAssignment} onToggle={assignmentCompleted} />
              </div>

              {/* upcoming assignments and marks summary */}
              <div className=' basis-5/12 flex h-full w-full flex-col'>

                <Quote quote={quote} />

                <MarksSummary assignments={assignments} />
              </div>
            </div>
          </div>
        </div>
      } />

      {/* Assignment Details page */}
      <Route path='/assignments/:id' element={<AssignmentDetails />} />
    </Routes>
  )
}

export default App