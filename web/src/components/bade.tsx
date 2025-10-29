import type { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

interface BadeProps extends ComponentProps<'span'> {}

export function Bade({ className, ...props }: BadeProps) {
  return (
    <span
      className={twMerge(
        'px-3 py-1 rounded-lg border font-mono text-sm font-semibold border-zinc-600 bg-zinc-800 text-zinc-100',
        className,
      )}
      {...props}
    />
  );
}
