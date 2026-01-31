import React from 'react'

const MarksSummary = ({ assignments }) => {


    // calculate total marks, Obtained Marks and Pending Marks
    let totalMarks = 0;
    let obtMarks = 0;
    let pendingMarks = 0;
    assignments.forEach((item) => {
        totalMarks += Number(item.marks);
        obtMarks += item.completed && Number(item.marks);
    })
    pendingMarks = totalMarks - obtMarks;


    // Calculating Percentage
    let percentage = totalMarks === 0 ? 0 : Math.round((obtMarks / totalMarks) * 100);




    return (
        <div className='basis-1/3 bg-white border-[#e5e7eb] border shadow-[#9ba9b9] shadow rounded m-4'>

            <h1 className='w-full mx-4 my-2 font-semibold border-b-[#d1d5db] '>Marks Summary</h1>

            {/* Total Marks */}
            <div className='pb-2 border-t-2 border-[#d1d5db] bg-blue-100' >
                <div className='flex mx-4 my-2 justify-between items-center'>
                    <h4 className='font-semibold text-sm'>Total Marks</h4>
                    <h3 className='font-semibold text-xl'>{totalMarks} </h3>
                </div>

            </div>



            {/* Completed marks */}
            <div className='pb-2 border-t-2 border-[#d1d5db] bg-green-100'>
                <div className='flex mx-4 my-2 justify-between items-center'>
                    <h4 className='font-semibold text-sm'>Obtained Marks</h4>
                    <h3 className='font-semibold text-xl'>{obtMarks} </h3>
                </div>

            </div>


            {/* Pending marks */}
            <div className='pb-2 mb-4 border-y-2 border-[#d1d5db] bg-red-100'>
                <div className='flex mx-4 my-2 justify-between items-center'>
                    <h4 className='font-semibold text-sm'>Pending Marks</h4>
                    <h3 className='font-semibold text-xl'>{pendingMarks}</h3>
                </div>

            </div>

            {/* Percentage */}
            <div className='pb-4  mb-4 border-[#d1d5db]'>
                <div className='flex mx-4 my-2 justify-between items-center'>
                    <h4 className='font-semibold text-lg'>Percentage</h4>
                    <h3 className='font-semibold text-2xl'>{percentage}% </h3>
                </div>

                <div className='mx-4 bg-gray-300 h-3 rounded-2xl'>
                    <div className='bg-green-700 rounded-2xl h-full' style={{ width: `${percentage}%` }} />
                </div>
            </div>


        </div>
    )
}

export default MarksSummary