// "use client"
import Link from "next/link";

const MenuLink = ({item}) => {
    return <Link href={item.path}>
        {item.icon}
        {item.title}
    </Link>
}

export default MenuLink;