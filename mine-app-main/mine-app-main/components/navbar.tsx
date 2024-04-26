import Link from "next/link"


export default function Nav(){
    return(
        <>
        <ul>
        <li>
          <Link href="/">home </Link>
        </li>
        <li>
          <Link href="/about">about </Link>
        </li>
        <li>
          <Link href="/products">products </Link>
        </li>
      </ul>
        </>
    )
}