import { Link } from 'react-router-dom';
function Card() {
    return(
            <>
            <div className="container flex mt-5">
            {/* Flex on med screens and up  */}
            <div className="lg:flex w-fit ">
                {/* 1st Card */}
                <div
                className="relative lg:w-1/3 flex-1 border-2 text-gray-700 text-center bg-gray-100 rounded-lg"
                >
                <div className="lg:items-center w-fit">
                    <div className="mb-5 lg:flex-shrink-0">
                    <img className="rounded-lg " src="https://i.ibb.co/mJJNkTJ/img2.jpg" alt="" />
                    </div>
                    <div className=" mt-4 lg:mt-0 m-6">
                    <Link
                        to='/'
                        className="flex flex-row mb-2 mt-1 text-lg leading-relaxed font-semibold text-gray-900"
                        >Internet
                    </Link>
                    <p className="block pb-10 text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus molestiae necessitatibus sequi illo officiis,
                     non vel. Consectetur vero qui cum, aspernatur quod quae! Mollitia similique iusto consequatur ex iure culpa.</p>
                    
   
                    <div className="absolute bottom-1 right-1 m-2 p-1 rounded border-2 border-orange-700 bg-orange-100 w-fit">
                        <Link to='/' className=''>
                        <strong className=" uppercase tracking-wide text-sm font-bold text-orange-700">Wireless</strong>
                        </Link>
                    </div>
                    
                    </div>
                </div>
                </div>
                {/* 2nd Card */}
                <div
                className="relative lg:w-1/3 flex-1 border-2 text-gray-700 text-center bg-gray-100 rounded-lg"
                >
                <div className=" lg:items-center">
                    <div className="mb-5 lg:flex-shrink-0">
                    <img className="rounded-lg" src="https://i.ibb.co/w4wGYvQ/img1.jpg" alt="" />
                    </div>
                    <div className="mt-4 lg:mt-0 m-6">
                    
                    <Link
                        to='/'
                        className="mb-2 flex flex-row mt-1 text-lg leading-relaxed font-semibold text-gray-900"
                        >Fire Wall
                        </Link>
                        <p className="block pb-10 text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus molestiae necessitatibus sequi illo officiis,
                         non vel. Consectetur vero qui cum, aspernatur quod quae! Mollitia similique iusto consequatur ex iure culpa.</p>
                        <div className="">
                        <div className="absolute bottom-1 right-1 m-2 p-1 rounded border-2 border-green-700 bg-green-100 w-fit">
                        <Link to='/' className=''>
                        <strong className="uppercase tracking-wide text-sm font-bold text-green-700">Network</strong>
                        </Link>
                    </div>
                    </div>
                    </div>
                </div>
                </div>
                {/* 3rd Card */}
                <div
                className="relative lg:w-1/3 flex-1 border-2 text-gray-700 text-center bg-gray-100 rounded-lg"
                >
                <div className=" lg:items-center w-fit">
                    <div className="mb-5 lg:flex-shrink-0">
                    <img className="rounded-lg " src="https://i.ibb.co/mJJNkTJ/img2.jpg" alt="" />
                    </div>
                    <div className="mt-4 lg:mt-0 m-6">
                    <Link
                        to='/'
                        className="mb-2 flex flex-row mt-1 text-lg leading-relaxed font-semibold text-gray-900"
                        >OrgaSoul
                        </Link>
                        <p className="block pb-10 text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus molestiae necessitatibus sequi illo officiis,
                         non vel. Consectetur vero qui cum, aspernatur quod quae! Mollitia similique iusto consequatur ex iure culpa.</p>
                    <div className="absolute bottom-1 right-1 m-2 p-1 rounded border-2 border-blue-700 bg-blue-100 w-fit">
                        <Link to='/' className=''>
                        <strong className="uppercase tracking-wide text-sm font-bold text-blue-700">Software</strong>
                        </Link>

                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>

            </>
    )
}

export default Card;