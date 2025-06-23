
import { FC } from "react";

const ChatHeader: FC = () => {
  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="/" className="flex items-center">
          <img 
            src="/lovable-uploads/cca8416a-fa5d-420a-9868-2d8a9bbb063c.png" 
            alt="7Bee.AI Logo" 
            className="h-32 sm:h-36 md:h-20 lg:h-24 xl:h-28"
          />
        </a>
      </div>
    </header>
  );
};

export default ChatHeader;
