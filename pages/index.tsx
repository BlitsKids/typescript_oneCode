import Image from "next/image"
import data from "../data.json"

export default function Home() {
  return (
    <div className="flex flex-col items-center mx-auto w-full justify-center mt-16">
      <img
        className="rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
        src={data.avatar}
        alt={data.name}
        width={96}
        height={96}
      />
      <h1 className="font-bold mt-4 text-xl">{data.name}</h1>
    </div>
  )
}

function LinkCard({ href, title, image }) {
  return (
    <a
      href="{href}"
      className="flex items-center p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="flex flex-col">
        <h2 className="font-bold text-lg">{title}</h2>
        <p className="text-gray-500">{description}</p>
      </div>
    </a>
  )
}
