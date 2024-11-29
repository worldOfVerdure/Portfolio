const navTabsData = [
  {
    src: "/navSVGs/sentiment_very_satisfied.svg",
    alt: "SVG of a happy face for my about section.",
    href: "#",
    title: "About"
  },
  {
    src: "/navSVGs/checklist.svg",
    alt: "SVG of a checklist for my skills section.",
    href: "#",
    title: "Skills"
  },
  {
    src: "/navSVGs/engineering.svg",
    alt: "SVG of a construction worker for my project section.",
    href: "#",
    title: "Projects"
  },
  {
    src: "/navSVGs/mail.svg",
    alt: "SVG of mail for my contact me section.",
    href: "#",
    title: "Contact"
  }
];

export default navTabsData;


/*
{navTabsData.map((tabData, i) => {
          <NavItem $translate={linksClicked[i]}>
            <NavContent>
              <img 
                src={tabData.src}
                alt={tabData.alt}
                onClick={() => handleClick(i)}
              />
              <a href={tabData.href}>{tabData.title}</a>
            </NavContent>
          </NavItem>
        })}
*/
