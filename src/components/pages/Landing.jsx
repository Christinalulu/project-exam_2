import { Link } from "react-router-dom";
const Landing = () => {
	return (
		<div>
			<div className='overflow-hidden bg-white py-32'>
				<div className='mx-auto max-w-7xl px-6 lg:flex lg:px-8'>
					<div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8'>
						<div className='lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8'>
							<h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
								Holidaze
							</h2>
							<p className='mt-12 text-xl leading-8 text-gray-600'>
								Welcome to Holidaze, your gateway to unforgettable experiences! Discover
								and book your dream accommodations effortlessly.
							</p>

							<div className='mt-10 flex'>
								<Link to="/venues"
									href='#'
									className='rounded-md bg-purple-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
									Find your place <span aria-hidden='true'>&rarr;</span>
								</Link>
							</div>
						</div>

						<div className='flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents'>
							<div className='w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end'>
								<img
									src='./images/image04.jpg'
									alt=''
									className='aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover'
								/>
							</div>
							<div className='contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8'>
								<div className='order-first flex w-64 flex-none justify-end self-end lg:w-auto'>
									<img
										src='./images/image02.jpg'
										alt=''
										className='aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover'
									/>
								</div>
								<div className='flex w-96 flex-auto justify-end lg:w-auto lg:flex-none'>
									<img
										src='./images/image03.jpg'
										alt=''
										className='aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover'
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class='bg-gradient-to-r from-white via-purple-200 to-pink-200 shadow py-24 sm:py-32'>
				<div class='mx-auto max-w-7xl px-6 lg:px-8'>
					<div class='mx-auto max-w-2xl lg:mx-0'>
						<Link to="/signup" class='text-base font-semibold leading-7 text-purple-600 hover:underline'>
						Click here
						</Link>
						<h2 class='mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
						Join our community
						</h2>
						<p class='mt-6 text-lg leading-8 text-gray-600'>
						while also unlocking
								the opportunity to become a host and create your own remarkable venues.
								Join our vibrant community and embark on a journey of endless
								possibilities.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Landing;
