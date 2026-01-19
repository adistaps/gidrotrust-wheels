import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faHome } from '@fortawesome/free-solid-svg-icons';

interface PageBreadcrumbProps {
  items: { label: string; href?: string }[];
}

const PageBreadcrumb = ({ items }: PageBreadcrumbProps) => {
  return (
    <nav className="flex items-center gap-2 text-sm">
      <Link to="/" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2">
        <FontAwesomeIcon icon={faHome} className="w-4 h-4" />
        Home
      </Link>
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <FontAwesomeIcon icon={faChevronRight} className="w-3 h-3 text-gray-600" />
          {item.href ? (
            <Link to={item.href} className="text-gray-400 hover:text-primary transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-white font-medium">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
};

export default PageBreadcrumb;
