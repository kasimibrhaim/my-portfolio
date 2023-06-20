import Link from "next/link";
import {ImLinkedin} from 'react-icons/im'
import Image from "next/image";
import linkedin from '../images/linkedinr.png'
import tweeter from '../images/tww.png'
import git from '../images/gitt.png'

export default function DropdownItems() {
  return (
    <div className="grid grid-cols-3 gap-8 border-gray-200">
      <Link href="https://www.linkedin.com/in/ibrahim-kasim/" className="block items-center text-center hover:bg-gray-400 "target="_blank">
        <Image src={linkedin} alt={"LinkedIn"} className="h-20 w-20"/>
        LinkedIn
        </Link>
        <Link href="https://twitter.com/QASIMUOK" className="block items-center text-center hover:bg-gray-400 "target="_blank">
        <Image src={tweeter} alt={"Tweeter"} className="h-20 w-20 "/>
        Tweeter
        </Link>
        <Link href="https://github.com/kasimibrhaim" className="block items-center text-center hover:bg-gray-400 "target="_blank">
        <Image src={git} alt={"github"} className="h-20 w-20 "/>
        GitHub
        </Link>
    </div>
  );
}
