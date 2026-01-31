import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


const AssignmentDetails = () => {

    const [assignment, setassignment] = useState(null);
    const navigate = useNavigate();


    useEffect(() => {

        // get assignment from localstorage
        const assignments = JSON.parse(
            localStorage.getItem("assignments")
        );

        // get unique id of assignment from local storage
        const selectedId = Number(
            localStorage.getItem("selectedAssignmentId")
        );


        // set assignment
        if (selectedId && assignments) {
            const found = assignments.find(
                (item) => item.id === selectedId
            );
            setassignment(found);
        }
    }, [])

    // wit for assignment loafding
    if (!assignment) {
        return <p>Loading Assignment...</p>
    }


    return (
        <div>

            {/* button to go back */}
            <button
                onClick={() => {
                    navigate('/')
                }}
                className='bg-red-500 text-white rounded font-bold px-3 py-1 hover:opacity-60 hover:translate-y-0.5 m-4'>Back</button>

                {/* Details about assignment */}
            <div className='basis-1/3 bg-white border-[#e5e7eb] border shadow-[#9ba9b9] shadow rounded mt-8 mx-4'>
                <h1 className='w-full mx-4 my-1.5 font-semibold border-b-[#d1d5db] '>Current Assignment</h1>

                <div className='pb-4 border-t-2 border-[#d1d5db]'>
                    <div className='h-12 mx-4  flex justify-between items-center'>
                        <div className='' >
                            <h3 className='text-sm px-1 font-semibold'>{assignment.title}</h3>
                            <p className='text-xs px-1 text-[#1f2937] '>{assignment.subject}</p>
                        </div>

                        <h4 className='font-semibold text-2xl'>{assignment.marks}</h4>
                    </div>

                    <div className='bg-[#16a34a] flex mx-4 my-2 justify-between px-2 py-1.5 rounded-sm'>
                        <p className='text-sm text-white'>Deadline Date : {assignment.deadline}</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AssignmentDetails