import React, { FC } from 'react';
import Button from '@/utils/shared/button';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${
        isOpen ? 'visible' : 'hidden'
      }`}
    >
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="bg-white p-8 rounded-lg z-10">
        <p>Modal Content</p>
        <Button
          css="mt-4 px-4 py-2 bg-pink-500 text-white rounded-md"
          onClick={onClose}
        >
          Close
        </Button>
      </div>
    </div>
  );
};

export default Modal;
