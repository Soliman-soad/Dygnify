import React from 'react';

const BusinessInformation = () => {
    const handleRegister = event =>{
        event.preventDefault();
        
        const Fname = event.target.Fname.value;
        const Lname = event.target.Lname.value;
        const age = event.target.age.value;
        const email = event.target.email.value;
        const number = event.target.number.value;
        const address = event.target.address.value;
        console.log(Fname,Lname,age,email,number,address)
        
        
            
    }
    return (
        <div className='mb-10 mt-5 py-8 flex flex-col w-10/12 md:w-5/12 px-5 md:px-8 m-full mx-auto divide-y rounded-md divide-gray-700 shadow-lg border-2'>
             <div><h1 className='text-2xl text-center mt-5 mb-3 font-semibold'>Personal Information</h1></div>
            <form onSubmit={handleRegister} className="space-y-6 p-10 shadow-md ng-untouched ng-pristine ng-valid ">
		<div className="space-y-1 text-sm">			
			<input type="text" name="Fname" id="Fname" required placeholder="First name" className="w-full px-4 py-3 rounded-md border-gray-700 dark:bg-gray-200 text-gray-900 " />
		</div>
		<div className="space-y-1 text-sm">			
			<input type="text" name="Lname" id="Lname" required placeholder="Last name" className="w-full px-4 py-3 rounded-md border-gray-700 dark:bg-gray-200 text-gray-900 " />
		</div>
		<div className="space-y-1 text-sm">
			<input type="text" name="age" id="age" placeholder="age" required className="w-full px-4 py-3 rounded-md border-gray-700 dark:bg-gray-200 text-gray-900 " />
		</div>
		
		<div className="space-y-1 text-sm">
			<input type="text" name="email" id="Email" placeholder="Email" className="w-full px-4 py-3 rounded-md border-gray-700 dark:bg-gray-200 text-gray-900 " />
		</div>
		<div className="space-y-1 text-sm">
			<input type="text" name="number" id="Number" placeholder="Number" className="w-full px-4 py-3 rounded-md border-gray-700 dark:bg-gray-200 text-gray-900 " />
		</div>			
		<div className="space-y-1 text-sm">
			<input type="text" name="address" id="address" placeholder="Address" className="w-full px-4 py-3 rounded-md border-gray-700 dark:bg-gray-200 text-gray-900 " />
		</div>			
		<button type='submit' className="block w-full p-3 text-center rounded-sm  bg-[#8010FC] text-white font-bold">Next</button>
	</form>
        </div>
    );
};

export default BusinessInformation;