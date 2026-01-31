import React, { useState } from 'react'

const AssignmentForm = ({ onAddAssignment }) => {

    const [title, setTitle] = useState("");
    const [subject, setSubject] = useState("");
    const [marks, setMarks] = useState("")
    const [deadline, setDeadline] = useState("");


    // handle properties change during submit
    const handleSubmit = (e) => {
        e.preventDefault();


        // create assignment object on the basis of form values
        const newAssignment = {
            id: Date.now(),
            title,
            subject,
            marks,
            deadline,
            status: "upcoming",
            completed: false,
        };

        onAddAssignment(newAssignment);

        //clear form again after submition
        setTitle("");
        setSubject("");
        setMarks("");
        setDeadline("");
    };






    return (
        <div className=' border rounded shadow-[#9ba9b9] shadow flex flex-col bg-white border-[#e5e7eb] mt-8 mx-4 '>

            {/* Form Heading */}
            <h3 className='mx-4 my-2 font-semibold'>Add Assignment</h3>

            <form onSubmit={handleSubmit} className='w-full'>

                {/* title */}
                <input required className='border border-[#d1d5db] rounded outline-none focus:border-[#1e3a8a] text-sm p-1 w-[90%]  my-1 mx-4' type="text" placeholder='Assignment Title'
                    value={title}
                    onChange={(e) =>
                        setTitle(e.target.value)}

                />

                {/* Subject */}
                <input required className=' border border-[#d1d5db] rounded outline-none focus:border-[#1e3a8a] text-sm p-1 w-[90%] my-1 mx-4' type="text" placeholder='Subject'
                    value={subject}
                    onChange={(e) =>
                        setSubject(e.target.value)}
                />

                 {/* Marks */}
                <input required className=' border border-[#d1d5db] rounded outline-none focus:border-[#1e3a8a] text-sm p-1 w-[90%] my-1 mx-4 ' type="number" placeholder='Marks'
                    value={marks}
                    onChange={(e) =>
                        setMarks(e.target.value)}
                />

                {/* Deadline */}
                <input required className='border border-[#d1d5db] rounded outline-none focus:border-[#1e3a8a] text-sm p-1 w-[90%] my-1 mx-4' type="date" placeholder='Deadline'
                    value={deadline}
                    onChange={(e) =>
                        setDeadline(e.target.value)
                    }
                />

                    {/* Submit Button */}
                <button type='submit' className='m-4 py-1 px-2 bg-[#1e3a8a] text-white rounded text-sm font-semibold hover:translate-y-0.5 hover:opacity-60'>Add Assignment</button>
            </form>
        </div>
    )
}

export default AssignmentForm