import Image from 'next/image'

export default function Overview(){
    return (
        <>
            <div>
                <div className="rotate-90">
                    <Image src='/right-foot.svg' height={50} width={30} alt='right-foot' />
                </div>
            </div>
        </>
    )
}