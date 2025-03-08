export const Resultv = () => {
  return (
    <div className='grid grid-cols-1 gap-7 mt-10 md:grid-cols-4 mb-10'> 
        <div className='border border-red-600 rounded-md p-32 col-span-1 sm:col-span-3 md:col-span-3 row-span-1 sm:row-span-2'>
            
        </div>
        <div className='border border-red-600 rounded-md flex flex-col '>
            <div className="bg-slate-500 bg-opacity-50 rounded-md h-full flex flex-col w-full p-4 justify-between gap-5">
                <div className="flex gap-2 w-full items-center">
                <svg width={50} height={50} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="trn-card__icon" data-v-8c410cdd="" fill="white">
                  <path d="M28.149 15.734a3.72 3.72 0 0 0 3.718-3.733V9.334h-2.655a3.72 3.72 0 0 0-3.718 3.733v1.467a9.624 9.624 0 0 1-9.826 9.333 9.71 9.71 0 0 1-9.295-9.333v-1.467a3.81 3.81 0 0 0-3.717-3.733H0v2.667a3.72 3.72 0 0 0 3.718 3.733h.8a4.3 4.3 0 0 0 .4 1.867 4.16 4.16 0 0 0-2.788.667L0 19.867 1.593 22a3.52 3.52 0 0 0 2.39 1.467h.531a3.6 3.6 0 0 0 2.258-.8l.664-.533 1.327 1.333a3.15 3.15 0 0 0-1.593 1.867l-.8 2.667 2.523.933a3.626 3.626 0 0 0 4.78-2.133l.4-.933a10 10 0 0 0 3.983 0l.4.933a3.673 3.673 0 0 0 4.78 2.133l2.523-.933-.929-2.534a3.67 3.67 0 0 0-1.593-1.867 6.3 6.3 0 0 0 1.327-1.333l.664.533a3.6 3.6 0 0 0 2.257.8h.531a3.52 3.52 0 0 0 2.39-1.467L32 20l-2.124-1.6a4 4 0 0 0-2.788-.667c.133-.667.266-1.2.4-1.867l.664-.133Zm-22.44 5.6a1.91 1.91 0 0 1-2.656-.4l-.4-.667.664-.4a1.91 1.91 0 0 1 2.656.4l.4.667Zm6.108 4.8a1.86 1.86 0 0 1-2.39 1.067l-.664-.267.266-.667a1.86 1.86 0 0 1 2.39-1.067l.664.133ZM1.859 12v-.8h.8a1.82 1.82 0 0 1 1.856 1.867v.8h-.8A1.82 1.82 0 0 1 1.859 12M22.44 27.2a1.86 1.86 0 0 1-2.39-1.067l-.266-.8.664-.267a1.86 1.86 0 0 1 2.39 1.067l.266.667Zm6.108-7.333.664.4-.4.667a1.893 1.893 0 0 1-2.656.4l-.664-.4.4-.667a1.8 1.8 0 0 1 2.656-.4m-1.2-6.8a1.82 1.82 0 0 1 1.859-1.867h.8v.8a1.82 1.82 0 0 1-1.858 1.867h-.8Zm-12.742 7.867 1.328-1.333 1.328 1.333-1.328 1.333Zm-4.515-2 .929.667 4.78-2.534 4.78 2.533.929-.667-.928-5.466L24.432 9.6l-.4-1.2-5.444-.8L16.2 2.667H15l-2.12 5.067-5.444.8-.266 1.2 3.851 3.867Zm2.789-5.067L15 13.2v2.267L12.344 16.8Zm3.983 1.6V13.2l2.124.667.531 2.933Zm2.656-3.333-2.125-.667 1.328-1.733 2.921.4Zm-3.585-6.267 1.328 2.667-1.328 1.733-1.328-1.733ZM10.091 10l2.921-.4 1.328 1.733-1.992.8Z"></path></svg>
                   <h2 className="text-2xl font-medium font-roboto-condensed">Current Rating</h2>
                </div>
                <div className="flex gap-5 w-full align-center">
                  <img className="" width="50" height="50" src="https://img.icons8.com/ios/50/FFFFFF/image--v1.png" alt="image--v1"/>
                  <div className="flex flex-col justify-start">
                    <p className="text-lg text-gray-400 font-medium font-roboto-condensed">Rating</p>
                    <p className="text-xl font-semibold font-roboto-condensed ms-2">Gold 1</p>
                  </div>
                </div>

            </div>
            <div className="bg-slate-800 bg-opacity-50 rounded-md h-full flex flex-col p-4 justify-between gap-3">
                <div className="flex w-full items-center">
                 <h2 className="text-lg font-extralight font-roboto-condensed">Peak Rating</h2>
                </div>
                <div className="flex gap-5 w-full align-center">
                  <img width="50" height="50" src="https://img.icons8.com/ios/50/FFFFFF/image--v1.png" alt="image--v1"/>
                  <div className="flex flex-col justify-start">
                    <p className="text-lg text-gray-400 font-medium font-roboto-condensed">Rating</p>
                    <p className="text-xl font-semibold font-roboto-condensed ms-2">Gold 1</p>
                  </div>
                </div>
            </div>
        </div>
        <div className='border border-red-600 rounded-md p-32'>
            
        </div>
    </div>
   
  )
}