import React from 'react'
import { useNavigate } from 'react-router-dom';

const AssignmentListCard = ({ assignment, onDelete, onToggle }) => {

   // navigation to assignment Details
   const navigate = useNavigate();

   // handleClick
   const handleClick = ()=>{

    // set id of clicked element in local storage
    localStorage.setItem(
        "selectedAssignmentId",assignment.id
    );

        // navigate to a particular assignment details
    navigate(`/assignments/${assignment.id}`)
   }

    // Days Left calculatiton
    const deadlineDate = new Date(assignment.deadline);
    const today = new Date();

    const diffTime = deadlineDate - today;
    const dayleft = Math.ceil(diffTime / (1000 * 60 * 60 * 24));


    // change btn style on the basis of days left
    let className = "";
    let dayLimit = "";

    if (dayleft <= 0) {
        className = "bg-red-500 text-white"
        dayLimit = `Overdue`
    } else if (dayleft <= 2) {
        className = "bg-yellow-300 text-black"
        dayLimit = ` ${dayleft} days left `
    } else {
        className = "bg-green-500 text-white"
        dayLimit = ` ${dayleft} days left `
    }

    // changing style on completing of task 
    let taskComp = "";
    if (assignment.completed) {
        taskComp = "line-through opacity-50"
    }




    return (
        <div
        className={`h-auto mb-4 mx-4 ${taskComp} border border-[#d1d5db] rounded-xl`} >

            {/* // delete and mark completed btn */}
            <div className='flex justify-between'>

                {/* delete assignment btn */}
                <button onClick={() =>
                    onDelete(assignment.id)
                } className='bg-red-800 font-bold mb-3 px-2  text-white text-xs rounded'>X</button>

                
                {/* Assignment complete checkbox */}
                <input
                    type='checkbox' onClick={() =>
                        onToggle(assignment.id)
                    } className='bg-green-400 px-2 my-2 mx-1 rounded text-white size-5' />
            </div>


            {/* subject name and title */}
            <div 
            onClick={handleClick}
            className=' flex justify-between items-center hover:cursor-pointer hover:opacity-70 hover:translate-y-0.5'>
                <div className='py-1'>
                    <h3 className='text-sm px-1 font-semibold'>{assignment.title}</h3>
                    <p className='text-xs px-1 text-[#1f2937] '>{assignment.subject}</p>
                </div>


                {/* marks & no. of days left */}
                <div className='flex gap-2'>
                    <p className={`text-sm rounded-full h-6 px-2 ${className} `}>{dayLimit} </p>
                    <h4 className='font-bold mx-2'>{assignment.marks} </h4>
                </div>
            </div>

        </div>


    )
}

export default AssignmentListCard