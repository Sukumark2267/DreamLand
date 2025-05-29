import React from "react";
import Image from "next/image";

export default function Newsletter() {
	return (
		<section className="ezy__cta6 light py-14 md:py-24 bg-white dark:bg-[#111] text-white">
			<div className="container px-4 mx-auto">
				<div className="bg-[#111] rounded-3xl overflow-hidden max-w-8xl mx-auto">
					<div className="grid grid-cols-12 items-center">
						<div className="col-span-12 lg:col-span-7">
							<div className="py-12 px-6 sm:px-12">
								<h2 className="text-2xl md:text-[40px] leading-none font-bold mb-6">
									Join with us for more information
								</h2>

								<div className="grid grid-cols-12">
									<div className="col-span-12 sm:col-span-8">
										<p className="text-lg opacity-75 mb-12">
											It’s easier to reach your savings goals when you have the
											right savings account.
										</p>
									</div>
									<div className="col-span-12 lg:col-span-8">
										<form>
											<div className="rounded overflow-hidden">
												<div className="flex justify-between rounded">
													<input
														type="email"
														className="min-h-[48px] w-1/2 md:w-3/4 leading-6 border-none bg-gray-100 bg-opacity-100 dark:bg-gray-600 dark:bg-opacity-10 grow text-black focus:outline-none placeholder:text-gray-900 dark:placeholder:text-gray-300 dark:text-gray-300 pl-4"
														placeholder="Enter Email"
													/>
													<button className="min-w-[110px] w-1/2 md:w-1/4 h-12 py-3 px-7 text-white bg-blue-600 hover:bg-opacity-90 transition">
														Subscribe
													</button>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
						<div className="col-span-12 lg:col-span-5 text-end">
							<div className="flex justify-end">
                            <Image
                                src="https://cdn.easyfrontend.com/pictures/cta/cta_6.png"
                                alt=""
                                width={400} // set an appropriate width
                                height={400} // set an appropriate height
                                className="rounded-tl-[50%] rounded-tr-[30%] w-full lg:rounded-tr-none lg:rounded-bl-[40%] lg:w-auto"
                                />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};


