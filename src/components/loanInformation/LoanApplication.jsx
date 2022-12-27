import React from 'react';

const LoanApplication = () => {
    const handleRegister = event =>{
        event.preventDefault();
        
        const amount = event.target.amount.value;        
        const interest = event.target.interest.value;
        const loan = event.target.loan.value;
                
            
    }
    return (
        <div className='mb-10 mt-5 py-8 flex flex-col w-10/12 md:w-5/12 px-5 md:px-8 m-full mx-auto divide-y rounded-md divide-gray-700 shadow-lg border-2'>
             <div><h1 className='text-2xl text-center mt-5 mb-3 font-semibold'>Loan application</h1></div>
            <form onSubmit={handleRegister} className="space-y-6 p-10 shadow-md ng-untouched ng-pristine ng-valid ">
		<div className="space-y-1 text-sm">			
			<input type="text" name="amount" id="amount" required placeholder="Loan amount" className="w-full px-4 py-3 rounded-md border-gray-700 dark:bg-gray-200 text-gray-900 " />
		</div>
		<div className="space-y-1 text-sm">			
			<input type="text" name="interest" id="interest" required placeholder="interest rate" className="w-full px-4 py-3 rounded-md border-gray-700 dark:bg-gray-200 text-gray-900 " />
		</div>
		<div className="space-y-1 text-sm">
			<input type="text" name="loan" id="loan" placeholder="Loan tenure" required className="w-full px-4 py-3 rounded-md border-gray-700 dark:bg-gray-200 text-gray-900 " />
		</div>
		
		<button type='submit' className="block w-full p-3 text-center rounded-sm  bg-[#8010FC] text-white font-bold">Submit for Loan</button>
	</form>
        </div>
    );
};

export default LoanApplication;