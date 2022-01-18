/**
 * @file footer.js
 */
// Import dependencies
import Image from 'next/image';
import Link from 'next/link';

// Import styling
import { heroStyles, paragraphStyles, linkStyles } from "../utils/constants";

export default function Footer() {
  return (
    <div className={`text-center py-24`}>
      <h1 className={`${heroStyles} pb-16`}>See you there!</h1>
      <div className={`flex justify-center`}>
        <p className={`${paragraphStyles} font-extralight pr-2`}>Made with </p>
        <Image src={`/heart.svg`} width={30} height={30} />
        <p className={`${paragraphStyles} font-extralight px-2`}>by </p>
        <Link href={`https://www.jwbentley.com`}><a className={`${linkStyles}`} target="_blank">John Bentley Creative</a></Link>
      </div>
    </div>
  )
}