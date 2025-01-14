import Image, { StaticImageData } from 'next/image'

export default function Certificate({ logo, certificateName, certificateDesc, date }: { logo: StaticImageData, certificateName: string, certificateDesc: string, date: string }) {
    return (
        <div className="py-6">
            <div className="mx-auto max-w-7xl">
                <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <Image src={logo} alt='certificate'></Image>
                    <div>
                        <div className="text-base/7 lg:max-w-lg">
                            <p className="text-base/7 font-semibold">{date}</p>
                            <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight sm:text-5xl">
                                {certificateName}
                            </h1>
                            <div className="max-w-xl">
                                <p className="mt-6">
                                    {certificateDesc}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}