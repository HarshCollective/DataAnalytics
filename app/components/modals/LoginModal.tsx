'use client';

import { signIn } from 'next-auth/react';
import { FcGoogle } from "react-icons/fc";

import useLoginModal from "@/app/hooks/useLoginModal";

import Modal from "./Modal";
import Button from "../Button";

const LoginModal = () => {
  const loginModal = useLoginModal();

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <h3 className='font-bold text-center'>Login with Google</h3>
      <hr />
      <Button
        outline
        label="Login with Google"
        icon={FcGoogle}
        onClick={(e) => { e.preventDefault(); signIn('google') }}
      />
    </div>
  )

  return (
    <Modal
      isOpen={loginModal.isOpen}
      title="Login"
      onClose={loginModal.onClose}
      footer={footerContent}
      onSubmit={() => { }}
    />
  );
}

export default LoginModal;
