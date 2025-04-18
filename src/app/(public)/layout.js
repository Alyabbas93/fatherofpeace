import Image from "next/image";

// app/(public)/layout.jsx
export default function PublicLayout({ children }) {
    return (
      <div className="flex h-svh">
        <div className="w-1/2 flex items-center justify-center">
          <div className="w-full max-w-md p-8">
            {children}
          </div>
        </div>
        <div className="w-1/2 relative hidden md:block">
          <Image
            src='/assets/Rectangle1082.png'
            alt="Turn ideas into reality"
            fill
            className="rounded-none object-cover"
          />
        </div>
      </div>
    );
  }