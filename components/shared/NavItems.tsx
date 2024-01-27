import Link from "next/link"

const NavItems = () => {
    // Create dummy nav items
    const navItems = [
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'About',
            link: '/about'
        }
    
    
    ]            
  return (
    <div>
        {navItems.map((item) => (
            <Link href={item.link}>{item.name}</Link>
        ))}
    </div>
  )
}

export default NavItems