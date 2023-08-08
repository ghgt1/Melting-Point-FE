import { AnimatePresence } from 'framer-motion';
import { Outlet } from 'react-router-dom';

export default function AnimateLayout() {
  return (
    <AnimatePresence>
      <Outlet />
    </AnimatePresence>
  );
}
