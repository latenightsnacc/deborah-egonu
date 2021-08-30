import Image from 'next/image'

export default function Overview(){
    return (
        <>
            <div>
                <div className="grid grid-cols-auto grid-rows-1 gap-2">
                    <Image src='/right-foot.svg' className="transform rotate-90 fill-current text-color-blue-500 bg-red-800" height={70} width={60} alt='right-foot' />
                    <Image src='/right-foot.svg' className="transform rotate-90 fill-current text-color-blue-500 bg-red-800" height={50} width={60} alt='right-foot' />
                    <Image src='/right-foot.svg' className="transform rotate-90 fill-current text-color-blue-500 bg-red-800" height={70} width={60} alt='right-foot' />
                    <Image src='/right-foot.svg' className="transform rotate-90 fill-current text-color-blue-500 bg-red-800" height={70} width={60} alt='right-foot' />
                    <Image src='/right-foot.svg' className="transform rotate-90 fill-current text-color-blue-500 bg-red-800" height={70} width={60} alt='right-foot' />

                </div>
            </div>
        </>
    )
}