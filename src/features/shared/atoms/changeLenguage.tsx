import { locales } from '../../../config'
import {createSharedPathnamesNavigation} from "next-intl/navigation";
import { useSearchParams } from 'next/navigation'


export function ChangeLenguage() {
    const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({ locales });
    const phatname = usePathname()
    const params = useSearchParams();
    const paramsString = new URLSearchParams(params).toString();

    return (
        <div className={'p-1 mt-2'}>
            <Link className={'p-1 bg-secondary text-white ml-1 rounded'} href={`${phatname}?${paramsString}`} locale={'es'}>ES</Link>
            <Link className={'p-1 bg-secondary text-white ml-1 rounded'} href={`${phatname}?${paramsString}`} locale={'en'}>EN</Link>
        </div>
    )
}