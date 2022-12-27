import React from 'react';

const BusinessInformation = () => {
    const handleRegister = event =>{
        event.preventDefault();
        
        const Bname = event.target.Bname.value;        
        const gst = event.target.gst.value;
        const balance = event.target.balance.value;
        const address = event.target.address.value;
        
        
        
            
    }
    return (
        <div className='mb-10 mt-5 py-8 flex flex-col w-10/12 md:w-5/12 px-5 md:px-8 m-full mx-auto divide-y rounded-md divide-gray-700 shadow-lg border-2'>
             <div><h1 className='text-2xl text-center mt-5 mb-3 font-semibold'>Business Information</h1></div>
            <form onSubmit={handleRegister} className="space-y-6 p-10 shadow-md ng-untouched ng-pristine ng-valid ">
		<div className="space-y-1 text-sm">			
			<input type="text" name="Bname" id="Bname" required placeholder="Business name" className="w-full px-4 py-3 rounded-md border-gray-700 dark:bg-gray-200 text-gray-900 " />
		</div>
		<div className="space-y-1 text-sm">			
			<input type="text" name="gst" id="gst" required placeholder="GST no" className="w-full px-4 py-3 rounded-md border-gray-700 dark:bg-gray-200 text-gray-900 " />
		</div>
		<div className="space-y-1 text-sm">
			<input type="text" name="address" id="address" placeholder="Address" required className="w-full px-4 py-3 rounded-md border-gray-700 dark:bg-gray-200 text-gray-900 " />
		</div>
		
		<div className="space-y-1 text-sm">
			<input type="text" name="balance" id="balance" placeholder="Current balance" className="w-full px-4 py-3 rounded-md border-gray-700 dark:bg-gray-200 text-gray-900 " />
		</div>			
		
		<button type='submit' className="block w-full p-3 text-center rounded-sm  bg-[#8010FC] text-white font-bold">Next</button>
	</form>
        </div>
    );
};

export default BusinessInformation;