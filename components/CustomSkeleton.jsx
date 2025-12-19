import Skeleton from 'react-loading-skeleton';

export default function CustomSkeleton(props) {
  const { type = 'text', count = 1, height, width, className } = props;
  switch (type) {
    case 'title':
      return <Skeleton height={height} width={width || '50%'} className={className} />;
    case 'paragraph':
      return <Skeleton count={count} height={height || 15} className={className} />;
    case 'avatar':
      return <Skeleton circle height={height || 50} width={width || 50} className={className} />;
    default:
      return <Skeleton count={count} height={height || 15} className={className} />;
  }
}
