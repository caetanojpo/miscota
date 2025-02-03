import Link from "next/link";
import "./style.css";
export const ButtonPayment = () => {
  return (
    <Link
      target="/_blank"
      href="https://api.whatsapp.com/send?phone=5514997955048"
      style={{ backgroundColor: "transparent", border: "0px" }}
    >
      <button>
        <span>Clique para comprar </span>
        <svg
          viewBox="-5 -5 110 110"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M0,0 C0,0 100,0 100,0 C100,0 100,100 100,100 C100,100 0,100 0,100 C0,100 0,0 0,0" />
        </svg>
      </button>
    </Link>
  );
};
