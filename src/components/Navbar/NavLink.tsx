interface NavLinkProps {
  href: string;
  label: string;
  onClick?: () => void;
}

export const NavLink = ({ href, label, onClick }: NavLinkProps) => {
  return (
    <a
      href={href}
      className="block py-2 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
      onClick={onClick}
    >
      {label}
    </a>
  );
};
