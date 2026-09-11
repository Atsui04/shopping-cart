interface HeaderProps {
  length: number | undefined;
}

function Header({ length = 0 }: HeaderProps) {
  return (
    <header className="border-b border-slate-700">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-6">
        <h1 className="text-3xl font-bold">Shopping Cart Sandbox</h1>
        <button className="flex items-center justify-start gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="ionicon h-12 w-12 cursor-pointer text-blue-600 transition-colors duration-200 hover:text-blue-500"
          >
            <circle
              cx="176"
              cy="416"
              r="16"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32px"
            />
            <circle
              cx="400"
              cy="416"
              r="16"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32px"
            />
            <path
              d="M48 80h64l48 272h256"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32px"
            />
            <path
              d="M160 288h249.44a8 8 0 0 0 7.85-6.43l28.8-144a8 8 0 0 0-7.85-9.57H128"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32px"
            />
          </svg>
          <span className="rounded-md border border-slate-500 bg-slate-800 px-2 py-1 text-white">
            {length ?? 0}
          </span>
        </button>
      </div>
    </header>
  );
}

export default Header;
