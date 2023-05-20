import Image from "next/image"

export default function Home() {
  return (
    <div className="relative h-screen w-screen">
      <div className="absolute inset-0">
                <Image
                    src="/Blue-copy-space.jpg"
                    alt="background image"
                    fill
                />
      </div>
      <div className="relative z-10 flex flex-col items-center h-screen w-screen">
        <div className="mt-5 italic text-white text-4xl font-bold">
          About Myself
        </div>

        <div className="my-5">
          <Image
            src="/profile.jpg"
            width={250}
            height={400}
            alt="profile image"
          />
        </div>

        <div className="mt-5 italic text-white text-3xl font-semibold">
          Chinnaphat Panpromthamrong
        </div>
        <div className="mb-5 italic text-white text-3xl font-semibold">
          (Best)
        </div>

        <div className="my-5 italic text-white text-2xl font-semibold">
          Faculty of Computer Engineering
        </div>

        <div className="mt-5 italic text-white text-3xl font-semibold">
          NARESUAN UNIVERSITY
        </div>

        <div className="mt-10 flex flex-row">
          <a href="https://www.facebook.com/chinnaphat.panphrom/"><button className="mx-5"><Image src="/Facebook_Logo.png" width={50} height={100}/></button></a>
          <a href="https://www.instagram.com/cnp.best/"><button className="mx-5"><Image src="/Instagram_Logo.png" width={50} height={100}/></button></a>
        </div>
      </div>
    </div>
  )
}
