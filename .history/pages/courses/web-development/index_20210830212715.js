import Image from 'next/image'

export default function Overview(){
    return (
        <>
            <div className="container relative">
                <div className='flex flex-row'>
                    <div className="h-96">
                        <div className="absolute bottom-0 left-0">
                            <Image src='/left-foot.svg' className="transform rotate-45 fill-current " height={70} width={60} alt='right-foot' />
                        </div>
                        <div className="absolute bottom-5 left-16">
                            <Image src='/right-foot.svg' className="transform rotate-45 fill-current " height={70} width={60} alt='right-foot' />
                        </div>
                        <div className="absolute bottom-10 left-32">
                            <Image src='/left-foot.svg' className="transform rotate-45 fill-current " height={70} width={60} alt='right-foot' />
                        </div>
                        <div className="absolute bottom-16 left-48">
                            <Image src='/right-foot.svg' className="transform rotate-45 fill-current " height={70} width={60} alt='right-foot' />
                        </div>
                        <div className="absolute bottom-24 left-64">
                            <Image src='/left-foot.svg' className="transform rotate-45 fill-current " height={70} width={60} alt='right-foot' />
                        </div>
                        <div className="absolute bottom-28 left-80">
                            <Image src='/right-foot.svg' className="transform rotate-45 fill-current " height={70} width={60} alt='right-foot' />
                        </div>   
                    </div>
                    <div className="h-96">
                        <div className="absolute bottom-24 left-96">
                            <Image src='/left-foot.svg' className="transform rotate-45 fill-current " height={70} width={60} alt='right-foot' />
                        </div>
                        <div className="absolute bottom-5 left-16">
                            <Image src='/right-foot.svg' className="transform rotate-45 fill-current " height={70} width={60} alt='right-foot' />
                        </div>
                        <div className="absolute bottom-10 left-32">
                            <Image src='/left-foot.svg' className="transform rotate-45 fill-current " height={70} width={60} alt='right-foot' />
                        </div>
                        <div className="absolute bottom-16 left-48">
                            <Image src='/right-foot.svg' className="transform rotate-45 fill-current " height={70} width={60} alt='right-foot' />
                        </div>
                        <div className="absolute bottom-24 left-64">
                            <Image src='/left-foot.svg' className="transform rotate-45 fill-current " height={70} width={60} alt='right-foot' />
                        </div>
                        <div className="absolute bottom-28 left-80">
                            <Image src='/right-foot.svg' className="transform rotate-45 fill-current " height={70} width={60} alt='right-foot' />
                        </div>   
                    </div>
                </div>
                    
            </div>
        </>
    )
}