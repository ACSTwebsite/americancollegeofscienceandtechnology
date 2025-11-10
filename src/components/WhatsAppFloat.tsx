import { Button } from './ui/button';

export const WhatsAppFloat = () => {
  const phoneNumber = '2348062650766';
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 group"
    >
      <Button
        size="lg"
        className="h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#20BD5C] shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          fill="white"
          viewBox="0 0 24 24"
        >
          <path d="M12 2a9.65 9.65 0 0 0-7.029 16.286L3.714 22l3.786-1.714A9.65 9.65 0 1 0 12 2Zm0 17.143a7.514 7.514 0 0 1-3.857-1.072l-.286-.143-2.857 1.286.857-2.857-.143-.286A7.571 7.571 0 1 1 12 19.143Zm4.286-5.714c-.214-.143-1.286-.643-1.5-.714s-.357-.143-.5.143c-.143.286-.571.714-.643.857-.071.143-.214.143-.429 0a5.429 5.429 0 0 1-2.786-2.429c-.214-.357.214-.357.643-1.143.071-.143 0-.286-.071-.429l-.643-1.571c-.143-.429-.357-.429-.5-.429h-.429c-.143 0-.429.071-.643.357-.214.286-.857.857-.857 2.143s.857 2.5.929 2.643c.071.143 1.286 1.929 3 2.714 1.714.786 1.714.5 2.143.5.429 0 1.286-.5 1.5-1.071.214-.571.214-1 .143-1.143Z" />
        </svg>
      </Button>
      <div className="absolute bottom-full left-0 mb-2 bg-black/75 text-white px-3 py-2 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <div>Chat on WhatsApp</div>
        <div className="text-xs opacity-90">+234 806 265 0766</div>
      </div>
    </a>
  );
};