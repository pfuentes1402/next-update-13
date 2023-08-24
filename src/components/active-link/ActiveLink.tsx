"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import style from './ActiveLink.module.css';

interface IProps {
    name: string,
    href: string
}

export function ActiveLink({ href, name }: IProps) {
    let pathName = usePathname();

    return (
        <Link className={`${style.link} ${pathName === href && style['active-link']}`} href={href}>
            {name}
        </Link>
    )
}