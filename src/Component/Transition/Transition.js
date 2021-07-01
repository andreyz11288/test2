import { useTransition } from 'react-spring';
export function Transition() {
  return useTransition(true, {
    from: { transform: 'translateX(100%)' },
    enter: {
      transform: 'translateX(0)',
    },
   
  });
}