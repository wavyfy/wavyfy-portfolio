import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import BookCallButton from "./BookCallButton";
import SecondaryButton from "./SecondaryButton";

const contacts = [
  {
    label: "hello@wavyfy.com",
    href: "mailto:hello@wavyfy.com",
    icon: (
      <svg
        fill="currentColor"
        className="w-4 h-4"
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Gmail</title>
        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
      </svg>
    ),
  },
  {
    label: "(+91) 9288 670 204",
    href: "tel:+919288670204",
    icon: (
      <svg
        fill="currentColor"
        className="w-4 h-4"
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>WhatsApp</title>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    ),
  },
  {
    label: "Bhopal, MP, India",
    href: "https://maps.google.com/?q=Bhopal,MP,India",
    icon: (
      <svg
        fill="currentColor"
        className="w-4 h-4"
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Google Maps</title>
        <path d="M19.527 4.799c1.212 2.608.937 5.678-.405 8.173-1.101 2.047-2.744 3.74-4.098 5.614-.619.858-1.244 1.75-1.669 2.727-.141.325-.263.658-.383.992-.121.333-.224.673-.34 1.008-.109.314-.236.684-.627.687h-.007c-.466-.001-.579-.53-.695-.887-.284-.874-.581-1.713-1.019-2.525-.51-.944-1.145-1.817-1.79-2.671L19.527 4.799zM8.545 7.705l-3.959 4.707c.724 1.54 1.821 2.863 2.871 4.18.247.31.494.622.737.936l4.984-5.925-.029.01c-1.741.601-3.691-.291-4.392-1.987a3.377 3.377 0 0 1-.209-.716c-.063-.437-.077-.761-.004-1.198l.001-.007zM5.492 3.149l-.003.004c-1.947 2.466-2.281 5.88-1.117 8.77l4.785-5.689-.058-.05-3.607-3.035zM14.661.436l-3.838 4.563a.295.295 0 0 1 .027-.01c1.6-.551 3.403.15 4.22 1.626.176.319.323.683.377 1.045.068.446.085.773.012 1.22l-.003.016 3.836-4.561A8.382 8.382 0 0 0 14.67.439l-.009-.003zM9.466 5.868L14.162.285l-.047-.012A8.31 8.31 0 0 0 11.986 0a8.439 8.439 0 0 0-6.169 2.766l-.016.018 3.665 3.084z" />
      </svg>
    ),
  },
];

const companyLinks = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "How We Work", href: "#process" },
  { label: "Contact us", href: "#contact" },
];

const socials = [
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg
        className="w-4 h-4"
        fill="currentColor"
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Instagram</title>
        <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Twitter",
    href: "#",
    icon: (
      <svg
        className="w-4 h-4"
        fill="currentColor"
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>X</title>
        <path d="M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg
        className="w-4 h-4"
        fill="currentColor"
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>YouTube</title>
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

const legalLinks = [
  { label: "Privacy policy", href: "#" },
  { label: "Terms of services", href: "#" },
  { label: "Refund Policy", href: "#" },
];

const AnimatedLink = ({
  href,
  label,
  icon,
  className = "text-sm",
  target,
}: {
  href: string;
  label: string;
  icon?: React.ReactNode;
  className?: string;
  target?: string;
}) => (
  <a
    href={href}
    target={target}
    rel="noopener noreferrer"
    className={`group flex items-center gap-2.5 font-medium text-gray-600 hover:text-[#de5145] transition-all duration-500 ${className}`}
  >
    {icon && icon}
    <span className="flex items-center">
      <span className=" pb-0.5">
        {label}
        <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#de5145] transition-all duration-500 group-hover:w-full" />
      </span>
      <ArrowTopRightIcon className="w-3.5 h-3.5 ml-1 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500" />
    </span>
  </a>
);

export default function Footer() {
  return (
    <footer className="mb-5 max-w-360 mx-auto  @container relative">
      <div className="bg-white rounded-[24px] md:rounded-[32px]  pt-14 pb-5 px-4 sm:px-6 md:px-10  flex flex-col items-center overflow-hidden shadow-2xl border border-gray-200">
        {/* --- Top CTA Section & Socials --- */}
        <div className="w-full flex flex-col xl:flex-row justify-between items-center xl:items-start gap-12 px-4 md:px-8">
          <div className="flex flex-col items-center xl:items-start text-center xl:text-left w-full xl:w-auto">
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-semibold leading-[0.8] tracking-tight">
              <span className="text-gray-900 text-3xl sm:text-4xl lg:text-[2.4rem]">
                Ready to ship?
              </span>
              <br />
              <span className="text-gray-500 text-3xl sm:text-4xl lg:text-[2.4rem]">
                Initialize your next project.
              </span>
            </h2>
            <p className="mt-8 text-gray-600 max-w-sm mx-auto xl:mx-0 text-sm md:text-base leading-relaxed font-medium">
              Secure an architectural review to benchmark your current
              infrastructure and map out an execution plan.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center xl:justify-start gap-4">
              <BookCallButton
                className="flex items-center gap-4 bg-[#0b1015] text-white text-sm font-medium pl-6 pr-2 py-2 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.15)] transition-transform"
                iconContainerClassName="w-12 h-10 rounded-lg bg-[#1b2025]"
                iconClassName="w-5 h-5 text-white"
              />
              <SecondaryButton className="w-full sm:w-auto text-lg">
                View Services
              </SecondaryButton>
            </div>
          </div>

          {/* Links & Socials */}
          <div className="flex flex-wrap gap-10 sm:gap-16 md:gap-24 lg:mr-8 mt-12 xl:mt-0 xl:self-end">
            {/* Company */}
            <div className="flex flex-col gap-4">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Company</h4>
              {companyLinks.map((link, i) => (
                <AnimatedLink key={i} href={link.href} label={link.label} />
              ))}
            </div>

            {/* Contacts */}
            <div className="flex flex-col gap-4">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Contacts</h4>
              {contacts.map((contact, i) => (
                <AnimatedLink
                  key={i}
                  href={contact.href}
                  label={contact.label}
                  icon={contact.icon}
                  target={i !== 0 ? "_blank" : undefined}
                />
              ))}
            </div>

            {/* Socials */}
            <div className="flex flex-col gap-4">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Socials</h4>
              {socials.map((social, i) => (
                <AnimatedLink
                  key={i}
                  href={social.href}
                  label={social.label}
                  icon={social.icon}
                  target="_blank"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Faded background text */}
        <div className="max-w-8xl flex justify-center pointer-events-none select-none mt-10 md:mt-16 sm:-mb-[3%] md:-mb-[3%] mx-auto">
          <span
            className=" font-bold text-gray-300 leading-[0.8] tracking-tighter text-[clamp(60px,25cqw,420px)]"
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, black 15%, transparent 95%)",
              maskImage:
                "linear-gradient(to bottom, black 15%, transparent 95%)",
            }}
          >
            Wavyfy<span className="text-red-500">.</span>
          </span>
        </div>

        {/* Bottom Base Row */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 mt-8 md:mt-0 z-10">
          <div className="flex items-center gap-8">
            {legalLinks.map((link, i) => (
              <AnimatedLink
                key={i}
                href={link.href}
                label={link.label}
                className="text-xs font-semibold text-gray-800"
              />
            ))}
          </div>
          <p className="text-xs font-semibold text-gray-800">
            © {new Date().getFullYear()}{" "}
            <span className="text-[#de5145]">Wavyfy India. </span>
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
