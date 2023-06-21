'use client'

import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>
          <h1>
              WELCOME TO YOUR TMS
          </h1>
          <div>
              <Link href="/tasks">
                  Go to task
              </Link>
          </div>
      </div>
    </>
  )
}
