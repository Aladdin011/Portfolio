/**
 * Loading Skeleton Component
 * Placeholder for loading states
 */

import { motion } from 'framer-motion';

interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  className?: string;
  circle?: boolean;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  width = '100%',
  height = '20px',
  className = '',
  circle = false,
}) => {
  return (
    <motion.div
      className={`bg-white/5 border border-white/5 ${
        circle ? 'rounded-full' : 'rounded-lg'
      } ${className}`}
      style={{ width, height }}
      animate={{ opacity: [0.5, 0.8, 0.5] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
  );
};

export const ProjectCardSkeleton: React.FC = () => (
  <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/5 p-8 space-y-4">
    <Skeleton height="40px" className="w-1/2" />
    <Skeleton height="20px" />
    <Skeleton height="20px" />
    <div className="flex gap-2 mt-4">
      <Skeleton width="80px" height="24px" />
      <Skeleton width="80px" height="24px" />
      <Skeleton width="80px" height="24px" />
    </div>
  </div>
);

export const TestimonialSkeleton: React.FC = () => (
  <div className="w-[350px] md:w-[450px] p-8 rounded-2xl bg-white/5 border border-white/10 space-y-4">
    <div className="flex items-start gap-4">
      <Skeleton width="48px" height="48px" circle />
      <div className="flex-1 space-y-2">
        <Skeleton height="20px" width="150px" />
        <Skeleton height="16px" width="120px" />
      </div>
    </div>
    <Skeleton height="60px" />
  </div>
);
