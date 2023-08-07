import React from 'react';
import { motion } from 'framer-motion';

export default function CreateRoom() {
  return (
    <motion.div
      key="main"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
    >
      <div>
        <p>애니메이션 테스트</p>
        <p>애니메이션 테스트</p> <p>애니메이션 테스트</p> <p>애니메이션 테스트</p>{' '}
        <p>애니메이션 테스트</p> <p>애니메이션 테스트</p>
      </div>
    </motion.div>
  );
}
