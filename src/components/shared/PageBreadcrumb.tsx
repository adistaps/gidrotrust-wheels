import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItemProps {
  label: string;
  path?: string;
}

interface PageBreadcrumbProps {
  items: BreadcrumbItemProps[];
}

const PageBreadcrumb = ({ items }: PageBreadcrumbProps) => {
  return (
    <nav className="flex items-center gap-2 text-sm text-muted-foreground py-4">
      <Link to="/" className="flex items-center gap-1 hover:text-primary transition-colors">
        <Home className="w-4 h-4" />
        <span>Home</span>
      </Link>
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <ChevronRight className="w-4 h-4" />
          {item.path ? (
            <Link to={item.path} className="hover:text-primary transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-foreground font-medium">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
};

export default PageBreadcrumb;
