import { Link } from 'react-router-dom';
function Card() {
    return(
            <>
            <div className="container mt-5 mx-auto px-2">
            {/* Flex on med screens and up  */}
            <div className="md:flex">
                <div
                className="flex-1 border-2 text-gray-700 text-center bg-gray-100 px-5 py-5 m-2 rounded"
                >
                <div className=" lg:items-center">
                    <div className="mb-5 lg:flex-shrink-0">
                    <img className="rounded-lg lg:w-64" src="https://i.ibb.co/mJJNkTJ/img2.jpg" alt="" />
                    </div>
                    <div className="mt-4 lg:mt-0 lg:ml-6">
                    <a
                        href="#"
                        className="mb-2 block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline"
                        >Finding connections to help your business grow</a
                    >
                    <div className="inset-y-0 right-24">
                    <div className="inset-y-0 right-0 p-1 rounded border-2 border-orange-700 bg-orange-100 w-fit">
                        <Link to='/' className=''>
                        <strong className="uppercase tracking-wide text-sm font-bold text-orange-700">Software</strong>
                        </Link>
                    </div>
                    </div>
                    </div>
                </div>
                </div>
                <div
                className="flex-1 border-2 text-gray-700 text-center bg-gray-100 px-5 py-5 m-2 rounded"
                >
                <div className=" lg:items-center">
                    <div className="mb-5 lg:flex-shrink-0">
                    <img className="rounded-lg lg:w-64" src="https://i.ibb.co/w4wGYvQ/img1.jpg" alt="" />
                    </div>
                    <div className="mt-4 lg:mt-0 lg:ml-6">
                    
                    <a
                        href="#"
                        className="mb-2 block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline"
                        >Finding customers for your new business</a
                    >
                    <div className="flex flex-row-reverse border-2 border-green-700 p-1 bg-green-100 w-fit">
                        <Link to='/' className=''>
                        <strong className="uppercase tracking-wide text-sm font-bold text-green-700">Network</strong>
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