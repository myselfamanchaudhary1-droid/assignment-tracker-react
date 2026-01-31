import React from 'react'
import AssignmentListCard from './AssignmentListCard'

const AssignmentList = ({ assignments, onDelete, onToggle }) => {


    return (
        <div className=' bg-white border-[#e5e7eb] border shadow-[#9ba9b9] shadow rounded m-4'>

            <h3 className='w-full mx-4 my-1.5 font-semibold'>Upcoming Assignments</h3>

            {/* Calling for each Assignment listCard */}
            {assignments.map((item) => (
                <AssignmentListCard key={item.id} assignment={item} onDelete={onDelete} onToggle={onToggle} />
            ))}
        </div>
    );
}

export default AssignmentList