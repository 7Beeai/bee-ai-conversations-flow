
import { FC } from "react";

const ChatHeader: FC = () => {
  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold">
          7Bee<span className="text-primary">.AI</span>
        </a>
      </div>
    </header>
  );
};

export default ChatHeader;
