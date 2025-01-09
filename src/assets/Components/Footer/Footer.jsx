const Footer = () => {
    return (
      <div className="">
        <footer className="footer footer-center p-10 bg-slate-900 opacity-90">
          <aside>
            <p className="font-bold">
              Designed By
              <br />
              id.pinterest.com
            </p>
            <p>Copyright © 2024 - <a href="https://www.instagram.com/gendaanmu_/" target="blink_">gendaanmu_</a></p>
          </aside>
          <nav>
            <div className="grid grid-flow-col gap-4">
              <a href="https://www.instagram.com/gendaanmu_/" target="blink_">
                <svg
                  className="h-8 w-8 text-slate-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {" "}
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />{" "}
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />{" "}
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="https://github.com/aansd/" target="blink_" >
                <svg
                  className="h-8 w-8 text-slate-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {" "}
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </a>
            </div>
          </nav>
        </footer>
      </div>
    );
  };
  
  export default Footer;
  