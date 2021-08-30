import Image from 'next/image'

export default function Overview(){
    return (
        <>
            <div>
                <div >
                    <Image src='/right-foot.svg' className="rotate-90" height={50} width={30} alt='right-foot' />
                </div>
            </div>
        </>
    )
}