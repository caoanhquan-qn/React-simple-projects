import React from "react";

const Navigation = () => {
  const links = [
    { source: "/", label: "Accordion" },
    { source: "/list", label: "List" },
    { source: "/dropdown", label: "Dropdown" },
    { source: "/translate", label: "Translate" },
  ];
  const renderLink = () => {
    return links.map((link, index) => {
      const active = window.location.pathname === link.source ? "active" : "";
      return (
        <a
          href={link.source}
          className={`item ${active}`}
          key={index}
          onClick={(e) => {
            if (e.metaKey || e.ctrlKey) {
              return;
            }
            e.preventDefault();
            window.history.pushState({}, "", link.source);
            const navEvent = new PopStateEvent("popstate");
            window.dispatchEvent(navEvent);
          }}
        >
          {link.label}
        </a>
      );
    });
  };
  return <div className="ui secondary menu">{renderLink()}</div>;
};
export default Navigation;
