import Image from 'next/image'

export default function Overview(){
    return (
        <>
            <div>
                <div >
                    <Image src='/right-foot.svg' className="transform rotate-90 text-color-blue-500 bg-red-800" height={70} width={60} alt='right-foot' />
                </div>
            </div>
        </>
    )
}