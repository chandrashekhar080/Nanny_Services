import React from 'react'
import NotificationCard from '../../../pages/CareGiverPages/CareGiverNotification/CareGiverNotification'

const notifications = [
    {
      title: "New Message",
      message: "You have a new message from the Johnson Family.",
      linkTitle: "View Request",
      time: "2h",
    },
    {
      title: "Job Reminder",
      message: "You have an upcoming babysitting job today.",
      linkTitle: "View Details",
      time: "1h",
    },
    {
      title: "Profile Update",
      message: "Your profile was viewed by 3 families today.",
      linkTitle: "View Profile",
      time: "30m",
    },
   
  ];
  function NotificationPages() {
  return (
    <>
    <div className='flex justify-between   px-20 max-md:px-0 '>
        <div className='gap-4  my-6'>
            <button className='bg-[#FF999A]  px-4 py-1 rounded-[10px] text-white'>All</button>
            <button className='border px-4 py-1 rounded-[10px] border-[#FF999A] ml-2'>Unread</button>

        </div>
        <div className=' my-6 text-black font-medium'>Mark as Read</div>

    </div>
    <h1 className='max-md:px-0 px-20 my-4 text-black font-semibold'>Today</h1>
     <div className='max-md:px-0 px-20 flex flex-col gap-4'>
      {notifications.map((item, index) => (
        <NotificationCard key={index} {...item} />
      ))}
    </div>
     <h1 className='max-md:px-0 px-20 my-4 text-black font-semibold'>This Week</h1>
      <div className='max-md:px-0 px-20 flex flex-col gap-4'>
      {notifications.map((item, index) => (
        <NotificationCard key={index} {...item} />
      ))}
    </div>
    </>
  )
}

export default NotificationPages
